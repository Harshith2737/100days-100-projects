from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class ProjectCreate(BaseModel):
    name: str
    description: str = ''
    status: str = 'active'


class MessageCreate(BaseModel):
    session_id: Optional[str]
    role: str
    content: str


class OverviewResponse(BaseModel):
    total_projects: int
    total_messages: int


class AgentPayload(BaseModel):
    message: str
    session_id: Optional[str] = None
