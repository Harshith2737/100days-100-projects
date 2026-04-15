from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ContactCreate(BaseModel):
    name: str
    phone: str


class ContactResponse(BaseModel):
    id: int
    name: str
    phone: str
    created_at: datetime
    updated_at: Optional[datetime] = None