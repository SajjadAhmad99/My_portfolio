import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/SajjadAhmad99', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sajjad-ahmad-275166278/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/FahhamG8078', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:sajjaduop181@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary-black/50 backdrop-blur-sm py-8 sm:py-10 md:py-12 border-t border-white/5">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xl sm:text-2xl font-bold"><span className="text-white">Sajjad</span><span className="text-accent-red">Ahmad</span></span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {socialLinks.map((social, i) => (
            <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
              className="bg-white/5 p-3 sm:p-4 rounded-full hover:bg-accent-red transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.95 }}>
              <social.icon className="text-base sm:text-xl group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8" />

        {/* Copyright */}
        <div className="text-center text-text-secondary text-xs sm:text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Sajjad Ahmad. All rights reserved.</p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm">
            Built with <FaHeart className="inline text-accent-red mx-1 text-[10px] sm:text-xs" /> using Python, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
