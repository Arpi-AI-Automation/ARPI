import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#0B0F26]/95 backdrop-blur-sm border-b border-[#14F0F0]/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="ARPI AI" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">ARPI AI</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-[#14F0F0] transition-colors">
              Services
            </a>
            <Link to="/methodology" className="text-gray-300 hover:text-[#14F0F0] transition-colors">
              Methodology
            </Link>
            <a href="#use-cases" className="text-gray-300 hover:text-[#14F0F0] transition-colors">
              Use Cases
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#14F0F0] transition-colors">
              Contact
            </a>
            <button className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-2 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105">
              <a href="#contact">Get Free Demo</a>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;