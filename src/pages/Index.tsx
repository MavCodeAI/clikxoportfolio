
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import AIBot from '@/components/AIBot';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome toast after a short delay
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to MavIntel",
        description: "Experience the future of AI-driven solutions",
        duration: 5000,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <AIBot />
    </div>
  );
};

export default Index;
