# 🍳 Recipe Genie - Quick Reference Dashboard

## 🎯 Start Here

| Task | File | Time |
|------|------|------|
| 🚀 Get running in 5 minutes | [QUICKSTART.md](./QUICKSTART.md) | 5 min |
| 📚 Understand the project | [README.md](./README.md) | 10 min |
| 🗂️ See all files | [FILE_TREE.md](./FILE_TREE.md) | 5 min |
| 📖 View file structure | [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) | 10 min |

---

## 📚 Documentation Index

### User Getting Started
1. **[QUICKSTART.md](./QUICKSTART.md)** - Setup instructions (Docker or Local)
2. **[README.md](./README.md)** - Features, tech stack, getting started
3. **[FILE_TREE.md](./FILE_TREE.md)** - Visual file structure
4. **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Detailed component info

### Developer Guides
1. **[API_REFERENCE.md](./API_REFERENCE.md)** - All API endpoints with examples
2. **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute
3. **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to production

### Component Docs
1. **[frontend/README.md](./frontend/README.md)** - Frontend setup
2. **[backend/README.md](./backend/README.md)** - Backend setup

### This File
- **[DASHBOARD.md](./DASHBOARD.md)** - This quick reference (you are here)

---

## 🔧 Environment Setup

### Backend (.env)
```
DATABASE_URL=sqlite:///./recipe_genie.db  # or PostgreSQL
DEBUG=True
SECRET_KEY=dev-secret-key
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000/api
```

[See full config →](./backend/.env.example) | [Frontend config →](./frontend/.env.example)

---

## 🎨 Frontend Structure

### Pages (4 total)
| Page | File | Route | Features |
|------|------|-------|----------|
| Landing | `frontend/src/pages/Landing.tsx` | `/` | Hero, features, CTA |
| Search | `frontend/src/pages/Home.tsx` | `/recipes` | Search, browse recipes |
| Details | `frontend/src/pages/RecipeDetail.tsx` | `/recipe/:id` | Full recipe info |
| Register | `frontend/src/pages/Register.tsx` | `/register` | User signup form |

### Components (4 reusable)
| Component | File | Purpose |
|-----------|------|---------|
| Header | `frontend/src/components/Header.tsx` | Branding & title |
| SearchBar | `frontend/src/components/SearchBar.tsx` | Search input |
| RecipeCard | `frontend/src/components/RecipeCard.tsx` | Recipe display |
| RecipeGrid | `frontend/src/components/RecipeGrid.tsx` | Grid layout |

### Styling (9 CSS files)
All in `frontend/src/styles/`:
- `index.css` - Global styles
- `Header.css` - Navigation
- `SearchBar.css` - Search styling
- `RecipeCard.css` - Card styling
- `RecipeGrid.css` - Grid layout
- `Landing.css` - Landing page
- `Home.css` - Home page
- `RecipeDetail.css` - Recipe detail
- `Register.css` - Registration form

### Services
- `frontend/src/services/api.ts` - All API calls
- `frontend/src/types/index.ts` - TypeScript types

---

## 🔧 Backend Structure

### API Routes (3 modules, 11 endpoints)

#### Recipes (6 endpoints)
```
GET    /api/recipes              # Get all recipes
GET    /api/recipes/search       # Search recipes
GET    /api/recipes/{id}         # Get one recipe
POST   /api/recipes              # Create recipe
PUT    /api/recipes/{id}         # Update recipe
DELETE /api/recipes/{id}         # Delete recipe
```
[Code →](./backend/app/routes/recipes.py)

#### Users (2 endpoints)
```
POST   /api/users/register       # Register user
GET    /api/users/{id}           # Get user
```
[Code →](./backend/app/routes/users.py)

#### Favorites (3 endpoints)
```
POST   /api/favorites            # Add favorite
GET    /api/favorites/{uid}      # Get favorites
DELETE /api/favorites/{uid}/{rid} # Remove favorite
```
[Code →](./backend/app/routes/favorites.py)

### Database Models (3 models)
| Model | File | Fields | Purpose |
|-------|------|--------|---------|
| Recipe | `backend/app/models/recipe.py` | 15 | Store recipes |
| User | `backend/app/models/user.py` | 5 | Store users |
| Favorite | `backend/app/models/favorite.py` | 3 | User favorites |

---

## 🚀 Quick Commands

