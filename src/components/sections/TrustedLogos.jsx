import { motion } from 'framer-motion';

const logos = [
  { 
    name: 'Shangri-La Hotels & Resorts', 
    src: '/images/Shangrila Logo final.png',
    imgScale: 1,
    // Dark logo on dark bg → invert to white
    filter: 'invert(1) hue-rotate(180deg) brightness(1.2)',
  },
  { 
    name: 'InterContinental Hotels & Resorts', 
    src: '/images/intercontinental-hotels-resorts-logo-png_seeklogo-252956.png',
    imgScale: 1.9,
    // Dark logo on dark bg → invert to white
    filter: 'invert(1) hue-rotate(180deg) brightness(1.2)',
  },
  { 
    name: 'Hilton', 
    src: '/images/hi1918la81-hilton-logo-logos-hilton-press-center.webp',
    imgScale: 1,
    filter: 'none',
  },
  { 
    name: 'Rosewood', 
    src: '/images/Rosewood Logo.svg',
    imgScale: 1,
    // SVG has black fills — CSS invert makes it appear white on dark bg
    filter: 'invert(1)',
  },
  {
    name: 'Oteliana',
    src: '/images/oteliana logo.png',
    imgScale: 1,
    filter: 'none',
  },
];

// 25% smaller than original 420×150
const LOGO_W = 315;
const LOGO_H = 112;

export default function TrustedLogos() {
  return (
    <section className="bg-brand-black py-16 px-4 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xl md:text-3xl font-display font-bold uppercase tracking-[0.2em] text-cream">
            Trusted by industry leaders
          </span>
        </motion.div>

        {/* Single-row logo strip with vertical dividers */}
        <div className="flex items-center justify-center flex-nowrap w-full">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center flex-shrink-0">

              {/* Vertical divider between logos */}
              {i > 0 && (
                <div
                  className="flex-shrink-0 rounded-full bg-white/15"
                  style={{ width: '1px', height: `${LOGO_H * 0.55}px` }}
                />
              )}

              {/* Logo card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.06, y: -6, rotate: i % 2 === 0 ? 1 : -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 300 }}
                className="bg-transparent rounded-2xl flex items-center justify-center p-3 md:p-4 cursor-pointer flex-shrink-0"
                style={{ width: `${LOGO_W}px`, height: `${LOGO_H}px` }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain"
                  style={{
                    transform: `scale(${logo.imgScale})`,
                    filter: logo.filter,
                  }}
                />
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
