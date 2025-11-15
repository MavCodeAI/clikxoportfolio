
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-mavintel-dark via-transparent to-transparent"></div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="ClickXo Logo" className="h-8 w-auto" />
            </div>
            <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
              Professional digital solutions that transform your business and drive real results.
            </p>

            <div className="flex space-x-2">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent transition-all duration-200">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 hover:text-purple-500 transition-all duration-200">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-500 transition-all duration-200">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 hover:text-purple-500 transition-all duration-200">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-foreground/70 hover:text-accent transition-colors text-sm">Web Development</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-purple-500 transition-colors text-sm">Graphic Design</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-cyan-500 transition-colors text-sm">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/70 hover:text-accent transition-colors text-sm">About Us</a></li>
              <li><a href="#portfolio" className="text-foreground/70 hover:text-purple-500 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-cyan-500 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-accent flex-shrink-0" />
                <span className="text-sm text-foreground/70">hello@clickxo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-purple-500 flex-shrink-0" />
                <span className="text-sm text-foreground/70">+1 (555) 123-4567</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg text-sm font-medium transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center text-sm text-foreground/60">
              <p>&copy; {currentYear} ClickXo. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-4 lg:space-x-6 text-sm">
              <a href="#privacy" className="text-foreground/60 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-foreground/60 hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-foreground/60 hover:text-accent transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
