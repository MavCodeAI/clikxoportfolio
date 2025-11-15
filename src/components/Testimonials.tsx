
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
  metric: string;
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechNova Solutions',
    content: 'ClickXo revolutionized our operations with cutting-edge web applications. Our customer engagement soared by 67% while operational costs dropped significantly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    metric: '67% ↑ Customer Engagement'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Innovate Health',
    content: 'The analytics dashboard ClickXo built transformed our decision-making process. It\'s like having an expert development team available 24/7.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    metric: '$2M Annual Savings'
  },
  {
    id: 't3',
    name: 'Priya Patel',
    role: 'Marketing Director',
    company: 'GlobalReach Media',
    content: 'Their automated solutions handle 70% of our customer inquiries with exceptional accuracy, allowing our team to focus on strategic initiatives.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    metric: '70% Query Automation'
  },
  {
    id: 't4',
    name: 'David Wilson',
    role: 'Operations Manager',
    company: 'Smart Manufacturing Inc',
    content: 'ClickXo\'s digital transformation solutions reduced our operational inefficiencies by 43%, with ROI achieved in just five months.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    metric: '43% ↓ Operational Costs'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-4"
          >
            Client Testimonials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-gradient">Trusted by Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            See what our clients say about working with ClickXo for their digital transformation needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl neo-blur p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500"
            >
              <div className="absolute top-4 right-4 text-cyan-500/30">
                <Quote size={24} />
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Quote size={12} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  <p className="text-sm font-medium text-cyan-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={`${
                        index < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-bold rounded-full">
                  {testimonial.metric}
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
