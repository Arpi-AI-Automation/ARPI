import React from 'react';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Target, 
  Settings, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Layers,
  MessageCircle,
  Mic,
  Users,
  Clock,
  Shield,
  Lightbulb,
  Cog
} from 'lucide-react';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const TechnologyPage = () => {
  const mojsejComponents = [
    {
      letter: 'M',
      title: 'Modeling',
      description: 'Creates intelligent conversation patterns based on your industry, location, and client behavior.',
      icon: Brain,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'O',
      title: 'Optimized',
      description: 'Continuously refines responses and workflows for maximum conversion and engagement.',
      icon: TrendingUp,
      color: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      letter: 'J',
      title: 'Journeys through',
      description: 'Maps and manages every touchpoint in your client acquisition process seamlessly.',
      icon: Target,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'S',
      title: 'Smart',
      description: 'Makes intelligent decisions about lead qualification, routing, and follow-up timing.',
      icon: Lightbulb,
      color: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      letter: 'E',
      title: 'Engagement &',
      description: 'Maintains natural, contextual conversations that feel personal and professional.',
      icon: MessageCircle,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'J',
      title: 'Judgment',
      description: 'Applies business logic and decision-making to qualify leads and prioritize actions.',
      icon: Shield,
      color: 'from-[#0063FF] to-[#14F0F0]'
    }
  ];

  const arpiIntegrations = [
    {
      title: 'Chat Automation',
      description: 'Mojsej powers intelligent chatbots that qualify leads with natural conversation flows.',
      icon: MessageCircle
    },
    {
      title: 'Voice AI Systems',
      description: 'Handles missed calls with voice AI that sounds human and captures every opportunity.',
      icon: Mic
    },
    {
      title: 'Brand Adaptation',
      description: 'Automatically adjusts tone, language, and responses to match your company voice.',
      icon: Users
    },
    {
      title: 'Smart Scheduling',
      description: 'Intelligently books appointments based on availability, lead quality, and business rules.',
      icon: Clock
    }
  ];

  const benefits = [
    'Never sounds robotic or scripted',
    'Learns from every interaction',
    'Adapts to your specific market',
    'Improves conversion rates over time',
    'Handles complex qualification logic',
    'Integrates with your existing tools'
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
          <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Powered by ARPI.AI Methodology
          </h1>
          
          <p className="text-2xl lg:text-3xl text-gray-300 mb-8">
            It's not just AI. It's <span className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] bg-clip-text text-transparent font-bold">m.o.j.s.e.j.</span>: intelligent, personal, and always evolving.
          </p>
          
          <a href="#contact" className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>Request a Free Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* What is Mojsej Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              What is m.o.j.s.e.j. Technology?
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mojsej is ARPI.AI's proprietary automation engine: the intelligent brain behind every chatbot, voice AI system, and automated workflow we build for our clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Unlike generic automation tools, Mojsej is designed to handle lead engagement, qualification, and conversion with the nuance and intelligence of a skilled sales professional, but operating 24/7 without breaks, sick days, or inconsistency.
            </p>
            <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border-l-4 border-[#14F0F0] p-6 rounded-r-lg">
              <p className="text-xl font-semibold text-[#0B0F26] flex items-center">
                <Zap className="w-6 h-6 mr-3 text-[#14F0F0]" />
                It's automation that thinks, adapts, and improves, just like your best team member would.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOJSEJ Breakdown Section */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Layers className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              What Does MOJSEJ Stand For?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each component of Mojsej represents a critical element of intelligent automation that drives real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mojsejComponents.map((component, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xl font-bold text-white">{component.letter}</span>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <component.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {component.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              Why It Matters
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most automation feels cold, rigid, and obviously robotic. Prospects can tell immediately when they're talking to a basic chatbot or hearing a generic voice recording.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0063FF]">Mojsej is different.</strong> It learns from every interaction, adapts to context, and makes intelligent decisions like a skilled assistant or salesperson would, but it does this instantly, 24/7, without ever getting tired or inconsistent.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-lg p-6">
                <h4 className="font-bold text-[#0B0F26] mb-2">Traditional Automation</h4>
                <p className="text-gray-600 text-sm">Scripted, robotic, one-size-fits-all responses that frustrate prospects and lose leads.</p>
              </div>
              <div className="bg-gradient-to-r from-[#0063FF]/10 to-[#14F0F0]/10 border border-[#0063FF]/30 rounded-lg p-6">
                <h4 className="font-bold text-[#0B0F26] mb-2">Mojsej Technology</h4>
                <p className="text-gray-600 text-sm">Intelligent, contextual, personalized interactions that feel natural and build trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Mojsej Powers ARPI VYPI Section */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              How Mojsej Powers the ARPI VYPI Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mojsej is the intelligent engine that drives every component of our automation system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {arpiIntegrations.map((integration, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mb-6">
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {integration.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-2xl p-8">
            <p className="text-xl text-white text-center">
              <strong>Mojsej runs the full lifecycle of automation</strong>: from the first website interaction to the final project booking, ensuring every touchpoint is intelligent, personalized, and optimized for conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Custom-Built Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              Custom-Built for Every Client
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mojsej is never generic or one-size-fits-all. Every implementation is carefully customized to match your specific business needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[#0B0F26] mb-4">Tailored to Your Business</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#14F0F0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Your brand voice and tone</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#14F0F0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Local market knowledge</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#14F0F0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Service-specific workflows</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-[#0B0F26] mb-4">Integrated with Your Goals</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#14F0F0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Lead qualification criteria</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#14F0F0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Existing CRM and tools</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#14F0F0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Business objectives and KPIs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart & Adaptive Section */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Smart, Adaptive, Always Learning
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Mojsej doesn't just run your automation, it continuously improves it. Using behavioral data and interaction patterns, it acts like an AI strategist working in the background to optimize your results.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#14F0F0] flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-lg p-6">
              <p className="text-xl text-white text-center">
                <strong>The result:</strong> Your automation gets smarter and more effective over time, delivering better qualified leads and higher conversion rates month after month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Let Us Show You What Mojsej Can Do for Your Business
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We'll build you a free live demo, personalized to your company, location, and goals. 
            See exactly how Mojsej technology can transform your lead capture and conversion process.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Custom Demo Will Include:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-white/90">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>Live chatbot with your branding</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>Voice AI demonstration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>Custom qualification flows</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span>ROI analysis for your business</span>
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

export default TechnologyPage;