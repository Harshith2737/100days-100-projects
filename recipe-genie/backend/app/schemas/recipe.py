from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class RecipeCreate(BaseModel):
    name: str
    description: str
    ingredients: str  # JSON string
    instructions: str
    prep_time: int
    cook_time: int
    servings: int
    difficulty: str
    cuisine: str
    image_url: Optional[str] = None


class RecipeResponse(BaseModel):
    id: int
    name: str
    description: str
    ingredients: str
    instructions: str
    prep_time: int
    cook_time: int
    servings: int
    difficulty: str
    cuisine: str
    image_url: Optional[str] = None
    rating: float
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
