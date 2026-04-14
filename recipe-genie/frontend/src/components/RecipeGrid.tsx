import React from 'react';
import { Recipe } from '../types';
import RecipeCard from './RecipeCard';
import '../styles/RecipeGrid.css';

interface RecipeGridProps {
  recipes: Recipe[];
  isLoading?: boolean;
  onRecipeClick?: (recipe: Recipe) => void;
  onFavorite?: (recipeId: number) => void;
  favoritedRecipes?: number[];
}

const RecipeGrid: React.FC<RecipeGridProps> = ({
  recipes,
  isLoading = false,
  onRecipeClick,
  onFavorite,
  favoritedRecipes = [],
}) => {
  if (isLoading) {
    return <div className="recipe-grid loading">Loading recipes...</div>;
  }

  if (recipes.length === 0) {
    return <div className="recipe-grid empty">No recipes found. Try searching for something!</div>;
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() => onRecipeClick?.(recipe)}
          style={{ cursor: onRecipeClick ? 'pointer' : 'default' }}
        >
          <RecipeCard
            recipe={recipe}
            onFavorite={onFavorite}
            isFavorited={favoritedRecipes.includes(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;
