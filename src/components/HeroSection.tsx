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
              <a href="#contact" className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#14F0F0]/25 inline-flex items-center space-x-2">
                <span>Get Your Free AI Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-sm text-gray-400">
                No code. No stress. Just results.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Hero Graphic - Multiple Size Variations */}
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Main AI Network Graphic */}
              <div className="relative">
                {/* Central Hub with Bot Icon */}
                <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#14F0F0]/30 animate-pulse">
                  <Bot className="w-20 h-20 lg:w-24 lg:w-24 text-white" />
                </div>
                
                {/* Connected Network Nodes */}
                <div className="absolute -top-12 -left-12 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] rounded-2xl animate-float opacity-90 shadow-xl shadow-[#0063FF]/25">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-16 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-xl animate-float-delayed opacity-80 shadow-lg shadow-[#14F0F0]/25">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -left-16 w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] rounded-2xl animate-float opacity-85 shadow-xl shadow-[#0063FF]/25">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-12 -right-12 w-18 h-18 lg:w-22 lg:h-22 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-xl animate-float-delayed opacity-90 shadow-lg shadow-[#14F0F0]/25">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>
                
                {/* Connection Lines */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 border border-[#14F0F0]/20 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
                  <div className="absolute w-48 h-48 lg:w-60 lg:h-60 border border-[#0063FF]/15 rounded-full animate-spin top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
                </div>
                
                {/* Floating Data Points */}
                <div className="absolute top-20 left-24 opacity-70">
                  <div className="w-2 h-2 bg-[#14F0F0] rounded-full animate-pulse shadow-lg shadow-[#14F0F0]/50"></div>
                </div>
                <div className="absolute bottom-20 right-28 opacity-70">
                  <div className="w-2 h-2 bg-[#0063FF] rounded-full animate-pulse shadow-lg shadow-[#0063FF]/50" style={{animationDelay: '2s'}}></div>
                </div>
                <div className="absolute top-32 right-20 opacity-60">
                  <div className="w-1 h-1 bg-[#14F0F0] rounded-full animate-pulse shadow-sm shadow-[#14F0F0]/50" style={{animationDelay: '3s'}}></div>
                </div>
                
                {/* Tech Enhancement Icons */}
                <div className="absolute top-16 left-32 opacity-50">
                  <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-[#14F0F0] animate-pulse" />
                </div>
                <div className="absolute bottom-16 right-32 opacity-50">
                  <Cpu className="w-6 h-6 lg:w-8 lg:h-8 text-[#0063FF] animate-pulse" style={{animationDelay: '1s'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;