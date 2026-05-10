import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'ERP Solutions',
    'Cloud Solutions',
    'AI & Automation',
  ];

  const technologies = [
    'React',
    'Node.js',
    'Laravel',
    'Flutter',
    'AWS',
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              RHMR Astute Solutions
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into intelligent digital solutions for businesses worldwide.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-full bg-cyan-600/20 hover:bg-cyan-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Technologies</h4>
            <ul className="space-y-2">
              {technologies.map((tech, index) => (
                <li key={index} className="text-gray-300">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl border border-cyan-700/30"
        >
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
            <h4 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-6">
              Stay updated with the latest tech trends and our project insights
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-cyan-700/50 focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {currentYear} RHMR Astute Solutions India. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Empowering Businesses Through Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
