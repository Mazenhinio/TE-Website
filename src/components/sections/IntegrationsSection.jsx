import { motion } from 'framer-motion';

const integrations = [
  { name: 'Meta', icon: '/images/Meta Logo.webp' },
  { name: 'TikTok', icon: '/images/TikTok-Logo-Transparent.webp' },
  { name: 'WhatsApp', icon: '/images/Whatsapp Logo.webp' },
  { name: 'Instagram', icon: '/images/instagram logo.webp' },
  { name: 'Facebook', icon: '/images/facebook logo.webp' },
  { name: 'Google Reviews', icon: '/images/Google logo.webp' },
  { name: 'Booking.com', icon: '/images/Booking.com logo.webp', scale: 1.15 },
  { name: 'TripAdvisor', icon: '/images/tripadvisor logo.webp', scale: 1.15 },
  { name: 'Google Calendar', icon: '/images/google calendar logo.webp' },
  { name: 'Outlook Calendar', icon: '/images/Outlook calendar logo.webp' },
  { name: 'Zoom', icon: '/images/zoom logo.webp' },
];

export default function IntegrationsSection() {
  // Split integrations into two rows for variety
  const row1Items = [...integrations.slice(0, 6), ...integrations.slice(0, 6), ...integrations.slice(0, 6)];
  const row2Items = [...integrations.slice(6), ...integrations.slice(6), ...integrations.slice(6)];

  return (
    <section className="bg-brand-black py-24 px-6 border-y border-white/5 relative overflow-hidden">
      
      {/* Inline styles for the infinite marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .marquee-row:hover .animate-scroll-left,
        .marquee-row:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto text-center relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-cream-muted">
            Seamless Connectivity
          </span>
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-20">
          Integrates with the tools <br className="hidden md:block" />
          <span className="text-electric">you already use.</span>
        </h2>
      </div>

      {/* Row 1: Infinite scrolling track (Left) */}
      <div className="w-full overflow-hidden relative z-10 py-6 marquee-row before:absolute before:left-0 before:top-0 before:z-10 before:w-[15%] before:h-full before:bg-gradient-to-r before:from-brand-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-[15%] after:h-full after:bg-gradient-to-l after:from-brand-black after:to-transparent pointer-events-auto">
        <div className="flex items-center w-max animate-scroll-left">
          {row1Items.map((app, i) => (
            <div key={`row1-${i}`} className="flex items-center">
              <div className="flex flex-col items-center justify-center gap-6 px-12 md:px-16 cursor-pointer group">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  <img src={app.icon} alt={app.name} className="max-w-full max-h-full object-contain filter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(222,255,0,0.5)]" />
                </div>
                <span className="text-white/60 group-hover:text-electric font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] transition-colors duration-300">
                  {app.name}
                </span>
              </div>
              <div className="h-16 w-px bg-white/10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Infinite scrolling track (Right) */}
      <div className="w-full overflow-hidden relative z-10 py-6 mt-4 marquee-row before:absolute before:left-0 before:top-0 before:z-10 before:w-[15%] before:h-full before:bg-gradient-to-r before:from-brand-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-[15%] after:h-full after:bg-gradient-to-l after:from-brand-black after:to-transparent pointer-events-auto">
        <div className="flex items-center w-max animate-scroll-right">
          {row2Items.map((app, i) => (
            <div key={`row2-${i}`} className="flex items-center">
              <div className="flex flex-col items-center justify-center gap-6 px-12 md:px-16 cursor-pointer group">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  <img src={app.icon} alt={app.name} className="max-w-full max-h-full object-contain filter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(222,255,0,0.5)]" />
                </div>
                <span className="text-white/60 group-hover:text-electric font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] transition-colors duration-300">
                  {app.name}
                </span>
              </div>
              <div className="h-16 w-px bg-white/10"></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
