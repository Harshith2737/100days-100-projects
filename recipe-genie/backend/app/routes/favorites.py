from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.favorite import Favorite
from ..models.recipe import Recipe
from ..schemas.favorite import FavoriteCreate, FavoriteResponse
from ..schemas.recipe import RecipeResponse

router = APIRouter(prefix="/api/favorites", tags=["favorites"])


@router.post("/", response_model=FavoriteResponse)
def add_favorite(favorite: FavoriteCreate, db: Session = Depends(get_db)):
    """Add a recipe to favorites"""
    existing = (
        db.query(Favorite)
        .filter(
            (Favorite.user_id == favorite.user_id)
            & (Favorite.recipe_id == favorite.recipe_id)
        )
        .first()
    )
    if existing:
        raise HTTPException(status_code=400, detail="Recipe already in favorites")

    db_favorite = Favorite(**favorite.dict())
    db.add(db_favorite)
    db.commit()
    db.refresh(db_favorite)
    return db_favorite


@router.get("/{user_id}", response_model=list[RecipeResponse])
def get_user_favorites(user_id: int, db: Session = Depends(get_db)):
    """Get all favorite recipes for a user"""
    favorites = (
        db.query(Recipe)
        .join(Favorite, Recipe.id == Favorite.recipe_id)
        .filter(Favorite.user_id == user_id)
        .all()
    )
    return favorites


@router.delete("/{user_id}/{recipe_id}")
def remove_favorite(user_id: int, recipe_id: int, db: Session = Depends(get_db)):
    """Remove a recipe from favorites"""
    favorite = (
        db.query(Favorite)
        .filter(
            (Favorite.user_id == user_id) & (Favorite.recipe_id == recipe_id)
        )
        .first()
    )
    if not favorite:
        raise HTTPException(status_code=404, detail="Favorite not found")
    db.delete(favorite)
    db.commit()
    return {"message": "Removed from favorites"}
