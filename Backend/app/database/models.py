from sqlalchemy import Column, Integer, String
from app.database.database import Base

class User(Base):
    __tablename__ = "Users"

    Id = Column(Integer, primary_key=True, index=True)
    Email = Column(String(100), unique=True)
    Password = Column(String(200))