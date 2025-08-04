import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ContactSection from './ContactSection';
import Footer from './Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Why Most Service Businesses Lose Leads — and How AI Fixes It',
      excerpt: 'Your business is amazing. But if you\'re missing calls, responding late, or taking too long to follow up — you\'re leaking revenue. In this post, we break down how AI chat and voice agents solve this problem, 24/7.',
      slug: '/blog/ai-fixes-lead-loss',
      readTime: '5 min read',
      author: 'ARPI AI Team',
      date: 'August 2025',
      gradient: 'from-[#14F0F0] to-[#0063FF]'
    },
    {
      id: 2,
      title: '5 Ways AI Follow-Ups Close More Deals Than Sales Teams',
      excerpt: 'Follow-up is everything — but most businesses do it too late, too little, or not at all. Learn how AI systems follow up instantly, personalize the message, and close more deals — without ever forgetting.',
      slug: '/blog/ai-followups-close-deals',
      readTime: '7 min read',
      author: 'ARPI AI Team',
      date: 'August 2025',
      gradient: 'from-[#0063FF] to-[#14F0F0]'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0B0F26] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#14F0F0] rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#0063FF] rotate-12 animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Insights on AI Automation
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Actionable strategies and automation breakthroughs for high-performance service businesses.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B0F26] mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Learn how AI automation transforms service businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Post Header */}
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
                
                <div className="p-8">
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#0B0F26] mb-4 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link 
                    to={post.slug}
                    className="group inline-flex items-center space-x-2 text-[#0063FF] font-semibold hover:text-[#14F0F0] transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#14F0F0]/10 to-[#0063FF]/10 border border-[#14F0F0]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0B0F26] mb-4">
                More Insights Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We're constantly sharing new strategies, case studies, and automation breakthroughs. 
                Stay tuned for more actionable content to help you grow your service business.
              </p>
              <a href="#contact" className="group bg-gradient-to-r from-[#14F0F0] to-[#0063FF] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0063FF] hover:to-[#14F0F0] transition-all duration-300 inline-flex items-center space-x-2">
                <span>Get Notified of New Posts</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default BlogPage;