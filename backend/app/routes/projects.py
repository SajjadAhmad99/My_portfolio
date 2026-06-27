from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import json

from ..database import get_db
from ..models.project import Project
from ..schemas.project import ProjectResponse, ProjectCreate

router = APIRouter(prefix="/api/projects", tags=["projects"])

@router.get("/", response_model=List[ProjectResponse])
async def get_all_projects(db: Session = Depends(get_db)):
    """Get all projects"""
    projects = db.query(Project).all()
    
    # Parse technologies JSON string
    for project in projects:
        project.technologies = json.loads(project.technologies)
    
    return projects

@router.get("/{project_id}", response_model=ProjectResponse)
async def get_project(project_id: int, db: Session = Depends(get_db)):
    """Get single project by ID"""
    project = db.query(Project).filter(Project.id == project_id).first()
    
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    project.technologies = json.loads(project.technologies)
    return project

@router.post("/", response_model=ProjectResponse)
async def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    """Create new project"""
    db_project = Project(
        title=project.title,
        description=project.description,
        technologies=json.dumps(project.technologies),
        github_url=project.github_url,
        demo_url=project.demo_url,
        image_url=project.image_url
    )
    
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    
    db_project.technologies = json.loads(db_project.technologies)
    return db_project
