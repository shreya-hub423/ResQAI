import os
import json
import asyncio

from dotenv import load_dotenv
from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel

from google import genai
from google.genai import types


# ============================================================
# LOAD ENVIRONMENT VARIABLES
# ============================================================

# Current file:
# Backend/app/routes/ai_routes.py
#
# We need to go:
# routes -> app -> Backend
#
# Therefore .env is:
# Backend/.env

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(
            os.path.abspath(__file__)
        )
    )
)

ENV_PATH = os.path.join(BASE_DIR, ".env")

load_dotenv(ENV_PATH)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError(
        f"GEMINI_API_KEY is missing.\n"
        f"Expected .env file at: {ENV_PATH}"
    )


# ============================================================
# GEMINI CLIENT
# ============================================================

client = genai.Client(
    api_key=GEMINI_API_KEY
)


# ============================================================
# MODELS
# ============================================================

PRIMARY_MODEL = "gemini-3.6-flash"
FALLBACK_MODEL = "gemini-3.5-flash"


# ============================================================
# ROUTER
# ============================================================

router = APIRouter(
    prefix="/ai",
    tags=["AI Disaster Analysis"]
)


# ============================================================
# CLEAN GEMINI JSON
# ============================================================

def clean_json_response(text: str):

    if not text:
        return ""

    text = text.strip()

    if text.startswith("```json"):
        text = text[7:]

    elif text.startswith("```"):
        text = text[3:]

    if text.endswith("```"):
        text = text[:-3]

    return text.strip()


# ============================================================
# FALLBACK RESULT
# ============================================================

def fallback_result(text: str):

    return {
        "disaster_type": "Unknown",
        "severity": "UNKNOWN",
        "risk_score": 0,
        "scene_summary": text or "No analysis was returned.",
        "visible_hazards": [],
        "access_problems": [],
        "suggested_resources": [],
        "recommended_actions": []
    }


# ============================================================
# GEMINI REQUEST WITH RETRY
# ============================================================

async def generate_with_retry(contents, max_retries=3):

    models = [
        PRIMARY_MODEL,
        FALLBACK_MODEL
    ]

    last_error = None

    for model in models:

        for attempt in range(max_retries):

            try:

                print(
                    f"Gemini request -> "
                    f"model={model}, "
                    f"attempt={attempt + 1}"
                )

                response = client.models.generate_content(
                    model=model,
                    contents=contents
                )

                return response

            except Exception as e:

                last_error = e

                error_text = str(e)

                print(
                    f"Gemini error "
                    f"({model}, attempt {attempt + 1}):"
                )

                print(error_text)

                temporary_error = any(
                    code in error_text
                    for code in [
                        "503",
                        "UNAVAILABLE",
                        "429",
                        "RESOURCE_EXHAUSTED",
                        "500",
                        "INTERNAL"
                    ]
                )

                if temporary_error:

                    wait_time = 2 ** attempt

                    print(
                        f"Temporary Gemini error. "
                        f"Retrying in {wait_time}s..."
                    )

                    await asyncio.sleep(wait_time)

                else:

                    break

    raise last_error


# ============================================================
# REQUEST MODEL
# ============================================================

class IncidentRequest(BaseModel):

    description: str


# ============================================================
# CHAT REQUEST MODEL
# ============================================================

class ChatRequest(BaseModel):

    message: str


# ============================================================
# TEST ENDPOINT
# ============================================================

@router.get("/test")
async def test_ai():

    return {
        "success": True,
        "message": "AI Disaster Response API is working"
    }


# ============================================================
# TEXT INCIDENT ANALYSIS
# ============================================================

@router.post("/analyze")
async def analyze_incident(
    request: IncidentRequest
):

    prompt = f"""
You are an AI Disaster Response Assistant.

Analyze the following disaster incident:

{request.description}

Return ONLY valid JSON.

Use exactly this structure:

{{
    "disaster_type": "string",
    "severity": "LOW/MEDIUM/HIGH/CRITICAL",
    "risk_score": 0,
    "scene_summary": "string",
    "visible_hazards": [],
    "access_problems": [],
    "suggested_resources": [],
    "recommended_actions": []
}}

Rules:

- risk_score must be a number from 0 to 100.
- severity must be LOW, MEDIUM, HIGH, or CRITICAL.
- visible_hazards must be an array of strings.
- access_problems must be an array of strings.
- suggested_resources must be an array of strings.
- recommended_actions must be an array of strings.
- Do not invent information.
- Do not add markdown.
- Do not add explanations outside JSON.
"""

    try:

        response = await generate_with_retry(prompt)

        text = response.text or ""

        text = clean_json_response(text)

        try:

            result = json.loads(text)

        except json.JSONDecodeError:

            result = fallback_result(text)

        return {
            "success": True,
            "analysis": result
        }

    except Exception as e:

        print("TEXT ANALYSIS ERROR:")
        print(str(e))

        raise HTTPException(
            status_code=503,
            detail=(
                "AI service is temporarily unavailable. "
                "Please try again."
            )
        )


