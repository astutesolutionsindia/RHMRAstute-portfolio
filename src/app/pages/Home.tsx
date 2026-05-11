import { 
  MobileIconCanvas, 
  ERPIconCanvas, 
  WebIconCanvas, 
  CloudIconCanvas, 
  AIIconCanvas, 
  SoftwareIconCanvas 
} from '../components/Home3DIcons';
import InteractiveGlass from '../components/InteractiveGlass';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Sparkles, Rocket, Shield, Zap, Users } from 'lucide-react';

export default function Home() {
  const services = [
    { icon: Code2, title: 'Web Development', desc: 'Modern responsive websites' },
    { icon: Sparkles, title: 'ERP Solutions', desc: 'Integrated workflow automation' },
    { icon: Rocket, title: 'Mobile Apps', desc: 'iOS & Android applications' },
    { icon: Shield, title: 'Cloud Solutions', desc: 'Scalable infrastructure' },
    { icon: Zap, title: 'AI & Automation', desc: 'Intelligent workflows' },
    { icon: Users, title: 'Custom Software', desc: 'Tailored solutions' },
  ];

  const projects = [
    {
      name: 'Government Contractor App',
      desc: 'Complete contractor management system',
      tech: 'React, Node.js, MongoDB'
    },
    {
      name: 'MSGCPPL.com (ERP)',
      desc: 'Enterprise resource planning platform',
      tech: 'Laravel, MySQL, Vue.js'
    },
    {
      name: 'iDrive Institute Management',
      desc: 'Driving institute operations platform',
      tech: 'React, Firebase, Tailwind'
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '20+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  Transforming Ideas
                </span>
                <br />
                Into Intelligent Digital Solutions
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                RHMR Astute Solutions India delivers cutting-edge software development,
                AI-powered applications, cloud solutions, ERP systems, and high-performance
                web experiences for modern businesses.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-semibold shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow"
                  >
                    Get Started
                  </motion.button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold shadow-xl border-2 border-cyan-200 hover:border-cyan-400 transition-colors"
                  >
                    Schedule Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* 3D Animated Sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-[400px] md:h-[500px] relative"
              style={{ touchAction: 'pan-y' }}
            >
              <InteractiveGlass />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive software solutions for modern businesses
            </p>
          </motion.div>

          {/* FIXED: grid-cols-1 and justify-items-center ensures perfect mobile centering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                /* FIXED: w-full and max-w-[340px] keep the cards perfectly sized without horizontal overflow */
                className="w-full max-w-[340px] p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-100 hover:border-cyan-300 transition-all cursor-pointer flex flex-col items-center text-center"
              >
                <div 
                  className="mb-6 -mt-4 w-full flex justify-center"
                  style={{ touchAction: 'pan-y' }}
                >
                  {service.title === 'Web Development' ? (
                    <WebIconCanvas />
                  ) : service.title === 'ERP Solutions' ? (
                    <ERPIconCanvas />
                  ) : service.title === 'Mobile Apps' ? (
                    <MobileIconCanvas />
                  ) : service.title === 'Cloud Solutions' ? (
                    <CloudIconCanvas />
                  ) : service.title === 'AI & Automation' ? (
                    <AIIconCanvas />
                  ) : service.title === 'Custom Software' ? (
                    <SoftwareIconCanvas />
                  ) : (
                    <service.icon className="w-12 h-12 text-cyan-600 mb-4" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Signature Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Delivering excellence across industries
            </p>
          </motion.div>

          {/* FIXED: grid-cols-1 and justify-items-center applies here too */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                /* FIXED: w-full and max-w-[340px] keep the cards consistent */
                className="w-full max-w-[340px] p-8 bg-gradient-to-br from-white/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-200 hover:border-cyan-400 transition-all"
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{project.desc}</p>
                <div className="text-sm text-cyan-600 font-medium">{project.tech}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-semibold shadow-xl w-full sm:w-auto"
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Ready To Build Your Next Digital Product?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Let's transform your vision into reality with cutting-edge technology
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/50 w-full sm:w-auto"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}