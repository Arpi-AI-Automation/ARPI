import React from 'react';
import { ArrowRight, Zap, Bot, Cpu } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#0B0F26] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#14F0F0] rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[#0063FF] rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-[#14F0F0] rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-[#0063FF] rotate-12 animate-bounce delay-500"></div>
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="#14F0F0" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="3" fill="#14F0F0"/>
              <path d="M50 10v40m0 20v30m-40 0h40m20 0h30" stroke="#14F0F0" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Agents That Work{' '}
              <span className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] bg-clip-text text-transparent">
                While You Sleep
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We build smart AI systems to automate your calls, chats, emails, and lead capture — 
              so you can grow without burnout.
            </p>

            <div className="space-y-4">
              <button className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#14F0F0]/25 flex items-center justify-center lg:justify-start space-x-2">
                <span>Get Your Free AI Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-gray-400">
                No code. No stress. Just results.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              <div className="w-full h-full max-w-lg">
                <spline-viewer 
                  url="https://prod.spline.design/m9ZG48hHChBVRIxG/scene.splinecode"
                  className="w-full h-full rounded-2xl"
                  style={{
                    background: 'transparent',
                    border: 'none'
                  }}
                />
              </div>
              
              {/* Subtle glow effect behind Spline */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;