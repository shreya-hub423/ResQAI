from fastapi import APIRouter
from app.schemas.user import UserSignup

router = APIRouter()

@router.post("/signup")
def signup(user: UserSignup):
    return {
        "Message": "User registered successfully",
        "User": user
    }