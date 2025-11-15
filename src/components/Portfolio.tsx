
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  imageUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'AI-Powered E-commerce Transformation',
    category: 'E-commerce',
    description: 'Implemented advanced recommendation algorithms and personalized shopping experiences, leading to significant increases in engagement and conversions.',
    result: '42% increase in average order value and 37% improvement in customer retention.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cs2',
    title: 'Intelligent Healthcare Analytics',
    category: 'Healthcare',
    description: 'Developed predictive analytics system for patient care optimization, helping healthcare providers improve outcomes and operational efficiency.',
    result: '28% reduction in readmission rates and 15% decrease in operational costs.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cs3',
    title: 'Smart Manufacturing Automation',
    category: 'Manufacturing',
    description: 'Implemented AI-driven quality control and predictive maintenance systems, resulting in improved product quality and reduced downtime.',
    result: '65% reduction in quality defects and 43% decrease in unplanned downtime.',
    imageUrl: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cs4',
    title: 'Conversational AI for Financial Services',
    category: 'Finance',
    description: 'Created intelligent virtual assistants for financial advisory and customer service, enhancing client satisfaction and operational efficiency.',
    result: '52% improvement in customer query resolution time and 31% cost reduction in customer service operations.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Portfolio: React.FC = () => {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const handleCaseClick = (id: string) => {
    setActiveCase(id === activeCase ? null : id);
  };

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-purple/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block py-1 px-3 rounded-full bg-mavintel-purple/10 text-mavintel-purple text-sm font-medium mb-4"
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
            <span className="text-gradient">Smart Portfolio</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Discover how our AI solutions have transformed businesses across various industries.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, i) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative overflow-hidden rounded-2xl neo-blur group cursor-pointer",
                activeCase === caseStudy.id ? "bg-white/10" : ""
              )}
              onClick={() => handleCaseClick(caseStudy.id)}
            >
              <div className="w-full h-72 relative overflow-hidden">
                <img 
                  src={caseStudy.imageUrl} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mavintel-dark/80 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-xs font-medium text-mavintel-accent-light mb-2 inline-block">
                    {caseStudy.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {caseStudy.title}
                  </h3>
                </div>
              </div>
              
              <AnimatePresence>
                {activeCase === caseStudy.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-white/5"
                  >
                    <p className="text-foreground/80 mb-4">{caseStudy.description}</p>
                    <div className="bg-mavintel-accent/10 rounded-lg p-4 mb-4">
                      <h4 className="font-medium text-mavintel-accent mb-1">Results:</h4>
                      <p className="text-foreground/90">{caseStudy.result}</p>
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-mavintel-accent hover:underline"
                    >
                      <span>View Full Case Study</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-lg border border-mavintel-accent/30 text-foreground hover:bg-mavintel-accent/10 transition-colors duration-300 space-x-2"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
