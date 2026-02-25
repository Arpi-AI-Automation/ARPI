import React, { useState } from 'react';
import { Send, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id = "contact" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
    wantsConsult: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            website: formData.website || null,
            message: formData.message || null,
            wants_consult: formData.wantsConsult
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        website: '',
        message: '',
        wantsConsult: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
            Get Your Revenue Friction Snapshot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'll analyze your site and identify the top conversion blockers costing you revenue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0B0F26] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14F0F0] focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0B0F26] mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14F0F0] focus:border-transparent transition-all duration-300"
                  placeholder="you@yourbrand.com"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-[#0B0F26] mb-2">
                  E-commerce Store URL *
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14F0F0] focus:border-transparent transition-all duration-300"
                  placeholder="yourstore.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0B0F26] mb-2">
                  Current Monthly Ad Spend (Optional)
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14F0F0] focus:border-transparent transition-all duration-300"
                  placeholder="e.g., $10k/month"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="wantsConsult"
                  name="wantsConsult"
                  checked={formData.wantsConsult}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#14F0F0] border-gray-300 rounded focus:ring-[#14F0F0]"
                />
                <label htmlFor="wantsConsult" className="ml-2 text-sm text-gray-600">
                  I want to schedule a strategy call after the analysis
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Analyzing...' : 'Get My Friction Snapshot'}</span>
              </button>

              {submitStatus === 'success' && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B0F26] mb-4">
                      Analysis Request Received!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We'll analyze your store and send your friction snapshot within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    Sorry, there was an error submitting your request. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="bg-[#0B0F26] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Target className="w-5 h-5 text-[#14F0F0] mr-2" />
                    Revenue Friction Analysis
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Detailed breakdown of what's costing you conversions
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <TrendingUp className="w-5 h-5 text-[#14F0F0] mr-2" />
                    Priority Fix Recommendations
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Ranked list of highest-impact optimizations
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Calendar className="w-5 h-5 text-[#14F0F0] mr-2" />
                    Optional Strategy Call
                  </h4>
                  <p className="text-gray-300 text-sm">
                    30-minute call to discuss implementation
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">Delivered within 24 hours:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Speed & performance analysis</li>
                  <li>• Funnel friction identification</li>
                  <li>• Tracking & attribution review</li>
                  <li>• Trust signal optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
