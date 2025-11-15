
import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-white/5 backdrop-blur-sm",
        className
      )}
    />
  );
};

export const ServiceCardSkeleton: React.FC = () => (
  <div className="rounded-2xl p-6 neo-blur border border-white/10 h-full">
    <Skeleton className="w-12 h-12 rounded-xl mb-4" />
    <Skeleton className="h-6 w-3/4 mb-4" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-2/3 mb-6" />
    <Skeleton className="h-5 w-1/3" />
  </div>
);

export const AnalyticsCardSkeleton: React.FC = () => (
  <div className="p-5 rounded-xl neo-blur border border-white/10 h-full">
    <div className="flex justify-between items-start mb-3">
      <div>
        <Skeleton className="h-4 w-20 mb-2" />
        <Skeleton className="h-8 w-24" />
      </div>
      <Skeleton className="h-10 w-10 rounded-lg" />
    </div>
    
    <div className="flex items-center space-x-2 mb-4">
      <Skeleton className="h-5 w-12 rounded" />
      <Skeleton className="h-4 w-24 rounded" />
    </div>
    
    <Skeleton className="h-24 w-full rounded-lg" />
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="p-6 rounded-xl neo-blur border border-white/10 h-full">
    <div className="flex items-center mb-4">
      <Skeleton className="w-12 h-12 rounded-full mr-3" />
      <div>
        <Skeleton className="h-5 w-32 mb-1" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-3/4 mb-2" />
    <div className="mt-4">
      <Skeleton className="h-4 w-20" />
    </div>
  </div>
);
