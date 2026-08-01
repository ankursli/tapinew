from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Tapi Namastubhyam Charitable Trust API")
api_router = APIRouter(prefix="/api")


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


# ---------- Models ----------
class BookingCreate(BaseModel):
    booking_type: Literal["aarti", "pooja"]
    package_id: str
    package_name: str
    amount: float
    full_name: str
    email: EmailStr
    phone: str
    date: str
    time_slot: Optional[str] = None
    devotee_count: int = 1
    gotra: Optional[str] = None
    special_request: Optional[str] = None


class Booking(BookingCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    reference: str = Field(default_factory=lambda: "TNCT-" + uuid.uuid4().hex[:8].upper())
    status: str = "confirmed"
    payment_status: str = "paid_demo"
    created_at: str = Field(default_factory=now_iso)


class DonationCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    amount: float
    cause: Optional[str] = "General Fund"
    pan: Optional[str] = None
    anonymous: bool = False
    message: Optional[str] = None


class Donation(DonationCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    reference: str = Field(default_factory=lambda: "DON-" + uuid.uuid4().hex[:8].upper())
    payment_status: str = "paid_demo"
    created_at: str = Field(default_factory=now_iso)


class ContactCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str


class Contact(ContactCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=now_iso)


# ---------- Seed pricing config ----------
DEFAULT_PRICING = {
    "key": "pricing",
    "aarti": [
        {"id": "aarti-sandhya", "name": "Sandhya Aarti Seva", "price": 251,
         "description": "Sponsor the daily evening Tapi Aarti in your name with sankalp.",
         "features": ["Personal sankalp announcement", "Prasad courier (Surat only)", "Digital blessing certificate"]},
        {"id": "aarti-deep", "name": "Deep Daan Aarti", "price": 1100,
         "description": "Light 108 diyas on the ghat and lead the collective prayer.",
         "features": ["108 diya offering", "Reserved ghat seating", "Family name in aarti register", "Photo & video keepsake"]},
        {"id": "aarti-maha", "name": "Maha Aarti Patronage", "price": 5100,
         "description": "Presenting patron of a full-moon Maha Aarti festival evening.",
         "features": ["Presenting patron title", "Priest-led family pooja", "Front-row ghat pavilion", "Framed commemoration"]},
    ],
    "pooja": [
        {"id": "pooja-jal", "name": "Jal Abhishek Pooja", "price": 501,
         "description": "Sacred water offering to Maa Tapi performed by temple priests.",
         "features": ["Vedic jal abhishek", "Sankalp in your gotra", "Prasad & tirth jal", "Blessing certificate"]},
        {"id": "pooja-mahapuja", "name": "Tapi Maha Pooja", "price": 2100,
         "description": "Elaborate 5-priest pooja with havan for family wellbeing.",
         "features": ["5-priest vidhi & havan", "Family sankalp", "Reserved riverside mandap", "Recorded pooja video"]},
        {"id": "pooja-anushthan", "name": "Vishesh Anushthan", "price": 11000,
         "description": "Grand multi-day anushthan for prosperity, health and moksha.",
         "features": ["Multi-day anushthan", "Dedicated priest team", "108 diya deep daan", "Annadaan for 51 people"]},
    ],
    "donation_causes": [
        "River Cleanliness Drive", "Blood Donation Camps", "Tree Plantation",
        "Disaster Relief", "Daily Aarti Fund", "General Fund",
    ],
    "donation_presets": [251, 501, 1100, 2100, 5100, 11000],
}


async def ensure_seed():
    existing = await db.config.find_one({"key": "pricing"})
    if not existing:
        await db.config.insert_one(dict(DEFAULT_PRICING))
        logging.info("Seeded default pricing config")


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Tapi Namastubhyam Charitable Trust API"}


@api_router.get("/config/pricing")
async def get_pricing():
    doc = await db.config.find_one({"key": "pricing"}, {"_id": 0})
    if not doc:
        await ensure_seed()
        doc = await db.config.find_one({"key": "pricing"}, {"_id": 0})
    return doc


@api_router.post("/bookings", response_model=Booking)
async def create_booking(payload: BookingCreate):
    booking = Booking(**payload.model_dump())
    await db.bookings.insert_one(booking.model_dump())
    return booking


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings():
    docs = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(200)
    return docs


@api_router.post("/donations", response_model=Donation)
async def create_donation(payload: DonationCreate):
    if payload.amount <= 0:
        raise HTTPException(status_code=400, detail="Amount must be greater than zero")
    donation = Donation(**payload.model_dump())
    await db.donations.insert_one(donation.model_dump())
    return donation


@api_router.get("/donations/summary")
async def donations_summary():
    total = await db.donations.aggregate([
        {"$group": {"_id": None, "total": {"$sum": "$amount"}, "count": {"$sum": 1}}}
    ]).to_list(1)
    if total:
        return {"total": total[0]["total"], "count": total[0]["count"]}
    return {"total": 0, "count": 0}


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    contact = Contact(**payload.model_dump())
    await db.contacts.insert_one(contact.model_dump())
    return contact


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def startup_seed():
    await ensure_seed()


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
