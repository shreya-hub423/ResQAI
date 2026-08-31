from fastapi import FastAPI
from app.routes.auth import router as auth_router

app = FastAPI(title="ResQAI API")

app.include_router(auth_router)

@app.get("/")
def home():
    return {"Message": "Welcome to ResQAI Backend 🚑"}

@app.get("/health")
def health():
    return {"Status": "Backend is running"}