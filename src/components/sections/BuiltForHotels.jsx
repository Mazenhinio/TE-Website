import { motion } from 'framer-motion';

const labels = [
  { text: 'Luxury Resorts', x: -350, y: -180, color: '#A855F7' }, 
  { text: 'Boutique Hotels', x: -250, y: 150, color: '#3B82F6' },
  { text: 'Golf Courses', x: 300, y: -160, color: '#6366F1' },     
  { text: 'General Managers', x: 380, y: 140, color: '#A855F7' },  
  { text: 'Beach Clubs', x: -400, y: -20, color: '#3B82F6' },  
  { text: 'Tennis Courts', x: 420, y: -30, color: '#2DD4BF' },  
  { text: 'Chain Hotels', x: -150, y: -220, color: '#94A3B8' },    
  { text: 'Water Sports', x: 180, y: 220, color: '#2DD4BF' },     
  { text: 'Entertainment', x: -280, y: 250, color: '#6366F1' },       
  { text: 'Theme Parks', x: 120, y: -250, color: '#3B82F6' },        
  { text: 'Revenue Management', x: 50, y: 280, color: '#94A3B8' },           
  { text: 'Asset Managers', x: 450, y: 240, color: '#A855F7' },    
];

const FloatingPill = ({ label, index }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const targetX = isMobile ? label.x * 0.4 : label.x;
  const targetY = isMobile ? label.y * 0.7 : label.y;
  const targetScale = isMobile ? 0.7 : 1;

  // Horizontal sliding path for purely back-and-forth drifting
  const xOffset = [0, 40 + index * 2, -40 - index * 2, 0];

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
      whileInView={{ x: targetX, y: targetY, opacity: 1, scale: targetScale }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.2 + (index * 0.05) }}
      className="absolute pointer-events-none z-0"
    >
      <motion.div
        animate={{ 
          x: xOffset,
        }}
        transition={{
          duration: 12 + (index % 4) * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        }}
        className="pointer-events-none"
      >
        <motion.div
          drag
          dragElastic={0.6}
          dragSnapToOrigin={true}
          dragTransition={{ bounceStiffness: 40, bounceDamping: 5 }}
          whileDrag={{ scale: 1.15, cursor: "grabbing" }}
          style={{ backgroundColor: label.color }}
          className="px-6 py-2 rounded-full text-brand-black font-bold text-sm md:text-base shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap cursor-grab hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] pointer-events-auto transition-shadow"
        >
          {label.text}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function BuiltForHotels() {
  return (
    <section className="bg-brand-black py-40 px-6 overflow-hidden relative min-h-[800px] flex items-center justify-center">
      <div className="relative z-20 text-center max-w-7xl mx-auto pointer-events-none">
        <h2 className="text-[9vw] md:text-[7vw] font-black font-display leading-[0.85] tracking-tighter text-cream flex flex-col items-center">
          <span className="block">BUILT FOR HOSPITALITY & LEISURE,</span>
          <span className="block italic text-electric uppercase">by Hospitality Experts.</span>
        </h2>
      </div>

      {/* Floating Labels */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full h-full max-w-[1440px] flex items-center justify-center">
          {labels.map((label, i) => (
            <FloatingPill key={i} label={label} index={i} />
          ))}
        </div>
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electric-glow opacity-10 pointer-events-none" />
    </section>
  );
}
