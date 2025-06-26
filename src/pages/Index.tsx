import { useState, useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import DashboardPreview from '@/components/landing/DashboardPreview';
import AiChatPreview from '@/components/landing/AiChatPreview';
import FloatingBot from '@/components/landing/FloatingBot';
import Footer from '@/components/landing/Footer';
import Pattern from '@/components/Pattern';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [chatbotPosition, setChatbotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      // Enhanced floating animation for chatbot
      const floatX = Math.sin(newScrollY * 0.003) * 15;
      const floatY = Math.cos(newScrollY * 0.004) * 12;
      setChatbotPosition({
        x: floatX,
        y: floatY
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen hero-gradient text-foreground">
      {/* Fixed Pattern Background with subtle parallax */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: Math.max(0.4, 1 - scrollY * 0.0005)
        }}
      >
        <Pattern />
      </div>
      
      {/* Secondary depth layer */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)'
        }}
      />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero with minimal parallax */}
        <div 
          style={{
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          <Hero />
        </div>
        
        {/* Dashboard Preview - no parallax to keep it stable */}
        <DashboardPreview />
        
        {/* AI Chat Preview - minimal parallax */}
        <div 
          style={{
            transform: `translateY(${scrollY * -0.01}px)`
          }}
        >
          <AiChatPreview />
        </div>
        
        {/* Reviews Section - no parallax for stability */}
        <section 
          id="reviews" 
          className="py-20 px-4 relative"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                What Our Users Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of users who have transformed their financial lives with Savr
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Review cards - no parallax effects */}
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  "Savr has completely changed how I manage my finances. The AI insights are incredibly helpful and the interface is so intuitive."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">SJ</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  "The budgeting features are amazing! I've saved more money in the past 3 months than I did all of last year."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">MC</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Mike Chen</p>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  "Finally, a financial app that actually understands my needs. The AI assistant feels like having a personal financial advisor."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">ER</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FloatingBot position={chatbotPosition} />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
