
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
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
        title: "Welcome to ClickXo",
        description: "Professional Digital Services for Your Business",
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
    </div>
  );
};

export default Index;
