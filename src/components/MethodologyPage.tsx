import React from 'react';
import { 
  Cog, 
  Zap, 
  TrendingUp, 
  Brain, 
  Mic, 
  User, 
  MessageCircle, 
  ArrowRight,
  CheckCircle,
  Target,
  Clock,
  Users,
  DollarSign,
  Star,
  Phone
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const MethodologyPage = () => {
  const arpiSteps = [
    {
      letter: 'A',
      title: 'Automate',
      description: 'We identify the repetitive, painful tasks in your client journey — from intake to follow-up — and build smart flows to handle them for you.',
      icon: Cog,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'R',
      title: 'Replace',
      description: 'We replace phone tag, slow email replies, and time-wasting leads with 24/7 AI agents that never miss a beat.',
      icon: Zap,
      color: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      letter: 'P',
      title: 'Profit',
      description: 'When you respond faster, qualify better, and convert more leads — you make more money with less effort.',
      icon: TrendingUp,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'I',
      title: 'Intelligence',
      description: 'Our system learns from your leads. It improves over time by tracking drop-offs, refining flows, and boosting conversion rates.',
      icon: Brain,
      color: 'from-[#0063FF] to-[#14F0F0]'
    }
  ];

  const vypiSteps = [
    {
      letter: 'V',
      title: 'Voice',
      description: 'Missed a call? VYPI answers, qualifies, and books the lead — all in real time.',
      icon: Mic,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'Y',
      title: 'Your',
      description: 'We tailor the voice, tone, and responses to match your brand, location, and services.',
      icon: User,
      color: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      letter: 'P',
      title: 'Personal',
      description: 'VYPI doesn\'t just give canned responses. It asks the right questions and guides leads based on their answers.',
      icon: MessageCircle,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      letter: 'I',
      title: 'Interactor',
      description: 'From greeting new website visitors to reminding warm leads to book, VYPI keeps conversations moving forward.',
      icon: ArrowRight,
      color: 'from-[#0063FF] to-[#14F0F0]'
    }
  ];

  const benefits = [
    { text: 'No more missed $100K leads', icon: DollarSign },
    { text: 'Lead response in seconds, not hours', icon: Clock },
    { text: 'No extra staff to manage', icon: Users },
    { text: 'More qualified appointments', icon: Target },
    { text: 'Better client experience', icon: Star },
    { text: 'Owner gets their time back', icon: CheckCircle }
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
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Methodology
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            The <span className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] bg-clip-text text-transparent">ARPI VYPI</span> Framework
          </h2>
          <p className="text-xl text-gray-300 mb-8 italic">
            "Automation that feels personal. Results that scale."
          </p>
        </div>
      </section>

      {/* What is ARPI VYPI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-6">
              What is ARPI VYPI?
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At ARPI.AI, we've developed a powerful two-part system designed to help service businesses — especially high-end home renovation companies — turn missed leads and slow responses into booked projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's called the <strong className="text-[#0063FF]">ARPI VYPI Methodology</strong>, and it's built for one purpose:
            </p>
            <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border-l-4 border-[#14F0F0] p-6 rounded-r-lg">
              <p className="text-xl font-semibold text-[#0B0F26] flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-[#14F0F0]" />
                To help you close more clients, while doing less manual work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARPI Section */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">A</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              ARPI: The Automation Engine
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ARPI is the core system that runs in the background, replacing messy workflows and manual admin with smart, reliable automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {arpiSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.letter} — {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VYPI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0063FF] to-[#14F0F0] rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
              VYPI: The AI Client Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VYPI is the face of your AI system — a fully customized voice and chat assistant that speaks to your prospects like a real team member would.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vypiSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B0F26] mb-3">
                      {step.letter} — {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Why It Works
            </h2>
            <p className="text-xl text-gray-300">
              Our system delivers real results because it solves real problems:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-white">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Target className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See It in Action?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let us show you what ARPI VYPI looks like — on your website, with your brand, for your clients.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              You'll get a free custom demo, no strings attached.
            </h3>
            <p className="text-white/90 text-lg">
              We'll build it with your location, services, and goals in mind.
            </p>
          </div>

          <a href="#contact" className="group bg-white text-[#0B0F26] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>Request Your Free Demo Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MethodologyPage;