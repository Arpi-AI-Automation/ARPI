import React from 'react';
import { ArrowRight, Brain, MessageCircle, Mic, TrendingUp } from 'lucide-react';

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
            {/* Simplified Hero Graphic - Concept 1: Minimal Orbiting System */}
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Central AI Core - Simplified */}
              <div className="relative">
                {/* Main AI Core - Cleaner Design */}
                <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-full flex items-center justify-center shadow-2xl shadow-[#14F0F0]/30 relative">
                  {/* Single pulsing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#14F0F0]/20 animate-pulse"></div>
                  
                  {/* Central brain icon - larger and cleaner */}
                  <Brain className="w-20 h-20 lg:w-24 lg:h-24 text-white" />
                </div>
                
                {/* Simplified Orbiting Elements - Only 3 key modules */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{animationDuration: '20s'}}>
                  {/* Chat Module - Top */}
                  <div className="absolute w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl shadow-lg" style={{transform: 'translateY(-100px)', top: '50%', left: '50%', marginLeft: '-32px', marginTop: '-32px'}}>
                    <div className="w-full h-full flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Voice Module - Bottom Left */}
                  <div className="absolute w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] rounded-2xl shadow-lg" style={{transform: 'translate(-70px, 70px)', top: '50%', left: '50%', marginLeft: '-32px', marginTop: '-32px'}}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Analytics Module - Bottom Right */}
                  <div className="absolute w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl shadow-lg" style={{transform: 'translate(70px, 70px)', top: '50%', left: '50%', marginLeft: '-32px', marginTop: '-32px'}}>
                    <div className="w-full h-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Simplified Connection Ring */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-56 h-56 lg:w-64 lg:h-64 border border-[#14F0F0]/20 rounded-full"></div>
                </div>
                
                {/* Minimal Floating Particles - Only 3 */}
                <div className="absolute top-20 left-16 opacity-60">
                  <div className="w-2 h-2 bg-[#14F0F0] rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-24 right-20 opacity-50">
                  <div className="w-1.5 h-1.5 bg-[#0063FF] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
                <div className="absolute top-32 right-12 opacity-40">
                  <div className="w-1 h-1 bg-[#14F0F0] rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
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