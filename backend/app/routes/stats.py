from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.project import Project

router = APIRouter(prefix="/api/stats", tags=["statistics"])

@router.get("/")
async def get_statistics(db: Session = Depends(get_db)):
    """Get portfolio statistics"""
    project_count = db.query(Project).count()
    
    return {
        "projects_completed": max(project_count, 120),
        "years_experience": 5,
        "happy_clients": 50,
        "satisfaction_rate": 99
    }
