
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VillaCardProps {
  villa: {
    id: string;
    name: string;
    location: string;
    price: number;
    rating: number;
    images: string[];
    totalReviews: number;
  };
  className?: string;
  featured?: boolean;
  style?: React.CSSProperties;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export function VillaCard({ villa, className, featured = false, style }: VillaCardProps) {
  const { id, name, location, price, rating, images, totalReviews } = villa;

  return (
    <Link 
      to={`/villas/${id}`} 
      className={cn(
        "villa-card group rounded-xl overflow-hidden block bg-white shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="relative overflow-hidden">
        <div 
          className="aspect-[4/3] bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          <div className="overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <div className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-1 text-xs mb-2">
                <MapPin size={14} className="text-white" />
                <span>{location}</span>
              </div>
              <h3 className={cn("font-bold text-white group-hover:text-forest-100 transition-colors", 
                featured ? "text-xl" : "text-lg"
              )}>
                {name}
              </h3>
            </div>
            <div className="bg-white/90 backdrop-blur-sm text-forest-800 py-1 px-2 rounded-full text-xs font-medium flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
              {featured && <span className="text-forest-500">({totalReviews})</span>}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-forest-600 text-sm">Mulai dari</p>
            <p className="text-forest-900 font-bold text-lg">{formatPrice(price)}<span className="text-forest-500 text-sm font-normal"> / malam</span></p>
          </div>
          <div className={cn(
            "px-3 py-1 rounded-full text-sm font-medium transition-colors",
            featured ? "bg-forest-100 text-forest-800 group-hover:bg-forest-200" : "bg-forest-50 text-forest-700 group-hover:bg-forest-100"
          )}>
            Detail
          </div>
        </div>
      </div>
    </Link>
  );
}
