import { Link, useLocation } from 'react-router-dom'; // <--- FIXED THIS IMPORT
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // <--- Added for the mobile menu icons

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // <--- State for mobile menu

  // Handle scroll for the glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu automatically whenever a link is clicked
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent"
            >
              RHMR Astute Solutions
            </motion.div>
          </Link>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-cyan-600'
                      : 'text-gray-700 hover:text-cyan-500'
                  }`}
                >
                  {item.label}
                </motion.span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-400"
                  />
                )}
              </Link>
            ))}

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-medium shadow-lg shadow-cyan-500/30"
              >
                Get Quote
              </motion.button>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON (Hidden on Desktop) */}
          <div className="md:hidden flex items-center relative z-10">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyan-700 hover:text-cyan-500 focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-cyan-600'
                      : 'text-gray-700 hover:text-cyan-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link to="/contact" className="block">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-medium shadow-lg shadow-cyan-500/30 text-center"
                  >
                    Get Quote
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}