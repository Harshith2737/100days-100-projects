# NexaForge

NexaForge is a full-stack developer platform with an integrated AI agent named Astra. The MVP provides:

- AI agent chat with OpenAI or Anthropic integration
- Project workspace and project tracking
- Message logging and session history
- Responsive React dashboard with a developer-first UI
- FastAPI backend with SQLite storage
- Docker Compose deployment for backend and frontend

## Features

- **Agent workspace:** Ask Astra for code reviews, deployment advice, and developer automation.
- **Project board:** Create and manage active projects from the UI.
- **Developer dashboard:** View high-level metrics for projects and AI interactions.
- **Provider support:** `mock`, `openai`, and `anthropic` options.
- **Ready for customization:** Frontend built in Vite + React, backend built in FastAPI.

## Getting started

1. Copy the environment template:

```bash
cd devplatform
cp .env.example .env
```

2. Set your preferred AI provider and API keys in `.env`:

```env
LLM_PROVIDER=mock
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
VITE_API_BASE=http://localhost:8000
```

3. Run with Docker Compose:

```bash
docker compose up --build
```

4. Open the app in your browser:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000/api/health`

## Local development

### Backend

```bash
cd devplatform/backend
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd devplatform/frontend
npm install
npm run dev -- --host 0.0.0.0 --port 3000
```

## Architecture

- `backend/app/main.py` — API routes and database wiring
- `backend/app/agent.py` — LLM proxy and provider logic
- `backend/app/models.py` — SQLModel data models
- `backend/app/schemas.py` — request and response schemas
- `frontend/src` — React UI and API client

## Next steps

- Add user authentication and teams
- Add project collaboration and database explorer
- Expand Astra with task planning and code generation
- Add real-time notifications and full workspace persistence
