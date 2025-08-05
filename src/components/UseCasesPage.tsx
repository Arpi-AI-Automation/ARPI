import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  RefreshCw, 
  TrendingUp, 
  RotateCcw,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
  Brain
} from 'lucide-react';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const UseCasesPage = () => {
  const useCases = [
    {
      id: 1,
      emoji: '💼',
      title: 'Missed Calls → Booked Consults',
      problem: 'Home remodeling companies often miss calls while on-site or after-hours, costing them high-ticket leads.',
      solution: 'Voice AI answers missed calls in real time, gathers lead info, qualifies the project, and schedules a consultation, all while the owner is on a job or offline.',
      outcomes: [
        'Fewer lost leads',
        'Booked calls 24/7',
        'No need to hire a receptionist'
      ],
      icon: Phone,
      gradient: 'from-[#14F0F0] to-[#0063FF]',
      ctaText: 'Let\'s Talk About Automating Your Business',
      ctaLink: '#contact'
    },
    {
      id: 2,
      emoji: '💬',
      title: 'Website Visitors → Qualified Leads',
      problem: 'Visitors come to the website, but the contact form is slow and generic. Many bounce or never hear back.',
      solution: 'An embedded AI chatbot greets visitors, asks tailored questions about their project, and captures contact info, instantly notifying the team and starting the sales process.',
      outcomes: [
        'Higher lead capture rate',
        'Better qualification',
        'Faster time-to-first-response'
      ],
      icon: MessageCircle,
      gradient: 'from-[#0063FF] to-[#14F0F0]',
      ctaText: 'Book a Free Demo',
      ctaLink: '#contact'
    },
    {
      id: 3,
      emoji: '🧠',
      title: 'Follow-Ups Done Automatically',
      problem: 'After quoting a project, many business owners forget to follow up or don\'t follow up enough to close.',
      solution: 'Smart follow-up sequences via SMS, email, or voice reminders keep leads warm, check in, and re-engage them automatically.',
      outcomes: [
        'No leads go cold',
        'Increased close rate',
        'No manual chasing'
      ],
      icon: RefreshCw,
      gradient: 'from-[#14F0F0] to-[#0063FF]',
      ctaText: 'Let\'s Talk About Automating Your Business',
      ctaLink: '#contact'
    },
    {
      id: 4,
      emoji: '📈',
      title: 'Scaling Without Hiring',
      problem: 'The business wants to scale, but can\'t afford or manage a larger team.',
      solution: 'AI systems handle the heavy lifting: intake, qualification, communication, scheduling, and even nurturing without needing to expand headcount.',
      outcomes: [
        'More leads handled',
        'No extra salaries',
        'Freedom to grow'
      ],
      icon: TrendingUp,
      gradient: 'from-[#0063FF] to-[#14F0F0]',
      ctaText: 'Book a Free Demo',
      ctaLink: '#contact'
    },
    {
      id: 5,
      emoji: '🔁',
      title: 'Re-Engaging Old or Cold Leads',
      problem: 'Old leads from 3 months ago are just sitting in a spreadsheet or CRM, forgotten.',
      solution: 'Voice or SMS AI campaigns reach out with a warm re-engagement message. Leads that respond are qualified and booked.',
      outcomes: [
        'New revenue from old data',
        'Fully automated revival campaigns',
        'No awkward calls for your team'
      ],
      icon: RotateCcw,
      gradient: 'from-[#14F0F0] to-[#0063FF]',
      ctaText: 'Let\'s Talk About Automating Your Business',
      ctaLink: '#contact'
    },
    {
      id: 6,
      emoji: '🧠',
      title: 'AI Handles Support So You Don\'t Have To',
      problem: 'Your team is flooded with support calls and emails, most of which are simple updates or repetitive questions.',
      solution: 'Our AI chat and voice assistants handle support conversations 24/7. They answer questions, guide clients, and escalate only when needed. We also automate email replies and route tickets to the right people.',
      outcomes: [
        'Faster client response time',
        'Fewer missed messages',
        'Reduced staff burden'
      ],
      icon: Brain,
      gradient: 'from-[#0063FF] to-[#14F0F0]',
      ctaText: 'Let\'s Talk About Automating Your Business',
      ctaLink: '#contact'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Operation',
      description: 'AI never sleeps, takes breaks, or calls in sick'
    },
    {
      icon: Target,
      title: 'Perfect Qualification',
      description: 'Consistent lead scoring and routing every time'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Engage prospects within seconds, not hours'
    },
    {
      icon: Users,
      title: 'Scale Without Staff',
      description: 'Handle more leads without hiring more people'
    }
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
            <Brain className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Real-World Use Cases
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            See how ARPI AI solves real business problems using AI-powered automation, voice assistants, and intelligent workflows.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
              How ARPI AI Transforms Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Real scenarios, real solutions, real results
            </p>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={useCase.id} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}>
                {/* Content Side */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl mb-2">{useCase.emoji}</div>
                        <h3 className="text-2xl font-bold text-[#0B0F26]">
                          {useCase.title}
                        </h3>
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-red-600 mb-3">❌ The Problem:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {useCase.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#0063FF] mb-3">🤖 How ARPI Solves It:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-green-600 mb-4">✅ Key Outcomes:</h4>
                      <div className="space-y-2">
                        {useCase.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#14F0F0] flex-shrink-0" />
                            <span className="text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a 
                      href={useCase.ctaLink} 
                      className={`group bg-gradient-to-r ${useCase.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2`}
                    >
                      <span>{useCase.ctaText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative">
                    {/* Simplified visual representation */}
                    <div className="bg-[#0B0F26] rounded-2xl p-8 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-full animate-pulse`}></div>
                        <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${useCase.gradient} rounded-full animate-pulse`} style={{animationDelay: '1s'}}></div>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${useCase.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                          <useCase.icon className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-4xl mb-4">{useCase.emoji}</div>
                        <div className="text-white font-semibold">
                          AI Automation
                        </div>
                        <div className="text-[#14F0F0] text-sm mt-2">
                          Working 24/7
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
      <section className="py-20 bg-[#0B0F26]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why AI Automation Works
            </h2>
            <p className="text-xl text-gray-300">
              The advantages that make the difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-6 text-center hover:border-[#14F0F0]/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14F0F0] to-[#0063FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Target className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            Whatever Stage Your Business Is In
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We'll show you how to automate it intelligently, with zero tech skills required.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to See Your Use Case in Action?
            </h3>
            <p className="text-white/90 text-lg">
              We'll build you a custom demo showing exactly how AI can solve your specific business challenges.
            </p>
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

export default UseCasesPage;