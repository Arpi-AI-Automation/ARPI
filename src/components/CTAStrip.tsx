import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTAStrip = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let's Automate One Task For You — Free.
        </h2>
        
        <a href="#contact" className="group bg-white text-[#0B0F26] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto mb-4">
          <span>Get Free AI Demo</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="text-white/90">
          We'll build a personalized AI workflow you can test before you commit.
        </p>
      </div>
    </section>
  );
};

export default CTAStrip;