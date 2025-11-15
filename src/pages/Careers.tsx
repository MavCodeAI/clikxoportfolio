import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Users, Heart, Sparkles, GraduationCap, Globe, Coffee, Zap } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const Careers = () => {
  const jobOpenings = [
    {
      id: 'ai-engineer',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Lead AI development projects and implement cutting-edge machine learning solutions.',
      requirements: [
        '5+ years of experience in AI/ML development',
        'Strong Python and PyTorch/TensorFlow expertise',
        'Experience with large language models',
        'PhD in Computer Science or related field'
      ]
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Develop predictive models and analyze complex datasets to drive business decisions.',
      requirements: [
        '3+ years of experience in data science',
        'Proficiency in Python, R, and SQL',
        'Experience with statistical modeling',
        'Strong visualization skills'
      ]
    },
    {
      id: 'product-manager',
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Define and execute AI product strategy, working closely with engineering and design teams.',
      requirements: [
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong technical background',
        'Excellent communication skills'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8 text-mavintel-accent" />,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with our distributed team setup.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-mavintel-purple" />,
      title: 'Innovation Time',
      description: 'Dedicated time to work on innovative projects and self-improvement.'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-mavintel-cyan" />,
      title: 'Learning & Development',
      description: 'Access to premium courses, conferences, and learning resources.'
    },
    {
      icon: <Heart className="w-8 h-8 text-mavintel-accent-light" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs.'
    },
    {
      icon: <Coffee className="w-8 h-8 text-mavintel-accent" />,
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive with our flexible schedule.'
    },
    {
      icon: <Zap className="w-8 h-8 text-mavintel-purple" />,
      title: 'Fast Growth',
      description: 'Rapid career progression in a fast-growing company.'
    }
  ];

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
                  Join Our Team
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="text-gradient">Build the Future of</span>
                  <br />
                  <span className="text-gradient">AI Technology</span>
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  Join our team of AI innovators and help shape the future of technology. We're looking for passionate individuals who want to make a difference in the world of artificial intelligence.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-mavintel-accent" />
                    <span>50+ Team Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-mavintel-accent" />
                    <span>Remote-First</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-mavintel-accent/20 to-mavintel-purple/20 rounded-2xl blur-3xl"></div>
                <div className="relative rounded-2xl neo-blur p-8">
                  <h2 className="text-2xl font-bold mb-6">Why Join MavIntel?</h2>
                  <ul className="space-y-4">
                    {[
                      'Work on cutting-edge AI projects',
                      'Collaborate with industry experts',
                      'Competitive salary and equity',
                      'Flexible work environment',
                      'Continuous learning opportunities',
                      'Make a global impact'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-mavintel-accent"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-accent/5 to-transparent"></div>
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-mavintel-purple/10 text-mavintel-purple text-sm font-medium mb-4"
              >
                Benefits & Perks
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-gradient">Why You'll Love Working Here</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-2xl neo-blur p-6"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/80">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-mavintel-accent/10 text-mavintel-accent text-sm font-medium mb-4"
              >
                Open Positions
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-gradient">Join Our Team</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-foreground/80 max-w-2xl mx-auto"
              >
                We're always looking for talented individuals to join our team. Check out our current openings.
              </motion.p>
            </div>

            <div className="grid gap-8">
              {jobOpenings.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-2xl neo-blur p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-foreground/70">
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-mavintel-accent to-mavintel-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-mavintel-accent/20">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-foreground/80 mb-6">{job.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-mavintel-accent"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

export default Careers; 