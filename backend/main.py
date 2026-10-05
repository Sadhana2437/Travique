from pydantic import BaseModel, Field
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")
load_dotenv(BASE_DIR / ".venv" / ".env")
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError(
        "Supabase environment variables are missing. "
        "Ensure SUPABASE_URL and SUPABASE_KEY are set in backend/.env or backend/.venv/.env."
    )

supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)

app = FastAPI(
    title="Travique API",
    description="Backend for the Travique travel platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5175",
        "http://127.0.0.1:5175"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TripRequest(BaseModel):
    destination: str
    days: int = Field(ge=1, le=14)
    budget: float = Field(gt=0)
    travel_style: str


@app.get("/")
def home():
    return {
        "message": "Welcome to Travique API",
        "status": "running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


@app.get("/destinations")
def get_destinations():
    response = (
        supabase
        .table("destinations")
        .select("*")
        .order("id")
        .execute()
    )

    return response.data


@app.get("/destinations/{destination_id}")
def get_destination(destination_id: int):

    response = (
        supabase
        .table("destinations")
        .select("*")
        .eq("id", destination_id)
        .single()
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=404,
            detail="Destination not found"
        )

    return response.data


@app.post("/plan-trip")
def plan_trip(request: TripRequest):

    activities = {
        "Relaxation": [
            "Explore the destination at a comfortable pace",
            "Visit a scenic location and enjoy local food",
            "Spend time exploring nearby attractions",
            "Enjoy a relaxed evening",
        ],
        "Adventure": [
            "Explore outdoor and adventure activities",
            "Visit a popular adventure destination",
            "Try a local outdoor experience",
            "Explore nearby scenic trails",
        ],
        "Culture": [
            "Visit local cultural landmarks",
            "Explore historical places",
            "Experience local cuisine and traditions",
            "Visit museums or cultural attractions",
        ],
        "Balanced": [
            "Explore popular tourist attractions",
            "Discover local food and markets",
            "Visit a scenic or cultural location",
            "Enjoy leisure time and sightseeing",
        ],
    }

    selected_activities = activities.get(
        request.travel_style,
        activities["Balanced"]
    )

    daily_budget = request.budget / request.days

    itinerary = []

    for day in range(1, request.days + 1):
        itinerary.append({
            "day": day,
            "title": f"Day {day} in {request.destination}",
            "activities": [
                selected_activities[(day - 1) % len(selected_activities)],
                selected_activities[day % len(selected_activities)],
                "Explore local food and nearby attractions"
            ],
            "estimated_budget": round(daily_budget, 2)
        })

    return {
        "destination": request.destination,
        "days": request.days,
        "total_budget": request.budget,
        "travel_style": request.travel_style,
        "itinerary": itinerary
    }
