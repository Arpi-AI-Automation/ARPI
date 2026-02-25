import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTAStrip = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Stop Losing Revenue to Conversion Friction
        </h2>
        
        <a href="#contact" className="group bg-white text-[#0B0F26] px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-3 mb-6">
          <span>Get Your Revenue Friction Snapshot</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="text-white/90 text-lg">
          Identify what's costing you revenue before you scale ad spend.
        </p>
      </div>
    </section>
  );
};

export default CTAStrip;
