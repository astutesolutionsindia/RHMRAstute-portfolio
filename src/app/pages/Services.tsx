import { 
  CustomSoftwareIcon, 
  MobileAppIcon, 
  ErpSolutionsIcon, 
  CloudSolutionsIcon, 
  AiAutomationIcon, 
  UiUxDesignIcon, 
  ECommerceIcon, 
  WebAppIcon 
} from '../components/Service3DIcons';
import { motion } from 'framer-motion'; 
import { Code2, Smartphone, Database, Cloud, Brain, Palette, ShoppingCart, Settings } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      desc: 'Enterprise-grade software tailored to your unique business requirements with scalable architecture.',
      features: ['Bespoke Solutions', 'Scalable Architecture', 'Modern Tech Stack', 'Agile Development']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'High-performance Android and iOS applications with intuitive UI and seamless user experience.',
      features: ['Native & Cross-Platform', 'Intuitive UI/UX', 'Performance Optimized', 'App Store Ready']
    },
    {
      icon: Database,
      title: 'ERP Solutions',
      desc: 'Integrated ERP systems for workflow automation, resource planning, and business management.',
      features: ['Workflow Automation', 'Real-time Analytics', 'Multi-module Integration', 'Custom Dashboards']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      desc: 'Cloud-native applications with scalable infrastructure and robust security measures.',
      features: ['AWS & Azure', 'Microservices', 'Auto-scaling', 'High Availability']
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      desc: 'AI chatbots, automation systems, and intelligent workflows to streamline operations.',
      features: ['Machine Learning', 'Process Automation', 'Smart Analytics', 'AI Chatbots']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Premium user-centric interfaces and experiences that delight users and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      desc: 'Secure and scalable online store solutions with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Mobile Commerce']
    },
    {
      icon: Settings,
      title: 'Web Application Development',
      desc: 'Modern responsive websites and web apps using React, Next.js, and cutting-edge technologies.',
      features: ['Responsive Design', 'PWA Support', 'SEO Optimized', 'Fast Performance']
    },
  ];

  return (
    <div className="pt-32 pb-20"> {/* REMOVED: inline overflow-x-hidden */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent px-2">
            Our Software Development Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </motion.div>

        {/* Services Grid */}
        {/* ADDED: justify-items-center */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              /* ADDED: w-full max-w-[500px] to constrain width and prevent layout breaks */
              className="w-full max-w-[500px] p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-100 hover:border-cyan-300 transition-all flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* ADDED: touchAction: 'pan-y' so users can swipe vertically past the 3D icons */}
              <div 
                className="-mt-6 mb-2 flex justify-center w-full md:justify-start"
                style={{ touchAction: 'pan-y' }}
              >
                {service.title === 'Custom Software Development' ? (
                  <CustomSoftwareIcon />
                ) : service.title === 'Mobile App Development' ? (
                  <MobileAppIcon />
                ) : service.title === 'ERP Solutions' ? (
                  <ErpSolutionsIcon />
                ) : service.title === 'Cloud Solutions' ? (
                  <CloudSolutionsIcon />
                ) : service.title === 'AI & Automation' ? (
                  <AiAutomationIcon />
                ) : service.title === 'UI/UX Design' ? (
                  <UiUxDesignIcon />
                ) : service.title === 'E-Commerce Development' ? (
                  <ECommerceIcon />
                ) : service.title === 'Web Application Development' ? (
                  <WebAppIcon />
                ) : (
                  <service.icon className="w-14 h-14 text-cyan-600 mb-4" />
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{service.desc}</p>

              <div className="space-y-2 w-full">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center md:justify-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Technologies We Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {['React', 'Next.js', 'Node.js', 'Python', 'Laravel', 'Flutter', 'MongoDB', 'MySQL', 'AWS', 'Firebase'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full text-sm md:text-base font-medium shadow-lg"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}