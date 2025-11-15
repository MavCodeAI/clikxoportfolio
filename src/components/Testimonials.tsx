
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechNova',
    content: 'MavIntel transformed our business with their AI solutions. Our customer engagement improved by 67% and operational costs decreased significantly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Innovate Health',
    content: 'The AI-powered analytics dashboard MavIntel created for us has revolutionized how we make decisions. It\'s like having a data scientist on staff 24/7.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 't3',
    name: 'Priya Patel',
    role: 'Marketing Director',
    company: 'GlobalReach',
    content: 'The AI chatbot MavIntel developed for us handles over 70% of our customer inquiries with remarkable accuracy. Our team can now focus on more complex issues.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80'
  },
  {
    id: 't4',
    name: 'David Wilson',
    role: 'Operations Manager',
    company: 'Smart Manufacturing',
    content: 'MavIntel\'s predictive maintenance system has reduced our downtime by 43%. The ROI on this investment was achieved in just five months.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-cyan/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-1 px-3 rounded-full bg-mavintel-cyan/10 text-mavintel-cyan text-sm font-medium mb-4"
          >
            Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-gradient">Client Success Stories</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Hear from our clients about how MavIntel's AI solutions have transformed their businesses.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 neo-blur relative"
            >
              <div className="absolute top-6 right-6 text-mavintel-purple opacity-30 transform -scale-x-100">
                <Quote size={32} />
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={`${
                      index < testimonial.rating
                        ? 'text-mavintel-accent-light fill-mavintel-accent-light'
                        : 'text-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-foreground/80">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
