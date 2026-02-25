import React from 'react';
import { Zap, BarChart3, Target, Shield, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const analysisAreas = [
    {
      icon: Zap,
      title: 'Speed & Load Behavior',
      description: 'Page load times, Core Web Vitals, mobile performance, and user experience friction points.',
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      icon: Target,
      title: 'Funnel Structure',
      description: 'Checkout flow optimization, form abandonment analysis, and conversion path efficiency.',
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      icon: BarChart3,
      title: 'Tracking & Attribution',
      description: 'Pixel implementation, data accuracy, attribution modeling, and revenue tracking gaps.',
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      icon: Shield,
      title: 'Trust & Clarity Signals',
      description: 'Social proof placement, messaging clarity, security indicators, and credibility factors.',
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0B0F26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Analyze
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive revenue friction analysis across four critical areas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {analysisAreas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {area.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="group bg-transparent border-2 border-[#14F0F0] text-[#14F0F0] px-8 py-4 rounded-lg font-semibold hover:bg-[#14F0F0] hover:text-[#0B0F26] transition-all duration-300 inline-flex items-center space-x-2">
            <span>Get Your Friction Analysis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
