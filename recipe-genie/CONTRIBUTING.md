# Contributing to Recipe Genie

We love contributions! Whether it's bug reports, feature requests, or code contributions, we appreciate your help.

## Getting Started

### Fork & Clone
```bash
git clone https://github.com/your-username/recipe-genie.git
cd recipe-genie
```

### Setting Up Development Environment

**Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

**Frontend:**
```bash
cd frontend
npm install
```

---

## Code Standards

### Python (Backend)
- Use PEP 8 style guide
- Add type hints
- Write docstrings for functions
- Use 4 spaces for indentation

```python
def get_recipe(recipe_id: int) -> Recipe:
    """Fetch a recipe by ID.
    
    Args:
        recipe_id: The recipe identifier
        
    Returns:
        Recipe object or None if not found
    """
    return db.query(Recipe).filter(Recipe.id == recipe_id).first()
```

### TypeScript/React (Frontend)
- Use TypeScript strict mode
- Define component prop types with interfaces
- Use functional components with hooks
- Keep components small and focused

```typescript
interface RecipeCardProps {
  recipe: Recipe;
  onFavorite?: (recipeId: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onFavorite }) => {
  return (/* JSX */);
};
```

---

## Commit Guidelines

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code refactoring
- `test:` Tests
- `chore:` Build/dependencies

**Examples:**
```
feat: Add recipe rating system
fix: Fix search not working with special characters
docs: Update API reference
```

---

## Branch Naming
- Feature: `feature/description`
- Bug fix: `bugfix/description`
- Hotfix: `hotfix/description`
- Documentation: `docs/description`

**Examples:**
```
feature/add-recipe-ratings
bugfix/search-special-characters
docs/update-quickstart
```

---

## Pull Request Process

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make changes and commit**
   ```bash
   git commit -m "feat: Add your feature"
   ```

3. **Push to your fork**
   ```bash
   git push origin feature/your-feature
   ```

4. **Create Pull Request**
   - Write clear description
   - Reference any related issues
   - Include screenshots for UI changes

5. **Code Review**
   - Address feedback
   - Run tests
   - Update if needed

---

## Testing

### Backend Tests
```bash
cd backend
# Add tests to tests/ directory
pytest tests/
```

### Frontend Tests
```bash
cd frontend
# Add tests to src/__tests__/ directory
npm test
```

---

## Feature Implementation Checklist

- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] No console errors/warnings
- [ ] Responsive on mobile
- [ ] Database migrations (if needed)
- [ ] Environment variables documented

---

## Feature Request Template

```
**Title:** Clear, concise title

**Description:** What is the feature and why is it needed?

**Example Use Case:** How would users use this?

**Implementation Ideas:** Any suggestions on implementation?

**Additional Context:** Screenshots, mockups, etc.
```

---

## Bug Report Template

```
**Title:** Clear, concise title

**Severity:** Critical / High / Medium / Low

**Description:** What happened?

**Steps to Reproduce:**
1. Step 1
2. Step 2

**Expected Behavior:** What should happen?

**Actual Behavior:** What actually happened?

**Screenshots:** If applicable

**Environment:**
- OS: 
- Browser: 
- Node Version: 
- Python Version: 

**Additional Context:**
```

---

## Development Tips

### Hot Reload
- Frontend: Vite provides instant hot reload
- Backend: Uvicorn auto-reload with `--reload` flag

### Debugging
- Browser DevTools (F12) for frontend
- FastAPI docs at `/docs` for API
- Python debugger for backend:
  ```python
  import pdb; pdb.set_trace()
  ```

### Database
- SQLite for local development
- Migrations with Alembic (coming soon)
- Reset database:
  ```bash
  rm backend/recipe_genie.db  # SQLite
  # For PostgreSQL: DROP DATABASE recipe_genie;
  ```

---

## Areas to Contribute

### High Priority
- [ ] Authentication & JWT tokens
- [ ] Recipe image uploads
- [ ] Advanced search filters
- [ ] User profiles
- [ ] Recipe ratings/reviews

### Medium Priority
- [ ] Email notifications
- [ ] Shopping list feature
- [ ] Meal planning
- [ ] User preferences
- [ ] Social sharing

### Good First Issues
- [ ] Add more sample recipes
- [ ] Improve error messages
- [ ] Add loading states
- [ ] Enhance styling
- [ ] Documentation

---

## Questions?

- Check existing issues
- Read the documentation
- Open a discussion
- Contact maintainers

---

## Code of Conduct

### Be Respectful
- Treat everyone with respect
- Welcome different perspectives
- Constructive criticism only

### Be Helpful
- Help newcomers
- Answer questions
- Review PRs constructively

### Be Professional
- No harassment
- No discrimination
- Focus on the code

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Recipe Genie! 🍳**
