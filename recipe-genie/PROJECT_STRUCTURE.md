# Recipe Genie Project Structure

```
recipe-genie/
│
├── frontend/                          # React + TypeScript Frontend
│   ├── src/
│   │   ├── components/                # Reusable UI Components
│   │   │   ├── Header.tsx            # Main header component
│   │   │   ├── SearchBar.tsx         # Search functionality
│   │   │   ├── RecipeCard.tsx        # Individual recipe card
│   │   │   └── RecipeGrid.tsx        # Recipe grid layout
│   │   │
│   │   ├── pages/                     # Page Components
│   │   │   ├── Landing.tsx           # Landing page with features
│   │   │   ├── Home.tsx              # Recipe listing page
│   │   │   ├── RecipeDetail.tsx      # Individual recipe detail page
│   │   │   └── Register.tsx          # User registration page
│   │   │
│   │   ├── services/                  # API Services
│   │   │   └── api.ts                # All API calls & methods
│   │   │
│   │   ├── types/                     # TypeScript Interfaces
│   │   │   └── index.ts              # Type definitions (Recipe, User, Favorite)
│   │   │
│   │   ├── styles/                    # CSS Stylesheets
│   │   │   ├── index.css             # Global styles
│   │   │   ├── Header.css
│   │   │   ├── SearchBar.css
│   │   │   ├── RecipeCard.css
│   │   │   ├── RecipeGrid.css
│   │   │   ├── Home.css
│   │   │   ├── Landing.css
│   │   │   ├── RecipeDetail.css
│   │   │   └── Register.css
│   │   │
│   │   ├── App.tsx                   # Main app component with routing
│   │   └── main.tsx                  # Entry point
│   │
│   ├── public/
│   │   └── index.html                # HTML template
│   │
│   ├── package.json                   # Dependencies & scripts
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── tsconfig.node.json             # Node TS configuration
│   ├── vite.config.ts                 # Vite configuration
│   ├── .eslintrc.cjs                  # ESLint configuration
│   ├── .prettierrc                    # Prettier configuration
│   ├── .env.example                   # Environment variables template
│   ├── .env                           # Local environment variables
│   ├── Dockerfile                     # Docker configuration
│   └── README.md                      # Frontend documentation
│
├── backend/                           # Python FastAPI Backend
│   ├── app/
│   │   ├── models/                    # Database Models
│   │   │   ├── __init__.py
│   │   │   ├── recipe.py             # Recipe model
│   │   │   ├── user.py               # User model
│   │   │   └── favorite.py           # Favorite model
│   │   │
│   │   ├── routes/                    # API Routes
│   │   │   ├── __init__.py
│   │   │   ├── recipes.py            # Recipe endpoints
│   │   │   ├── users.py              # User endpoints
│   │   │   └── favorites.py          # Favorite endpoints
│   │   │
│   │   ├── schemas/                   # Pydantic Schemas
│   │   │   ├── __init__.py
│   │   │   ├── recipe.py             # Recipe schema
│   │   │   ├── user.py               # User schema
│   │   │   └── favorite.py           # Favorite schema
│   │   │
│   │   ├── __init__.py               # Package initialization
│   │   ├── database.py               # Database connection & session
│   │   └── main.py                   # FastAPI app & startup
│   │
│   ├── requirements.txt                # Python dependencies
│   ├── config.py                       # Configuration settings
│   ├── .env.example                    # Environment variables template
│   ├── .env                            # Local environment variables
│   ├── Dockerfile                      # Docker configuration
│   ├── README.md                       # Backend documentation
│   └── recipe_genie.db                 # SQLite database (dev only)
│
├── docker-compose.yml                  # Docker compose configuration
├── .gitignore                          # Git ignore rules
├── README.md                           # Main project documentation
└── PROJECT_STRUCTURE.md                # This file

```

## Frontend Features

### Pages
- **Landing**: Beautiful welcome page with features showcase
- **Home**: Recipe search and browse interface
- **RecipeDetail**: Detailed recipe view with ingredients and instructions
- **Register**: User registration form

### Components
- **Header**: Navigation and branding
- **SearchBar**: Recipe search functionality
- **RecipeCard**: Individual recipe display
- **RecipeGrid**: Responsive grid layout for recipes

### Services
- **api.ts**: Centralized API client with all endpoints

### Styling
- Modern CSS with CSS variables
- Responsive design for all devices
- Gradient backgrounds and smooth animations
- Dark mode ready architecture

## Backend Features

### Models
- **Recipe**: Recipe data with ingredients, instructions, metadata
- **User**: User accounts and profiles
- **Favorite**: User favorites association

### Routes
- **Recipes**: CRUD operations and search functionality
- **Users**: Registration and profile management
- **Favorites**: Add, list, and remove user favorites

### Database
- SQLAlchemy ORM for database abstraction
- Support for PostgreSQL and SQLite
- Automatic table creation on startup

## Key Features

✅ Recipe search and filtering
✅ Recipe details with images
✅ User registration
✅ Save favorite recipes
✅ Responsive design
✅ Modern UI with animations
✅ Docker support
✅ RESTful API
✅ Type-safe frontend
✅ Modular architecture

## Tech Stack

### Frontend
- React 18
- TypeScript
- React Router v6
- Vite
- Pure CSS3

### Backend
- Python 3.8+
- FastAPI
- SQLAlchemy
- PostgreSQL/SQLite
- Uvicorn

## Development Workflow

1. **Frontend Development**
   - Hot reload with Vite
   - Type checking with TypeScript
   - ESLint and Prettier for code quality

2. **Backend Development**
   - Auto-reload with Uvicorn
   - Interactive API docs at `/docs`
   - Database migrations with Alembic (future)

3. **Database**
   - SQLite for local development
   - PostgreSQL for production
   - SQLAlchemy handles migrations

## Deployment

- Docker Compose for local development
- Dockerfiles for containerization
- Ready for cloud deployment (AWS, GCP, Azure)

## Future Enhancements

- [ ] Advanced filtering (difficulty, time range, cuisine)
- [ ] User authentication with JWT
- [ ] Recipe ratings and reviews
- [ ] Shopping list generation
- [ ] Meal planning
- [ ] Social sharing
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Image uploads
- [ ] Multi-language support
