
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-32">
      <div className="container max-w-4xl mx-auto text-center">

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-3 py-1 text-sm text-muted-foreground bg-muted/50 rounded-full">
            Professional Digital Solutions
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Transform Your Ideas Into
          <span className="text-primary"> Digital Reality</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We create clean, modern websites and digital experiences that help businesses grow and succeed in the online world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4"
          >
            Get Started
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="btn-secondary px-8 py-4 inline-flex items-center gap-2"
          >
            View Services
          </a>
        </motion.div>

        {/* Service Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center p-6 rounded-lg card-clean text-center group hover-lift"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Code size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-muted-foreground">Modern, responsive websites</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center p-6 rounded-lg card-clean text-center group hover-lift"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <Palette size={24} className="text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Graphic Design</h3>
            <p className="text-sm text-muted-foreground">Creative brand identity</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center p-6 rounded-lg card-clean text-center group hover-lift"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <BarChart3 size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Digital Marketing</h3>
            <p className="text-sm text-muted-foreground">Strategic growth solutions</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
