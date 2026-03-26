import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { name: 'Home', path: '/' },
    { name: 'Food & Beverage', path: '/food-beverage' },
    { name: 'Wellness & Spa', path: '/wellness-spa' },
    { name: 'Weddings & Events', path: '/weddings-events' },
    { name: 'Kids Club', path: '/kids-club' },
    { name: 'Rooms & Suites', path: '/rooms-suites' },
    { name: 'Loyalty & Retention', path: '/loyalty-retention' },
    { name: 'Reviews & Reputation', path: '/reviews-reputation' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 bg-brand-black/95 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 ${scrolled ? 'shadow-2xl py-4' : 'py-6'}`}>
      
      {/* Logo */}
      <Link to="/" className="flex items-center transition-transform hover:scale-105 z-50">
        <img
          src="/images/Total engage logo neon.png"
          alt="Total Engage"
          className="h-7 md:h-9 object-contain"
          onError={(e) => { e.target.src = '/vite.svg' }}
        />
      </Link>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        
        {solutions.map((item, idx) => {
          // Shorten names for desktop navbar space
          const shortName = item.name
            .replace('Food & Beverage', 'F&B')
            .replace('Wellness & Spa', 'Spa')
            .replace('Weddings & Events', 'Weddings')
            .replace('Kids Club', 'Kids')
            .replace('Rooms & Suites', 'Rooms')
            .replace('Loyalty & Retention', 'Loyalty')
            .replace('Reviews & Reputation', 'Reviews');
            
          return (
            <Link 
              key={idx} 
              to={item.path} 
              className="text-cream hover:text-electric text-sm lg:text-base font-medium transition-colors"
            >
              {shortName}
            </Link>
          );
        })}

        <Link to="/contact" className="text-cream hover:text-electric text-sm lg:text-base font-medium transition-colors">Contact</Link>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center gap-4">
        <a href="https://portal.totalengage.io" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-electric/40 text-electric font-medium hover:bg-electric/10 transition-colors text-sm">
          Log In
        </a>
        <Link to="/contact" className="px-6 py-2.5 bg-electric text-black font-semibold rounded-full shadow-button hover:shadow-button-hover transition-all text-sm hover:scale-105">
          Schedule a Demo
        </Link>
      </div>

      {/* Mobile Hamburger toggle */}
      <button 
        className="md:hidden text-electric z-[100] p-2 hover:scale-110 transition-transform"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#000] border-b border-white/10 flex flex-col pt-24 px-6 gap-6 z-40 overflow-y-auto pb-12"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono font-bold tracking-widest text-electric uppercase px-2">Solutions</span>
              <div className="flex flex-col gap-2 border-l border-white/10 ml-2 pl-4">
                {solutions.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-cream/80 hover:text-electric py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold text-cream py-4 border-b border-white/10"
            >
              Contact
            </Link>

            <div className="flex flex-col gap-4 mt-8">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-6 py-4 bg-electric text-black font-semibold rounded-full shadow-button">
                Schedule a Demo
              </Link>
              <a href="https://portal.totalengage.io" onClick={() => setIsMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="w-full text-center px-6 py-4 border border-electric/40 text-electric font-bold rounded-full">
                Log In
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}