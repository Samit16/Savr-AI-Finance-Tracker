
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import StarBorder from '@/components/ui/star-border';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/20 dark:bg-black/30 backdrop-blur-md z-50 border-b border-white/30 dark:border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1aed3b55-d42c-4af1-a335-cd532f67b405.png" 
              alt="FinBuddy Logo" 
              className="h-16 w-auto dark:hidden transition-transform duration-300 hover:scale-105"
            />
            <img 
              src="/lovable-uploads/80a6dd97-bb46-4c78-b7e7-6bf1ddfabc25.png" 
              alt="FinBuddy Logo" 
              className="h-16 w-auto hidden dark:block transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/dashboard" className="text-white/90 hover:text-white transition-colors font-medium">Dashboard</Link>
              <a href="#goals" className="text-white/90 hover:text-white transition-colors font-medium">Goals</a>
              <button 
                onClick={scrollToReviews}
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Reviews
              </button>
              <ThemeToggle />
              <Link to="/login">
                <StarBorder color="#2563eb" speed="4s">
                  Login / Sign Up
                </StarBorder>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-white/90 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-lg mt-2 mb-4">
              <Link 
                to="/dashboard" 
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <a 
                href="#goals" 
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Goals
              </a>
              <button 
                onClick={scrollToReviews}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
              >
                Reviews
              </button>
              <div className="pt-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <StarBorder color="#2563eb" speed="4s" className="w-full">
                    Login / Sign Up
                  </StarBorder>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
