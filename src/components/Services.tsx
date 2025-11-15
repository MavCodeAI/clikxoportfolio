
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
    <section id="services" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-accent/5 to-transparent"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 text-sm text-muted-foreground bg-muted/50 rounded-full">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            What We <span className="text-primary">Offer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to help your business thrive in the modern world.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Primary Service - Web Development */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10 rounded-2xl p-6 sm:p-8 neo-blur border border-accent/20 group hover:border-accent/30 transition-all duration-500"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI-Web Development</h3>
                <p className="text-accent font-medium text-sm">Modern Technologies & AI Integration</p>
              </div>
            </div>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              Custom web applications with AI-powered features, responsive design, and cutting-edge technologies that drive business growth.
            </p>

            <div className="space-y-3 mb-6">
              {[
                'AI-Powered Features',
                'Responsive Design',
                'E-commerce Integration',
                'Performance Optimized'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-500 text-white font-medium text-center hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              Start Web Project
            </a>
          </motion.div>

          {/* Other Services in Grid */}
          <div className="space-y-6">
            {/* Graphic Design Service */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 rounded-2xl p-6 neo-blur border border-purple-500/20 group hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Braces className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Graphic Designing</h3>
                  <p className="text-purple-500 font-medium text-sm">Creative Brand Identity</p>
                </div>
              </div>

              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                Comprehensive graphic design solutions from logo design to complete brand identity development.
              </p>

              <div className="space-y-2 mb-4">
                {['Logo & Brand Identity', 'Social Media Graphics', 'Print Design', 'UI/UX Design'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block w-full px-6 py-2 rounded-lg border border-purple-500/30 text-purple-500 hover:bg-purple-500/10 transition-all duration-300 text-center font-medium"
              >
                Explore Design
              </a>
            </motion.div>

            {/* Digital Marketing Service */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-500/5 rounded-2xl p-6 neo-blur border border-cyan-500/20 group hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                  <LineChart className="w-8 h-8 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Digital Marketing</h3>
                  <p className="text-cyan-500 font-medium text-sm">Data-Driven Growth</p>
                </div>
              </div>

              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                Strategic marketing campaigns that drive traffic, conversions, and measurable business growth.
              </p>

              <div className="space-y-2 mb-4">
                {['SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Advertising'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block w-full px-6 py-2 rounded-lg border border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 text-center font-medium"
              >
                Explore Marketing
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
