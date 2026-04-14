import { Recipe, User, Favorite } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Recipe Services
export const recipeService = {
  getAllRecipes: async (skip = 0, limit = 10): Promise<Recipe[]> => {
    const response = await fetch(`${API_BASE_URL}/recipes?skip=${skip}&limit=${limit}`);
    return response.json();
  },

  searchRecipes: async (query: string, skip = 0, limit = 10): Promise<Recipe[]> => {
    const response = await fetch(
      `${API_BASE_URL}/recipes/search?query=${query}&skip=${skip}&limit=${limit}`
    );
    return response.json();
  },

  getRecipeById: async (id: number): Promise<Recipe> => {
    const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
    if (!response.ok) throw new Error('Recipe not found');
    return response.json();
  },

  createRecipe: async (recipe: Omit<Recipe, 'id' | 'created_at' | 'updated_at' | 'rating'>): Promise<Recipe> => {
    const response = await fetch(`${API_BASE_URL}/recipes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });
    return response.json();
  },

  updateRecipe: async (id: number, recipe: Partial<Recipe>): Promise<Recipe> => {
    const response = await fetch(`${API_BASE_URL}/recipes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });
    return response.json();
  },

  deleteRecipe: async (id: number): Promise<void> => {
    await fetch(`${API_BASE_URL}/recipes/${id}`, { method: 'DELETE' });
  },
};

// User Services
export const userService = {
  registerUser: async (userData: {
    username: string;
    email: string;
    password: string;
    full_name: string;
  }): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    return response.json();
  },
};

// Favorite Services
export const favoriteService = {
  addFavorite: async (userId: number, recipeId: number): Promise<Favorite> => {
    const response = await fetch(`${API_BASE_URL}/favorites`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, recipe_id: recipeId }),
    });
    return response.json();
  },

  getUserFavorites: async (userId: number): Promise<Recipe[]> => {
    const response = await fetch(`${API_BASE_URL}/favorites/${userId}`);
    return response.json();
  },

  removeFavorite: async (userId: number, recipeId: number): Promise<void> => {
    await fetch(`${API_BASE_URL}/favorites/${userId}/${recipeId}`, {
      method: 'DELETE',
    });
  },
};
