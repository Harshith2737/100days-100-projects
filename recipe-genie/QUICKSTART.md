# Quick Start Guide - Recipe Genie

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.8+
- Git

### Option 1: Local Development (Without Docker)

#### Backend Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the server
python -m uvicorn app.main:app --reload
```

✅ Backend running at: http://localhost:8000
📚 API Docs at: http://localhost:8000/docs

#### Frontend Setup (New Terminal)

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

✅ Frontend running at: http://localhost:5173

---

### Option 2: Docker Development

```bash
# From project root
docker-compose up -d
```

✅ Frontend: http://localhost:5173
✅ Backend: http://localhost:8000
✅ Database: PostgreSQL on localhost:5432

---

## 📁 Project Structure

```
recipe-genie/
├── frontend/          # React + TypeScript
├── backend/           # Python FastAPI
└── docker-compose.yml # Docker orchestration
```

---

## 🎯 Features to Explore

### Home Page
- Beautiful landing page with features showcase
- Quick navigation to recipe search

### Recipe Search
- Search recipes by name or cuisine
- View recipe cards with key info
- Click for detailed recipe view

### Recipe Details
- Full ingredients list
- Step-by-step instructions
- Cooking times and difficulty levels

### User Registration
- Create account to save favorites
- Manage personal recipe collection

---

## 🔧 Useful Commands

### Frontend
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend
```bash
# Development
python -m uvicorn app.main:app --reload

# Production
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000

# Create initial data
curl -X POST http://localhost:8000/api/recipes \
  -H "Content-Type: application/json" \
  -d '{...}'
```

---

## 📝 First Steps

1. **Start both servers** (Backend & Frontend)
2. **Visit**: http://localhost:5173
3. **Click**: "Explore Recipes"
4. **Search**: Try searching for a cuisine (e.g., "Italian")
5. **View**: Click on a recipe card to see details
6. **Register**: Create an account to save favorites

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173 (Frontend)
lsof -ti:5173 | xargs kill -9

# Kill process on port 8000 (Backend)
lsof -ti:8000 | xargs kill -9
```

### Database Connection Error
- Ensure PostgreSQL is running (or use SQLite default)
- Check `.env` file DATABASE_URL

### API Not Responding
- Verify backend is running on http://localhost:8000
- Check browser console for CORS errors
- Ensure VITE_API_URL in frontend `.env` is correct

### Module Not Found (Python)
```bash
pip install -r requirements.txt
```

### Module Not Found (Node)
```bash
npm install
```

---

## 📚 Documentation

- [Main README](./README.md) - Project overview
- [Project Structure](./PROJECT_STRUCTURE.md) - Detailed structure
- [Frontend README](./frontend/README.md) - Frontend guide
- [Backend README](./backend/README.md) - Backend guide

---

## 🚀 Next Steps

After getting everything running:

1. **Add Sample Data**: Use API endpoints to add recipes
2. **Customize Styling**: Edit CSS in `frontend/src/styles/`
3. **Add Features**: Implement ratings, reviews, meal planning
4. **Deploy**: Follow deployment guide for production

---

## 💡 Tips

- Use Ctrl+Shift+I in browser to open DevTools
- Use http://localhost:8000/docs for interactive API testing
- Keep both terminals open during development
- Use `npm run lint` before committing code

---

## 🆘 Need Help?

1. Check the troubleshooting section above
2. Review API documentation at http://localhost:8000/docs
3. Check browser console for errors (F12)
4. Check backend terminal for server logs

---

**Happy Coding! 🍳**
