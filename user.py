from pydantic import BaseModel, EmailStr

class UserSignup(BaseModel):
    Name: str
    Email: EmailStr
    Password: str