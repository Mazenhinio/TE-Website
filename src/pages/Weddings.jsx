import React from 'react';
import { motion } from 'framer-motion';
import { weddingsData as data } from '../data/departmentPages';
import { Flower2, Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Weddings() {
  const { hero, painPoint, solutions, whatsappSection, useCases, results } = data;

  // Staggered text animation helper
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="bg-brand-black min-h-screen text-cream pt-20">
      
      {/* 1. ARCHITECTURAL HERO & THE SPLIT */}
      <section className="w-full min-h-[90vh] grid lg:grid-cols-2">
        <div className="bg-electric text-black flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
          <div className="z-10 relative">
             <span className="font-mono text-xs tracking-[0.2em] font-bold border border-black px-4 py-1 rounded-full mb-12 inline-block">THE CELEBRATION</span>
             <h1 className="text-6xl lg:text-[5.5rem] font-display font-black leading-[0.85] tracking-tighter text-black">
                {hero.h1.split('.')[0]}.<br/>{hero.h1.split('.')[1]}.
             </h1>
          </div>
        </div>
        <div className="bg-brand-black flex flex-col items-start justify-center p-12 lg:p-24 relative">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl font-body font-light max-w-lg mb-12 leading-relaxed opacity-90 border-l border-electric/30 pl-6"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }}>
             <Link 
               to="/contact" 
               className="px-8 py-4 bg-transparent border-2 border-electric text-electric font-bold rounded-full hover:bg-electric hover:text-black transition-colors inline-block"
             >
               Schedule Demo
             </Link>
          </motion.div>
        </div>
      </section>



      {/* 3. POLAROID SOLUTIONS */}
      <section className="py-40 bg-brand-black px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-24 text-center">Nurture The Journey.</h2>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-12">
            {solutions.slice(0, 3).map((sol, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 100, rotate: (i % 2 === 0 ? -5 : 5) }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                className="bg-[#111] p-6 pb-12 shadow-2xl w-full max-w-sm border-t border-white/10"
              >
                <div className="aspect-[4/3] mb-8 overflow-hidden rounded-md relative flex items-center justify-center">
                   <img 
                      src={i === 0 ? "/images/Concierge.png" : i === 1 ? "/images/Venue.png" : "/images/Wedding.png"} 
                      alt={sol.title} 
                      className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                   />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-white group-hover:text-electric transition-colors">{sol.title}</h3>
                <p className="font-light opacity-70 leading-relaxed text-cream">{sol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE CHAT REVEAL - LEFT ALIGNED */}
      <section className="bg-[#111] border-y border-white/5 py-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-stretch">
          <div className="flex-1 flex flex-col justify-center">
            <span className="font-mono text-electric text-xs uppercase tracking-widest font-bold mb-6">{whatsappSection.context}</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black mb-8 leading-tight">{whatsappSection.h2}</h2>
            <p className="text-xl opacity-70 mb-12 leading-relaxed">{whatsappSection.body}</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="flex-1 bg-cream/5 rounded-[2rem] p-8 md:p-12 relative origin-left"
          >
             <div className="absolute top-0 right-0 w-2 h-full bg-electric rounded-r-[2rem]" />
             {whatsappSection.messages.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.3) }}
                  className={`max-w-[85%] mb-4 p-4 rounded-xl text-sm leading-relaxed ${
                    m.sender === 'Hotel' 
                      ? 'bg-[#111] border border-white/10 text-cream rounded-tl-none self-start mr-auto' 
                      : 'bg-electric text-black rounded-tr-none ml-auto'
                  }`}
                >
                  {m.text}
                </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* 5. GIGANTIC TIERED METRICS */}
      <section className="py-32 px-6 bg-cream text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-end gap-12 md:gap-32">
          {results.map((r, i) => (
             <div key={i} className={`flex flex-col items-center ${i === 1 ? 'md:mb-16' : ''}`}>
               <motion.span 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="text-7xl md:text-9xl font-display font-black tracking-tighter"
               >
                 {r.value}
               </motion.span>
               <span className="text-sm font-bold uppercase tracking-widest mt-4 opacity-50 text-center max-w-[150px]">{r.label}</span>
             </div>
          ))}
        </div>
      </section>

    </div>
  );
}
