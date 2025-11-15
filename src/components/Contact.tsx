
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  service?: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service validation
    if (!formState.service) {
      newErrors.service = 'Please select a service';
    }

    // Message validation
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // In real implementation, replace this with actual form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSuccess(true);
      setIsSubmitted(true);
      setErrors({});

      setTimeout(() => {
        setFormState({ name: '', email: '', company: '', message: '', service: '' });
        setIsSuccess(false);
        setIsSubmitted(false);
      }, 4000);

    } catch (error) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
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
            <span className="text-gradient">Get In Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Ready to elevate your business with professional digital solutions? Get in touch with our expert team for a personalized consultation.
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
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none",
                    errors.name ? "border-destructive focus:ring-destructive" : "border-input"
                  )}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none",
                    errors.email ? "border-destructive focus:ring-destructive" : "border-input"
                  )}
                  placeholder="john.doe@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
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
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Interested Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none",
                    errors.service ? "border-destructive focus:ring-destructive" : "border-input"
                  )}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-destructive flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.service}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className={cn(
                  "w-full px-4 py-3 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none",
                  errors.message ? "border-destructive focus:ring-destructive" : "border-input"
                )}
                placeholder="Tell us about your project or requirements..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-destructive flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message}
                </p>
              )}
            </div>

            {submitError && (
              <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center">
                <AlertCircle className="w-5 h-5 text-destructive mr-2 flex-shrink-0" />
                <p className="text-sm text-destructive">{submitError}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={cn(
                "w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300",
                isSubmitted
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:shadow-accent/20"
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
