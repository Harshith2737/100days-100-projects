import React from 'react';
import { Recipe } from '../types';
import '../styles/RecipeCard.css';

interface RecipeCardProps {
  recipe: Recipe;
  onFavorite?: (recipeId: number) => void;
  isFavorited?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onFavorite, isFavorited = false }) => {
  return (
    <div className="recipe-card">
      {recipe.image_url && (
        <div className="recipe-image">
          <img src={recipe.image_url} alt={recipe.name} />
        </div>
      )}
      <div className="recipe-content">
        <h3>{recipe.name}</h3>
        <p className="cuisine">{recipe.cuisine}</p>
        <p className="description">{recipe.description}</p>
        <div className="recipe-meta">
          <span className="difficulty" data-difficulty={recipe.difficulty}>
            {recipe.difficulty}
          </span>
          <span className="time">⏱️ {recipe.prep_time + recipe.cook_time} min</span>
          <span className="servings">👥 {recipe.servings}</span>
        </div>
        <div className="recipe-footer">
          <span className="rating">⭐ {recipe.rating}</span>
          {onFavorite && (
            <button
              className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
              onClick={() => onFavorite(recipe.id)}
            >
              {isFavorited ? '❤️' : '🤍'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
