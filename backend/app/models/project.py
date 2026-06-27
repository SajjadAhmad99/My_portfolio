from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from ..database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)
    technologies = Column(Text, nullable=False)  # JSON string
    github_url = Column(String(500))
    demo_url = Column(String(500))
    image_url = Column(String(500))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
