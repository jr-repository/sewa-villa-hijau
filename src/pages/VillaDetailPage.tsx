import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Bed, Bath, Calendar, Award, MapPin, Star, Heart, Share, ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { VillaCard } from '@/components/ui/villa-card';
import { villas, testimonials, Villa } from '@/data/villas';
import { NotFound } from './NotFound';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const getVillaTestimonials = (villaId: string) => {
  return testimonials.filter(testimonial => testimonial.villaId === villaId);
};

const VillaDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [villa, setVilla] = useState<Villa | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [duration, setDuration] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [expandedSection, setExpandedSection] = useState('');
  const [otherVillas, setOtherVillas] = useState<Villa[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading
    setTimeout(() => {
      const foundVilla = villas.find(v => v.id === id) || null;
      setVilla(foundVilla);
      if (foundVilla) {
        setMainImage(foundVilla.images[0]);
        
        // Get other villas in the same location
        const sameLocationVillas = villas.filter(v => 
          v.id !== id && v.location === foundVilla.location
        );
        
        // If not enough villas in the same location, add some random ones
        let others = [...sameLocationVillas];
        if (others.length < 3) {
          const randomVillas = villas.filter(v => 
            v.id !== id && !sameLocationVillas.includes(v)
          ).slice(0, 3 - others.length);
          
          others = [...others, ...randomVillas];
        }
        
        setOtherVillas(others.slice(0, 3));
        
        // Initialize price calculation
        const discountedPrice = foundVilla.discount 
          ? foundVilla.price * (1 - foundVilla.discount / 100) 
          : foundVilla.price;
        setTotalPrice(discountedPrice);
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
  useEffect(() => {
    if (villa) {
      const basePrice = villa.discount 
        ? villa.price * (1 - villa.discount / 100) 
        : villa.price;
      setTotalPrice(basePrice * duration);
    }
  }, [duration, villa]);
  
  if (loading) {
    return (
      <Layout>
        <div className="pt-32 pb-16 section-padding min-h-screen flex justify-center items-start">
          <div className="loader"></div>
        </div>
      </Layout>
    );
  }
  
  if (!villa) {
    return <NotFound />;
  }
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };
  
  const villaTestimonials = getVillaTestimonials(villa.id);
  
  const finalPrice = villa.discount 
    ? villa.price * (1 - villa.discount / 100) 
    : villa.price;
  
  return (
    <Layout>
      {/* Image Gallery */}
      <section className="pt-32 pb-8 section-padding">
        <div className="flex items-center mb-6">
          <Link to="/villas" className="flex items-center text-forest-600 hover:text-forest-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Kembali ke Villa</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Image */}
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img 
              src={mainImage} 
              alt={villa.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 gap-4">
            {villa.images.slice(1, 5).map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setMainImage(image)}
              >
                <img 
                  src={image} 
                  alt={`${villa.name} ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Villa Details */}
      <section className="py-8 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Villa Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-forest-600" />
              <span className="text-forest-600">{villa.location}, Yogyakarta</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-forest-900 mb-4">{villa.name}</h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{villa.rating}</span>
                <span className="text-forest-600">({villa.totalReviews} ulasan)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Users className="h-5 w-5 text-forest-600" />
                  <span>{villa.capacity.guests} tamu</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bed className="h-5 w-5 text-forest-600" />
                  <span>{villa.capacity.bedrooms} kamar</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-5 w-5 text-forest-600" />
                  <span>{villa.capacity.bathrooms} kamar mandi</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-b border-forest-100 py-5 mb-8">
              <p className="text-forest-700 leading-relaxed">
                {villa.description}
              </p>
            </div>
            
            {/* Villa Features */}
            <div>
              <h2 className="text-2xl font-bold text-forest-900 mb-6">Fasilitas Villa</h2>
              
              {villa.amenities.map((category, idx) => (
                <div key={idx} className="mb-6">
                  <button
                    onClick={() => toggleSection(category.category)}
                    className="flex items-center justify-between w-full text-left font-medium text-forest-900 mb-3"
                  >
                    <span>{category.category}</span>
                    {expandedSection === category.category ? (
                      <ChevronUp className="h-5 w-5 text-forest-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-forest-600" />
                    )}
                  </button>
                  
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 transition-all duration-300 ${
                    expandedSection === category.category ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-forest-600" />
                        <span className="text-forest-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-b border-forest-100 mt-3 mb-4"></div>
                </div>
              ))}
            </div>
            
            {/* Nearby Attractions */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-forest-900 mb-6">Tempat Wisata Terdekat</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {villa.nearbyAttractions.map((attraction, idx) => (
                  <div key={idx} className="border border-forest-100 rounded-xl overflow-hidden">
                    <div className="aspect-[16/9]">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-forest-900">{attraction.name}</h3>
                        <span className="text-sm text-forest-600">{attraction.distance}</span>
                      </div>
                      <p className="text-forest-700 text-sm">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reviews */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-forest-900">Ulasan</h2>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{villa.rating}</span>
                  <span className="text-forest-600">({villa.totalReviews} ulasan)</span>
                </div>
              </div>
              
              {villaTestimonials.length > 0 ? (
                <div className="space-y-6">
                  {villaTestimonials.map(testimonial => (
                    <TestimonialCard 
                      key={testimonial.id} 
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-forest-600 py-4">Belum ada ulasan untuk villa ini.</p>
              )}
            </div>
          </div>
          
          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl border border-forest-100 shadow-sm p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-2xl font-bold text-forest-900">
                        {formatPrice(finalPrice)}
                      </span>
                      {villa.discount && (
                        <div className="flex items-center gap-2">
                          <span className="text-forest-600 line-through text-sm">
                            {formatPrice(villa.price)}
                          </span>
                          <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded">
                            {villa.discount}% OFF
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-forest-600">/ malam</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-forest-700 mb-2 font-medium">Tanggal Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-500 h-5 w-5" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-forest-700 mb-2 font-medium">Durasi Menginap</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-forest-200"
                      onClick={() => setDuration(prev => Math.max(1, prev - 1))}
                      disabled={duration <= 1}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-medium">{duration}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-forest-200"
                      onClick={() => setDuration(prev => prev + 1)}
                    >
                      +
                    </Button>
                    <span className="text-forest-600 ml-2">malam</span>
                  </div>
                </div>
                
                <div className="border-t border-forest-100 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-forest-700">
                      {formatPrice(finalPrice)} x {duration} malam
                    </span>
                    <span className="font-medium">{formatPrice(finalPrice * duration)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-forest-700">Biaya layanan</span>
                    <span className="font-medium">{formatPrice(finalPrice * 0.1)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-3 border-t border-forest-100 mt-3">
                    <span>Total</span>
                    <span>{formatPrice(finalPrice * duration + finalPrice * 0.1)}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-6 rounded-lg mb-3">
                  Pesan Sekarang
                </Button>
                
                <div className="flex justify-between">
                  <Button variant="outline" className="flex-1 mr-2 border-forest-200">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorit
                  </Button>
                  <Button variant="outline" className="flex-1 ml-2 border-forest-200">
                    <Share className="h-4 w-4 mr-2" />
                    Bagikan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Villas Section */}
      <section className="py-16 bg-forest-50">
        <div className="section-padding">
          <SectionHeading
            title="Villa Lainnya Yang Mungkin Anda Suka"
            subtitle="Temukan villa menarik lainnya di sekitar lokasi ini"
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherVillas.map((otherVilla) => (
              <VillaCard 
                key={otherVilla.id} 
                villa={otherVilla} 
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VillaDetailPage;
