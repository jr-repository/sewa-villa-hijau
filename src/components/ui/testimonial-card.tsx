
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
    villaName: string;
  };
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const { name, avatar, rating, comment, date, villaName } = testimonial;
  
  return (
    <div 
      className={cn(
        "p-6 rounded-xl bg-white border border-forest-100 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex-shrink-0">
          <img 
            src={avatar} 
            alt={name} 
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-forest-900">{name}</h4>
          <p className="text-forest-600 text-sm">{villaName}</p>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={cn(
                "fill-current", 
                i < rating ? "text-yellow-400" : "text-gray-300"
              )}
            />
          ))}
        </div>
      </div>
      
      <p className="text-forest-700 mb-3 text-sm">{comment}</p>
      
      <p className="text-forest-500 text-xs">{date}</p>
    </div>
  );
}
