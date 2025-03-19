
import React from 'react';
import { Check, Users, Award, Leaf, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-forest-100 to-white">
        <div className="section-padding">
          <SectionHeading
            title="Tentang Villa Hijau"
            subtitle="Mengenal lebih dekat penyedia akomodasi villa premium di Yogyakarta"
            centered
          />
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-forest-100 text-forest-800 text-sm font-medium">
                Cerita Kami
              </span>
              <h2 className="text-3xl font-bold text-forest-900 mb-6">
                Menghadirkan Pengalaman Liburan Premium di Yogyakarta
              </h2>
              <p className="text-forest-700 mb-4">
                Villa Hijau didirikan pada tahun 2015 dengan visi untuk menghadirkan akomodasi premium yang memanfaatkan keindahan alam Yogyakarta. Kami percaya bahwa liburan yang sempurna hadir dari kombinasi antara kenyamanan modern, pelayanan terbaik, dan keindahan alam yang menakjubkan.
              </p>
              <p className="text-forest-700 mb-6">
                Berawal dari sebuah villa di Kaliurang dengan pemandangan Gunung Merapi, kini Villa Hijau telah berkembang dengan lebih dari 10 properti premium di berbagai lokasi strategis di Yogyakarta. Setiap villa kami dirancang dengan perhatian terhadap detail, memadukan kenyamanan modern dengan sentuhan lokal yang memberikan pengalaman liburan yang otentik dan berkesan.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-forest-100 text-forest-600 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-forest-700">Villa premium dengan lokasi strategis di Yogyakarta</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-forest-100 text-forest-600 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-forest-700">Pelayanan profesional dan ramah untuk kenyamanan maksimal</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-forest-100 text-forest-600 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-forest-700">Fokus pada pengalaman menginap yang berkesan dan autentik</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt="Villa Hijau Story"
                className="rounded-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg p-4 shadow-lg max-w-[200px]">
                <h3 className="text-forest-900 font-semibold text-lg mb-1">Sejak 2015</h3>
                <p className="text-forest-600 text-sm">Melayani ribuan tamu dengan pengalaman premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-forest-50">
        <div className="section-padding">
          <SectionHeading
            title="Nilai-Nilai Kami"
            subtitle="Prinsip yang mendasari setiap layanan dan pengalaman yang kami tawarkan"
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
              <div className="p-3 mb-4 inline-block rounded-lg bg-forest-100 text-forest-600">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Pelayanan Prima
              </h3>
              <p className="text-forest-600 text-sm">
                Kami berkomitmen untuk memberikan pelayanan terbaik dengan pendekatan personal untuk setiap tamu kami.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
              <div className="p-3 mb-4 inline-block rounded-lg bg-forest-100 text-forest-600">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Kualitas Premium
              </h3>
              <p className="text-forest-600 text-sm">
                Kami tidak berkompromi dengan kualitas, dari fasilitas villa hingga pelayanan yang kami berikan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
              <div className="p-3 mb-4 inline-block rounded-lg bg-forest-100 text-forest-600">
                <Leaf size={24} />
              </div>
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Harmoni dengan Alam
              </h3>
              <p className="text-forest-600 text-sm">
                Kami mendesain villa yang menyatu dengan keindahan alam sekitar dan mempraktikkan operasional yang ramah lingkungan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
              <div className="p-3 mb-4 inline-block rounded-lg bg-forest-100 text-forest-600">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Pengalaman Autentik
              </h3>
              <p className="text-forest-600 text-sm">
                Kami menciptakan pengalaman menginap yang autentik dengan sentuhan budaya lokal untuk kenangan tak terlupakan.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="section-padding">
          <SectionHeading
            title="Tim Kami"
            subtitle="Kenali orang-orang hebat di balik Villa Hijau yang selalu siap melayani Anda"
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto">
                  <img 
                    src="https://i.pravatar.cc/300?img=11" 
                    alt="CEO Villa Hijau"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-forest-900">Adi Wijaya</h3>
              <p className="text-forest-600 mb-2">Founder & CEO</p>
              <p className="text-forest-700 text-sm">
                Berpengalaman 15 tahun di industri perhotelan dan pariwisata
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto">
                  <img 
                    src="https://i.pravatar.cc/300?img=12" 
                    alt="Operations Manager Villa Hijau"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-forest-900">Maya Sari</h3>
              <p className="text-forest-600 mb-2">Operations Manager</p>
              <p className="text-forest-700 text-sm">
                Memastikan standar kualitas tinggi di semua villa kami
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto">
                  <img 
                    src="https://i.pravatar.cc/300?img=13" 
                    alt="Design Director Villa Hijau"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-forest-900">Budi Santoso</h3>
              <p className="text-forest-600 mb-2">Design Director</p>
              <p className="text-forest-700 text-sm">
                Mendesain villa yang menyatu dengan keindahan alam sekitar
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto">
                  <img 
                    src="https://i.pravatar.cc/300?img=14" 
                    alt="Customer Experience Villa Hijau"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-forest-900">Dian Pratiwi</h3>
              <p className="text-forest-600 mb-2">Customer Experience</p>
              <p className="text-forest-700 text-sm">
                Memastikan setiap tamu mendapatkan pengalaman terbaik
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">10+</div>
              <p className="text-forest-200">Villa Premium</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">5+</div>
              <p className="text-forest-200">Tahun Pengalaman</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">1,200+</div>
              <p className="text-forest-200">Tamu Puas</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">4.8</div>
              <p className="text-forest-200">Rating Rata-rata</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-forest-50">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-900 mb-4">
              Siap Untuk Pengalaman Menginap Terbaik?
            </h2>
            <p className="text-forest-700 mb-8">
              Jelajahi koleksi villa premium kami atau hubungi tim kami untuk informasi lebih lanjut dan pemesanan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/villas">
                <Button size="lg" className="rounded-full px-8 bg-forest-600 hover:bg-forest-700 text-white">
                  Jelajahi Villa Kami
                </Button>
              </Link>
              <Link to="/kontak">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-forest-300 text-forest-700 hover:bg-forest-100">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
