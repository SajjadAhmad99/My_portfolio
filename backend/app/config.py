from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Using SQLite for local development (no PostgreSQL installation required)
    DATABASE_URL: str = "sqlite:///./portfolio.db"
    SECRET_KEY: str = "your-secret-key-here"
    CORS_ORIGINS: list = [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        "http://localhost:8000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
        "http://127.0.0.1:8000",
        "null",  # Allows requests from file:// pages (Frontend.html opened locally)
    ]
    
    class Config:
        env_file = ".env"

settings = Settings()
