import React from 'react';
import { ArrowRight, Brain, Zap, MessageCircle, TrendingUp } from 'lucide-react';

const HeroVariant2 = () => {
  return (
    <section className="relative min-h-screen bg-[#0B0F26] overflow-hidden">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 border border-[#14F0F0] rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 border border-[#0063FF] rotate-12"></div>
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
            {/* Concept 2: Geometric AI Network */}
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Central Hexagon Hub */}
              <div className="relative">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] transform rotate-45 rounded-3xl flex items-center justify-center shadow-2xl shadow-[#14F0F0]/30 relative">
                  <div className="transform -rotate-45">
                    <Brain className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                  </div>
                  
                  {/* Pulsing border */}
                  <div className="absolute inset-0 border-2 border-[#14F0F0]/30 rounded-3xl animate-pulse"></div>
                </div>
                
                {/* Connected Nodes - Diamond Pattern */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Top Node */}
                  <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] transform rotate-45 rounded-xl shadow-lg" style={{transform: 'translateY(-120px) rotate(45deg)', top: '50%', left: '50%', marginLeft: '-24px', marginTop: '-24px'}}>
                    <div className="w-full h-full flex items-center justify-center transform -rotate-45">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Right Node */}
                  <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] transform rotate-45 rounded-xl shadow-lg" style={{transform: 'translateX(120px) rotate(45deg)', top: '50%', left: '50%', marginLeft: '-24px', marginTop: '-24px'}}>
                    <div className="w-full h-full flex items-center justify-center transform -rotate-45">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Bottom Node */}
                  <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] transform rotate-45 rounded-xl shadow-lg" style={{transform: 'translateY(120px) rotate(45deg)', top: '50%', left: '50%', marginLeft: '-24px', marginTop: '-24px'}}>
                    <div className="w-full h-full flex items-center justify-center transform -rotate-45">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Left Node */}
                  <div className="absolute w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] transform rotate-45 rounded-xl shadow-lg" style={{transform: 'translateX(-120px) rotate(45deg)', top: '50%', left: '50%', marginLeft: '-24px', marginTop: '-24px'}}>
                    <div className="w-full h-full flex items-center justify-center transform -rotate-45">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Connection Lines */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-64 h-64 lg:w-80 lg:h-80" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14F0F0" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0063FF" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path d="M100 40 L100 160 M40 100 L160 100" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant2;