
import React from 'react';
import { motion } from 'framer-motion';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { cn } from '@/lib/utils';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  change: number;
  data: Array<{ name: string; value: number }>;
  color: string;
  icon: React.ReactNode;
  formatter?: (value: number) => string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  change,
  data,
  color,
  icon,
  formatter = (value) => `${value}`
}) => {
  const isPositive = change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-5 rounded-xl neo-blur border border-white/10 h-full"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-medium text-foreground/70">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div 
          className={cn(
            "p-2 rounded-lg",
            "bg-white/5"
          )}
        >
          {icon}
        </div>
      </div>
      
      <div className="flex items-center space-x-2 mb-4">
        <span 
          className={cn(
            "text-xs font-medium px-1.5 py-0.5 rounded",
            isPositive ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"
          )}
        >
          {isPositive ? '+' : ''}{change}%
        </span>
        <span className="text-xs text-foreground/50">vs. last month</span>
      </div>
      
      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.5} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide />
            <Tooltip 
              contentStyle={{
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "0.5rem",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                color: "#fff"
              }}
              formatter={formatter}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#gradient-${title})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default AnalyticsCard;
