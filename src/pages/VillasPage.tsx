
import React, { useState, useEffect } from 'react';
import { MapPin, Filter, Search, X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/section-heading';
import { VillaCard } from '@/components/ui/villa-card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { villas } from '@/data/villas';

const locations = [...new Set(villas.map(villa => villa.location))];
const priceRanges = [
  { id: 'all', label: 'Semua Harga' },
  { id: 'under-2500000', label: 'Dibawah Rp 2.500.000' },
  { id: '2500000-3000000', label: 'Rp 2.500.000 - Rp 3.000.000' },
  { id: 'above-3000000', label: 'Diatas Rp 3.000.000' }
];

const VillasPage = () => {
  const [filteredVillas, setFilteredVillas] = useState(villas);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    filterVillas();
  }, [selectedLocation, selectedPriceRange, searchQuery]);

  const filterVillas = () => {
    let result = [...villas];
    
    // Filter by location
    if (selectedLocation !== 'all') {
      result = result.filter(villa => villa.location === selectedLocation);
    }
    
    // Filter by price range
    if (selectedPriceRange !== 'all') {
      switch (selectedPriceRange) {
        case 'under-2500000':
          result = result.filter(villa => villa.price < 2500000);
          break;
        case '2500000-3000000':
          result = result.filter(villa => villa.price >= 2500000 && villa.price <= 3000000);
          break;
        case 'above-3000000':
          result = result.filter(villa => villa.price > 3000000);
          break;
        default:
          break;
      }
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        villa => 
          villa.name.toLowerCase().includes(query) || 
          villa.location.toLowerCase().includes(query) ||
          villa.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredVillas(result);
  };

  const resetFilters = () => {
    setSelectedLocation('all');
    setSelectedPriceRange('all');
    setSearchQuery('');
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-forest-100 to-white">
        <div className="section-padding">
          <SectionHeading
            title="Villa Kami"
            subtitle="Temukan villa premium kami dengan berbagai pilihan lokasi dan fasilitas untuk pengalaman liburan yang tak terlupakan."
            centered
          />
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="py-8 border-y border-forest-100">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari villa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-forest-200 rounded-full focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-500 hover:text-forest-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <div className="hidden md:flex gap-3 items-center">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-forest-600" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="border-none bg-transparent focus:outline-none focus:ring-0 text-forest-700 pr-8"
                >
                  <option value="all">Semua Lokasi</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <Separator orientation="vertical" className="h-6 bg-forest-200" />
              
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-forest-600" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="border-none bg-transparent focus:outline-none focus:ring-0 text-forest-700 pr-8"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>{range.label}</option>
                  ))}
                </select>
              </div>
              
              {(selectedLocation !== 'all' || selectedPriceRange !== 'all' || searchQuery) && (
                <>
                  <Separator orientation="vertical" className="h-6 bg-forest-200" />
                  <button
                    onClick={resetFilters}
                    className="text-forest-600 hover:text-forest-800 text-sm font-medium"
                  >
                    Reset Filter
                  </button>
                </>
              )}
            </div>
            
            <Button 
              variant="outline" 
              className="md:hidden w-full border-forest-200"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          {/* Mobile Filters */}
          {isFilterOpen && (
            <div className="mt-4 p-4 border border-forest-200 rounded-lg bg-white md:hidden">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-forest-700 mb-1 block">Lokasi</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full border border-forest-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                  >
                    <option value="all">Semua Lokasi</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-forest-700 mb-1 block">Rentang Harga</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full border border-forest-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                  >
                    {priceRanges.map(range => (
                      <option key={range.id} value={range.id}>{range.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="w-1/2 border-forest-200"
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                  <Button 
                    className="w-1/2 bg-forest-600 hover:bg-forest-700 text-white"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Terapkan
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Villas List */}
      <section className="py-16">
        <div className="section-padding">
          {filteredVillas.length > 0 ? (
            <>
              <p className="text-forest-600 mb-8">
                Menampilkan {filteredVillas.length} villa dari {villas.length} villa
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVillas.map((villa, index) => (
                  <VillaCard 
                    key={villa.id} 
                    villa={villa} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4">
                <Search className="h-12 w-12 text-forest-400 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-forest-900 mb-2">
                Tidak ada villa yang ditemukan
              </h3>
              <p className="text-forest-600 max-w-md mx-auto mb-6">
                Villa yang Anda cari tidak ditemukan. Coba ubah filter atau kata kunci pencarian Anda.
              </p>
              <Button 
                variant="outline" 
                className="border-forest-300 text-forest-700 hover:bg-forest-100"
                onClick={resetFilters}
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default VillasPage;
