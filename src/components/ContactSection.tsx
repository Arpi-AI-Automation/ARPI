import React, { useState } from 'react';
import { Send, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
            Let's Talk About Automating Your Business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0B0F26] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14F0F0] focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0B0F26] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14F0F0] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-[#0B0F26] mb-2">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14F0F0] focus:border-transparent transition-all duration-300"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0B0F26] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14F0F0] focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your automation needs..."
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
                  I want to book a free automation consult
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {submitStatus === 'success' && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B0F26] mb-4">
                      Thank you — we've received your message!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      One of our automation specialists will get back to you shortly.
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
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="bg-[#0B0F26] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-[#14F0F0] mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Book a Free Demo Call</h4>
                  <p className="text-gray-300 text-sm">
                    Schedule a 30-minute call to see how AI can transform your business.
                  </p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105">
                <a href="https://calendly.com/arpiai-automation/30min" target="_blank" rel="noopener noreferrer">Schedule Free Demo</a>
              </button>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-2">What you'll get:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Custom AI workflow demo</li>
                  <li>• ROI analysis for your business</li>
                  <li>• Implementation roadmap</li>
                  <li>• No-obligation consultation</li>
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