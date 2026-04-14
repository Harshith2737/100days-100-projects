import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../types';
import { recipeService } from '../services/api';
import '../styles/RecipeDetail.css';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadRecipe(parseInt(id));
    }
  }, [id]);

  const loadRecipe = async (recipeId: number) => {
    setIsLoading(true);
    try {
      const data = await recipeService.getRecipeById(recipeId);
      setRecipe(data);
    } catch (err) {
      setError('Recipe not found');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="recipe-detail loading">Loading recipe...</div>;
  }

  if (error || !recipe) {
    return <div className="recipe-detail error">{error || 'Recipe not found'}</div>;
  }

  let ingredients: string[] = [];
  try {
    ingredients = JSON.parse(recipe.ingredients);
  } catch {
    ingredients = recipe.ingredients.split('\n').filter(Boolean);
  }

  let instructions: string[] = [];
  try {
    instructions = JSON.parse(recipe.instructions);
  } catch {
    instructions = recipe.instructions.split('\n').filter(Boolean);
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-hero">
        {recipe.image_url && <img src={recipe.image_url} alt={recipe.name} />}
      </div>
      <div className="recipe-container">
        <h1>{recipe.name}</h1>
        <p className="description">{recipe.description}</p>

        <div className="recipe-info">
          <div className="info-item">
            <strong>Difficulty:</strong>
            <span>{recipe.difficulty}</span>
          </div>
          <div className="info-item">
            <strong>Prep Time:</strong>
            <span>{recipe.prep_time} min</span>
          </div>
          <div className="info-item">
            <strong>Cook Time:</strong>
            <span>{recipe.cook_time} min</span>
          </div>
          <div className="info-item">
            <strong>Servings:</strong>
            <span>{recipe.servings}</span>
          </div>
          <div className="info-item">
            <strong>Cuisine:</strong>
            <span>{recipe.cuisine}</span>
          </div>
          <div className="info-item">
            <strong>Rating:</strong>
            <span>⭐ {recipe.rating}</span>
          </div>
        </div>

        <section className="section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Instructions</h2>
          <ol className="instructions-list">
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;
