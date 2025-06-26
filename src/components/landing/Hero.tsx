import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import BlurText from '@/components/BlurText';
import StarBorder from '@/components/ui/star-border';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Built with Bolt Badge - Fixed positioning */}
      <div className="fixed top-24 right-4 z-50 p-2">
        <img 
          src="/WhatsApp Image 2025-06-25 at 21.59.22_e71cd37d.jpg" 
          alt="Built with Bolt" 
          className="w-16 h-16 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <BlurText 
              text="Your Money, Your Rules. Savr has got your back." 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              delay={100}
              animateBy="words"
            />
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
              Plan, track, and save like a pro-with the only AI tool you'll ever need for personal finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start animate-slide-in-right">
              <Link to="/login">
                <StarBorder color="#10b981" speed="5s" className="text-lg font-semibold">
                  Get Started with FinBuddy
                </StarBorder>
              </Link>
              <p className="text-white/80 text-sm">It's completely free!</p>
            </div>
          </div>

          {/* Right side - iPhone Mockup */}
          <div className="relative animate-fade-in flex justify-center lg:justify-end">
            <div className="relative transform hover:scale-105 transition-all duration-500">
              <img 
                src="/mockup.png" 
                alt="Savr App iPhone Mockup" 
                className="w-[250px] md:w-[300px] lg:w-[350px] md:ml-[-100px]"/>
              {/* Optional glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <ArrowDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;