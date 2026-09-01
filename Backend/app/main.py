from fastapi import FastAPI

from app.routes.auth import router as auth_router
from app.routes.ai_routes import router as ai_router


app = FastAPI(
    title="ResQAI API",
    version="1.0.0"
)


# Existing authentication routes
app.include_router(auth_router)


# AI Disaster Response routes
app.include_router(ai_router)


@app.get("/")
def home():

    return {
        "message": "Welcome to ResQAI Backend"
    }


@app.get("/health")
def health():

    return {
        "status": "Backend is running"
    }
