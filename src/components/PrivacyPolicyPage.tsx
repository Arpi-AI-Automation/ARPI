import React from 'react';
import { Shield, Mail, Globe, Lock, Eye, Users, Clock, FileText } from 'lucide-react';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: 'who-we-are',
      title: '1. Who We Are',
      icon: Users,
      content: (
        <p className="text-gray-700 leading-relaxed">
          ARPI AI is an AI automation agency that provides voice and chat automation systems, CRM integrations, and lead qualification tools for service-based businesses. Our website address is <strong>arpi-ai.com</strong>
        </p>
      )
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[#0B0F26] mb-3 flex items-center">
              💻 When You Visit Our Website
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring websites</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#0B0F26] mb-3 flex items-center">
              📩 When You Contact Us or Request a Demo
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Name and website</li>
              <li>Any other information you submit through our contact forms or demo requests</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#0B0F26] mb-3 flex items-center">
              🤖 When You Use Our AI Tools (Live or Demo)
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>User-submitted text (via chat/voice interactions)</li>
              <li>Usage behavior (e.g., questions asked, buttons clicked)</li>
              <li>Session timestamps</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Provide you with services, demos, or consultations</li>
            <li>Respond to inquiries or support requests</li>
            <li>Improve our website, tools, and user experience</li>
            <li>Send occasional marketing or service-related emails (you can opt out anytime)</li>
            <li>Analyze usage patterns for internal business insights</li>
          </ul>
          <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border-l-4 border-[#14F0F0] p-4 rounded-r-lg mt-4">
            <p className="text-[#0B0F26] font-semibold">
              We do not sell or rent your personal data to third parties.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-storage',
      title: '4. Data Storage & Security',
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Your data is stored securely using industry-standard encryption and secure cloud services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We take steps to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Prevent unauthorized access</li>
            <li>Maintain data accuracy</li>
            <li>Ensure appropriate use of personal information</li>
          </ul>
        </div>
      )
    },
    {
      id: 'sharing-information',
      title: '5. Sharing Your Information',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We only share your data when necessary:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>With service providers (e.g., hosting, analytics, CRM) who support our operations</li>
            <li>If legally required by government authorities or court order</li>
            <li>To protect the rights, safety, or property of ARPI AI, our users, or others</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            All third-party providers are contractually obligated to safeguard your data.
          </p>
        </div>
      )
    },
    {
      id: 'cookies',
      title: '6. Cookies',
      icon: Globe,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Track site usage</li>
            <li>Improve performance and personalization</li>
            <li>Analyze traffic via tools like Google Analytics</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            You can manage or disable cookies in your browser settings.
          </p>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: '7. Your Rights (Under GDPR & Australia\'s Privacy Principles)',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate or outdated data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with your local privacy authority</li>
          </ul>
          <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border-l-4 border-[#14F0F0] p-4 rounded-r-lg mt-4">
            <p className="text-[#0B0F26] font-semibold">
              To exercise any of these rights, email us at: <a href="mailto:privacy@arpi.ai" className="text-[#0063FF] hover:underline">privacy@arpi.ai</a>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-retention',
      title: '8. Data Retention',
      icon: Clock,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We retain your information only as long as needed to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Provide our services</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes</li>
            <li>Enforce our agreements</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            You can request deletion of your data anytime.
          </p>
        </div>
      )
    },
    {
      id: 'third-party-links',
      title: '9. Third-Party Links',
      icon: Globe,
      content: (
        <p className="text-gray-700 leading-relaxed">
          Our site may link to external websites. We are not responsible for their content or privacy practices. Please review their respective privacy policies.
        </p>
      )
    },
    {
      id: 'policy-changes',
      title: '10. Changes to This Policy',
      icon: FileText,
      content: (
        <p className="text-gray-700 leading-relaxed">
          We may update this policy periodically. Changes will be posted here with a new "Last Updated" date.
        </p>
      )
    },
    {
      id: 'contact-us',
      title: '11. Contact Us',
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please contact:
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-[#0B0F26] mb-4">ARPI AI</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-[#14F0F0]" />
                Email: <a href="mailto:ai@arpiai.com" className="text-[#0063FF] hover:underline ml-1">ai@arpiai.com</a>
              </p>
              <p className="flex items-center text-gray-700">
                <Globe className="w-5 h-5 mr-3 text-[#14F0F0]" />
                Website: <a href="https://arpi-ai.com" className="text-[#0063FF] hover:underline ml-1">arpi-ai.com</a>
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0B0F26] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#14F0F0] rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#0063FF] rotate-12 animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-300 mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          
          <p className="text-sm text-gray-400">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} id={section.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14F0F0] to-[#0063FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B0F26]">
                    {section.title}
                  </h2>
                </div>
                <div className="ml-16">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;