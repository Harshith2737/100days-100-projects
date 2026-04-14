import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipeGrid from '../components/RecipeGrid';
import { Recipe } from '../types';
import { recipeService } from '../services/api';
import '../styles/Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    setIsLoading(true);
    try {
      const data = await recipeService.getAllRecipes();
      setRecipes(data);
    } catch (error) {
      console.error('Error loading recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    try {
      if (query.trim() === '') {
        const data = await recipeService.getAllRecipes();
        setRecipes(data);
      } else {
        const data = await recipeService.searchRecipes(query);
        setRecipes(data);
      }
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecipeClick = (recipe: Recipe) => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="nav-links">
          <button className="nav-link" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
        <SearchBar onSearch={handleSearch} />
        {searchQuery && (
          <div className="search-info">
            Search results for: <strong>{searchQuery}</strong>
          </div>
        )}
        <RecipeGrid 
          recipes={recipes} 
          isLoading={isLoading}
          onRecipeClick={handleRecipeClick}
        />
      </div>
    </div>
  );
};

export default Home;
