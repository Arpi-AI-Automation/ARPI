import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';

const UseCasesSection = () => {
  const results = [
    {
      icon: TrendingUp,
      title: '23% Revenue Increase',
      description: 'Fashion brand fixed checkout friction and mobile load times',
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      icon: Target,
      title: '41% Conversion Lift',
      description: 'Electronics store optimized funnel flow and trust signals',
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      icon: Zap,
      title: '18% ROAS Improvement',
      description: 'Beauty brand fixed tracking gaps and attribution issues',
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B0F26] mb-6">
            Real Results From Real Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revenue improvements from fixing conversion friction
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 h-full">
                <div className={`w-20 h-20 bg-gradient-to-br ${result.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <result.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-[#0B0F26] mb-4">
                  {result.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
