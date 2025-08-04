import React from 'react';
import { ArrowRight, Clock, User, CheckCircle, Brain, Zap, MessageCircle, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const BlogPost2 = () => {
  const followUpWays = [
    {
      number: '1',
      title: 'Instant Response',
      description: 'Within 30 seconds of a form submission or missed call, AI is already engaging.',
      icon: Zap,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      number: '2',
      title: 'Personalization at Scale',
      description: '"Hi Sarah, here\'s the bathroom layout you asked about..." — every message feels personal.',
      icon: MessageCircle,
      color: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      number: '3',
      title: 'Multi-Channel Engagement',
      description: 'Email, SMS, voice reminders — AI reaches prospects where they prefer to communicate.',
      icon: Mail,
      color: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      number: '4',
      title: 'Never Forgets',
      description: 'AI can follow up days, weeks, or months later with perfect timing and context.',
      icon: Brain,
      color: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      number: '5',
      title: 'Frees Up Humans',
      description: 'While your team focuses on delivering service, AI keeps nurturing leads in the background.',
      icon: Phone,
      color: 'from-[#14F0F0] to-[#0063FF]'
    }
  ];

  const stats = [
    { number: '80%', description: 'of sales require 5+ follow-up attempts' },
    { number: '44%', description: 'of salespeople give up after 1 follow-up' },
    { number: '92%', description: 'give up after 4 follow-ups' }
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
                <span>7 min read</span>
              </div>
              <span>August 2025</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              5 Ways AI Follow-Ups Close More Deals Than Sales Teams
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
              You did the work — the lead came in. But without consistent follow-up, that lead goes cold. 
              <strong className="text-[#0063FF]"> Humans forget. AI doesn't.</strong>
            </p>
          </div>

          {/* Follow-Up Statistics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-8 text-center">
              The Follow-Up Reality
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="text-4xl font-bold text-[#0063FF] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-2xl p-6 text-center">
              <p className="text-xl text-[#0B0F26] font-semibold">
                Most sales happen between the 5th and 12th contact — but most humans quit after just 1-4 attempts.
              </p>
            </div>
          </div>

          {/* 5 Ways AI Wins */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-8 text-center">
              5 Ways AI Wins at Follow-Up
            </h2>
            
            <div className="space-y-8">
              {followUpWays.map((way, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${way.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <way.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-[#0063FF] text-white rounded-full flex items-center justify-center font-bold">
                          {way.number}
                        </div>
                        <h3 className="text-2xl font-bold text-[#0B0F26]">
                          {way.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {way.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Example Scenarios */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-8 text-center">
              AI Follow-Up in Action
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-[#0B0F26] mb-4">Scenario 1: The Interested But Busy Prospect</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Day 1:</strong> "Hi John, thanks for your interest in our kitchen remodeling services. I've attached some portfolio examples."</p>
                  <p><strong>Day 3:</strong> "John, I noticed you viewed our portfolio. Here are 3 similar projects we completed in your neighborhood."</p>
                  <p><strong>Day 7:</strong> "Quick question John - what's your ideal timeline for starting your kitchen project?"</p>
                  <p><strong>Day 14:</strong> "John, we have an opening next month. Would you like to schedule a free consultation?"</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0063FF]/10 to-[#14F0F0]/10 border border-[#0063FF]/30 rounded-xl p-6">
                <h4 className="text-xl font-bold text-[#0B0F26] mb-4">Scenario 2: The Price Shopper</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Day 1:</strong> "Hi Sarah, I understand you're comparing options. Here's what sets our bathroom renovations apart..."</p>
                  <p><strong>Day 5:</strong> "Sarah, here's a breakdown of our process and why our clients choose quality over lowest price."</p>
                  <p><strong>Day 10:</strong> "Sarah, we're offering a free design consultation this month. No obligation - just ideas for your space."</p>
                  <p><strong>Day 21:</strong> "Sarah, one of our recent clients had similar concerns about budget. Here's how we made it work..."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus Tip */}
          <div className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              💡 Bonus Tip: The Magic Numbers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4">Most Sales Close Between:</h4>
                <div className="text-4xl font-bold mb-2">5th - 12th</div>
                <p>Contact attempts</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4">AI Never Quits:</h4>
                <div className="text-4xl font-bold mb-2">∞</div>
                <p>Unlimited follow-up attempts</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xl">
                <strong>AI never quits early.</strong> It follows up consistently until the prospect converts or explicitly opts out.
              </p>
            </div>
          </div>

          {/* Why Humans Fail at Follow-Up */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <h2 className="text-3xl font-bold text-[#0B0F26] mb-6">
              Why Humans Struggle with Follow-Up
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-red-600 mb-4">❌ Human Limitations</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Forget to follow up consistently</li>
                  <li>• Feel awkward about "bothering" prospects</li>
                  <li>• Get busy with other priorities</li>
                  <li>• Give up too early</li>
                  <li>• Inconsistent messaging</li>
                  <li>• Limited working hours</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-green-600 mb-4">✅ AI Advantages</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Never forgets or gets distracted</li>
                  <li>• No emotional hesitation</li>
                  <li>• Handles unlimited prospects simultaneously</li>
                  <li>• Persistent without being pushy</li>
                  <li>• Consistent, professional messaging</li>
                  <li>• Works 24/7/365</li>
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
                <p className="text-gray-700 text-lg">Most sales happen after the 5th contact, but most humans quit after 1-4 attempts.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">AI follows up instantly, personally, and persistently across multiple channels.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Automation frees your team to focus on service delivery while AI nurtures leads.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#14F0F0] mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Consistent follow-up is the difference between a lead and a client.</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Brain className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            🧠 Let's Talk About Automating Your Business
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            What if you never had to follow up again — but closed more deals anyway?
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

export default BlogPost2;