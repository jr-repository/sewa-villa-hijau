
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  className,
  style
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl bg-white border border-forest-100 hover:border-forest-200 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="p-3 mb-4 inline-block rounded-lg bg-forest-50 text-forest-600">
        <Icon size={24} />
      </div>
      
      <h3 className="text-lg font-semibold text-forest-900 mb-2">
        {title}
      </h3>
      
      <p className="text-forest-600 text-sm">
        {description}
      </p>
    </div>
  );
}
