import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from app.database import SessionLocal, engine, Base
from app.models.project import Project
from app.models.contact import ContactMessage
import json

def seed_projects():
    # Create all tables
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    # Clear existing projects and re-seed
    db.query(Project).delete()
    db.commit()
    
    projects = [
        {
            "title": "UoP AI Assistant",
            "description": "AI Assistant for the University of Peshawar — Final Year Project. Provides intelligent assistance and streamlines access to university-related information using advanced RAG and multi-agent AI technologies.",
            "technologies": json.dumps(["Python", "LangChain", "CrewAI", "FastAPI", "LLMs", "RAG"]),
            "github_url": "https://github.com/SajjadAhmad99",
            "demo_url": None,
            "image_url": "/images/projects/ai-assistant.png"
        },
        {
            "title": "Multi-Agent AI System",
            "description": "Collaborative multi-agent architecture where specialized AI agents work together to perform complex tasks, automate workflows, and improve decision-making processes.",
            "technologies": json.dumps(["Python", "LangGraph", "CrewAI", "Groq", "Streamlit"]),
            "github_url": "https://github.com/SajjadAhmad99",
            "demo_url": None,
            "image_url": "/images/projects/multi-agent.png"
        },
        {
            "title": "RAG Knowledge System",
            "description": "Retrieval-Augmented Generation application combining Large Language Models with external knowledge sources to deliver accurate, context-aware, and reliable responses.",
            "technologies": json.dumps(["Python", "LangChain", "ChromaDB", "OpenAI", "FastAPI"]),
            "github_url": "https://github.com/SajjadAhmad99",
            "demo_url": None,
            "image_url": "/images/projects/rag-system.png"
        },
    ]
    
    for project_data in projects:
        project = Project(**project_data)
        db.add(project)
    
    db.commit()
    db.close()
    print("Database seeded successfully with 3 AI/ML projects!")

if __name__ == "__main__":
    seed_projects()
