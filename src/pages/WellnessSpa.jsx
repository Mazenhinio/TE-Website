import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { wellnessSpaData as data } from '../data/departmentPages';
import { Sparkles, Calendar, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WellnessSpa() {
  const { hero, painPoint, solutions, whatsappSection, useCases, results } = data;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <div className="bg-cream min-h-screen text-black font-body pt-24 selection:bg-electric">
      
      {/* 1. ZEN HERO */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl z-10 flex flex-col items-center"
        >
          <span className="font-mono tracking-[0.3em] font-medium text-xs mb-10 opacity-60">RENEW BALANCE</span>
          <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-display font-medium tracking-tight leading-[1] mb-8 relative text-black break-words">
            {hero.h1}
            <Sparkles className="absolute -top-12 -right-16 text-black w-16 h-16 animate-pulse hidden md:block" />
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-80 max-w-2xl leading-relaxed mb-12">
            {hero.subheadline}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="bg-black text-cream px-10 py-4 rounded-full font-medium tracking-wider shadow-2xl inline-block">
              Start the Journey
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating gradient orb */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-electric/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
        />
      </section>



      {/* 3. MINIMAL MASONRY SOLUTIONS */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
           <div className="flex flex-col gap-10 order-2 md:order-1">
             <div className="flex items-start gap-6 border-b border-black/10 pb-8">
               <Calendar className="text-black w-8 h-8 flex-shrink-0" />
               <div>
                  <h3 className="font-display font-medium text-2xl mb-2 text-black">{solutions[0].title}</h3>
                  <p className="opacity-70 font-light text-black">{solutions[0].description}</p>
               </div>
             </div>
             <div className="flex items-start gap-6 border-b border-black/10 pb-8 ml-0 lg:ml-12">
               <Heart className="text-black w-8 h-8 flex-shrink-0" />
               <div>
                  <h3 className="font-display font-medium text-2xl mb-2 text-black">{solutions[1].title}</h3>
                  <p className="opacity-70 font-light text-black">{solutions[1].description}</p>
               </div>
             </div>
             <div className="flex items-start gap-6 border-b border-black/10 pb-8 ml-0 lg:ml-24">
               <Share2 className="text-black w-8 h-8 flex-shrink-0" />
               <div>
                  <h3 className="font-display font-medium text-2xl mb-2 text-black">{solutions[2].title}</h3>
                  <p className="opacity-70 font-light text-black">{solutions[2].description}</p>
               </div>
             </div>
             <div className="flex items-start gap-6 border-b border-black/10 pb-8 ml-0 lg:ml-32">
               <Sparkles className="text-black w-8 h-8 flex-shrink-0" />
               <div>
                  <h3 className="font-display font-medium text-2xl mb-2 text-black">{solutions[3].title}</h3>
                  <p className="opacity-70 font-light text-black">{solutions[3].description}</p>
               </div>
             </div>
           </div>
           
           <motion.div 
             style={{ scale }}
             ref={targetRef}
             className="order-1 md:order-2 bg-[#E1DCD3] aspect-[4/5] rounded-[2rem] flex flex-col justify-between overflow-hidden relative shadow-2xl"
           >
             <img 
               src="/images/Spa.png" 
               alt="Luxury Spa Interior" 
               className="absolute inset-0 w-full h-full object-cover shadow-2xl" 
             />
           </motion.div>
        </div>
      </section>

      {/* 4. AIRY CHAT SEQUENCE */}
      <section className="bg-black text-cream py-40 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-24">
          <h2 className="text-[clamp(2.25rem,6vw,3.5rem)] font-display font-light mb-6">{whatsappSection.h2}</h2>
          <p className="text-xl font-light opacity-60 font-body max-w-2xl">{whatsappSection.body}</p>
        </div>
        
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {whatsappSection.messages.map((m, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 1, delay: i * 0.3 }}
               className={`max-w-[80%] md:max-w-sm rounded-3xl p-6 shadow-2xl text-[15px] leading-relaxed relative ${
                 m.sender === 'Hotel' 
                   ? 'bg-[#111] border border-white/5 rounded-tl-none self-start mr-auto' 
                   : 'bg-cream text-black rounded-br-none self-end ml-auto'
               }`}
             >
               {m.text}
             </motion.div>
          ))}
        </div>
      </section>

      {/* 5. GIGANTIC METRICS ROW */}
      <section className="py-40 bg-electric text-black px-6 border-b-[20px] border-brand-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 text-center">
          {results.map((res, i) => (
            <div key={i} className="flex flex-col items-center">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", mass: 1.5, delay: i * 0.2 }}
                 className="text-[clamp(4.5rem,15vw,8rem)] font-display font-medium tracking-tighter leading-none mb-6"
               >
                 {res.value}
               </motion.div>
               <div className="w-12 h-1 bg-black mb-6" />
               <p className="text-lg font-medium opacity-80 max-w-[200px]">{res.label}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
