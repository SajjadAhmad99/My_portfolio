import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = ['Home', 'About', 'Work', 'Projects', 'Contact'];

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          mobileOpen ? 'z-[70]' : 'z-50'
        } ${
          scrolled ? 'glass-card !rounded-none py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="text-xl sm:text-2xl font-bold cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white">Sajjad</span>
              <span className="text-accent-red">Ahmad</span>
            </motion.div>

            {/* Desktop Navigation Links — show at lg (1024px+) */}
            <ul className="hidden lg:flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="!text-white"
                    className="text-text-secondary hover:text-white cursor-pointer 
                             transition-colors duration-300 relative group text-sm uppercase tracking-wider"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red 
                                   transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button + Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <motion.button 
                  className="btn-primary !py-2.5 !px-4 sm:!py-3 sm:!px-6 !text-xs sm:!text-sm hidden lg:block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.button>
              </Link>
              
              {/* Mobile menu button — show below lg */}
              <button 
                className="lg:hidden text-white text-xl sm:text-2xl p-2 relative"
                onClick={() => setMobileOpen(!mobileOpen)}
                id="mobile-menu-toggle"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — fullscreen overlay (outside nav to avoid clipping) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 w-full h-full z-[60] flex flex-col items-center justify-center"
            style={{ backgroundColor: '#0A0A0A' }}
          >
            <ul className="flex flex-col items-center gap-6 sm:gap-8">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-text-secondary hover:text-white cursor-pointer 
                             transition-colors duration-300 text-xl sm:text-2xl uppercase tracking-wider"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.08 }}
              >
                <Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => setMobileOpen(false)}>
                  <button className="btn-primary !py-3 !px-8 mt-4">Hire Me</button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
