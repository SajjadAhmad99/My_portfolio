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
        "projects_completed": max(project_count, 5),
        "years_experience": 1,
        "happy_clients": 10,
        "satisfaction_rate": 99
    }
