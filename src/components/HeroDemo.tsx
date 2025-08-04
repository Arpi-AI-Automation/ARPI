import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from './HeroSection';
import HeroVariant2 from './HeroVariant2';
import HeroVariant3 from './HeroVariant3';

const HeroDemo = () => {
  const [currentVariant, setCurrentVariant] = useState(0);
  
  const variants = [
    { name: 'Concept 1: Minimal Orbiting', component: HeroSection },
    { name: 'Concept 2: Geometric Network', component: HeroVariant2 },
    { name: 'Concept 3: Layered System', component: HeroVariant3 }
  ];

  const nextVariant = () => {
    setCurrentVariant((prev) => (prev + 1) % variants.length);
  };

  const prevVariant = () => {
    setCurrentVariant((prev) => (prev - 1 + variants.length) % variants.length);
  };

  const CurrentComponent = variants[currentVariant].component;

  return (
    <div className="relative">
      {/* Hero Variant Display */}
      <CurrentComponent />
      
      {/* Variant Selector Overlay */}
      <div className="fixed top-20 right-4 z-50 bg-[#0B0F26]/90 backdrop-blur-sm border border-[#14F0F0]/30 rounded-lg p-4">
        <div className="text-white text-sm mb-3 font-semibold">
          Hero Concepts ({currentVariant + 1}/3)
        </div>
        
        <div className="text-[#14F0F0] text-xs mb-4">
          {variants[currentVariant].name}
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={prevVariant}
            className="w-8 h-8 bg-gradient-to-r from-[#14F0F0] to-[#0063FF] rounded-full flex items-center justify-center hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          
          <button
            onClick={nextVariant}
            className="w-8 h-8 bg-gradient-to-r from-[#14F0F0] to-[#0063FF] rounded-full flex items-center justify-center hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
        
        {/* Variant Indicators */}
        <div className="flex space-x-1 mt-3">
          {variants.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVariant(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentVariant 
                  ? 'bg-[#14F0F0]' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;