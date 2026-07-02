import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from .config import settings
from .database import engine, Base
from .routes import projects, contact, stats

# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title="Portfolio API",
    description="Backend API for Sajjad Ahmad's AI Engineer Portfolio",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(projects.router)
app.include_router(contact.router)
app.include_router(stats.router)

# Resume file path — looks in backend directory then frontend public
RESUME_PATHS = [
    os.path.join(os.path.dirname(os.path.dirname(__file__)), "Sajjad_Ahmad.pdf"),
    os.path.join(os.path.dirname(os.path.dirname(__file__)), "..", "frontend", "public", "Sajjad_Ahmad.pdf"),
]

def find_resume():
    """Find the resume file from known locations."""
    for path in RESUME_PATHS:
        abs_path = os.path.abspath(path)
        if os.path.isfile(abs_path):
            return abs_path
    return None

@app.get("/api/resume/download")
async def download_resume():
    """Download resume as PDF file."""
    resume_path = find_resume()
    if resume_path:
        return FileResponse(
            path=resume_path,
            filename="Sajjad_Ahmad.pdf",
            media_type="application/pdf",
            headers={
                "Content-Disposition": "attachment; filename=Sajjad_Ahmad.pdf"
            }
        )
    return {"error": "Resume file not found"}, 404

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Portfolio API",
        "version": "1.0.0",
        "status": "active"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}
