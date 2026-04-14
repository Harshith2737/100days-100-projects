from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.recipe import Recipe
from ..schemas.recipe import RecipeCreate, RecipeResponse

router = APIRouter(prefix="/api/recipes", tags=["recipes"])


@router.get("/", response_model=list[RecipeResponse])
def get_recipes(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    """Get all recipes with pagination"""
    recipes = db.query(Recipe).offset(skip).limit(limit).all()
    return recipes


@router.get("/search", response_model=list[RecipeResponse])
def search_recipes(
    query: str, skip: int = 0, limit: int = 10, db: Session = Depends(get_db)
):
    """Search recipes by name or cuisine"""
    recipes = (
        db.query(Recipe)
        .filter(
            (Recipe.name.ilike(f"%{query}%")) | (Recipe.cuisine.ilike(f"%{query}%"))
        )
        .offset(skip)
        .limit(limit)
        .all()
    )
    return recipes


@router.get("/{recipe_id}", response_model=RecipeResponse)
def get_recipe(recipe_id: int, db: Session = Depends(get_db)):
    """Get a specific recipe by ID"""
    recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")
    return recipe


@router.post("/", response_model=RecipeResponse)
def create_recipe(recipe: RecipeCreate, db: Session = Depends(get_db)):
    """Create a new recipe"""
    db_recipe = Recipe(**recipe.dict())
    db.add(db_recipe)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe


@router.put("/{recipe_id}", response_model=RecipeResponse)
def update_recipe(
    recipe_id: int, recipe: RecipeCreate, db: Session = Depends(get_db)
):
    """Update a recipe"""
    db_recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not db_recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")
    for key, value in recipe.dict().items():
        setattr(db_recipe, key, value)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe


@router.delete("/{recipe_id}")
def delete_recipe(recipe_id: int, db: Session = Depends(get_db)):
    """Delete a recipe"""
    db_recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not db_recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")
    db.delete(db_recipe)
    db.commit()
    return {"message": "Recipe deleted successfully"}
