import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking contact
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent event bubbling and ensure immediate response
  const handleMobileMenuToggle = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { to: '/services', label: 'Services' },
    { to: '/use-cases', label: 'Use Cases' },
    { to: '/methodology', label: 'Methodology' },
    { to: '/technology', label: 'Technology' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { href: '#contact', label: 'Contact', isContact: true }
  ];

  return (
    <header className="fixed top-0 w-full bg-[#0B0F26]/95 backdrop-blur-sm border-b border-[#14F0F0]/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
              <img src="/logo.png" alt="ARPI AI" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">ARPI AI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              item.isContact ? (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-gray-300 hover:text-[#14F0F0] transition-colors" 
                  onClick={handleContactClick}
                  aria-label="Navigate to contact section"
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={index}
                  to={item.to!} 
                  className="text-gray-300 hover:text-[#14F0F0] transition-colors" 
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              )
            ))}
            <button 
              className="bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-2 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 transform hover:scale-105"
              onClick={handleContactClick}
              aria-label="Get free demo - navigate to contact form"
            >
              Get Free Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden mobile-menu-container">
            <button
              onClick={handleMobileMenuToggle}
              onTouchStart={handleMobileMenuToggle}
              className="text-white p-3 rounded-lg hover:bg-[#14F0F0]/20 active:bg-[#14F0F0]/30 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                style={{ top: '72px' }} // Account for header height
                aria-hidden="true"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}

            {/* Mobile Menu */}
            <div
              id="mobile-menu"
              className={`fixed top-[72px] right-0 w-80 max-w-[90vw] h-[calc(100vh-72px)] bg-[#0B0F26] border-l border-[#14F0F0]/20 transform transition-transform duration-300 ease-in-out z-50 ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col p-6 space-y-6">
                {/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {navigationItems.map((item, index) => (
                    item.isContact ? (
                      <a
                        key={index}
                        href={item.href}
                        className="block text-lg text-gray-300 hover:text-[#14F0F0] active:text-[#14F0F0] transition-colors py-3 px-2 border-b border-gray-700/50 min-h-[44px] flex items-center touch-manipulation"
                        onClick={handleContactClick}
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={item.to!}
                        className="block text-lg text-gray-300 hover:text-[#14F0F0] active:text-[#14F0F0] transition-colors py-3 px-2 border-b border-gray-700/50 min-h-[44px] flex items-center touch-manipulation"
                        onClick={handleNavClick}
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <button
                  className="w-full bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-4 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] active:scale-95 transition-all duration-300 mt-6 min-h-[44px] touch-manipulation"
                  onClick={handleContactClick}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  Get Free Demo
                </button>

                {/* Mobile Menu Footer */}
                <div className="pt-6 mt-auto border-t border-gray-700/50">
                  <p className="text-sm text-gray-400 text-center">
                    AI agents that work while you sleep
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;