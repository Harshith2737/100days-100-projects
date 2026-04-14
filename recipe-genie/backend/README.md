# Recipe Genie Backend

Backend for the Recipe Genie application built with FastAPI.

## Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env

# Run development server
python -m uvicorn app.main:app --reload
```

## API Documentation

Once running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Database

Default uses SQLite for development. Update `.env` to use PostgreSQL:
```
DATABASE_URL=postgresql://user:password@localhost:5432/recipe_genie
```

## Environment Variables

See `.env.example` for all available configuration options.
