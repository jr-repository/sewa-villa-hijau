
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Villa', href: '/villas' },
    { 
      name: 'Destinasi', 
      href: '#',
      children: [
        { name: 'Kaliurang', href: '/destinasi/kaliurang' },
        { name: 'Prambanan', href: '/destinasi/prambanan' },
        { name: 'Pantai Selatan', href: '/destinasi/pantai-selatan' },
        { name: 'Malioboro', href: '/destinasi/malioboro' },
      ]
    },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Kontak', href: '/kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="section-padding mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient-green">Villa<span className="text-forest-700">Hijau</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => 
              !item.children ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-forest-700 ${
                    location.pathname === item.href 
                      ? 'text-forest-700' 
                      : 'text-forest-900'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium text-forest-900 transition-colors hover:text-forest-700 gap-1">
                    {item.name} <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-44 rounded-xl overflow-hidden">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link to={child.href} className="w-full cursor-pointer">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </div>
          
          <div className="hidden lg:flex">
            <Button className="rounded-full px-6 bg-forest-600 hover:bg-forest-700 text-white">
              Pesan Sekarang
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-forest-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 glass-effect shadow-md transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navigation.map((item) => (
            <div key={item.name} className="py-2">
              {!item.children ? (
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href 
                      ? 'text-forest-700' 
                      : 'text-forest-900 hover:text-forest-700'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-forest-900 hover:text-forest-700">
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={16} 
                      className="transition duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <div className="ml-4 mt-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-forest-800 hover:text-forest-700"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Button className="w-full rounded-full py-5 bg-forest-600 hover:bg-forest-700 text-white">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
