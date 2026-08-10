import pytest
from fastapi.testclient import TestClient
from server import app

@pytest.fixture
def client():
    with TestClient(app) as c:
        yield c

def test_root(client):
    response = client.get("/api/")
    assert response.status_code == 200
    assert response.json() == {"message": "Tapi Namastubhyam Charitable Trust API"}

def test_get_pricing(client):
    response = client.get("/api/config/pricing")
    assert response.status_code == 200
    data = response.json()
    assert "aarti" in data
    assert "pooja" in data
    assert "donation_causes" in data
    assert "donation_presets" in data

def test_create_and_list_booking(client):
    payload = {
        "booking_type": "aarti",
        "package_id": "aarti-sandhya",
        "package_name": "Sandhya Aarti Seva",
        "amount": 251.0,
        "full_name": "Test Devotee",
        "email": "devotee@example.com",
        "phone": "9876543210",
        "date": "2026-08-15",
        "time_slot": "Sandhya Aarti · Sunset",
        "devotee_count": 2,
        "gotra": "Kashyap",
        "special_request": "Peace and prosperity"
    }
    create_res = client.post("/api/bookings", json=payload)
    assert create_res.status_code == 200
    booking_data = create_res.json()
    assert booking_data["full_name"] == "Test Devotee"
    assert booking_data["reference"].startswith("TNCT-")
    assert booking_data["status"] == "confirmed"

    list_res = client.get("/api/bookings")
    assert list_res.status_code == 200
    bookings = list_res.json()
    assert isinstance(bookings, list)
    assert len(bookings) > 0

def test_create_donation_and_summary(client):
    payload = {
        "full_name": "Test Donor",
        "email": "donor@example.com",
        "phone": "9876543210",
        "amount": 1100.0,
        "cause": "River Cleanliness Drive",
        "pan": "ABCDE1234F",
        "anonymous": False,
        "message": "Keep the river clean!"
    }
    create_res = client.post("/api/donations", json=payload)
    assert create_res.status_code == 200
    donation_data = create_res.json()
    assert donation_data["full_name"] == "Test Donor"
    assert donation_data["reference"].startswith("DON-")

    summary_res = client.get("/api/donations/summary")
    assert summary_res.status_code == 200
    summary = summary_res.json()
    assert summary["total"] >= 1100.0
    assert summary["count"] >= 1

def test_create_donation_invalid_amount(client):
    payload = {
        "full_name": "Invalid Donor",
        "email": "invalid@example.com",
        "phone": "9876543210",
        "amount": 0.0,
        "cause": "General Fund"
    }
    response = client.post("/api/donations", json=payload)
    assert response.status_code == 400

def test_create_contact(client):
    payload = {
        "full_name": "Test Contact",
        "email": "contact@example.com",
        "phone": "9876543210",
        "subject": "Inquiry",
        "message": "Need information about volunteering"
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 200
    contact_data = response.json()
    assert contact_data["full_name"] == "Test Contact"
    assert "id" in contact_data
