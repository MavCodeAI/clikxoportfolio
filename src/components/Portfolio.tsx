
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, ExternalLink, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }[];
  imageUrl: string;
  tech: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'AI-Powered E-commerce Platform',
    category: 'E-commerce',
    description: 'Complete digital transformation for a retail business with AI-driven recommendations and automated inventory management.',
    metrics: [
      { value: '+142%', label: 'Revenue Growth', icon: <TrendingUp className="w-4 h-4" /> },
      { value: '50K+', label: 'Monthly Users', icon: <Users className="w-4 h-4" /> },
      { value: '$2.3M', label: 'Annual Sales', icon: <DollarSign className="w-4 h-4" /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Node.js', 'AI/ML', 'PostgreSQL']
  },
  {
    id: 'cs2',
    title: 'Healthcare Analytics Dashboard',
    category: 'Healthcare',
    description: 'Modern analytics platform for medical data visualization and patient care optimization with predictive insights.',
    metrics: [
      { value: '-35%', label: 'Processing Time', icon: <TrendingUp className="w-4 h-4" /> },
      { value: '100+', label: 'Hospitals', icon: <Users className="w-4 h-4" /> },
      { value: '$1.8M', label: 'Cost Savings', icon: <DollarSign className="w-4 h-4" /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Python', 'FastAPI', 'MongoDB']
  },
  {
    id: 'cs3',
    title: 'Manufacturing IoT Solution',
    category: 'Manufacturing',
    description: 'Smart factory automation with real-time monitoring, predictive maintenance, and quality control systems.',
    metrics: [
      { value: '-60%', label: 'Downtime', icon: <TrendingUp className="w-4 h-4" /> },
      { value: '500K', label: 'Units/Month', icon: <Users className="w-4 h-4" /> },
      { value: '$4.1M', label: 'Revenue Increase', icon: <DollarSign className="w-4 h-4" /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['IoT', 'React', 'Python', 'Redis']
  },
  {
    id: 'cs4',
    title: 'FinTech Virtual Assistant',
    category: 'Finance',
    description: 'AI-powered customer service automation with natural language processing for banking and investment queries.',
    metrics: [
      { value: '+200%', label: 'Query Resolution', icon: <TrendingUp className="w-4 h-4" /> },
      { value: '25K+', label: 'Daily Interactions', icon: <Users className="w-4 h-4" /> },
      { value: '$3.2M', label: 'Annual Savings', icon: <DollarSign className="w-4 h-4" /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tech: ['AI/NLP', 'React', 'GraphQL', 'AWS']
  }
];

const Portfolio: React.FC = () => {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const handleCaseClick = (id: string) => {
    setActiveCase(id === activeCase ? null : id);
  };

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium mb-4"
          >
            Our Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-gradient">Success Stories</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Real results from real businesses. Discover how our innovative solutions transform operations and drive growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl neo-blur hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500"
            >
              <div className="w-full h-72 relative overflow-hidden">
                <img
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-xs font-medium text-purple-400 mb-2 inline-block">
                    {caseStudy.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {caseStudy.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {caseStudy.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-white/20 text-white rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {activeCase === caseStudy.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-background/5 border-t border-white/10"
                  >
                    <p className="text-foreground/90 mb-6 leading-relaxed">{caseStudy.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 bg-purple-500/20 rounded-full">
                            {metric.icon}
                          </div>
                          <div className="text-lg font-bold text-purple-400">{metric.value}</div>
                          <div className="text-xs text-foreground/70">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium hover:underline"
                    >
                      <span>View Full Case Study</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500/30 text-foreground hover:bg-purple-500/10 transition-all duration-300 space-x-2 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <span>Start Your Project</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
