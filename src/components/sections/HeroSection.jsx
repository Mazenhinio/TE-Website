import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text-line",
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: "power4.out", 
          delay: 0.5 
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Section (Video) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source 
            src="/Customer Journey.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-electric uppercase tracking-[0.3em] text-xs md:text-sm font-bold bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full inline-block border border-electric/20">
            The World's #1 Hospitality Platform
          </span>
        </motion.div>
        
        <h1 className="flex flex-col items-center leading-[0.85] tracking-tighter">
          <span className="hero-text-line block text-cream text-[14vw] sm:text-[12vw] md:text-[10vw] font-extrabold uppercase select-none">
            ACCELERATE
          </span>
          <span className="hero-text-line block text-cream text-[14vw] sm:text-[12vw] md:text-[10vw] font-extrabold uppercase select-none">
            GROW
          </span>
          <span className="hero-text-line block text-electric text-[14vw] sm:text-[12vw] md:text-[10vw] font-extrabold uppercase select-none">
            ENGAGE
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 text-cream-muted text-lg md:text-xl max-w-2xl mx-auto font-body"
        >
          Turn every guest into a regular with MENA's most powerful 
          automated guest engagement platform.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-4 bg-electric text-brand-black font-extrabold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-button hover:shadow-button-hover">
            <span className="relative z-10">SCHEDULE A DEMO</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </button>
          
          <button 
            onClick={() => setShowVideo(true)}
            className="text-cream hover:text-electric transition-colors font-bold tracking-widest text-sm flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center group-hover:border-electric transition-colors">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1" />
            </div>
            WATCH THE STORY
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors"
              >
                ✕
              </button>
              <iframe
                src="https://drive.google.com/file/d/1_-IZIHZbQ6NCmYRES3_OiN-BuOp2sW-v/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Total Engage Full Demo"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}