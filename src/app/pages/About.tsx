import { 
  MissionIcon, 
  VisionIcon, 
  InnovationIcon, 
  IntegrityIcon, 
  ExcellenceIcon, 
  SuccessIcon 
} from '../components/About3DIcons';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Shield } from 'lucide-react';

export function About() {
  const values = [
    { icon: Lightbulb, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions' },
    { icon: Shield, title: 'Integrity', desc: 'Transparent and ethical in all we do' },
    { icon: Award, title: 'Excellence', desc: 'Commitment to superior quality' },
    { icon: Users, title: 'Customer Success', desc: 'Your success is our priority' },
  ];

  return (
    <div className="pt-32 pb-20"> {/* FIXED: Removed overflow-x-hidden to protect iOS scrolling */}
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent px-2">
            Innovating Digital Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            RHMR Astute Solutions India is a technology-driven software development company
            focused on creating scalable, secure, and intelligent digital solutions for
            startups, enterprises, and government organizations.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        {/* FIXED: Added explicit grid-cols-1 so mobile knows exactly how to center the grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20 justify-items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            /* FIXED: Added mx-auto as a bulletproof mobile centering fallback */
            className="w-full max-w-[500px] mx-auto p-8 md:p-10 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-200"
          >
            <div className="-mt-8 mb-2 flex justify-center w-full" style={{ touchAction: 'pan-y' }}>
              <MissionIcon />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center md:text-left">Our Mission</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center md:text-left">
              To empower businesses through innovative and reliable software solutions
              that drive efficiency, growth, and digital transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            /* FIXED: Added mx-auto */
            className="w-full max-w-[500px] mx-auto p-8 md:p-10 bg-gradient-to-br from-cyan-50/80 to-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-200"
          >
            <div className="-mt-8 mb-2 flex justify-center w-full" style={{ touchAction: 'pan-y' }}>
              <VisionIcon />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center md:text-left">Our Vision</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center md:text-left">
              To become a globally trusted technology partner known for innovation,
              quality, and digital excellence in every project we undertake.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                /* FIXED: Added mx-auto for absolute center alignment on small screens */
                className="w-full max-w-[340px] mx-auto p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl text-center border border-cyan-100 hover:border-cyan-300 transition-all flex flex-col items-center"
              >
                <div 
                  className="-mt-6 mb-2 w-full flex justify-center overflow-hidden max-w-[150px]"
                  style={{ touchAction: 'pan-y' }}
                >
                  {value.title === 'Innovation' ? (
                    <InnovationIcon />
                  ) : value.title === 'Integrity' ? (
                    <IntegrityIcon />
                  ) : value.title === 'Excellence' ? (
                    <ExcellenceIcon />
                  ) : value.title === 'Customer Success' ? (
                    <SuccessIcon />
                  ) : (
                    <value.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* FIXED: Removed the conflicting `mx-4` class. `mx-auto` handles it perfectly now. */
          className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-white/80 to-cyan-50/80 backdrop-blur-sm rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              Founded with a vision to bridge the gap between technology and business needs,
              RHMR Astute Solutions India has grown from a small team of passionate developers
              to a comprehensive software development company.
            </p>
            <p>
              We specialize in creating custom solutions that solve real-world problems. Our
              expertise spans across ERP systems, HRMS platforms, mobile applications, and
              cloud-based solutions. Each project is an opportunity to innovate and deliver
              excellence.
            </p>
            <p>
              From helping government contractors streamline their operations to building
              comprehensive ERP systems like MSGCPPL.com, we take pride in our diverse
              portfolio and the trust our clients place in us.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}