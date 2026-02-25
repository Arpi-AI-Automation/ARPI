import React from 'react';
import { ArrowRight, TrendingUp, Zap, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#0B0F26] overflow-hidden flex items-center">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#14F0F0] rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-[#0063FF] rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-[#14F0F0] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight max-w-5xl mx-auto">
            Increase Revenue From The Traffic{' '}
            <span className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] bg-clip-text text-transparent">
              You're Already Paying For
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
            We help e-commerce brands identify and fix conversion friction across speed, funnel flow, and tracking — before you scale ad spend.
          </p>

          <div className="space-y-6">
            <a href="#contact" className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#14F0F0]/25 inline-flex items-center space-x-3">
              <span>Get Your Revenue Friction Snapshot</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-lg text-gray-400 font-medium">
              Built for e-commerce brands running paid traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

          <div className="relative">
            {/* Concept 3: Minimalist Stacked Layers */}
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Layered AI System */}
              <div className="relative">
                {/* Base Layer - Largest */}
                <div className="w-48 h-32 lg:w-56 lg:h-36 bg-gradient-to-r from-[#14F0F0]/20 to-[#0063FF]/20 rounded-3xl border border-[#14F0F0]/30 backdrop-blur-sm"></div>
                
                {/* Middle Layer */}
                <div className="absolute top-4 left-4 w-40 h-24 lg:w-48 lg:h-28 bg-gradient-to-r from-[#14F0F0]/40 to-[#0063FF]/40 rounded-2xl border border-[#14F0F0]/50 backdrop-blur-sm"></div>
                
                {/* Top Layer - Central Focus */}
                <div className="absolute top-8 left-8 w-32 h-16 lg:w-40 lg:h-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF] rounded-xl flex items-center justify-center shadow-2xl shadow-[#14F0F0]/30">
                  <Brain className="w-8 h-8 lg:w-10 lg:h-10 text-white mr-3" />
                  <div className="text-white font-bold text-sm lg:text-base">AI CORE</div>
                </div>
                
                {/* Floating Function Icons */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}>
                  <Mic className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3s', animationDelay: '2s'}}>
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                
                {/* Data Flow Indicators */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-[#14F0F0] rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-[#14F0F0] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-1 h-1 bg-[#14F0F0] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-[#0063FF] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <div className="w-1 h-1 bg-[#0063FF] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="w-1 h-1 bg-[#0063FF] rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
                  </div>
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