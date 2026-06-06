from typing import List, Optional

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import func
from sqlmodel import Session, select

from .agent import handle_agent
from .database import engine, init_db
from .models import Message, Project
from .schemas import AgentPayload, MessageCreate, OverviewResponse, ProjectCreate

app = FastAPI(
    title="NexaForge API",
    version="0.1.0",
    description="AI developer workspace backend for NexaForge with Astra agent integration.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    init_db()


@app.get("/api/health")
async def health_check():
    return {"status": "ok", "platform": "NexaForge", "version": "0.1.0"}


@app.get("/api/overview", response_model=OverviewResponse)
async def get_overview():
    with Session(engine) as session:
        total_projects = session.exec(select(func.count()).select_from(Project)).scalar_one()
        total_messages = session.exec(select(func.count()).select_from(Message)).scalar_one()
        return OverviewResponse(total_projects=total_projects, total_messages=total_messages)


@app.get("/api/projects", response_model=List[Project])
async def list_projects():
    with Session(engine) as session:
        statement = select(Project).order_by(Project.created_at.desc())
        return session.exec(statement).all()


@app.post("/api/projects", response_model=Project, status_code=201)
async def create_project(project: ProjectCreate):
    with Session(engine) as session:
        entry = Project(**project.dict())
        session.add(entry)
        session.commit()
        session.refresh(entry)
        return entry


@app.get("/api/messages", response_model=List[Message])
async def list_messages(session_id: Optional[str] = Query(None)):
    with Session(engine) as session:
        statement = select(Message)
        if session_id:
            statement = statement.where(Message.session_id == session_id)
        statement = statement.order_by(Message.created_at)
        return session.exec(statement).all()


@app.post("/api/messages", response_model=Message, status_code=201)
async def create_message(payload: MessageCreate):
    with Session(engine) as session:
        entry = Message(**payload.dict())
        session.add(entry)
        session.commit()
        session.refresh(entry)
        return entry


@app.post("/api/agent")
async def agent_endpoint(payload: AgentPayload):
    assistant_response = await handle_agent(payload.message)
    if not assistant_response.get("reply"):
        raise HTTPException(status_code=502, detail="AI agent returned no reply")

    if payload.session_id:
        with Session(engine) as session:
            log_entry = Message(
                session_id=payload.session_id,
                role="assistant",
                content=assistant_response["reply"],
            )
            session.add(log_entry)
            session.commit()
            session.refresh(log_entry)

    return assistant_response
