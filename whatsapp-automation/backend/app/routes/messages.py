from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models.message import Message
from ..schemas.message import MessageCreate, MessageResponse, MessageUpdate
from ..utils.whatsapp_sender import sender
from datetime import datetime

router = APIRouter(prefix="/api/messages", tags=["messages"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=list[MessageResponse])
def get_messages(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    """Get all messages with pagination"""
    messages = db.query(Message).offset(skip).limit(limit).all()
    return messages


@router.get("/{message_id}", response_model=MessageResponse)
def get_message(message_id: int, db: Session = Depends(get_db)):
    """Get a specific message by ID"""
    message = db.query(Message).filter(Message.id == message_id).first()
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    return message


@router.post("/", response_model=MessageResponse)
def create_message(message: MessageCreate, db: Session = Depends(get_db)):
    """Create a new message"""
    db_message = Message(**message.dict())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message


@router.put("/{message_id}", response_model=MessageResponse)
def update_message(message_id: int, message_update: MessageUpdate, db: Session = Depends(get_db)):
    """Update a message"""
    message = db.query(Message).filter(Message.id == message_id).first()
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    for key, value in message_update.dict(exclude_unset=True).items():
        setattr(message, key, value)
    db.commit()
    db.refresh(message)
    return message


@router.post("/send/{message_id}", response_model=MessageResponse)
def send_message(message_id: int, db: Session = Depends(get_db)):
    """Send a message via WhatsApp"""
    message = db.query(Message).filter(Message.id == message_id).first()
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    
    # Send via WhatsApp
    success = sender.send_message(message.recipient, message.message)
    
    if success:
        message.status = "sent"
        message.sent_at = datetime.utcnow()
    else:
        message.status = "failed"
    
    db.commit()
    db.refresh(message)
    return message


@router.delete("/{message_id}")
def delete_message(message_id: int, db: Session = Depends(get_db)):
    """Delete a message"""
    message = db.query(Message).filter(Message.id == message_id).first()
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    db.delete(message)
    db.commit()
    return {"message": "Message deleted"}