import React from 'react';
import { Star, Quote } from 'lucide-react';

const ProofSection = () => {
  const testimonials = [
    {
      quote: "ARPI AI transformed our clinic's phone system. We now capture 40% more leads and never miss an appointment.",
      author: "Dr. Sarah Chen",
      role: "Dermatology Clinic Owner",
      rating: 5
    },
    {
      quote: "The AI voice agent handles our project inquiries perfectly. It's like having a 24/7 sales team.",
      author: "Mike Rodriguez",
      role: "Renovation Contractor",
      rating: 5
    },
    {
      quote: "Customer support is now automated and our response time went from hours to seconds. Game changer!",
      author: "Lisa Park",
      role: "E-commerce Store Owner",
      rating: 5
    }
  ];

  const techStack = [
    'OpenAI', 'Voiceflow', 'Make.com', 'Vapi', 'Bland.AI'
  ];

  return (
    <section className="py-20 bg-[#0B0F26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our AI Can Do For You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1f3a] to-[#0B0F26] border border-[#14F0F0]/20 rounded-2xl p-8 hover:border-[#14F0F0]/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#14F0F0] fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-[#14F0F0] mb-4" />
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div>
                <p className="text-white font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-[#14F0F0] text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">Built with industry-leading technology:</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-lg px-4 py-2">
                <span className="text-[#14F0F0] font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;