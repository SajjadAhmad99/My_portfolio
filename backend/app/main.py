import os
import sys
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from .config import settings
from .database import engine, Base
from .routes import projects, contact, stats

# Create database tables
Base.metadata.create_all(bind=engine)

# ---------------------------------------------------------------------------
# Multimodal-RAG Chatbot Integration
# ---------------------------------------------------------------------------
# Add multimodal-rag to Python path so its modules can be imported directly
PORTFOLIO_ROOT_EARLY = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "..")
)
MULTIMODAL_RAG_DIR = os.path.join(PORTFOLIO_ROOT_EARLY, "multimodal-rag")

if MULTIMODAL_RAG_DIR not in sys.path:
    sys.path.insert(0, MULTIMODAL_RAG_DIR)

# Load the multimodal-rag .env so API keys (GROK_API_KEY, etc.) are available
from dotenv import load_dotenv
multimodal_env = os.path.join(MULTIMODAL_RAG_DIR, ".env")
if os.path.isfile(multimodal_env):
    load_dotenv(multimodal_env, override=False)

# Import only the chat router (voice, image, video excluded per requirements)
try:
    from api.chat import router as chatbot_router
    CHATBOT_AVAILABLE = True
except Exception as e:
    CHATBOT_AVAILABLE = False
    print(f"[WARNING] Could not import multimodal-rag chatbot: {e}")

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

# Mount chatbot router at /chatbot and /api/chatbot (text-only, no voice/image/video)
if CHATBOT_AVAILABLE:
    app.include_router(chatbot_router, prefix="/chatbot", tags=["AI Chatbot"])
    app.include_router(chatbot_router, prefix="/api/chatbot", tags=["AI Chatbot"])

# Root directory of the portfolio project (two levels up from this file)
PORTFOLIO_ROOT = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "..")
)

FRONTEND_DIST = os.path.join(PORTFOLIO_ROOT, "frontend", "dist")

# Resume file paths
RESUME_PATHS = [
    os.path.join(PORTFOLIO_ROOT, "SajjadAhmad-cv.pdf"),
    os.path.join(PORTFOLIO_ROOT, "Sajjad_Ahmad_CV.pdf"),
    os.path.join(PORTFOLIO_ROOT, "frontend", "public", "SajjadAhmad-cv.pdf"),
    os.path.join(PORTFOLIO_ROOT, "frontend", "dist", "SajjadAhmad-cv.pdf"),
    os.path.join(PORTFOLIO_ROOT, "backend", "SajjadAhmad-cv.pdf"),
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
        filename = os.path.basename(resume_path)
        return FileResponse(
            path=resume_path,
            filename=filename,
            media_type="application/pdf",
            headers={
                "Content-Disposition": f"attachment; filename={filename}"
            }
        )
    return {"error": "Resume file not found"}, 404

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

# Mount frontend build static files if present
if os.path.exists(FRONTEND_DIST):
    assets_dir = os.path.join(FRONTEND_DIST, "assets")
    if os.path.exists(assets_dir):
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")
        
    images_dir = os.path.join(FRONTEND_DIST, "images")
    if os.path.exists(images_dir):
        app.mount("/images", StaticFiles(directory=images_dir), name="images")

# Mount portfolio root as static files backup
app.mount("/static", StaticFiles(directory=PORTFOLIO_ROOT), name="static")

FRONTEND_HTML_CANDIDATES = [
    os.path.join(FRONTEND_DIST, "index.html"),
    os.path.join(PORTFOLIO_ROOT, "frontend", "index.html"),
    os.path.join(PORTFOLIO_ROOT, "frontend", "Frontend.html"),
    os.path.join(PORTFOLIO_ROOT, "frontend", "public", "Frontend.html"),
    os.path.join(FRONTEND_DIST, "Frontend.html"),
    os.path.join(PORTFOLIO_ROOT, "Frontend.html"),
]

def find_frontend_html():
    """Find Frontend.html from known directory locations."""
    for path in FRONTEND_HTML_CANDIDATES:
        abs_path = os.path.abspath(path)
        if os.path.isfile(abs_path):
            return abs_path
    return None

@app.get("/Frontend.html")
@app.get("/frontend.html")
async def serve_frontend_html():
    """Serve Frontend.html explicitly."""
    html_path = find_frontend_html()
    if html_path:
        return FileResponse(html_path, media_type="text/html")
    return {"error": "Frontend.html not found"}, 404

@app.get("/presentation")
async def serve_presentation():
    """Serve the interactive presentation deck (Frontend.html or React build index)."""
    html_path = find_frontend_html()
    if html_path:
        return FileResponse(html_path, media_type="text/html")
    dist_index = os.path.join(FRONTEND_DIST, "index.html")
    if os.path.isfile(dist_index):
        return FileResponse(dist_index, media_type="text/html")
    return {"error": "Frontend presentation not found"}, 404

@app.get("/")
async def root():
    """Root endpoint — serves frontend/index.html (main portfolio) first."""
    # Prefer frontend/index.html as the primary portfolio page
    frontend_index = os.path.join(PORTFOLIO_ROOT, "frontend", "index.html")
    if os.path.isfile(frontend_index):
        return FileResponse(frontend_index, media_type="text/html")
    html_path = find_frontend_html()
    if html_path:
        return FileResponse(html_path, media_type="text/html")
    dist_index = os.path.join(FRONTEND_DIST, "index.html")
    if os.path.isfile(dist_index):
        return FileResponse(dist_index, media_type="text/html")
    return {
        "message": "Portfolio API",
        "version": "1.0.0",
        "status": "active"
    }

# SPA client fallback handler for React router/navigation
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    if full_path.startswith("api/") or full_path in ["health", "docs", "openapi.json", "redoc"]:
        return {"error": "Endpoint not found"}, 404
        
    target_file = os.path.join(FRONTEND_DIST, full_path)
    if os.path.isfile(target_file):
        return FileResponse(target_file)
        
    root_target = os.path.join(PORTFOLIO_ROOT, full_path)
    if os.path.isfile(root_target):
        return FileResponse(root_target)

    public_target = os.path.join(PORTFOLIO_ROOT, "frontend", "public", full_path)
    if os.path.isfile(public_target):
        return FileResponse(public_target)
        
    html_path = find_frontend_html()
    if html_path:
        return FileResponse(html_path, media_type="text/html")

    dist_index = os.path.join(FRONTEND_DIST, "index.html")
    if os.path.isfile(dist_index):
        return FileResponse(dist_index, media_type="text/html")
        
    return {"error": "Page not found"}, 404


