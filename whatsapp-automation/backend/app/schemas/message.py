from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class MessageCreate(BaseModel):
    recipient: str
    message: str


class MessageResponse(BaseModel):
    id: int
    recipient: str
    message: str
    status: str
    sent_at: Optional[datetime] = None
    created_at: datetime
    updated_at: Optional[datetime] = None


class MessageUpdate(BaseModel):
    status: Optional[str] = None