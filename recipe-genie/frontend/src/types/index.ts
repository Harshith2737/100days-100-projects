export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  instructions: string;
  prep_time: number;
  cook_time: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  image_url?: string;
  rating: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  created_at: string;
}

export interface Favorite {
  id: number;
  user_id: number;
  recipe_id: number;
  created_at: string;
}
