import React from 'react';
import { Stethoscope, Hammer, ShoppingCart } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Stethoscope,
      title: 'Specialty Clinics',
      description: 'Automate call intake, appointment setting, and post-visit follow-up.',
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      icon: Hammer,
      title: 'Home Renovation Pros',
      description: 'Capture project leads 24/7 and qualify them automatically.',
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    },
    {
      icon: ShoppingCart,
      title: 'Online Store Owners',
      description: 'Automate customer support & FAQ handling on Shopify/Instagram.',
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
            Perfect for Clinics, Contractors & E-Commerce Brands
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 h-full">
                <div className={`w-20 h-20 bg-gradient-to-br ${useCase.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0B0F26] mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;