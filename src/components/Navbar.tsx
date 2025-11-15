import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavItem = ({ href, children, className }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors text-foreground/70 hover:text-foreground group",
        className
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (mobileMenu && menuButton && 
          !mobileMenu.contains(event.target as Node) && 
          !menuButton.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="ClickXo Logo" className="h-10 w-auto" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="#services">Services</NavItem>
          <NavItem href="#portfolio">Portfolio</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <a 
            href="/contact" 
            className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-mavintel-accent to-mavintel-purple text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-lg border-b border-border shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              <NavItem href="/" className="px-4 py-3 text-base">Home</NavItem>
              <NavItem href="/about" className="px-4 py-3 text-base">About</NavItem>
              <NavItem href="#services" className="px-4 py-3 text-base">Services</NavItem>
              <NavItem href="#portfolio" className="px-4 py-3 text-base">Portfolio</NavItem>
              <NavItem href="#contact" className="px-4 py-3 text-base">Contact</NavItem>
              <div className="pt-4 border-t border-border">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector('#contact');
                    if (element) {
                      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({
                        top: offsetTop - 100,
                        behavior: 'smooth'
                      });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-500 text-white font-medium text-center hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
