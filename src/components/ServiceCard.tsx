
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon,
  color,
  index
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "rounded-2xl p-6 neo-blur border border-white/10 hover:border-white/20 transition-all duration-300 h-full",
        "group hover:shadow-lg"
      )}
      style={{
        boxShadow: `0 8px 32px -5px ${color}20`
      }}
      whileHover={{
        y: -5,
        boxShadow: `0 20px 40px -10px ${color}40`
      }}
    >
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)` }}
      >
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-sm text-foreground/70 mb-6 line-clamp-3">
        {description}
      </p>
      
      <Link 
        to={`/services/${id}`} 
        className="inline-flex items-center text-sm font-medium animated-underline after:bg-current text-mavintel-accent"
      >
        <span>Learn More</span>
        <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
