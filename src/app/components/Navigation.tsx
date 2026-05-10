import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent"
            >
              RHMR Astute Solutions
            </motion.div>
          </Link>

          <div className="flex items-center gap-8">
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
        </div>
      </div>
    </motion.nav>
  );
}
