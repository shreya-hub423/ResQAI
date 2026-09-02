import os
from pathlib import Path

from dotenv import load_dotenv
from google import genai


# Find the backend folder
BASE_DIR = Path(__file__).resolve().parent.parent

# Load backend/.env
load_dotenv(BASE_DIR / ".env")

# Get Gemini API key
API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise RuntimeError(
        "GEMINI_API_KEY is missing from backend/.env"
    )

# Create Gemini client
client = genai.Client(api_key=API_KEY)


def ask_gemini(prompt: str):
    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    return response.text