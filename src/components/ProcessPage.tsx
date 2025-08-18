import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Layers, 
  Zap, 
  Cog, 
  Star, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Brain,
  Settings,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const ProcessPage = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Polish Every Process. Accelerate with AI.",
    "Deploy Smarter. Zoom into Perfection with Automation."
  ];

  // Rotate taglines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'PLAN',
      description: 'We start by mapping your workflows and identifying the highest-impact opportunities for automation. Our team uncovers inefficiencies, bottlenecks, and repetitive tasks so we know exactly where AI can deliver the most value.',
      icon: Target,
      color: 'from-[#14F0F0] to-[#0063FF]',
      bgColor: 'from-[#14F0F0]/10 to-[#0063FF]/10'
    },
    {
      number: '02',
      title: 'DESIGN',
      description: 'Next, we architect a custom automation blueprint tailored to your business. Every process is carefully designed to integrate seamlessly with your existing systems while laying the foundation for scalable, future-proof automation.',
      icon: Layers,
      color: 'from-[#0063FF] to-[#14F0F0]',
      bgColor: 'from-[#0063FF]/10 to-[#14F0F0]/10'
    },
    {
      number: '03',
      title: 'ZOOM',
      description: 'Speed matters. We rapidly prototype AI solutions, letting you see results early and often. This accelerated approach keeps projects agile, reduces risk, and ensures you\'re always moving forward at the pace of innovation.',
      icon: Zap,
      color: 'from-[#14F0F0] to-[#0063FF]',
      bgColor: 'from-[#14F0F0]/10 to-[#0063FF]/10'
    },
    {
      number: '04',
      title: 'PROCESS',
      description: 'Once validated, we connect intelligent agents directly into your operations. From customer communication to data handling and reporting, ARPI ensures every process runs smoothly and efficiently, powered by automation.',
      icon: Cog,
      color: 'from-[#0063FF] to-[#14F0F0]',
      bgColor: 'from-[#0063FF]/10 to-[#14F0F0]/10'
    },
    {
      number: '05',
      title: 'POLISH',
      description: 'Automation isn\'t just about speed — it\'s about precision. We refine, test, and optimize your workflows to guarantee reliability and peak performance. Our goal is to deliver systems that feel seamless and invisible, yet powerful.',
      icon: Star,
      color: 'from-[#14F0F0] to-[#0063FF]',
      bgColor: 'from-[#14F0F0]/10 to-[#0063FF]/10'
    },
    {
      number: '06',
      title: 'AUTOMATE',
      description: 'Finally, we deploy your full automation ecosystem. Your business runs on autopilot, with AI agents managing critical processes day and night. You focus on growth — we make sure the machine never stops running.',
      icon: Rocket,
      color: 'from-[#0063FF] to-[#14F0F0]',
      bgColor: 'from-[#0063FF]/10 to-[#14F0F0]/10'
    }
  ];

  const benefits = [
    'Streamlined workflows that eliminate bottlenecks',
    'Custom AI solutions built for your specific needs',
    'Rapid prototyping and iterative development',
    'Seamless integration with existing systems',
    'Continuous optimization and performance monitoring',
    'Full automation deployment with ongoing support'
  ];

  return (
    <div className="min-h-screen bg-[#0B0F26]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0B0F26] relative overflow-hidden">
        {/* Futuristic Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Network nodes */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#14F0F0] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[#0063FF] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-[#14F0F0] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#0063FF] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Circuit lines */}
          <div className="absolute top-32 left-32 w-24 h-0.5 bg-gradient-to-r from-[#14F0F0]/30 to-transparent"></div>
          <div className="absolute bottom-40 right-40 w-32 h-0.5 bg-gradient-to-l from-[#0063FF]/30 to-transparent"></div>
          <div className="absolute top-1/2 left-10 w-0.5 h-20 bg-gradient-to-b from-[#14F0F0]/30 to-transparent"></div>
          <div className="absolute top-1/3 right-16 w-0.5 h-16 bg-gradient-to-t from-[#0063FF]/30 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Brain className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our System: Smart Automation,{' '}
            <span className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] bg-clip-text text-transparent">
              Step by Step
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            From planning to automation, ARPI polishes every process to perfection.
          </p>
        </div>
      </section>

      {/* Tagline Highlight Section */}
      <section className="py-16 bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border-y border-[#14F0F0]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white transition-all duration-1000 ease-in-out">
              {taglines[currentTagline]}
            </h2>
          </div>
        </div>
      </section>

      {/* Process Flow Visual */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
              OUR PROCESS
            </h2>
            <p className="text-xl text-gray-600">
              Our System – ARPI.ai
            </p>
          </div>

          {/* Horizontal Process Flow */}
          <div className="relative mb-16">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#14F0F0] to-[#0063FF] transform -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-6 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm font-bold text-[#0B0F26] mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0F26] mb-2">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}>
                {/* Content Side */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#14F0F0] mb-2">
                          STEP {step.number}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${step.bgColor} border border-[#14F0F0]/30 rounded-2xl p-12 relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full animate-pulse`}></div>
                        <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full animate-pulse`} style={{animationDelay: '1s'}}></div>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                          <step.icon className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-[#0B0F26] mb-2">
                          {step.title}
                        </div>
                        <div className="text-[#14F0F0] text-sm font-semibold">
                          Step {step.number}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              What You Get
            </h2>
            <p className="text-xl text-gray-600">
              Every step delivers measurable value to your business
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#14F0F0] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Let ARPI Accelerate Your Systems with Intelligent Automation
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Ready to transform your business processes? Our proven 6-step methodology delivers results that scale.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Automation Journey Today
            </h3>
            <p className="text-white/90 text-lg">
              Book a free consultation and discover how our systematic approach can revolutionize your operations.
            </p>
          </div>

          <a href="#contact" className="group bg-white text-[#0B0F26] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ProcessPage;