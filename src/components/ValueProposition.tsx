import React from 'react';
import { Zap, Target, BarChart3, Shield } from 'lucide-react';

const ValueProposition = () => {
  const steps = [
    {
      number: '01',
      title: 'Public friction snapshot',
      description: 'We analyze your site publicly and identify conversion blockers.',
      icon: Target
    },
    {
      number: '02', 
      title: 'Identify top 3 revenue leaks',
      description: 'Prioritize the biggest opportunities based on traffic and impact.',
      icon: BarChart3
    },
    {
      number: '03',
      title: 'Prioritize highest-impact fixes',
      description: 'Focus on changes that deliver measurable revenue lift first.',
      icon: Zap
    },
    {
      number: '04',
      title: 'Implement & measure lift',
      description: 'Execute optimizations and track performance improvements.',
      icon: Shield
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B0F26] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach to identifying and fixing revenue friction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0B0F26] text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#0B0F26] mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
