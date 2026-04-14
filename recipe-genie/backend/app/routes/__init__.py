from .recipes import router as recipes_router
from .users import router as users_router
from .favorites import router as favorites_router

__all__ = ["recipes_router", "users_router", "favorites_router"]
