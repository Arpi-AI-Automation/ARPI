import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import ServicesSection from './components/ServicesSection';
import UseCasesSection from './components/UseCasesSection';
import ProofSection from './components/ProofSection';
import CTAStrip from './components/CTAStrip';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MethodologyPage from './components/MethodologyPage';
import TechnologyPage from './components/TechnologyPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import BlogPost1 from './components/BlogPost1';
import BlogPost2 from './components/BlogPost2';
import UseCasesPage from './components/UseCasesPage';
import ServicesPage from './components/ServicesPage';

const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <ValueProposition />
    <ServicesSection />
    <UseCasesSection />
    <ProofSection />
    <CTAStrip />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/ai-fixes-lead-loss" element={<BlogPost1 />} />
          <Route path="/blog/ai-followups-close-deals" element={<BlogPost2 />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;