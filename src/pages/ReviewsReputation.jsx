import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { reviewsReputationData as data } from '../data/departmentPages';
import { Shield, Star, Globe, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReviewsReputation() {
  const { hero, painPoint, solutions, whatsappSection, useCases, results } = data;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="bg-brand-black min-h-screen text-cream font-body pt-24 selection:bg-electric selection:text-black">
      
      {/* 1. RADAR COMMAND CENTER HERO */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
           >
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-electric rounded-full -translate-x-1/2 -mt-2 shadow-[0_0_20px_#DEFF00]" />
           </motion.div>
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"
           >
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white/40 rounded-full -translate-x-1/2 -mb-1.5" />
           </motion.div>
        </div>
        
        <div className="max-w-5xl z-10 flex flex-col items-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
             <span className="font-mono text-xs tracking-widest text-electric uppercase mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-electric animate-ping" />
                Live Monitoring Active
             </span>
             <h1 className="text-[clamp(2.5rem,10vw,7.5rem)] font-display font-black leading-none tracking-tighter mb-10 break-words">
                {hero.h1.split(' ').slice(0,3).join(' ')} <br className="hidden md:block" />
                <span className="text-electric">{hero.h1.split(' ').slice(3).join(' ')}</span>
             </h1>
             <p className="text-xl md:text-2xl font-light opacity-60 max-w-2xl leading-relaxed mb-16">
                {hero.subheadline}
              </p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link 
                  to="/contact" 
                  className="px-12 py-5 bg-white text-black text-xl font-bold rounded-full shadow-2xl hover:bg-electric transition-colors inline-block"
                >
                  Launch AI Defender
                </Link>
              </motion.div>
          </motion.div>
        </div>
      </section>



      {/* 3. SHIELD SOLUTIONS - BENTO GRID */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-display font-bold mb-32 text-center">Intercept the Noise.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {solutions.map((sol, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className={`bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-12 hover:border-electric transition-all shadow-2xl relative overflow-hidden group min-h-[420px] ${
                 i === 0 || i === 3 ? 'lg:col-span-2' : 'lg:col-span-1'
               }`}
             >
                <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 h-full flex flex-col justify-start">
                   <div className="text-electric group-hover:scale-110 transition-transform origin-left mb-12">
                      {i === 0 ? <Shield size={48} /> : i === 1 ? <Zap size={48} /> : i === 2 ? <Star size={48} /> : <TrendingUp size={48} />}
                   </div>
                   <h3 className="text-4xl font-display font-medium mb-6 text-white group-hover:text-electric transition-colors">{sol.title}</h3>
                   <p className="text-xl opacity-60 leading-relaxed font-light group-hover:opacity-100 transition-opacity italic">{sol.description}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 4. THE INTERCEPT CHAT - RADAR STYLE */}
      <section ref={targetRef} className="py-40 bg-[#111] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
           <div>
              <span className="font-mono text-electric text-xs tracking-widest uppercase mb-6 block uppercase">{whatsappSection.context}</span>
              <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-display font-bold mb-8 leading-[1.1]">{whatsappSection.h2}</h2>
              <p className="text-xl md:text-2xl opacity-60 max-w-xl leading-relaxed font-light">
                 {whatsappSection.body}
              </p>
           </div>
           
           <div className="relative aspect-square flex items-center justify-center">
              <motion.div 
                style={{ rotate: orbitRotate }}
                className="absolute inset-0 border border-electric/10 rounded-full"
              />
              <div className="flex flex-col gap-6 w-full max-w-sm">
                 {whatsappSection.messages.map((m, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.4 }}
                      className={`p-6 rounded-[2rem] text-[15px] font-medium shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-l-4 ${
                        m.sender === 'Hotel' 
                          ? 'bg-[#0A0A0A] border-white/20 text-cream self-start mr-8' 
                          : 'bg-[#000] border-electric text-electric self-end ml-8'
                      }`}
                    >
                      {m.text}
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 5. SIGNAL HUD STATISTICS */}
      <section className="py-40 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-20">
           {results.map((r, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.2 }}
               className="flex flex-col items-center text-center p-12 bg-cream rounded-[4rem] flex-1 w-full border border-black/5 hover:border-black transition-all"
             >
                <motion.div 
                  initial={{ rotateX: 90 }}
                  whileInView={{ rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-[clamp(4.5rem,15vw,9rem)] font-display font-black tracking-tighter leading-none mb-4"
                >
                   {r.value}
                </motion.div>
                <div className="flex items-center gap-2 mb-6">
                   <Globe size={16} />
                   <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">{r.label}</span>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

    </div>
  );
}
