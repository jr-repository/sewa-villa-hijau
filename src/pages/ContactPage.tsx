
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, AlertCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi";
    } else if (!/^[0-9+\-\s()]*$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subjek wajib diisi";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
    } else if (formData.message.length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Pesan Terkirim!",
          description: "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }, 1500);
    }
  };
  
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-forest-100 to-white">
        <div className="section-padding">
          <SectionHeading
            title="Hubungi Kami"
            subtitle="Kami siap membantu Anda dengan pertanyaan atau pemesanan villa di Yogyakarta"
            centered
          />
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm text-center">
              <div className="p-3 mb-4 inline-block rounded-full bg-forest-100 text-forest-600">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Telepon
              </h3>
              <p className="text-forest-600 mb-2">Senin - Minggu: 08.00 - 20.00 WIB</p>
              <a href="tel:+6281234567890" className="text-forest-700 font-medium hover:text-forest-900 transition-colors">
                +62 812-3456-7890
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm text-center">
              <div className="p-3 mb-4 inline-block rounded-full bg-forest-100 text-forest-600">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Email
              </h3>
              <p className="text-forest-600 mb-2">Kami akan membalas dalam 24 jam</p>
              <a href="mailto:info@villahijau.com" className="text-forest-700 font-medium hover:text-forest-900 transition-colors">
                info@villahijau.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm text-center">
              <div className="p-3 mb-4 inline-block rounded-full bg-forest-100 text-forest-600">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-semibold text-forest-900 mb-2">
                Kantor
              </h3>
              <p className="text-forest-600 mb-2">Senin - Jumat: 09.00 - 17.00 WIB</p>
              <p className="text-forest-700 font-medium">
                Jl. Kaliurang KM 19, Yogyakarta, Indonesia 55581
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-16 bg-forest-50">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-xl border border-forest-100 shadow-sm">
              <h2 className="text-2xl font-bold text-forest-900 mb-6">
                Kirim Pesan
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-forest-700 mb-2 font-medium">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-forest-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent`}
                      placeholder="Nama lengkap Anda"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-forest-700 mb-2 font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-forest-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-forest-700 mb-2 font-medium">
                      Nomor Telepon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-forest-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent`}
                      placeholder="+62 812 3456 7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-forest-700 mb-2 font-medium">
                      Subjek <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-forest-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent`}
                    >
                      <option value="" disabled>Pilih subjek</option>
                      <option value="Reservasi">Reservasi</option>
                      <option value="Informasi">Informasi</option>
                      <option value="Kerja Sama">Kerja Sama</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.subject}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-forest-700 mb-2 font-medium">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-forest-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent`}
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white py-6 rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loader mr-2"></span>
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Map and Business Hours */}
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden h-80 border border-forest-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.97055414075!2d110.38743008666524!3d-7.67690239483536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5eb57eae2c29%3A0x4027a76e3d8df72!2sKaliurang%2C%20Hargobinangun%2C%20Pakem%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1661323892853!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-forest-600" />
                  <h3 className="text-lg font-semibold text-forest-900">
                    Jam Operasional
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-forest-100">
                    <span className="text-forest-700">Senin - Jumat</span>
                    <span className="font-medium text-forest-900">09:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-forest-100">
                    <span className="text-forest-700">Sabtu</span>
                    <span className="font-medium text-forest-900">09:00 - 15:00 WIB</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-forest-700">Minggu</span>
                    <span className="font-medium text-forest-900">Tutup</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-forest-100">
                  <p className="text-forest-700 text-sm">
                    <span className="font-medium">Catatan:</span> Jam operasional untuk kantor pusat kami. Layanan reservasi dan customer service tersedia setiap hari dari 08:00 - 20:00 WIB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="section-padding">
          <SectionHeading
            title="Pertanyaan Umum"
            subtitle="Temukan jawaban untuk pertanyaan yang sering diajukan"
            centered
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
                <h3 className="text-lg font-semibold text-forest-900 mb-2">
                  Bagaimana cara melakukan reservasi?
                </h3>
                <p className="text-forest-700">
                  Anda dapat melakukan reservasi melalui website kami, menghubungi tim reservasi kami melalui telepon, atau mengirimkan email. Kami akan membalas dalam waktu 24 jam.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
                <h3 className="text-lg font-semibold text-forest-900 mb-2">
                  Berapa lama waktu check-in dan check-out?
                </h3>
                <p className="text-forest-700">
                  Waktu check-in adalah pukul 14:00 WIB dan waktu check-out adalah pukul 12:00 WIB. Namun, kami dapat mengakomodasi permintaan khusus jika tersedia.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
                <h3 className="text-lg font-semibold text-forest-900 mb-2">
                  Apakah ada deposit yang harus dibayarkan?
                </h3>
                <p className="text-forest-700">
                  Ya, kami memerlukan deposit sebesar 50% dari total biaya menginap untuk mengkonfirmasi reservasi Anda. Sisa pembayaran dapat dilakukan saat check-in.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
                <h3 className="text-lg font-semibold text-forest-900 mb-2">
                  Bagaimana kebijakan pembatalan reservasi?
                </h3>
                <p className="text-forest-700">
                  Pembatalan 7 hari atau lebih sebelum tanggal check-in akan mendapatkan pengembalian penuh. Pembatalan kurang dari 7 hari akan dikenakan biaya sesuai dengan ketentuan yang berlaku.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-forest-100 shadow-sm">
                <h3 className="text-lg font-semibold text-forest-900 mb-2">
                  Apakah ada layanan tambahan yang tersedia?
                </h3>
                <p className="text-forest-700">
                  Ya, kami menyediakan berbagai layanan tambahan seperti transportasi, paket wisata, chef pribadi, dan layanan pijat. Silakan hubungi kami untuk informasi lebih lanjut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
