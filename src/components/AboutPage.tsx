import React from 'react';
import { 
  Target, 
  Zap, 
  TrendingUp, 
  Brain, 
  ArrowRight,
  CheckCircle,
  Users,
  Cog,
  Lightbulb,
  Building,
  Stethoscope,
  Hammer,
  Home,
  Star
} from 'lucide-react';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AboutPage = () => {
  const arpiValues = [
    {
      letter: 'A',
      title: 'Automated',
      description: 'Systems that work 24/7 without breaks, sick days, or inconsistency.',
      icon: Cog,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'R',
      title: 'Resource',
      description: 'Your AI team member that scales with your business growth.',
      icon: Users,
      color: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      letter: 'P',
      title: 'Performance',
      description: 'Measurable results that directly impact your bottom line.',
      icon: TrendingUp,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'I',
      title: 'Intelligence',
      description: 'Smart decision-making that adapts and improves over time.',
      icon: Brain,
      color: 'from-[#0063FF] to-[#14F0F0]'
    }
  ];

  const clientTypes = [
    {
      icon: Hammer,
      title: 'High-End Renovation & Remodeling',
      description: 'Kitchen, bathroom, and whole-home renovation companies handling $50K+ projects.'
    },
    {
      icon: Stethoscope,
      title: 'Specialty Clinics',
      description: 'Dermatology, cosmetic surgery, wellness centers, and medical practices.'
    },
    {
      icon: Building,
      title: 'Professional Services',
      description: 'Real estate professionals, consultants, and other service-based businesses.'
    }
  ];

  const benefits = [
    'Stop losing $100K+ leads to slow response times',
    'Qualify prospects automatically before they hit your calendar',
    'Scale without hiring more admin staff',
    'Turn your website into a 24/7 sales machine',
    'Focus on delivering service, not chasing leads'
  ];

  return (
    <div className="min-h-screen bg-[#0B0F26]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0B0F26] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#14F0F0] rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#0063FF] rotate-12 animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            We're Not Just Automating Work.{' '}
            <span className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] bg-clip-text text-transparent">
              We're Transforming How You Win Clients.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            ARPI.AI is a team of builders, strategists, and engineers who believe service businesses deserve better tools — ones that close leads, not just capture them.
          </p>
          
          <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-2xl text-white font-semibold">
              "We build AI that closes clients — while you sleep."
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              Built for the Builders
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ARPI was founded to empower time-strapped business owners — starting with high-end remodelers — to stop losing leads and scale their operations without hiring more staff or chasing down every contact form submission manually.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We know you're good at delivering exceptional service. You shouldn't have to become a full-time salesperson just to keep your pipeline full.
            </p>
            <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border-l-4 border-[#14F0F0] p-6 rounded-r-lg">
              <p className="text-xl font-semibold text-[#0B0F26] flex items-center">
                <Lightbulb className="w-6 h-6 mr-3 text-[#14F0F0]" />
                ARPI was created for people who are masters of their craft — not lead chasers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What ARPI Means Section */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">A</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              We Are ARPI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our philosophy: build systems that perform like humans — fast, smart, and scalable — without becoming a full-time job to manage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {arpiValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {value.letter} — {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              Powered by Mojsej
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mojsej Technology is the intelligent engine that drives ARPI's automation. It's not just another chatbot platform — it's a sophisticated system that thinks, adapts, and performs.
            </p>
            <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-lg p-6 mb-6">
              <p className="text-xl text-[#0B0F26] font-semibold text-center">
                "It models smart engagement, filters qualified leads, and guides conversations with real judgment — just like your best salesperson would."
              </p>
            </div>
            <div className="text-center">
              <a href="/technology" className="group bg-transparent border-2 border-[#14F0F0] text-[#14F0F0] px-6 py-3 rounded-lg font-semibold hover:bg-[#14F0F0] hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                <span>Learn About Our Technology</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ARPI VYPI Methodology Section */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Framework: ARPI VYPI
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              ARPI VYPI is the proven process that every client goes through — from initial system design to AI assistant execution.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">ARPI</h4>
                <p className="text-gray-300">Backend system design that automates your entire lead journey</p>
              </div>
              <div className="bg-gradient-to-r from-[#0063FF]/10 to-[#14F0F0]/10 border border-[#0063FF]/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">VYPI</h4>
                <p className="text-gray-300">AI assistant execution that handles every client interaction</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-lg p-6 mb-6">
              <p className="text-xl text-white font-semibold text-center">
                "We don't just give you a chatbot. We give you an engine that captures, qualifies, and converts — end to end."
              </p>
            </div>

            <div className="text-center">
              <a href="/methodology" className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 inline-flex items-center space-x-2">
                <span>Explore Our Methodology</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              Service Businesses With Big Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ARPI works best with businesses that rely on leads but don't have time to chase them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mb-6">
                  <client.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F26] mb-4">
                  {client.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0B0F26] mb-6 text-center">
              What Our Clients Achieve
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#14F0F0] flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Star className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to See It in Action?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We'll build you a live demo — using your brand, your services, and your city.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Custom Demo Will Show You:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-white/90">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>How leads interact with your AI assistant</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>Automatic qualification and booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>CRM integration and lead tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>ROI projections for your business</span>
              </div>
            </div>
          </div>

          <a href="#contact" className="group bg-white text-[#0B0F26] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>Request Your Free Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default AboutPage;