import { GovContractorIcon } from '../components/Portfolio3DIcons';
import { motion } from 'framer-motion'; 
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      name: 'The Contractor App',
      category: 'Web Application',
      description: 'A comprehensive contractor management system designed for government projects with features including bid management, project tracking, compliance monitoring, and financial reporting.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      challenges: 'Complex compliance requirements and multi-role access control',
      results: 'Reduced administrative overhead by 60% and improved compliance tracking',
      color: 'from-blue-600 to-cyan-600',
      link: 'https://thecontractorapp.in/' // <-- Real URL added
    },
    {
      name: 'MSGCPPL.com (ERP)',
      category: 'Enterprise System',
      description: 'A full-featured Enterprise Resource Planning platform integrating HR, finance, inventory, and operations modules for streamlined business management.',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Redis'],
      challenges: 'Integration of multiple legacy systems and real-time data synchronization',
      results: 'Unified 5 separate systems into one platform, saving 40% operational costs',
      color: 'from-cyan-600 to-teal-600',
      link: 'https://msgcppl.com' 
    },
    {
      name: 'iDrive Institute Management',
      category: 'Management Platform',
      description: 'A driving institute operations platform featuring student enrollment, scheduling, instructor management, vehicle tracking, and automated certificate generation.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Cloud Functions'],
      challenges: 'Real-time scheduling conflicts and automated certificate compliance',
      results: 'Improved scheduling efficiency by 75% and automated 90% of paperwork',
      color: 'from-teal-600 to-cyan-600',
      link: 'https://idrivedrivinginstitute.com/' // <-- Real URL added
    },
  ];

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'ERP Systems', 'E-Commerce'];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent px-2">
            Our Work Speaks Through Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our portfolio of successful projects across various industries
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 md:px-6 md:py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm md:text-base font-medium text-gray-700 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-cyan-400 hover:text-white shadow-lg transition-all border border-cyan-200"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="p-6 md:p-10 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-200 hover:border-cyan-400 transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Logo & Info */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  
                  <div className="mb-6 h-28 flex items-center justify-center lg:justify-start">
                    {/* FIXED: Removed the confusing conditions. It just uses the link now! */}
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                      {project.name === 'MSGCPPL.com (ERP)' ? (
                        <img 
                          src="/msgcppl-logo.jpg" 
                          alt="MSGCPPL Logo" 
                          className="w-24 h-24 object-contain rounded-full shadow-md hover:shadow-xl"
                        />
                      ) : project.name === 'iDrive Institute Management' ? (
                        <img 
                          src="/idrive-logo.jpg" 
                          alt="iDrive Logo" 
                          className="w-28 h-28 object-contain drop-shadow-md hover:drop-shadow-xl"
                        />
                      ) : (
                        <div className="w-full flex justify-center lg:justify-start" style={{ touchAction: 'pan-y' }}>
                           <GovContractorIcon />
                        </div>
                      )}
                    </a>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">{project.name}</h3>
                  <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                    {project.description}
                  </p>

                  <div className="text-center lg:text-left">
                    <h4 className="font-bold text-gray-800 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 md:px-4 md:py-1 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full text-xs md:text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-cyan-50/80 rounded-xl text-center sm:text-left">
                      <h4 className="font-bold text-gray-800 mb-1">Challenge Solved:</h4>
                      <p className="text-gray-600 text-sm">{project.challenges}</p>
                    </div>
                    <div className="p-4 bg-cyan-50/80 rounded-xl text-center sm:text-left">
                      <h4 className="font-bold text-gray-800 mb-1">Results Achieved:</h4>
                      <p className="text-gray-600 text-sm">{project.results}</p>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-start">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Case Study
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="p-8 md:p-12 bg-gradient-to-br from-cyan-50/80 to-white/80 backdrop-blur-sm rounded-3xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              50+ More Projects Completed
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              From e-commerce platforms to custom CRM systems, we've delivered excellence across industries
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-semibold shadow-xl w-full sm:w-auto"
            >
              Request Full Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}