import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  });

  // New state to handle the success UI
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Add your Web3Forms access key here
    const apiKey = "27bf8094-e7a5-415f-8bb1-f0236af818fa"; 

    try {
      // 2. Send the data to the Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `New Project Inquiry from ${formData.name}`, // Sets the email subject
          ...formData // Spreads all your form fields into the request
        }),
      });

      const result = await response.json();

      // 3. If the email sent successfully, trigger the success animation!
      if (result.success) {
        setIsSubmitted(true);
        
        // Reset the form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', budget: '', projectType: '', message: '' });
        }, 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your connection.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'info@astutesolutionsindia.com', href: 'mailto:info@astutesolutionsindia.com' },
    { icon: Phone, label: 'Phone', value: '+91 9419417800', href: 'tel:+919419417800' },
    { icon: MapPin, label: 'Location', value: 'Jammu & Kashmir, India', href: '#map' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-200 relative overflow-hidden"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Request a Quote</h2>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cyan-200 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 bg-white/50 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cyan-200 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 bg-white/50 transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cyan-200 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 bg-white/50 transition-all"
                      >
                        <option value="">Select budget</option>
                        <option value="<10k">Less than ₹10,000</option>
                        <option value="10k-50k">₹10,000 - ₹50,000</option>
                        <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                        <option value="1L+">₹1,00,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-cyan-200 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 bg-white/50 transition-all"
                      >
                        <option value="">Select type</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="erp">ERP Solution</option>
                        <option value="custom">Custom Software</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-cyan-200 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 bg-white/50 resize-none transition-all"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-xl font-semibold shadow-xl flex items-center justify-center gap-2 hover:shadow-cyan-500/30 transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-10 bg-gradient-to-br from-cyan-50/80 to-white/80 backdrop-blur-sm rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Let's discuss your next software project. Our team is ready to help you
                transform your ideas into powerful digital solutions.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/60 rounded-xl hover:bg-white/90 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-400 flex items-center justify-center shadow-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="font-semibold text-gray-800">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Real WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919419417800?text=Hi%20RHMR%20Astute%20Solutions!%20I'd%20like%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="block p-8 bg-gradient-to-r from-green-500 to-green-400 rounded-3xl shadow-2xl text-white cursor-pointer"
            >
              <MessageSquare className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Chat on WhatsApp</h3>
              <p className="mb-4 text-green-50">Get instant responses to your queries directly on your phone.</p>
              <div className="inline-block px-6 py-3 bg-white text-green-600 rounded-full font-semibold shadow-md">
                Start Chat
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Real Interactive Google Map */}
        <motion.div
          id="map"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-200"
        >
          <div className="w-full h-[400px] rounded-2xl overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.1633519896!2d74.00424599999999!3d33.5315525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1715400000000!5m2!1sen!2sin" 
              className="absolute top-0 left-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}