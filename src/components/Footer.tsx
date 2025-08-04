import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-[#0B0F26] border-t border-[#14F0F0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="ARPI AI" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">ARPI AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building intelligent AI systems that automate your business operations 
              and help you grow without burnout.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit ARPI AI on LinkedIn"
                className="w-12 h-12 bg-gradient-to-br from-[#14F0F0]/20 to-[#0063FF]/20 border border-[#14F0F0]/30 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#14F0F0]/30 hover:to-[#0063FF]/30 hover:border-[#14F0F0]/50 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-6 h-6 text-[#14F0F0]" />
              </a>
              <a 
                href="#contact"
                onClick={handleMailClick}
                aria-label="Contact us - scroll to contact form"
                className="w-12 h-12 bg-gradient-to-br from-[#14F0F0]/20 to-[#0063FF]/20 border border-[#14F0F0]/30 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#14F0F0]/30 hover:to-[#0063FF]/30 hover:border-[#14F0F0]/50 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-6 h-6 text-[#14F0F0]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#14F0F0] transition-colors">AI Chat Agents</a></li>
              <li><a href="#" className="hover:text-[#14F0F0] transition-colors">AI Voice Callers</a></li>
              <li><a href="#" className="hover:text-[#14F0F0] transition-colors">Smart Scheduling</a></li>
              <li><a href="#" className="hover:text-[#14F0F0] transition-colors">CRM Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-[#14F0F0] transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-[#14F0F0] transition-colors">Blog</a></li>
              <li><a href="/use-cases" className="hover:text-[#14F0F0] transition-colors">Use Cases</a></li>
              <li><a href="/privacy-policy" className="hover:text-[#14F0F0] transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-[#14F0F0] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ARPI AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;