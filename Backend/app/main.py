from fastapi import FastAPI

from app.routes.auth import router as auth_router
from app.routes.ai_routes import router as ai_router

from app.database.connection import engine
from app.database.database import Base
from app.database import models

app = FastAPI(
    title="ResQAI API",
    version="1.0.0"
)

# Database tables create
Base.metadata.create_all(bind=engine)

# Routes
app.include_router(auth_router)
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