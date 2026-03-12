import { motion } from 'framer-motion';
import { useRef } from 'react';

const labels = [
  { text: 'Luxury Resorts', x: -350, y: -180, color: '#A855F7' }, // Purple
  { text: 'Boutique Hotels', x: -250, y: 150, color: '#3B82F6' }, // Blue
  { text: 'F&B Groups', x: 300, y: -160, color: '#DEFF00' },     // Electric
  { text: 'General Managers', x: 380, y: 140, color: '#A855F7' },  // Purple
  { text: 'Marketing Teams', x: -400, y: -20, color: '#3B82F6' },  // Blue
  { text: 'Revenue Managers', x: 420, y: -30, color: '#2DD4BF' },  // Teal
  { text: 'Chain Hotels', x: -150, y: -220, color: '#DEFF00' },    // Electric
  { text: 'Resort Groups', x: 180, y: 220, color: '#2DD4BF' },     // Teal
  { text: 'Front Desk', x: -280, y: 250, color: '#DEFF00' },       // Electric
  { text: 'Concierge', x: 120, y: -250, color: '#3B82F6' },        // Blue
  { text: 'Owners', x: 50, y: 280, color: '#DEFF00' },           // Electric
  { text: 'Asset Managers', x: 450, y: 240, color: '#A855F7' },    // Purple
];

export default function BuiltForHotels() {
  const containerRef = useRef(null);

  return (
    <section className="bg-brand-black py-40 px-6 overflow-hidden relative min-h-[800px] flex items-center justify-center">
      <div className="relative z-10 text-center max-w-7xl mx-auto">
        <h2 className="text-[12vw] md:text-[10vw] font-black font-display leading-[0.85] tracking-tighter text-cream flex flex-col items-center">
          <span className="block">BUILT FOR</span>
          <span className="block italic text-electric">HOTELS</span>
        </h2>
      </div>

      {/* Floating Labels */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-[1440px] flex items-center justify-center">
          {labels.map((label, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
              whileInView={{ 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? label.x * 0.4 : label.x, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? label.y * 0.7 : label.y, 
                opacity: 1, 
                scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.7 : 1 
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                stiffness: 70, 
                damping: 20, 
                delay: 0.2 + (i * 0.05) 
              }}
              style={{ backgroundColor: label.color }}
              className="absolute px-6 py-2 rounded-full text-brand-black font-bold text-sm md:text-base shadow-xl whitespace-nowrap"
            >
              {label.text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electric-glow opacity-10 pointer-events-none" />
    </section>
  );
}
