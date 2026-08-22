import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsAPI } from '../services/api';

const FALLBACK_PROJECTS = [
  { id: 1, title: 'UoP AI Assistant', description: 'AI Assistant for the University of Peshawar — Final Year Project. Provides intelligent assistance and streamlines access to university-related information using advanced RAG and multi-agent AI technologies.', technologies: ['Python', 'LangChain', 'CrewAI', 'FastAPI', 'LLMs', 'RAG'], github_url: 'https://github.com/SajjadAhmad99', demo_url: null, image_url: '/images/projects/ai-assistant.png' },
  { id: 2, title: 'Multi-Agent AI System', description: 'Collaborative multi-agent architecture where specialized AI agents work together to perform complex tasks, automate workflows, and improve decision-making processes.', technologies: ['Python', 'LangGraph', 'CrewAI', 'Groq', 'Streamlit'], github_url: 'https://github.com/SajjadAhmad99', demo_url: null, image_url: '/images/projects/multi-agent.png' },
  { id: 3, title: 'RAG Knowledge System', description: 'Retrieval-Augmented Generation application combining Large Language Models with external knowledge sources to deliver accurate, context-aware, and reliable responses.', technologies: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'FastAPI'], github_url: 'https://github.com/SajjadAhmad99', demo_url: null, image_url: '/images/projects/rag-system.png' },
  { id: 4, title: 'Smart Vision – AI Web App', description: 'AI-powered web application featuring real-time image processing with object detection (YOLO), text extraction (OCR), and Vision Language Models. Handles multiple image uploads with optimized inference for low-latency results.', technologies: ['Python', 'FastAPI', 'YOLO', 'OpenCV', 'EasyOCR', 'JavaScript'], github_url: 'https://github.com/SajjadAhmad99', demo_url: null, image_url: '/images/projects/smart-vision.png' },
  { id: 5, title: 'AI Face Attendance System', description: 'Intelligent face attendance system with fast, accurate face recognition using InsightFace and ONNX Runtime. Prevents duplicate entries, handles varying poses and lighting, and records attendance in real time.', technologies: ['Python', 'InsightFace', 'OpenCV', 'ONNX Runtime', 'Streamlit', 'SQLite'], github_url: 'https://github.com/SajjadAhmad99', demo_url: null, image_url: '/images/projects/face-attendance.png' },
  { id: 6, title: 'Customer Churn Prediction', description: 'Machine learning system that predicts customer churn using Scikit-learn and XGBoost. Features data preprocessing, feature engineering, model comparison, and an interactive Streamlit dashboard for data-driven retention strategies.', technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Plotly', 'Streamlit'], github_url: 'https://github.com/SajjadAhmad99', demo_url: null, image_url: '/images/projects/churn-prediction.png' },
];

const Projects = () => {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    projectsAPI.getAll()
      .then(response => {
        if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
          setProjects(response.data);
        } else {
          setProjects(FALLBACK_PROJECTS);
        }
        setLoading(false);
      })
      .catch(() => {
        setProjects(FALLBACK_PROJECTS);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="projects" className="section-container">
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-2 border-accent-red border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  const projectList = Array.isArray(projects) && projects.length > 0 ? projects : FALLBACK_PROJECTS;

  return (
    <section id="projects" className="section-container">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <p className="text-accent-red text-xs sm:text-sm uppercase tracking-widest mb-2 text-center">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">AI-powered solutions and intelligent systems I have built</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
        {projectList.map((project, index) => {
          const techList = Array.isArray(project.technologies) 
            ? project.technologies 
            : typeof project.technologies === 'string'
              ? project.technologies.split(',').map(t => t.strip ? t.strip() : t.trim())
              : [];

          return (
            <motion.div key={project.id || index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
              className="glass-card overflow-hidden group cursor-pointer hover:border-accent-red/30 transition-colors duration-500">
              <div className="relative overflow-hidden h-36 sm:h-40 md:h-48">
                <img src={project.image_url} alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  onError={(e) => { e.target.src = '/images/profile-hero.jpg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm p-2.5 sm:p-3 rounded-full hover:bg-accent-red transition-colors duration-300">
                      <FaGithub size={18} className="sm:hidden" />
                      <FaGithub size={22} className="hidden sm:block" />
                    </a>
                  )}
                  {project.demo_url && (
                    <a href={project.demo_url} target="_blank" rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm p-2.5 sm:p-3 rounded-full hover:bg-accent-red transition-colors duration-300">
                      <FaExternalLinkAlt size={14} className="sm:hidden" />
                      <FaExternalLinkAlt size={18} className="hidden sm:block" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-accent-red transition-colors duration-300">{project.title}</h3>
                <p className="text-text-secondary mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {techList.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-accent-red/10 text-accent-red text-[10px] sm:text-xs rounded-full border border-accent-red/20">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
