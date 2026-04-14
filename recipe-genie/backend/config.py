# Backend Configuration

import os
from dotenv import load_dotenv

load_dotenv()

# Database
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./recipe_genie.db")

# Application
DEBUG = os.getenv("DEBUG", "True") == "True"
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-change-in-production")

# CORS
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:8000",
]

# API
API_TITLE = "Recipe Genie API"
API_VERSION = "1.0.0"
API_DESCRIPTION = "Full-stack recipe discovery and management application"
