import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import ServicesSection from './components/ServicesSection';
import UseCasesSection from './components/UseCasesSection';
import ProofSection from './components/ProofSection';
import CTAStrip from './components/CTAStrip';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <UseCasesSection />
      <ProofSection />
      <CTAStrip />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;