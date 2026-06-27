import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({ fullname: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await contactAPI.submit(formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ fullname: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, title: 'Email', content: 'sajjaduop181@gmail.com', href: 'mailto:sajjaduop181@gmail.com' },
    { icon: FaPhone, title: 'Phone', content: '+92-333-4874072', href: 'tel:+923334874072' },
    { icon: FaMapMarkerAlt, title: 'Location', content: 'Peshawar, Khyber Pakhtunkhwa, Pakistan' },
    { icon: FaClock, title: 'Availability', content: 'Mon - Fri, 9AM - 6PM PKT' },
  ];

  const inputClasses = "w-full px-3 py-3 sm:px-4 sm:py-3.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 transition-all duration-300 text-white placeholder:text-white/30 text-sm sm:text-base";

  return (
    <section id="contact" className="section-container relative">
      <div className="absolute inset-0 bg-secondary-black/30 -mx-[100vw] px-[100vw]" />
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="text-accent-red text-xs sm:text-sm uppercase tracking-widest mb-2 text-center">Get In Touch</p>
          <h2 className="section-title">REACH US</h2>
          <p className="section-subtitle">Let's build something amazing together</p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-10 md:mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6" id="contact-form">
              <div>
                <label htmlFor="fullname" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Full Name</label>
                <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required className={inputClasses} placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClasses} placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className={`${inputClasses} resize-none sm:rows-5`} placeholder="Tell me about your project..." />
              </div>
              {status.message && (
                <div className={`p-3 sm:p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/20 border border-green-500/30 text-green-400' : 'bg-red-500/20 border border-red-500/30 text-red-400'}`}>
                  {status.message}
                </div>
              )}
              <motion.button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {loading ? (<span className="flex items-center justify-center gap-2"><span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>Sending...</span>) : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6 sm:space-y-8">
            <div className="glass-card p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4 group">
                    <div className="bg-accent-red/20 p-2.5 sm:p-3 rounded-lg group-hover:bg-accent-red/30 transition-colors duration-300 flex-shrink-0">
                      <info.icon className="text-accent-red text-base sm:text-xl" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-text-secondary hover:text-accent-red transition-colors duration-300 text-xs sm:text-sm break-all">{info.content}</a>
                      ) : (
                        <p className="text-text-secondary text-xs sm:text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
