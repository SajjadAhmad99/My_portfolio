import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { statsAPI } from '../services/api';

const About = () => {
  const [stats, setStats] = useState({
    projects_completed: 120,
    years_experience: 5,
    happy_clients: 50,
    satisfaction_rate: 99,
  });

  const [counters, setCounters] = useState({
    projects: 0,
    years: 0,
    clients: 0,
    satisfaction: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    statsAPI.get()
      .then(response => setStats(response.data))
      .catch(error => console.error('Stats API not available, using defaults:', error));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stats, hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const animateValue = (end, key) => {
      let current = 0;
      const increment = end / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCounters(prev => ({ ...prev, [key]: end }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, interval);
    };

    animateValue(stats.projects_completed, 'projects');
    animateValue(stats.years_experience, 'years');
    animateValue(stats.happy_clients, 'clients');
    animateValue(stats.satisfaction_rate, 'satisfaction');
  };

  const expertise = [
    { text: 'Retrieval-Augmented Generation (RAG) Applications' },
    { text: 'Multi-Agent AI Systems & Architectures' },
    { text: 'Machine Learning & Predictive Modeling' },
    { text: 'Deep Learning & Neural Networks' },
    { text: 'Computer Vision & Image Recognition' },
    { text: 'NLP & Large Language Models (LLMs)' },
  ];

  const statItems = [
    { key: 'projects', label: 'Projects', suffix: '+' },
    { key: 'years', label: 'Years', suffix: '+' },
    { key: 'clients', label: 'Clients', suffix: '+' },
    { key: 'satisfaction', label: 'Satisfaction', suffix: '%' },
  ];

  return (
    <section id="about" className="section-container" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-accent-red text-xs sm:text-sm uppercase tracking-widest mb-2 text-center">
          About Me
        </p>
        <h2 className="section-title">Who I Am</h2>
      </motion.div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mt-8 sm:mt-10 md:mt-12">
        
        {/* Circular Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center w-full"
        >
          <div className="circular-profile-wrapper about-profile">
            {/* Subtle glow */}
            <motion.div
              className="absolute inset-[-15px] sm:inset-[-20px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,45,45,0.1) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating accent ring */}
            <motion.div
              className="absolute inset-[-6px] sm:inset-[-8px] rounded-full"
              style={{
                border: '2px solid transparent',
                borderTopColor: '#FF2D2D',
                borderRightColor: 'rgba(255,45,45,0.2)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner counter-rotating ring */}
            <motion.div
              className="absolute inset-[-2px] sm:inset-[-3px] rounded-full"
              style={{
                border: '1px solid transparent',
                borderBottomColor: 'rgba(255,45,45,0.4)',
                borderLeftColor: 'rgba(255,45,45,0.15)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* Gradient border circle */}
            <div className="circular-profile-border">
              <div className="circular-profile-image about-image">
                <img
                  src="/images/profile-about.jpg"
                  alt="Sajjad Ahmad"
                />
              </div>
            </div>

            {/* Corner accent — degree badge */}
            <motion.div 
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 glass-card px-2.5 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1 sm:gap-1.5 z-20 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs sm:text-sm">🎓</span>
              <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap">CS Graduate</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-text-secondary text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            I am Sajjad Ahmad, a Computer Science graduate from the University of Peshawar 
            with a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, 
            and Generative AI. I am passionate about developing intelligent systems that solve 
            real-world problems and enhance user experiences through innovative AI-driven solutions.
          </p>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Core Expertise:</h3>
            <ul className="space-y-2 sm:space-y-3 text-text-secondary text-left">
              {expertise.map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-2 sm:gap-3 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-accent-red mr-0.5 sm:mr-1 flex-shrink-0">—</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {statItems.map((stat) => (
              <div key={stat.key} className="glass-card p-3 sm:p-4 md:p-5 text-center hover:border-accent-red/30 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-red mb-0.5 sm:mb-1">
                  {counters[stat.key]}{stat.suffix}
                </div>
                <div className="text-text-secondary text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
