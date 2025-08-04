import React from 'react';
import { ArrowRight, Clock, User, CheckCircle, Phone, MessageCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const BlogPost1 = () => {
  const problems = [
    {
      stat: '78%',
      description: 'of customers go with the first responder',
      icon: Clock
    },
    {
      stat: '60%',
      description: 'of inquiries happen after business hours',
      icon: Phone
    },
    {
      stat: '45%',
      description: 'of leads are lost due to slow response times',
      icon: MessageCircle
    }
  ];

  const solutions = [
    {
      title: 'AI Chatbots Respond 24/7',
      description: 'Never sleep, never take breaks, always ready to engage with prospects the moment they visit your site.',
      icon: MessageCircle
    },
    {
      title: 'Voice AI Picks Up Missed Calls',
      description: 'When you can\'t answer, AI does. It qualifies leads, books consultations, and captures contact information.',
      icon: Phone
    },
    {
      title: 'Smart Logic Routes & Filters',
      description: 'AI identifies high-quality leads and routes them properly while filtering out time-wasters.',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0B0F26] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#14F0F0] rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#0063FF] rotate-12 animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/blog" className="text-[#14F0F0] hover:text-white transition-colors">
              ← Back to Blog
            </Link>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>ARPI AI Team</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
              <span>August 2025</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Why Most Service Businesses Lose Leads — and How AI Fixes It
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#14F0F0] to-[#0063FF] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Missed calls, unanswered contact forms, and late replies are the silent killers of growth. 
              Most service businesses don't have a lead problem — they have a <strong className="text-[#0063FF]">response problem</strong>.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-8 text-center">
              The Lead Loss Crisis
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0063FF] mb-2">
                    {problem.stat}
                  </div>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Problem */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-6">
              Why This Happens
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0B0F26] mb-2">After-Hours Inquiries Go Unanswered</h4>
                  <p className="text-gray-700">Your best prospects often research and reach out evenings and weekends — when you're not available.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0B0F26] mb-2">Staff Is Too Busy Doing Real Work</h4>
                  <p className="text-gray-700">Your team is focused on delivering excellent service to existing clients — not monitoring contact forms.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0B0F26] mb-2">Manual Processes Create Delays</h4>
                  <p className="text-gray-700">By the time you see the inquiry, respond, and try to schedule — the prospect has already moved on.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How AI Solves It */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-8 text-center">
              How AI Solves the Response Problem
            </h2>
            
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0B0F26] mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Example */}
          <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-6 text-center">
              Real Example: The $150K Kitchen That Got Away
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-800 mb-4">❌ Without AI</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• Client submits contact form on Sunday evening</li>
                  <li>• You see it Tuesday morning</li>
                  <li>• You call back — no answer</li>
                  <li>• Client already hired someone who responded Monday</li>
                  <li>• <strong>$150K project lost</strong></li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-800 mb-4">✅ With AI</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• Client submits form Sunday evening</li>
                  <li>• AI responds in 30 seconds</li>
                  <li>• Qualifies project scope and budget</li>
                  <li>• Books consultation for Monday morning</li>
                  <li>• <strong>$150K project secured</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-6">
              Key Takeaways
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Speed wins. The first responder gets the client 78% of the time.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">AI never sleeps, never forgets, and never gets too busy to respond.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Smart automation qualifies leads while you focus on delivering service.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Every missed response is potential revenue walking out the door.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Zap className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            🔧 Let's Talk About Automating Your Business
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Ready to stop losing leads and start converting more — without lifting a finger?
          </p>

          <a href="#contact" className="group bg-white text-[#0B0F26] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
            <span>👉 Book a Free Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default BlogPost1;