### Frontend Development
```bash
cd frontend
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
npm run build           # Build for production
npm run lint            # Check code quality
npm run preview         # Preview build
```

### Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
# API at http://localhost:8000
# Docs at http://localhost:8000/docs
```

### Docker
```bash
docker-compose up -d    # Start all services
docker-compose down     # Stop services
docker-compose logs -f  # View logs
```

---

## 📊 Project Stats

| Metric | Count |
|--------|-------|
| Total Files | 65+ |
| Frontend Files | 35+ |
| Backend Files | 23+ |
| Documentation Files | 7 |
| TypeScript/React Files | 13 |
| Python Files | 11 |
| CSS Files | 9 |
| API Endpoints | 11 |
| Database Models | 3 |
| React Components | 4 |
| React Pages | 4 |
| Lines of Code | 3000+ |

---

## 🎯 Checklist - What's Included

### Features
- ✅ Recipe search and browse
- ✅ Recipe details with instructions
- ✅ User registration
- ✅ Save favorite recipes
- ✅ Responsive design
- ✅ Modern UI with animations
- ✅ RESTful API
- ✅ Database integration

### Configuration
- ✅ Docker setup
- ✅ Environment variables
- ✅ Development configs
- ✅ Production ready

### Documentation
- ✅ Quick start guide
- ✅ Full README
- ✅ API reference
- ✅ Contribution guide
- ✅ Deployment guide
- ✅ Code comments

### Quality
- ✅ TypeScript types
- ✅ Code linting
- ✅ Code formatting
- ✅ Responsive CSS
- ✅ Error handling

---

## 🎓 Technology Stack

### Frontend
- React 18
- TypeScript 5
- React Router 6
- Vite 5
- ESLint
- Prettier
- CSS3

### Backend
- FastAPI
- Python 3.8+
- SQLAlchemy 2
- Pydantic 2
- Uvicorn
- PostgreSQL/SQLite

### DevOps
- Docker
- Docker Compose
- Nginx (production)

---

## 💡 Common Tasks

### Add a new page
1. Create file in `frontend/src/pages/`
2. Add route in `frontend/src/App.tsx`
3. Create corresponding CSS in `frontend/src/styles/`

### Add API endpoint
1. Create/edit route in `backend/app/routes/`
2. Define schema in `backend/app/schemas/`
3. Import in `backend/app/routes/__init__.py`

### Update database
1. Modify model in `backend/app/models/`
2. If needed, create migration (future)
3. Restart backend

### Add styling
1. Create CSS in `frontend/src/styles/`
2. Import in component or main `index.css`
3. Use global CSS variables

---

## 🔗 External Links

### Documentation
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [SQLAlchemy Docs](https://docs.sqlalchemy.org/en/20/)

### Frameworks
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Pydantic](https://docs.pydantic.dev/)

---

## ❓ FAQ

### Q: Which file should I edit?
A: See "Frontend Structure" and "Backend Structure" sections above

### Q: How do I start development?
A: Follow [QUICKSTART.md](./QUICKSTART.md)

### Q: How do I deploy?
A: See [DEPLOYMENT.md](./DEPLOYMENT.md)

### Q: Where's the API documentation?
A: See [API_REFERENCE.md](./API_REFERENCE.md) or visit `/docs` endpoint

### Q: How do I add a feature?
A: See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Q: What's the folder structure?
A: See [FILE_TREE.md](./FILE_TREE.md) or [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

---

## 🎬 Getting Started (TL;DR)

```bash
# 1. Clone/navigate to project
cd recipe-genie

# 2. Option A: Docker (easiest)
docker-compose up -d
# Visit http://localhost:5173

# 2. Option B: Local development
# Terminal 1 - Backend:
cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload

# Terminal 2 - Frontend:
cd frontend
npm install && npm run dev
# Visit http://localhost:5173
```

---

## 🎉 You're All Set!

Your Recipe Genie application is complete and ready to develop!

**Next Steps:**
1. Choose Docker or Local setup
2. Follow [QUICKSTART.md](./QUICKSTART.md)
3. Visit http://localhost:5173
4. Start exploring and building!

---

## 📞 Need Help?

1. Check [QUICKSTART.md](./QUICKSTART.md#troubleshooting)
2. Read relevant section in this dashboard
3. Check code comments
4. See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

**Happy Coding! 🍳✨**

*Your full-stack Recipe Genie application is ready to go!*
