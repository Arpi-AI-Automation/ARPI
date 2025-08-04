import React from 'react';
import { Target, Clock, MessageCircle } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: Target,
      title: 'Capture More Leads Automatically',
      description: 'AI chatbots, voice agents and smart forms integrated with your CRM.'
    },
    {
      icon: Clock,
      title: 'Save Time with Intelligent Automation',
      description: 'Cut manual tasks and free up your team to do what matters.'
    },
    {
      icon: MessageCircle,
      title: 'Never Miss a Call or Message',
      description: '24/7 inbound AI voice agents and smart messaging across platforms.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
            Why Choose ARPI AI?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#0B0F26] mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;