
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Code, Database, Bot, BadgeCheck, Smartphone, LineChart, Braces } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'web-development',
      icon: <Code className="w-10 h-10 text-mavintel-accent" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps'
      ]
    },
    {
      id: 'graphic-designing',
      icon: <Braces className="w-10 h-10 text-mavintel-purple" />,
      title: 'Graphic Designing',
      description: 'Creative and professional graphic design services to enhance your brand identity and visual communication.',
      features: [
        'Logo & Brand Identity',
        'Social Media Graphics',
        'Print Design',
        'UI/UX Design'
      ]
    },
    {
      id: 'digital-marketing',
      icon: <LineChart className="w-10 h-10 text-mavintel-cyan" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'Paid Advertising (PPC)'
      ]
    }
  ];

  const handleServiceClick = (id: string) => {
    setActiveService(id === activeService ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            ہماری خدمات
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-gradient">Professional Digital Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
          >
            Transforming businesses through innovative AI solutions, tailored to meet your specific needs and challenges.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            We offer comprehensive digital solutions to help your business succeed online.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={cn(
                "rounded-2xl p-6 neo-blur transition-all duration-300 cursor-pointer group",
                activeService === service.id ? "bg-white/10" : "hover:bg-white/5"
              )}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-white/5 flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {service.description}
                  </p>
                  
                  <div className={cn(
                    "grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-hidden transition-all duration-500",
                    activeService === service.id ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-mavintel-accent" />
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
