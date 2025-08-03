import React from 'react';
import { ArrowRight, Zap, Bot, Cpu, Brain, MessageCircle, Mic, Cog, TrendingUp, Target } from 'lucide-react';

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
            {/* New AI Automation Hero Graphic */}
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
              {/* Central AI Brain Hub */}
              <div className="relative">
                {/* Main AI Core */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#14F0F0] via-[#0063FF] to-[#14F0F0] rounded-full flex items-center justify-center shadow-2xl shadow-[#14F0F0]/40 relative">
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#14F0F0]/30 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full border border-[#0063FF]/40 animate-pulse"></div>
                  
                  {/* Central brain icon */}
                  <Brain className="w-16 h-16 lg:w-20 lg:h-20 text-white animate-pulse" />
                </div>
                
                {/* Orbiting AI Modules */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Chat Module */}
                  <div className="absolute w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-xl shadow-lg animate-float" style={{transform: 'rotate(0deg) translateX(80px) rotate(0deg)', transformOrigin: 'center'}}>
                    <div className="w-full h-full flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Voice Module */}
                  <div className="absolute w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] rounded-xl shadow-lg animate-float-delayed" style={{transform: 'rotate(90deg) translateX(80px) rotate(-90deg)', transformOrigin: 'center'}}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Mic className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Automation Module */}
                  <div className="absolute w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-xl shadow-lg animate-float" style={{transform: 'rotate(180deg) translateX(80px) rotate(-180deg)', transformOrigin: 'center', animationDelay: '1s'}}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Cog className="w-8 h-8 lg:w-10 lg:h-10 text-white animate-spin" style={{animationDuration: '4s'}} />
                    </div>
                  </div>
                  
                  {/* Analytics Module */}
                  <div className="absolute w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] rounded-xl shadow-lg animate-float-delayed" style={{transform: 'rotate(270deg) translateX(80px) rotate(-270deg)', transformOrigin: 'center', animationDelay: '0.5s'}}>
                    <div className="w-full h-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Data Flow Lines */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 border border-[#14F0F0]/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                  <div className="absolute w-32 h-32 lg:w-40 lg:h-40 border border-[#0063FF]/20 rounded-full animate-spin top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                </div>
                
                {/* Floating Data Particles */}
                <div className="absolute top-16 left-20 opacity-80">
                  <div className="w-3 h-3 bg-[#14F0F0] rounded-full animate-pulse shadow-lg shadow-[#14F0F0]/50"></div>
                </div>
                <div className="absolute bottom-20 right-24 opacity-70">
                  <div className="w-2 h-2 bg-[#0063FF] rounded-full animate-pulse shadow-lg shadow-[#0063FF]/50" style={{animationDelay: '2s'}}></div>
                </div>
                <div className="absolute top-32 right-16 opacity-60">
                  <div className="w-1 h-1 bg-[#14F0F0] rounded-full animate-pulse shadow-sm shadow-[#14F0F0]/50" style={{animationDelay: '3s'}}></div>
                </div>
                <div className="absolute bottom-32 left-16 opacity-75">
                  <div className="w-2 h-2 bg-[#0063FF] rounded-full animate-pulse shadow-lg shadow-[#0063FF]/50" style={{animationDelay: '1.5s'}}></div>
                </div>
                
                {/* Neural Network Connections */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
                  <svg className="w-64 h-64 lg:w-80 lg:h-80" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14F0F0" />
                        <stop offset="100%" stopColor="#0063FF" />
                      </linearGradient>
                    </defs>
                    <path d="M100 50 L150 100 L100 150 L50 100 Z" fill="none" stroke="url(#connectionGradient)" strokeWidth="1" className="animate-pulse" />
                    <path d="M100 30 L170 100 L100 170 L30 100 Z" fill="none" stroke="url(#connectionGradient)" strokeWidth="0.5" className="animate-pulse" style={{animationDelay: '1s'}} />
                  </svg>
                </div>
                
                {/* Secondary AI Nodes */}
                <div className="absolute -top-8 -left-8 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#14F0F0]/80 to-[#0063FF]/80 rounded-lg animate-float opacity-90 shadow-lg shadow-[#14F0F0]/30">
                  <div className="w-full h-full flex items-center justify-center">
                    <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0063FF]/80 to-[#14F0F0]/80 rounded-lg animate-float-delayed opacity-90 shadow-lg shadow-[#0063FF]/30">
                  <div className="w-full h-full flex items-center justify-center">
                    <Cpu className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>
                
                <div className="absolute -top-12 -right-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#14F0F0]/70 to-[#0063FF]/70 rounded-full animate-float opacity-80 shadow-md shadow-[#14F0F0]/25">
                  <div className="w-full h-full flex items-center justify-center">
                    <Bot className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-12 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#0063FF]/70 to-[#14F0F0]/70 rounded-full animate-float-delayed opacity-80 shadow-md shadow-[#0063FF]/25">
                  <div className="w-full h-full flex items-center justify-center">
                    <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
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