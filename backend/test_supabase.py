import os
from pathlib import Path

from dotenv import load_dotenv
from supabase import create_client

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

supabase = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)

response = supabase.table("destinations").select("*").execute()

print(response.data)