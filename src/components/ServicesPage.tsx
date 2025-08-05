import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  RefreshCw, 
  Database, 
  FileText, 
  Cog, 
  Globe, 
  Play, 
  Target, 
  Brain, 
  Settings, 
  Zap,
  Headphones,
  Mail,
  RotateCcw,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Star
} from 'lucide-react';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const ServicesPage = () => {
  const conversationalServices = [
    {
      title: 'Voice AI Assistants',
      description: '24/7 voicebots that answer missed calls, qualify leads, and book appointments even while you\'re on-site or offline.',
      icon: Phone,
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      title: 'AI Chatbots (Web + SMS)',
      description: 'Smart, branded chatbots that live on your website, social media, or texting channels, guiding visitors from curiosity to consultation.',
      icon: MessageCircle,
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      title: 'Follow-Up Automations',
      description: 'Automated SMS, email, and voice follow-ups that keep leads warm, nudge cold ones, and close deals, all hands-free.',
      icon: RefreshCw,
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    }
  ];

  const workflowServices = [
    {
      title: 'CRM Automation & Lead Routing',
      description: 'Auto-assign leads based on location, service type, or budget. Sync conversations and form data to your CRM, spreadsheet, or inbox.',
      icon: Database,
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      title: 'Form-to-Conversation Flows',
      description: 'Transform basic contact forms into dynamic experiences with logic-based flows that pre-qualify and engage leads before you ever reply.',
      icon: FileText,
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      title: 'Custom AI Flows with Make.com',
      description: 'End-to-end workflow builds that connect your site, CRM, calendar, email tools, and more. No-code, fully managed.',
      icon: Cog,
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    }
  ];

  const demoServices = [
    {
      title: 'AI-Powered Landing Pages',
      description: 'Custom-built landing pages with embedded voice/chat AI, designed for high conversion and lead quality.',
      icon: Globe,
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      title: 'Live Demo Experiences',
      description: 'We build branded demo experiences you can share with prospects, embed on your site, or test in real-time.',
      icon: Play,
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      title: 'Outreach & Funnel Support',
      description: 'Scripts, outreach flows, and AI-automated responses to boost your cold outreach, retargeting, or reactivation campaigns.',
      icon: Target,
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    }
  ];

  const strategyServices = [
    {
      title: 'AI Strategy Consulting',
      description: 'We help you map where automation fits your business and build the blueprint for growth.',
      icon: Brain,
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      title: 'Custom Agent Builds (Voiceflow, Vapi, Bland, etc.)',
      description: 'We design and deploy advanced agents using tools like Voiceflow, Vapi, Bland AI, and Bolt. Fully branded and purpose-built.',
      icon: Settings,
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      title: 'End-to-End Implementation',
      description: 'We handle setup, testing, revisions, integrations, and launch so you don\'t need to worry about the tech.',
      icon: Zap,
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    }
  ];

  const supportServices = [
    {
      title: 'AI Support Chatbots',
      description: 'Automated website or SMS-based chatbots that handle FAQs, project updates, appointment changes, and more, instantly.',
      icon: MessageCircle,
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      title: 'Voice Support Hotlines',
      description: 'AI voice agents that answer support calls, provide updates, and escalate when needed, 24/7.',
      icon: Phone,
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      title: 'Smart Email & Ticket Routing',
      description: 'AI-powered email responders that auto-reply, assign tickets, and even resolve common issues without human intervention.',
      icon: Mail,
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    }
  ];

  const benefits = [
    'Remodelers who want to capture every $100K+ lead',
    'Wellness clinics that need 24/7 appointment booking',
    'Consultants who want to pre-qualify prospects',
    'Real estate firms looking to automate follow-ups'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0B0F26] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#14F0F0] rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#0063FF] rotate-12 animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Cog className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions That Work While You Focus on What Matters
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            We build systems that capture, qualify, and convert — so you stop chasing leads and start closing more business.
          </p>
          
          <a href="#contact" className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>Let's Talk About Automating Your Business</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Conversational AI Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
              🤖 Conversational AI Services
            </h2>
            <p className="text-xl text-gray-600">
              AI that talks, listens, and converts — 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {conversationalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F26] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Automation */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              🛠 Workflow Automation & Integrations
            </h2>
            <p className="text-xl text-gray-300">
              Connect everything, automate everything
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support Automation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
              🤝 Customer Support Automation
            </h2>
            <p className="text-xl text-gray-600">
              Smarter support systems that keep your clients happy without draining your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F26] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#0B0F26] mb-6 text-center">
              Key Outcomes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] flex-shrink-0" />
                <span className="text-gray-700 font-medium">Instant answers for clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] flex-shrink-0" />
                <span className="text-gray-700 font-medium">Less support burnout</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] flex-shrink-0" />
                <span className="text-gray-700 font-medium">Faster resolutions with no extra staff</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#contact" className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
              <span>Let's Talk About Automating Your Business</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Demo Funnels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
              🧪 Demo Funnels & Conversion Systems
            </h2>
            <p className="text-xl text-gray-600">
              Turn visitors into qualified prospects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {demoServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F26] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
              <span>Request a Free Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Strategy & Custom Projects */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              ⚙️ Strategy & Custom Projects
            </h2>
            <p className="text-xl text-gray-300">
              Tailored solutions for complex needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategyServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can We Build */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              💬 What Can We Build for You?
            </h2>
          </div>

          <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're a remodeler, a wellness clinic, a consultant, or a real estate firm, if you rely on leads, we can automate your growth engine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We combine voice, chat, AI logic, CRM sync, and landing pages into one simple, powerful system: the <strong className="text-[#0063FF]">ARPI VYPI Methodology</strong>, powered by <strong className="text-[#14F0F0]">Mojsej Technology</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Star className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            📞 Ready to See What We Can Build for You?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's create a live demo using your brand, your voice, and your goals.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Custom Demo Will Include:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-white/90">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>AI chatbot with your branding</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>Voice AI demonstration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>Custom workflow automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>ROI projections for your business</span>
              </div>
            </div>
          </div>

          <a href="#contact" className="group bg-white text-[#0B0F26] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>Request a Free Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;