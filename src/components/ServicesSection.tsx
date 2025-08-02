import React from 'react';
import { Brain, Phone, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Chat Agents',
      description: 'Trained to answer questions, capture leads, and route messages.'
    },
    {
      icon: Phone,
      title: 'AI Voice Callers',
      description: 'Handle inbound calls for bookings or FAQs using Vapi & Bland.AI.'
    },
    {
      icon: Calendar,
      title: 'Smart Appointment Scheduling',
      description: 'Auto-booking via Calendly, Cal.com integrations.'
    },
    {
      icon: TrendingUp,
      title: 'Lead Capture + CRM Sync',
      description: 'Custom flows that push data into your CRM or Airtable.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0B0F26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            We Build Custom AI Systems for Growth
          </h2>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-r from-[#0B0F26] to-[#1a1f3a] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="group bg-transparent border-2 border-[#14F0F0] text-[#14F0F0] px-8 py-3 rounded-lg font-semibold hover:bg-[#14F0F0] hover:text-[#0B0F26] transition-all duration-300 inline-flex items-center space-x-2">
            <span>See How It Works</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;