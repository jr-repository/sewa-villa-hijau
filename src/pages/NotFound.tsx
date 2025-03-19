
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

export const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-forest-900 mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-forest-800 mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-forest-600 mb-8">
            Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
          </p>
          <Link to="/">
            <Button className="bg-forest-600 hover:bg-forest-700 text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
