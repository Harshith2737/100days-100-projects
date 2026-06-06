from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .agent import handle_agent
from .database import init_db

app = FastAPI(title="DevForge API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    init_db()


@app.post("/api/agent")
async def agent_endpoint(payload: dict):
    """Proxy endpoint for the AI agent (Nova)."""
    return await handle_agent(payload)
