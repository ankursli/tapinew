import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const client = axios.create({ baseURL: API });

export const getPricing = async () => (await client.get("/config/pricing")).data;
export const createBooking = async (payload) => (await client.post("/bookings", payload)).data;
export const createDonation = async (payload) => (await client.post("/donations", payload)).data;
export const createContact = async (payload) => (await client.post("/contact", payload)).data;
export const getDonationSummary = async () => (await client.get("/donations/summary")).data;
