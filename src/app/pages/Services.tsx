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
import { motion } from 'motion/react';
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
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Our Software Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-100 hover:border-cyan-300 transition-all"
            >
              {/* --- 3D Icon Switchboard Injected Here --- */}
              <div className="-mt-6 mb-2">
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
              <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
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
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Technologies We Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'Node.js', 'Python', 'Laravel', 'Flutter', 'MongoDB', 'MySQL', 'AWS', 'Firebase'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full font-medium shadow-lg"
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