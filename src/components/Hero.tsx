
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Bot, Brain, FlaskConical, Rocket, Sparkles, Code, Braces } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Hero: React.FC = () => {
  const [headline, setHeadline] = useState("AI-Driven Digital Evolution");
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const headlines = [
    "Professional Web Development",
    "Creative Graphic Designing",
    "Strategic Digital Marketing",
    "Complete Digital Solutions"
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false });
  const controls = useAnimation();
  const { toast } = useToast();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prev) => {
        const nextIndex = (prev + 1) % headlines.length;
        setHeadline(headlines[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    toast({
      title: "Service Overview",
      description: "Exploring our advanced AI solutions for business.",
      duration: 3000,
    });
    
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 pt-32">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mavintel-dark/70 to-mavintel-dark/30 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_60%)] z-0"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-mavintel-accent/30 rounded-full blur-sm"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            variants={textVariants}
            custom={0}
            initial="hidden"
            animate={controls}
            className="mb-4"
          >
            <div className="inline-block py-1 px-3 rounded-full bg-mavintel-accent/10 text-mavintel-accent text-sm font-medium mb-4 border border-mavintel-accent/20 backdrop-blur-sm shadow-lg shadow-mavintel-accent/5">
              <span className="flex items-center">
                <Sparkles size={14} className="mr-1.5 animate-pulse" />
                Professional Digital Services
              </span>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden h-[80px] sm:h-[100px] md:h-[120px] w-full max-w-5xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1 
              key={currentHeadlineIndex}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight absolute inset-0 flex items-center justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-gradient">{headline}</span>
            </motion.h1>
          </motion.div>

          <motion.p
            variants={textVariants}
            custom={2}
            initial="hidden"
            animate={controls}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10"
          >
            MavIntel empowers businesses through cutting-edge AI, automation, and data intelligence solutions. Experience the future of digital transformation.
          </motion.p>

          <motion.div
            variants={textVariants}
            custom={3}
            initial="hidden"
            animate={controls}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-mavintel-accent to-mavintel-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-mavintel-accent/20 flex items-center justify-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <button
              onClick={handleExploreClick}
              className="px-6 py-3 rounded-lg border border-mavintel-accent/30 text-foreground hover:bg-mavintel-accent/10 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Services</span>
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-16"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {[
            { icon: <Code className="w-8 h-8 text-mavintel-accent" />, label: "Web Development" },
            { icon: <Braces className="w-8 h-8 text-mavintel-purple" />, label: "Graphic Design" },
            { icon: <Rocket className="w-8 h-8 text-mavintel-cyan" />, label: "Digital Marketing" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center p-4 rounded-2xl neo-blur hover:shadow-lg hover:shadow-mavintel-accent/10 transition-all duration-300 cursor-pointer"
              custom={i}
              variants={iconVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(109, 40, 217, 0.2)"
              }}
            >
              <div className="p-3 rounded-full bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-foreground/90">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating CTA */}
        <motion.div
          className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div 
            className="py-3 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center space-x-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <p className="text-sm font-medium text-white">Transform your digital presence today</p>
            <a href="#contact" className="text-xs font-semibold bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded-full text-white">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
