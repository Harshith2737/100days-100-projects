from pydantic import BaseModel
from datetime import datetime


class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    full_name: str


class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    full_name: str
    created_at: datetime

    class Config:
        from_attributes = True
