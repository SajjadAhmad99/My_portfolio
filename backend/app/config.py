from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Using SQLite for local development (no PostgreSQL installation required)
    # To switch to PostgreSQL, change this to:
    # DATABASE_URL: str = "postgresql://postgres:password@localhost:5432/portfolio_db"
    DATABASE_URL: str = "sqlite:///./portfolio.db"
    SECRET_KEY: str = "your-secret-key-here"
    CORS_ORIGINS: list = ["http://localhost:5173"]
    
    class Config:
        env_file = ".env"

settings = Settings()
