
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          company: '',
          message: '',
          service: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-accent/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-1 px-3 rounded-full bg-mavintel-accent/10 text-mavintel-accent text-sm font-medium mb-4"
          >
            Contact Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-gradient">Start Your AI Journey</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Ready to transform your business with AI? Get in touch with our team for a personalized consultation.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="neo-blur rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-mavintel-accent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-mavintel-accent"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-mavintel-accent"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Interested Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-mavintel-accent"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web-app">AI-Powered Web & App Development</option>
                  <option value="business">Automated Business Solutions</option>
                  <option value="analytics">Intelligent Data Analytics</option>
                  <option value="ai">Generative AI & Chatbot Integration</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-mavintel-accent resize-none"
                placeholder="Tell us about your project or inquiries..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={cn(
                "w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300",
                isSubmitted
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-mavintel-accent to-mavintel-purple text-white hover:shadow-lg hover:shadow-mavintel-accent/20"
              )}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : isSubmitted ? (
                <span className="inline-flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  Message Sent!
                </span>
              ) : (
                <span className="inline-flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
