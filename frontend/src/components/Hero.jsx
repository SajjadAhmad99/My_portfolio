import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 pb-16 sm:pb-0 relative overflow-hidden">
      {/* Animated Background Orbs — smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 right-5 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent-red/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-accent-red/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-accent-red/[0.03] rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          
          {/* Left Column — Circular Profile Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1 flex justify-center w-full"
          >
            <div className="circular-profile-wrapper">
              {/* Outer pulsing glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,45,45,0.15) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Animated rotating ring — outer */}
              <motion.div
                className="absolute inset-[-8px] sm:inset-[-12px] rounded-full"
                style={{
                  border: '2px solid transparent',
                  borderTopColor: '#FF2D2D',
                  borderRightColor: 'rgba(255,45,45,0.3)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Animated rotating ring — inner (reverse) */}
              <motion.div
                className="absolute inset-[-3px] sm:inset-[-4px] rounded-full"
                style={{
                  border: '1px solid transparent',
                  borderBottomColor: 'rgba(255,45,45,0.5)',
                  borderLeftColor: 'rgba(255,45,45,0.2)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Decorative orbit dots — hidden on small mobile */}
              <motion.div
                className="absolute inset-[-16px] sm:inset-[-20px] rounded-full hidden xs:block orbit-decoration"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-accent-red rounded-full shadow-[0_0_10px_rgba(255,45,45,0.6)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent-red/60 rounded-full" />
              </motion.div>

              <motion.div
                className="absolute inset-[-16px] sm:inset-[-20px] rounded-full hidden xs:block orbit-decoration"
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-red/40 rounded-full" />
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent-red/70 rounded-full shadow-[0_0_8px_rgba(255,45,45,0.4)]" />
              </motion.div>

              {/* Glowing border ring */}
              <div className="circular-profile-border">
                {/* The circular image */}
                <div className="circular-profile-image">
                  <img
                    src="/images/profile-hero.jpg"
                    alt="Sajjad Ahmad - AI & ML Engineer"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 glass-card px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 z-20 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Available for hire</span>
              </motion.div>

              {/* Code badge — top right (hidden on very small screens) */}
              <motion.div 
                className="absolute -top-1 -right-4 sm:-right-6 glass-card w-9 h-9 sm:w-11 sm:h-11 hidden xs:flex items-center justify-center z-20 rounded-full text-xs sm:text-sm orbit-decoration"
                animate={{ y: [0, -5, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <motion.p 
              className="text-accent-red text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm Sajjad Ahmad
            </motion.p>

            <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              AI & ML{' '}
              <span className="text-gradient">
                Engineer
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              I build intelligent systems using{' '}
              <span className="text-white font-semibold">AI</span>,{' '}
              <span className="text-white font-semibold">Machine Learning</span>,{' '}
              <span className="text-white font-semibold">Deep Learning</span> and{' '}
              <span className="text-white font-semibold">Generative AI</span> to solve real-world problems.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 justify-center md:justify-start">
              {['RAG Systems', 'Multi-Agent AI', 'LLMs', 'Deep Learning', 'Computer Vision', 'Python'].map((tech) => (
                <span key={tech} className="px-3 py-1 sm:px-4 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-text-secondary">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 sm:gap-4 flex-wrap items-center justify-center md:justify-start">
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                  id="hero-view-projects"
                >
                  View Projects
                </motion.button>
              </Link>

              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                  id="hero-hire-me"
                >
                  Hire Me
                </motion.button>
              </Link>

              <a href="/resume.pdf" download="Sajjad_Ahmad_Resume.pdf">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline"
                  id="hero-download-resume"
                >
                  Download Resume
                </motion.button>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center md:justify-start">
              <span className="text-text-secondary text-xs sm:text-sm">Find me on</span>
              <div className="h-px w-6 sm:w-8 bg-white/20" />
              <a href="https://github.com/SajjadAhmad99" target="_blank" rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-red transition-colors duration-300 text-lg sm:text-xl p-1">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sajjad-ahmad-275166278/" target="_blank" rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-red transition-colors duration-300 text-lg sm:text-xl p-1">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — hidden on very small screens to avoid overlap */}
        <motion.div 
          className="hidden sm:block absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
            <div className="flex flex-col items-center gap-2 text-text-secondary hover:text-white transition-colors">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <FaArrowDown className="text-accent-red" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
