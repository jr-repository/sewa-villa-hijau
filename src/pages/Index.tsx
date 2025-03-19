
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Users, CalendarDays, Shield, Award, Zap, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { VillaCard } from '@/components/ui/villa-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureCard } from '@/components/ui/feature-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { Button } from '@/components/ui/button';
import { villas, testimonials } from '@/data/villas';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const featuredVillas = villas.filter(villa => villa.featured);
  const highlightedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)',
            opacity: loaded ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 to-transparent"></div>
        </div>
        
        <div className="section-padding relative z-10 w-full pt-28 pb-16">
          <div className="max-w-3xl">
            <div className="space-y-6 animate-fade-in" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                Pengalaman Villa Premium di Yogyakarta
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Nikmati Ketenangan <br />Alam Yogyakarta
              </h1>
              <p className="text-white/90 text-lg max-w-xl">
                Villa Hijau menawarkan pengalaman menginap mewah dengan pemandangan alam yang menakjubkan di berbagai lokasi di Yogyakarta.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8 bg-forest-600 hover:bg-forest-700 text-white">
                  Jelajahi Villa
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 animate-slide-in-bottom opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="glass-effect backdrop-blur-lg p-4 rounded-xl text-white">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-white/80">Villa Mewah</div>
              </div>
              <div className="glass-effect backdrop-blur-lg p-4 rounded-xl text-white">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Tamu Puas</div>
              </div>
              <div className="glass-effect backdrop-blur-lg p-4 rounded-xl text-white">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm text-white/80">Rating Rata-rata</div>
              </div>
              <div className="glass-effect backdrop-blur-lg p-4 rounded-xl text-white">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-white/80">Lokasi Premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Villas Section */}
      <section className="py-20 bg-forest-50">
        <div className="section-padding">
          <SectionHeading
            title="Villa Unggulan Kami"
            subtitle="Temukan villa premium dengan lokasi terbaik dan fasilitas lengkap yang akan membuat liburan Anda berkesan."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVillas.map((villa, index) => (
              <VillaCard 
                key={villa.id} 
                villa={villa} 
                featured 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/villas">
              <Button 
                variant="outline" 
                className="rounded-full px-6 border-forest-300 text-forest-700 hover:bg-forest-100"
              >
                Lihat Semua Villa <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-forest-100 text-forest-800 text-sm font-medium">
                Tentang Villa Hijau
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-forest-900 mb-6">
                Pengalaman Menginap Yang Tak Terlupakan
              </h2>
              <p className="text-forest-600 mb-6">
                Villa Hijau adalah penyedia akomodasi premium di Yogyakarta yang menawarkan villa-villa mewah dengan lokasi strategis dan pemandangan menakjubkan. Kami berkomitmen untuk memberikan pengalaman menginap yang berkesan dengan standar kualitas tertinggi.
              </p>
              <p className="text-forest-600 mb-6">
                Setiap villa kami dirancang dengan perhatian terhadap detail, memadukan kenyamanan modern dengan sentuhan lokal yang memberikan pengalaman autentik. Dari villa dengan pemandangan Gunung Merapi hingga villa tepi pantai, kami memiliki pilihan yang sempurna untuk setiap jenis liburan.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-forest-700">
                  <Shield className="h-5 w-5 text-forest-600" />
                  <span>Keamanan 24 Jam</span>
                </div>
                <div className="flex items-center gap-2 text-forest-700">
                  <Users className="h-5 w-5 text-forest-600" />
                  <span>Staf Profesional</span>
                </div>
                <div className="flex items-center gap-2 text-forest-700">
                  <Award className="h-5 w-5 text-forest-600" />
                  <span>Kualitas Premium</span>
                </div>
                <div className="flex items-center gap-2 text-forest-700">
                  <CalendarDays className="h-5 w-5 text-forest-600" />
                  <span>Fleksibilitas Tinggi</span>
                </div>
              </div>
              <Link to="/tentang-kami">
                <Button className="rounded-full px-6 bg-forest-600 hover:bg-forest-700 text-white">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Villa Hijau" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-forest-900 font-medium">
                  "Pelayanan terbaik dan lokasi yang sangat strategis"
                </p>
                <p className="text-forest-600 text-sm mt-1">
                  — Keluarga Santoso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-forest-50">
        <div className="section-padding">
          <SectionHeading
            title="Mengapa Memilih Villa Hijau?"
            subtitle="Kami menyediakan kenyamanan dan fasilitas terbaik untuk pengalaman liburan yang tak terlupakan."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Keamanan Terjamin"
              description="Semua villa kami dilengkapi dengan sistem keamanan 24 jam dan staf keamanan profesional untuk ketenangan pikiran Anda."
              className="animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            />
            <FeatureCard
              icon={Award}
              title="Fasilitas Premium"
              description="Dari kolam renang pribadi hingga dapur lengkap, semua villa kami dilengkapi dengan fasilitas premium untuk kenyamanan maksimal."
              className="animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            />
            <FeatureCard
              icon={Zap}
              title="Lokasi Strategis"
              description="Villa kami terletak di lokasi strategis dengan akses mudah ke berbagai destinasi wisata populer di Yogyakarta."
              className="animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            />
            <FeatureCard
              icon={Users}
              title="Pelayanan Prima"
              description="Tim kami siap memberikan pelayanan terbaik untuk memastikan kenyamanan dan kepuasan selama masa menginap Anda."
              className="animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            />
            <FeatureCard
              icon={MapPin}
              title="Pemandangan Indah"
              description="Nikmati pemandangan alam yang menakjubkan, dari Gunung Merapi hingga pantai dan hamparan sawah yang hijau."
              className="animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            />
            <FeatureCard
              icon={CalendarDays}
              title="Fleksibilitas Tinggi"
              description="Kami menawarkan opsi pemesanan yang fleksibel dan berbagai pilihan villa untuk menyesuaikan kebutuhan liburan Anda."
              className="animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-20 bg-forest-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)',
          }}
        ></div>
        <div className="section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-6">
              Siap Untuk Pengalaman Menginap Yang Berbeda?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Pesan villa premium kami sekarang dan nikmati liburan tak terlupakan di Yogyakarta dengan keindahan alam dan kenyamanan modern.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/villas">
                <Button size="lg" className="rounded-full px-8 bg-white text-forest-800 hover:bg-forest-100">
                  Jelajahi Villa
                </Button>
              </Link>
              <Link to="/kontak">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white/40 hover:bg-white/10">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="section-padding">
          <SectionHeading
            title="Apa Kata Mereka?"
            subtitle="Lihat apa yang dikatakan tamu kami tentang pengalaman menginap di villa-villa kami."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button 
                variant="outline" 
                className="rounded-full px-6 border-forest-300 text-forest-700 hover:bg-forest-100"
              >
                Lihat Semua Testimonial <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-forest-50">
        <div className="section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">
              Dapatkan Penawaran Eksklusif
            </h2>
            <p className="text-forest-600 mb-8">
              Berlangganan newsletter kami untuk mendapatkan informasi dan penawaran spesial untuk pengalaman liburan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex h-10 w-full rounded-full border border-forest-200 bg-white px-6 py-5 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-forest-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="rounded-full px-6 bg-forest-600 hover:bg-forest-700 text-white sm:w-auto">
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
