import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaArrowDown, FaPlay, FaTerminal, FaCheckCircle, FaMicrochip } from 'react-icons/fa';
import { Link } from 'react-scroll';

const ROLES = [
  'AI Engineer',
  'Generative AI Specialist',
  'Agentic Systems Architect',
  'Computer Vision Innovator'
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [isRunningDemo, setIsRunningDemo] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Run AI Agent Demo simulation
  const runAgentDemo = () => {
    setIsRunningDemo(true);
    setDemoStep(1);

    setTimeout(() => setDemoStep(2), 1200);
    setTimeout(() => setDemoStep(3), 2600);
    setTimeout(() => setDemoStep(4), 4000);
    setTimeout(() => setIsRunningDemo(false), 4500);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 sm:pt-24 pb-16 relative overflow-hidden">
      {/* Dynamic Animated Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-10 right-5 sm:top-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-accent-red/15 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 w-56 h-56 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Top Column — Cybernetic Holographic Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="order-2 lg:order-1 lg:col-span-5 flex justify-center w-full"
          >
            <div className="circular-profile-wrapper relative">
              
              {/* Outer Cyan/Red Pulsing Cyber Glow Aura */}
              <motion.div
                className="absolute inset-[-18px] sm:inset-[-24px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255,45,45,0.25) 0%, rgba(59,130,246,0.15) 50%, transparent 75%)',
                }}
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Holographic Fast Rotating Ring — Outer */}
              <motion.div
                className="absolute inset-[-12px] sm:inset-[-16px] rounded-full pointer-events-none"
                style={{
                  border: '2px dashed #FF2D2D',
                  boxShadow: '0 0 25px rgba(255,45,45,0.5)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Counter Rotating Ring — Inner */}
              <motion.div
                className="absolute inset-[-6px] sm:inset-[-8px] rounded-full pointer-events-none"
                style={{
                  border: '1.5px solid transparent',
                  borderTopColor: '#3B82F6',
                  borderBottomColor: '#FF2D2D',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Floating Orbit Node Dots */}
              <motion.div
                className="absolute inset-[-20px] rounded-full hidden sm:block pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent-red rounded-full shadow-[0_0_15px_#FF2D2D]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_12px_#3B82F6]" />
              </motion.div>

              {/* Glowing Profile Frame */}
              <div className="circular-profile-border shadow-[0_0_50px_rgba(255,45,45,0.4)]">
                <div className="circular-profile-image">
                  <img
                    src="/sajjad_profile.jpeg"
                    alt="Sajjad Ahmad - AI Engineer"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/profile-hero.jpg';
                    }}
                  />
                </div>
              </div>

              {/* Status Badge - Available for Hire */}
              <motion.div
                className="absolute -bottom-2 -right-1 sm:-bottom-3 sm:-right-2 glass-card px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 z-20 rounded-full border border-green-500/40 bg-black/80 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">Available for Hire</span>
              </motion.div>

              {/* AI Architecture Badge */}
              <motion.div
                className="absolute -top-2 -left-3 sm:-top-3 sm:-left-4 glass-card px-3 py-1.5 flex items-center gap-1.5 z-20 rounded-full border border-accent-red/40 bg-black/80 shadow-[0_0_20px_rgba(255,45,45,0.3)]"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <FaMicrochip className="text-accent-red text-xs sm:text-sm" />
                <span className="text-[10px] sm:text-xs font-mono font-semibold text-text-primary">Agentic RAG Architect</span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right / Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-7 text-center lg:text-left"
          >
            {/* Top Tagline */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-red/10 border border-accent-red/30 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span className="text-accent-red text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
                AI Engineering Excellence
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              Sajjad Ahmad
            </h1>

            {/* Dynamic Typewriter Subheadline */}
            <div className="h-12 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-red-400 to-blue-400">
                {displayText}
              </span>
              <span className="w-0.5 h-7 sm:h-8 bg-accent-red ml-1 animate-pulse" />
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Architecting production-grade <span className="text-white font-semibold">Autonomous AI Agents</span>,{' '}
              <span className="text-white font-semibold">Multimodal RAG Systems</span>, and{' '}
              <span className="text-white font-semibold">Computer Vision Pipelines</span> to turn complex challenges into scalable enterprise solutions.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center lg:justify-start">
              {[
                'Multi-Agent Workflows',
                'LangChain & LangGraph',
                'Advanced RAG Systems',
                'Computer Vision & YOLO',
                'FastAPI & PyTorch',
                'Vector DBs (FAISS)'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-white/5 border border-white/10 hover:border-accent-red/50 hover:bg-accent-red/10 rounded-lg text-xs sm:text-sm font-mono text-text-secondary hover:text-white transition-all duration-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap items-center justify-center lg:justify-start mb-10">
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-primary flex items-center gap-2 shadow-[0_0_25px_rgba(255,45,45,0.4)]"
                  id="hero-view-projects"
                >
                  Explore AI Projects
                </motion.button>
              </Link>

              <button
                onClick={() => {
                  setShowDemoModal(true);
                  runAgentDemo();
                }}
                className="px-5 py-3 sm:px-6 sm:py-3.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 hover:from-blue-600/50 hover:to-purple-600/50 border border-blue-500/40 text-white rounded-lg font-semibold text-sm sm:text-base flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95"
              >
                <FaPlay className="text-blue-400 text-xs animate-pulse" />
                Live Agent Demo
              </button>

              <a href="/SajjadAhmad-cv.pdf" download="SajjadAhmad-cv.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn-outline cursor-pointer"
                  id="hero-download-resume"
                >
                  Download Resume
                </motion.button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-text-secondary text-xs sm:text-sm font-mono">Connect</span>
              <div className="h-px w-8 bg-white/20" />
              <a
                href="https://github.com/SajjadAhmad99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-red transition-all duration-300 text-xl p-1.5 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sajjad-ahmad-275166278/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-red transition-all duration-300 text-xl p-1.5 hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
            <div className="flex flex-col items-center gap-1.5 text-text-secondary hover:text-white transition-colors">
              <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
              <FaArrowDown className="text-accent-red text-sm" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Live AI Agent Demo Modal */}
      <AnimatePresence>
        {showDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card w-full max-w-2xl bg-black/90 border border-accent-red/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,45,45,0.3)]"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FaTerminal className="text-accent-red text-sm" />
                  <span className="font-mono text-xs text-white font-semibold">
                    Multi-Agent RAG Orchestrator — Live Simulation
                  </span>
                </div>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="text-text-secondary hover:text-white text-lg font-bold px-2"
                >
                  ✕
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm space-y-4 min-h-[260px] bg-black/95 text-gray-300">
                <div className="text-blue-400">
                  $ python -m agentic_system.run --task "Enterprise RAG Pipeline"
                </div>

                {demoStep >= 1 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <span className="text-yellow-400">[Agent 1: Query Parser]</span> Analyzing request prompt & extracting embeddings...
                  </motion.div>
                )}

                {demoStep >= 2 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <span className="text-purple-400">[Agent 2: Vector Retriever]</span> Searching FAISS Vector DB (10,000+ chunks)...
                    <br />
                    <span className="text-green-400 pl-4">✓ Found 5 top matching document passages (Score: 0.998)</span>
                  </motion.div>
                )}

                {demoStep >= 3 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <span className="text-cyan-400">[Agent 3: Reasoner Engine]</span> Synthesizing response with LLM + Tool Execution...
                  </motion.div>
                )}

                {demoStep >= 4 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="p-3 bg-green-950/40 border border-green-500/30 rounded-lg text-green-300">
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <FaCheckCircle className="text-green-400" />
                      Task Executed Successfully in 142ms!
                    </div>
                    <div>Output: Verified, 100% Grounded Answer delivered to client API.</div>
                  </motion.div>
                )}

                {isRunningDemo && (
                  <div className="flex items-center gap-2 text-accent-red animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-accent-red" />
                    Executing neural workflow...
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-6 py-3 bg-white/5 border-t border-white/10 flex justify-between items-center">
                <span className="text-[11px] font-mono text-text-secondary">
                  Built with LangGraph + FastAPI + PyTorch
                </span>
                <button
                  onClick={runAgentDemo}
                  disabled={isRunningDemo}
                  className="px-3 py-1.5 bg-accent-red hover:bg-accent-red-hover text-white text-xs font-semibold rounded disabled:opacity-50 transition-colors"
                >
                  {isRunningDemo ? 'Running...' : 'Re-Run Demo'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
