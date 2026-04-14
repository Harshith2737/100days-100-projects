# API Reference - Recipe Genie

## Base URL
```
http://localhost:8000/api
```

## Authentication
Currently using session-based storage (localStorage). JWT tokens coming soon.

---

## 📚 Recipes Endpoints

### Get All Recipes
```http
GET /recipes?skip=0&limit=10
```

**Query Parameters:**
- `skip` (integer): Skip N recipes (default: 0)
- `limit` (integer): Return N recipes (default: 10)

**Response:**
```json
[
  {
    "id": 1,
    "name": "Pasta Carbonara",
    "description": "Classic Italian pasta dish",
    "ingredients": "[\"400g pasta\", \"200g bacon\"]",
    "instructions": "[\"Cook pasta\", \"Fry bacon\"]",
    "prep_time": 10,
    "cook_time": 20,
    "servings": 4,
    "difficulty": "easy",
    "cuisine": "Italian",
    "image_url": "https://...",
    "rating": 4.5,
    "created_at": "2024-01-01T00:00:00",
    "updated_at": "2024-01-01T00:00:00"
  }
]
```

---

### Search Recipes
```http
GET /recipes/search?query=pasta&skip=0&limit=10
```

**Query Parameters:**
- `query` (string, required): Search term
- `skip` (integer): Skip N results
- `limit` (integer): Return N results

**Response:**
Same as Get All Recipes

---

### Get Recipe Details
```http
GET /recipes/{recipe_id}
```

**Path Parameters:**
- `recipe_id` (integer, required): Recipe ID

**Response:**
```json
{
  "id": 1,
  "name": "Pasta Carbonara",
  "description": "Classic Italian pasta dish",
  "ingredients": "[\"400g pasta\", \"200g bacon\"]",
  "instructions": "[\"Cook pasta\", \"Fry bacon\"]",
  "prep_time": 10,
  "cook_time": 20,
  "servings": 4,
  "difficulty": "easy",
  "cuisine": "Italian",
  "image_url": "https://...",
  "rating": 4.5,
  "created_at": "2024-01-01T00:00:00",
  "updated_at": "2024-01-01T00:00:00"
}
```

---

### Create Recipe
```http
POST /recipes
Content-Type: application/json

{
  "name": "Pasta Carbonara",
  "description": "Classic Italian pasta dish",
  "ingredients": "[\"400g pasta\", \"200g bacon\"]",
  "instructions": "[\"Cook pasta\", \"Fry bacon\"]",
  "prep_time": 10,
  "cook_time": 20,
  "servings": 4,
  "difficulty": "easy",
  "cuisine": "Italian",
  "image_url": "https://..."
}
```

**Response:** (201 Created)
Same as Get Recipe Details

---

### Update Recipe
```http
PUT /recipes/{recipe_id}
Content-Type: application/json

{
  "name": "Pasta Carbonara Updated",
  "description": "Updated description",
  ...
}
```

**Response:**
Updated recipe object

---

### Delete Recipe
```http
DELETE /recipes/{recipe_id}
```

**Response:** (200 OK)
```json
{
  "message": "Recipe deleted successfully"
}
```

---

## 👤 Users Endpoints

### Register User
```http
POST /users/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "secure_password",
  "full_name": "John Doe"
}
```

**Response:** (201 Created)
```json
{
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "full_name": "John Doe",
  "created_at": "2024-01-01T00:00:00"
}
```

---

### Get User Profile
```http
GET /users/{user_id}
```

**Response:**
Same as Register User response

---

## ❤️ Favorites Endpoints

### Add Recipe to Favorites
```http
POST /favorites
Content-Type: application/json

{
  "user_id": 1,
  "recipe_id": 5
}
```

**Response:** (201 Created)
```json
{
  "id": 1,
  "user_id": 1,
  "recipe_id": 5,
  "created_at": "2024-01-01T00:00:00"
}
```

---

### Get User's Favorite Recipes
```http
GET /favorites/{user_id}
```

**Response:**
Array of recipe objects (same format as Get All Recipes)

---

### Remove Recipe from Favorites
```http
DELETE /favorites/{user_id}/{recipe_id}
```

**Response:** (200 OK)
```json
{
  "message": "Removed from favorites"
}
```

---

## 🏥 Health & Status Endpoints

### API Health
```http
GET /health
```

**Response:**
```json
{
  "status": "ok"
}
```

---

### Root Endpoint
```http
GET /
```

**Response:**
```json
{
  "message": "Welcome to Recipe Genie API"
}
```

---

## 📋 Data Types

### Difficulty Levels
- `easy`
- `medium`
- `hard`

### Cuisines
- `Italian`
- `Chinese`
- `Indian`
- `Mexican`
- `Japanese`
- `Thai`
- `French`
- `Mediterranean`
- etc.

---

## ❌ Error Responses

### 400 Bad Request
```json
{
  "detail": "Invalid request body"
}
```

### 404 Not Found
```json
{
  "detail": "Recipe not found"
}
```

### 500 Server Error
```json
{
  "detail": "Internal server error"
}
```

---

## 🔗 Interactive Documentation

Visit `http://localhost:8000/docs` for interactive Swagger documentation.
Or `http://localhost:8000/redoc` for ReDoc documentation.

---

## 📝 Example cURL Commands

### Get all recipes
```bash
curl -X GET "http://localhost:8000/api/recipes?skip=0&limit=10"
```

### Search recipes
```bash
curl -X GET "http://localhost:8000/api/recipes/search?query=pasta"
```

### Create recipe
```bash
curl -X POST "http://localhost:8000/api/recipes" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pasta Carbonara",
    "description": "Classic Italian pasta",
    "ingredients": "[\"400g pasta\", \"200g bacon\"]",
    "instructions": "[\"Cook pasta\", \"Fry bacon\"]",
    "prep_time": 10,
    "cook_time": 20,
    "servings": 4,
    "difficulty": "easy",
    "cuisine": "Italian"
  }'
```

### Register user
```bash
curl -X POST "http://localhost:8000/api/users/register" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123",
    "full_name": "John Doe"
  }'
```

### Add to favorites
```bash
curl -X POST "http://localhost:8000/api/favorites" \
  -H "Content-Type: application/json" \
  -d '{
    "user_id": 1,
    "recipe_id": 5
  }'
```

---

## 🚀 Rate Limiting
Currently no rate limiting (coming soon).

---

## 🔐 Security Notes
- Passwords are currently stored in plaintext (CHANGE IN PRODUCTION)
- No JWT/Bearer token authentication (coming soon)
- CORS enabled for localhost only
- All inputs should be validated on frontend

---

## 📞 Support
For issues or questions, please refer to the main README or QUICKSTART guide.
