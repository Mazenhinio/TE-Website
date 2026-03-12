import { motion } from 'framer-motion';

const logos = [
  { 
    name: 'Shangri-La Hotels & Resorts', 
    src: '/images/Sahngrila Logo.webp' 
  },
  { 
    name: 'Oteliana Travel', 
    src: '/images/oteliana logo.png' 
  },
  { 
    name: 'InterContinental Hotels & Resorts', 
    src: '/images/intercontinental-hotels-resorts-logo-png_seeklogo-252956.png' 
  },
];

export default function TrustedLogos() {
  return (
    <section className="bg-brand-black py-24 px-6 border-y border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electric-glow opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-16"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-cream-muted">
            Preferred by World-Class Hospitality Brands
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, i) => {
            const isIntercontinental = logo.name.includes('InterContinental');
            // Uniform box sizes for all
            const width = 280;
            const height = 100;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`bg-cream rounded-2xl flex items-center justify-center shadow-lg ${
                  isIntercontinental ? 'p-1' : 'p-4 md:p-6'
                }`}
                style={{ 
                  width: `${width}px`, 
                  height: `${height}px`,
                  filter: 'none'
                }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="w-full h-full object-contain"
                  style={{ 
                    filter: 'none',
                    // Aggressive scale to make it truly high-impact within the same box size
                    transform: isIntercontinental ? 'scale(1.9)' : 'scale(1)'
                  }}
                />
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 px-6 py-4"
          >
            <span className="text-cream/30 text-xl font-bold font-display uppercase tracking-widest">& more</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
