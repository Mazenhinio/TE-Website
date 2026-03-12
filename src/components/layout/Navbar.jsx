import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-between px-6 fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(0,0,0,0.95)] backdrop-blur-md shadow-2xl border-b border-[rgba(255,255,255,0.05)] py-4' : 'bg-transparent py-6'}`}>
      <Link to="/" className="flex items-center transition-transform hover:scale-105">
        <img
          src="/images/Total engage logo neon.png"
          alt="Total Engage"
          className="h-7 md:h-9 object-contain"
        />
      </Link>
      <div className="hidden md:flex gap-8">
        {['Features', 'Hospitality', 'Case Studies', 'Integrations'].map((i) => (
          <Link key={i} to={`/${i.toLowerCase().replace(' ', '-')}`} className="text-cream hover:text-electric transition-colors">{i}</Link>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="https://portal.totalengage.io" target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 border border-electric text-electric rounded-full hover:bg-electric-dim transition-colors">Log In</button>
        </a>
        <Link to="/contact">
          <button className="px-6 py-2 bg-electric text-brand-black font-semibold rounded-full shadow-button hover:shadow-button-hover transition-all">Schedule a Demo</button>
        </Link>
      </div>
    </nav>
  );
}