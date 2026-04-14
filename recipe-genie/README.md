# Recipe Genie - Full Stack Web Application

A modern full-stack recipe discovery and management application built with React, TypeScript, and Python.

## Features

✨ **Recipe Search & Discovery**
- Search recipes by name or cuisine
- Browse recipe details with ingredients and instructions
- View recipe metadata (prep time, cook time, difficulty, servings)

👤 **User Management**
- User registration and profiles
- Personal recipe favorites

🎨 **Modern UI**
- Responsive design for all devices
- Beautiful gradient backgrounds
- Smooth animations and transitions

🔧 **Tech Stack**

### Frontend
- React 18
- TypeScript
- React Router v6
- Vite
- CSS3

### Backend
- Python 3.8+
- FastAPI
- SQLAlchemy ORM
- PostgreSQL/SQLite

## Project Structure

```
recipe-genie/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── styles/          # CSS styles
│   │   ├── types/           # TypeScript types
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── .env.example
├── backend/                  # Python FastAPI backend
│   ├── app/
│   │   ├── models/          # Database models
│   │   ├── routes/          # API endpoints
│   │   ├── schemas/         # Pydantic schemas
│   │   ├── database.py
│   │   └── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── config.py
├── README.md
└── docker-compose.yml

```

## Getting Started

### Prerequisites
- Node.js 16+
- Python 3.8+
- PostgreSQL (optional, can use SQLite for development)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

5. Run the development server:
```bash
python -m uvicorn app.main:app --reload
```

The backend will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

### Recipes
- `GET /api/recipes` - Get all recipes (with pagination)
- `GET /api/recipes/{id}` - Get recipe details
- `GET /api/recipes/search?query={query}` - Search recipes
- `POST /api/recipes` - Create new recipe
- `PUT /api/recipes/{id}` - Update recipe
- `DELETE /api/recipes/{id}` - Delete recipe

### Users
- `POST /api/users/register` - Register new user
- `GET /api/users/{id}` - Get user profile

### Favorites
- `POST /api/favorites` - Add recipe to favorites
- `GET /api/favorites/{user_id}` - Get user's favorite recipes
- `DELETE /api/favorites/{user_id}/{recipe_id}` - Remove from favorites

## Database Setup

### Using PostgreSQL
Update your `.env` file with PostgreSQL connection:
```
DATABASE_URL=postgresql://user:password@localhost:5432/recipe_genie
```

Create the database:
```bash
createdb recipe_genie
```

### Using SQLite (Development)
The application defaults to SQLite if PostgreSQL is not configured.

## Development

### Creating Database Tables
Tables are automatically created when the FastAPI app starts.

### Sample Data
You can add sample recipes through the API:
```bash
curl -X POST http://localhost:8000/api/recipes \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pasta Carbonara",
    "description": "Classic Italian pasta dish",
    "ingredients": "[\"400g pasta\", \"200g bacon\", \"3 eggs\", \"100g cheese\"]",
    "instructions": "[\"Cook pasta\", \"Fry bacon\", \"Mix ingredients\", \"Serve hot\"]",
    "prep_time": 10,
    "cook_time": 20,
    "servings": 4,
    "difficulty": "easy",
    "cuisine": "Italian"
  }'
```

## Features Ready for Implementation

- [ ] Authentication & JWT tokens
- [ ] User profile management
- [ ] Advanced recipe filtering (by difficulty, cuisine, time)
- [ ] Recipe ratings and reviews
- [ ] Admin panel for recipe management
- [ ] Email notifications
- [ ] Recipe export PDF
- [ ] Shopping list generation
- [ ] Social sharing

## Deployment

### Docker Deployment
```bash
docker-compose up -d
```

### Production Checklist
- [ ] Set up PostgreSQL database
- [ ] Configure environment variables
- [ ] Enable HTTPS
- [ ] Set up CI/CD pipeline
- [ ] Configure error logging
- [ ] Set up monitoring
- [ ] Implement authentication properly

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For support, email support@recipegenie.com or open an issue on GitHub.

---

**Happy Cooking! 🍳**
