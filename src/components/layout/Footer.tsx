
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-50 pt-16 pb-8 border-t border-forest-100">
      <div className="section-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-16">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-gradient-green">Villa<span className="text-forest-700">Hijau</span></span>
            </Link>
            <p className="text-forest-700 mt-4 max-w-sm">
              Villa Hijau menawarkan penginapan mewah di tengah keindahan alam Yogyakarta. Nikmati pengalaman menginap premium dengan suasana yang tenang dan pemandangan yang menakjubkan.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://instagram.com" className="text-forest-600 hover:text-forest-800 transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com" className="text-forest-600 hover:text-forest-800 transition-colors">
                <Facebook />
              </a>
              <a href="https://twitter.com" className="text-forest-600 hover:text-forest-800 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-forest-900 mb-4">Villa Kami</h3>
            <ul className="space-y-3 text-forest-700">
              <li>
                <Link to="/villas/villa-kaliurang" className="hover:text-forest-900 transition-colors">Villa Kaliurang</Link>
              </li>
              <li>
                <Link to="/villas/villa-merapi" className="hover:text-forest-900 transition-colors">Villa Merapi</Link>
              </li>
              <li>
                <Link to="/villas/villa-sleman" className="hover:text-forest-900 transition-colors">Villa Sleman</Link>
              </li>
              <li>
                <Link to="/villas/villa-parangtritis" className="hover:text-forest-900 transition-colors">Villa Parangtritis</Link>
              </li>
              <li>
                <Link to="/villas/villa-prambanan" className="hover:text-forest-900 transition-colors">Villa Prambanan</Link>
              </li>
              <li>
                <Link to="/villas" className="hover:text-forest-900 transition-colors">Semua Villa</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-forest-900 mb-4">Layanan</h3>
            <ul className="space-y-3 text-forest-700">
              <li>
                <Link to="/reservasi" className="hover:text-forest-900 transition-colors">Reservasi</Link>
              </li>
              <li>
                <Link to="/fasilitas" className="hover:text-forest-900 transition-colors">Fasilitas</Link>
              </li>
              <li>
                <Link to="/paket-wisata" className="hover:text-forest-900 transition-colors">Paket Wisata</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-forest-900 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/kebijakan" className="hover:text-forest-900 transition-colors">Kebijakan</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-forest-900 mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-forest-700">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-forest-600 mt-0.5" />
                <span>Jl. Kaliurang KM 19, Yogyakarta, Indonesia 55581</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-forest-600" />
                <a href="tel:+6281234567890" className="hover:text-forest-900 transition-colors">+62 812-3456-7890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-forest-600" />
                <a href="mailto:info@villahijau.com" className="hover:text-forest-900 transition-colors">info@villahijau.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-forest-200 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between gap-4 text-forest-600 text-sm">
          <p>© 2023 Villa Hijau. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <Link to="/kebijakan-privasi" className="hover:text-forest-900 transition-colors">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan" className="hover:text-forest-900 transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
