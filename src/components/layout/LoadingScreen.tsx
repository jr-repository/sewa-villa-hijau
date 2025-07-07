import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img 
            src="/assets/logo.png" 
            alt="VEXA Creative" 
            className="w-20 h-20 animate-pulse"
            onError={(e) => {
              // Fallback if logo doesn't exist
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin"></div>
        </div>
        <div className="text-lg font-medium text-gray-700 animate-pulse">
          Loading VEXA Creative...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;