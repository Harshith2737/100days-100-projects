from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine
from .routes import recipes_router, users_router, favorites_router

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Recipe Genie API",
    description="Full-stack recipe application API",
    version="1.0.0",
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(recipes_router)
app.include_router(users_router)
app.include_router(favorites_router)


@app.get("/")
def read_root():
    return {"message": "Welcome to Recipe Genie API"}


@app.get("/health")
def health_check():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
