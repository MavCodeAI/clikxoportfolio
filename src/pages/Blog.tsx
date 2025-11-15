import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Tag, Mail } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re reshaping the business landscape.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'AI Trends',
      date: 'March 15, 2024',
      readTime: '8 min read',
      author: 'Sarah Chen'
    },
    {
      id: 2,
      title: 'How to Implement AI-Powered Customer Service',
      excerpt: 'Learn practical steps to integrate AI into your customer service operations for better efficiency and satisfaction.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Customer Service',
      date: 'March 12, 2024',
      readTime: '6 min read',
      author: 'Michael Rodriguez'
    },
    {
      id: 3,
      title: 'The Role of AI in Data Analytics',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses analyze and leverage their data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Data Analytics',
      date: 'March 10, 2024',
      readTime: '7 min read',
      author: 'Emily Watson'
    }
  ];

  const categories = [
    'All Posts',
    'AI Trends',
    'Customer Service',
    'Data Analytics',
    'Machine Learning',
    'Business Automation',
    'Case Studies',
    'Industry Insights'
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block py-1 px-3 rounded-full bg-mavintel-accent/10 text-mavintel-accent text-sm font-medium mb-4"
              >
                Our Blog
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="text-gradient">Insights & Updates</span>
                <br />
                <span className="text-gradient">from the AI Frontier</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-foreground/80"
              >
                Stay updated with the latest trends, insights, and innovations in artificial intelligence and business automation.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, i) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group rounded-2xl neo-blur overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-mavintel-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-mavintel-accent font-medium mt-4 group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mavintel-accent/5 to-transparent"></div>
          <div className="container max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl neo-blur p-8 text-center"
            >
              <div className="inline-block p-3 rounded-full bg-mavintel-accent/10 text-mavintel-accent mb-4">
                <Mail className="w-6 h-6" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Stay Updated</span>
              </h2>
              
              <p className="text-foreground/80 mb-6">
                Subscribe to our newsletter for the latest insights and updates in AI technology.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-mavintel-accent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-mavintel-accent to-mavintel-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-mavintel-accent/20"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
