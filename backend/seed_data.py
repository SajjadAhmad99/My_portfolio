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
        {
            "title": "Smart Vision – AI Web App",
            "description": "AI-powered web application featuring real-time image processing with object detection (YOLO), text extraction (OCR), and Vision Language Models. Handles multiple image uploads with optimized inference for low-latency results.",
            "technologies": json.dumps(["Python", "FastAPI", "YOLO", "OpenCV", "EasyOCR", "JavaScript"]),
            "github_url": "https://github.com/SajjadAhmad99",
            "demo_url": None,
            "image_url": "/images/projects/smart-vision.png"
        },
        {
            "title": "AI Face Attendance System",
            "description": "Intelligent face attendance system with fast, accurate face recognition using InsightFace and ONNX Runtime. Prevents duplicate entries, handles varying poses and lighting, and records attendance in real time.",
            "technologies": json.dumps(["Python", "InsightFace", "OpenCV", "ONNX Runtime", "Streamlit", "SQLite"]),
            "github_url": "https://github.com/SajjadAhmad99",
            "demo_url": None,
            "image_url": "/images/projects/face-attendance.png"
        },
        {
            "title": "Customer Churn Prediction",
            "description": "Machine learning system that predicts customer churn using Scikit-learn and XGBoost. Features data preprocessing, feature engineering, model comparison, and an interactive Streamlit dashboard for data-driven retention strategies.",
            "technologies": json.dumps(["Python", "Scikit-learn", "XGBoost", "Pandas", "Plotly", "Streamlit"]),
            "github_url": "https://github.com/SajjadAhmad99",
            "demo_url": None,
            "image_url": "/images/projects/churn-prediction.png"
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
