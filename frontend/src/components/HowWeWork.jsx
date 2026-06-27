import { motion } from 'framer-motion';

const HowWeWork = () => {
  const processes = [
    { number: '01', title: 'RESEARCH',
      steps: ['Problem Understanding', 'Data Collection & Analysis', 'Literature Review', 'Feasibility Assessment', 'Architecture Design'] },
    { number: '02', title: 'BUILD',
      steps: ['Data Preprocessing', 'Model Development', 'RAG Pipeline Design', 'Multi-Agent Orchestration', 'API Integration'] },
    { number: '03', title: 'TRAIN',
      steps: ['Model Training & Tuning', 'Hyperparameter Optimization', 'Evaluation & Metrics', 'LLM Fine-tuning', 'Performance Benchmarking'] },
    { number: '04', title: 'DEPLOY',
      steps: ['API Deployment', 'Model Serving', 'Monitoring & Logging', 'Scalability Testing', 'Continuous Improvement'] },
  ];

  return (
    <section id="work" className="section-container relative">
      <div className="absolute inset-0 bg-secondary-black/30 -mx-[100vw] px-[100vw]" />
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-accent-red text-xs sm:text-sm uppercase tracking-widest mb-2 text-center">Process</p>
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">My proven AI development process ensures quality delivery</p>
        </motion.div>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
          {processes.map((process, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }} whileHover={{ y: -10 }}
              className="glass-card p-5 sm:p-6 md:p-8 relative overflow-hidden group cursor-pointer">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-accent-red/10 absolute -top-2 -right-2 sm:-top-4 sm:-right-4 group-hover:text-accent-red/20 transition-colors duration-500">{process.number}</div>
              <div className="text-accent-red text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 font-code">{process.number}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 relative z-10">{process.title}</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-text-secondary relative z-10 text-sm sm:text-base">
                {process.steps.map((step, i) => (
                  <li key={i} className="flex items-start"><span className="text-accent-red mr-1.5 sm:mr-2 flex-shrink-0">—</span><span>{step}</span></li>
                ))}
              </ul>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-red to-accent-red-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
