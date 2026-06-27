from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ProjectBase(BaseModel):
    title: str
    description: str
    technologies: List[str]
    github_url: Optional[str] = None
    demo_url: Optional[str] = None
    image_url: str

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True
