
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-mavintel-dark to-transparent opacity-40"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mavintel-accent via-mavintel-purple to-mavintel-cyan">
                ClickXo
              </h2>
            </div>
            
            <p className="text-foreground/70 mb-6 max-w-md">
              Transforming businesses through AI-powered solutions and innovations. 
              We help companies leverage the power of artificial intelligence to 
              achieve digital evolution.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  AI-Powered Development
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Business Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  AI Integration
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} ClickXo. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
