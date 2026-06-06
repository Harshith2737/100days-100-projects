import os
from sqlmodel import SQLModel, create_engine

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./devplatform.db")
engine = create_engine(DATABASE_URL, echo=False)


def init_db() -> None:
    try:
        from . import models  # noqa: F401
        SQLModel.metadata.create_all(engine)
    except Exception:
        pass
