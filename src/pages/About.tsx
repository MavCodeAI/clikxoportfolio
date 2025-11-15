
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BrainCircuit, Lightbulb, Award, Users, Code, Rocket } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const About = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block py-1 px-3 rounded-full bg-mavintel-accent/10 text-mavintel-accent text-sm font-medium mb-4">
                  Our Story
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-gradient">We Transform Ideas Into</span>
                  <br />
                  <span className="text-gradient">Intelligent Solutions</span>
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  MavIntel is a forward-thinking AI agency dedicated to revolutionizing businesses through cutting-edge artificial intelligence and automation solutions. Our team of experts combines technical expertise with creative vision to deliver transformative digital experiences.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-mavintel-accent"></div>
                    <span className="font-medium">Founded in 2020</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-mavintel-purple"></div>
                    <span className="font-medium">Global Presence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-mavintel-cyan"></div>
                    <span className="font-medium">100+ AI Projects</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden neo-blur aspect-video"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="MavIntel Team" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Mission and Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-accent/5 to-transparent"></div>
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl neo-blur p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-white/5">
                    <Lightbulb className="w-8 h-8 text-mavintel-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-foreground/80 mb-6">
                  To democratize artificial intelligence by creating accessible, powerful, and ethical AI solutions that enable businesses of all sizes to thrive in the digital age. We strive to make complex technologies simple, actionable, and transformative.
                </p>
                <ul className="space-y-3">
                  {["Accessibility", "Innovation", "Excellence", "Integrity"].map((value, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-mavintel-accent"></div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl neo-blur p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-white/5">
                    <BrainCircuit className="w-8 h-8 text-mavintel-purple" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-foreground/80 mb-6">
                  To lead the AI revolution by pioneering solutions that meaningfully enhance human potential and business capabilities. We envision a future where AI is seamlessly integrated into every aspect of business, augmenting human creativity and driving unprecedented growth.
                </p>
                <ul className="space-y-3">
                  {["Forward-thinking", "Human-centered", "Sustainable", "Transformative"].map((value, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-mavintel-purple"></div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-mavintel-purple/10 text-mavintel-purple text-sm font-medium mb-4"
              >
                Our Team
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-gradient">Meet the AI Innovators</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-foreground/80 max-w-2xl mx-auto"
              >
                Our diverse team of AI specialists, developers, data scientists, and designers work together to create cutting-edge solutions.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
                },
                {
                  name: "Sarah Johnson",
                  role: "Chief AI Officer",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
                },
                {
                  name: "Michael Williams",
                  role: "Lead Data Scientist",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
                },
                {
                  name: "Priya Patel",
                  role: "UX/UI Director",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
                }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl neo-blur overflow-hidden group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-foreground/70">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-cyan/5 to-transparent"></div>
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Rocket className="w-8 h-8 text-mavintel-accent" />, value: "120+", label: "Projects Completed" },
                { icon: <Users className="w-8 h-8 text-mavintel-purple" />, value: "85+", label: "Happy Clients" },
                { icon: <Code className="w-8 h-8 text-mavintel-cyan" />, value: "15+", label: "AI Models Developed" },
                { icon: <Award className="w-8 h-8 text-mavintel-accent-light" />, value: "28", label: "Industry Awards" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl neo-blur p-6 text-center"
                >
                  <div className="mx-auto p-3 rounded-full bg-white/5 inline-flex mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{stat.value}</h3>
                  <p className="text-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