# ============================================================
# IMAGE ANALYSIS
# ============================================================

@router.post("/analyze-image")
async def analyze_image(
    file: UploadFile = File(...)
):

    try:

        # ----------------------------------------------------
        # CHECK FILE
        # ----------------------------------------------------

        if not file:

            raise HTTPException(
                status_code=400,
                detail="No image file was uploaded."
            )


        # ----------------------------------------------------
        # READ IMAGE
        # ----------------------------------------------------

        image_bytes = await file.read()

        if not image_bytes:

            raise HTTPException(
                status_code=400,
                detail="Uploaded image is empty."
            )


        # ----------------------------------------------------
        # MIME TYPE
        # ----------------------------------------------------

        mime_type = file.content_type or "image/jpeg"

        allowed_types = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/gif"
        ]

        if mime_type not in allowed_types:

            raise HTTPException(
                status_code=400,
                detail=f"Unsupported image type: {mime_type}"
            )


        # ----------------------------------------------------
        # IMAGE ANALYSIS PROMPT
        # ----------------------------------------------------

        prompt = """
You are an AI Disaster Response Assistant.

Analyze the uploaded disaster image.

Identify only information that can reasonably
be inferred from the visible content.

Return ONLY valid JSON.

Use exactly this structure:

{
    "disaster_type": "string",
    "severity": "LOW/MEDIUM/HIGH/CRITICAL",
    "risk_score": 0,
    "scene_summary": "string",
    "visible_hazards": [],
    "access_problems": [],
    "suggested_resources": [],
    "recommended_actions": []
}

Rules:

- risk_score must be a number from 0 to 100.
- severity must be LOW, MEDIUM, HIGH, or CRITICAL.
- visible_hazards must be an array of strings.
- access_problems must be an array of strings.
- suggested_resources must be an array of strings.
- recommended_actions must be an array of strings.
- Focus only on visible evidence.
- Do not invent people, damage, hazards, or conditions.
- If something cannot be determined, use "Unknown".
- Do not add markdown.
- Do not add explanations outside JSON.
"""


        # ----------------------------------------------------
        # CREATE IMAGE PART
        # ----------------------------------------------------

        image_part = types.Part.from_bytes(
            data=image_bytes,
            mime_type=mime_type
        )


        # ----------------------------------------------------
        # SEND IMAGE + PROMPT
        # ----------------------------------------------------

        response = await generate_with_retry(
            [
                prompt,
                image_part
            ]
        )


        # ----------------------------------------------------
        # GET RESPONSE
        # ----------------------------------------------------

        text = response.text or ""

        text = clean_json_response(text)


        # ----------------------------------------------------
        # CONVERT JSON
        # ----------------------------------------------------

        try:

            result = json.loads(text)

        except json.JSONDecodeError:

            result = fallback_result(text)


        # ----------------------------------------------------
        # RETURN RESULT
        # ----------------------------------------------------

        return {
            "success": True,
            "filename": file.filename,
            "analysis": result
        }


    except HTTPException:

        raise


    except Exception as e:

        print("IMAGE ANALYSIS ERROR:")
        print(str(e))

        raise HTTPException(
            status_code=503,
            detail=(
                "AI image analysis is temporarily unavailable. "
                "Please try again."
            )
        )


# ============================================================
# AI CHAT
# ============================================================

@router.post("/chat")
async def ai_chat(request: ChatRequest):

    prompt = f"""
You are ResQAI, an AI disaster response assistant.

User message:

{request.message}

Provide a concise, practical response related to
disaster response and emergency coordination.

Important:

- Do not invent facts.
- Clearly mention uncertainty when information is missing.
- Prioritize immediate safety.
- Encourage contacting local emergency services
  when there is an immediate threat to life.
- Do not return markdown tables.
"""

    try:

        response = await generate_with_retry(prompt)

        text = response.text or ""

        return {
            "success": True,
            "response": text
        }

    except Exception as e:

        print("CHAT ERROR:")
        print(str(e))

        raise HTTPException(
            status_code=503,
            detail="AI chatbot is temporarily unavailable."
        )
