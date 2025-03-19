
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  className 
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        'space-y-2 max-w-2xl',
        centered && 'text-center mx-auto',
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-forest-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-forest-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
