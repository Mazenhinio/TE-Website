import React from 'react';
import { motion } from 'framer-motion';
import { kidsClubData as data } from '../data/departmentPages';
import { Link } from 'react-router-dom';

export default function KidsClub() {
  const { hero, painPoint, solutions, whatsappSection, useCases, results } = data;

  return (
    <div className="bg-cream min-h-screen text-black overflow-hidden font-body pt-20">
      
      {/* 1. PLAYFUL BOUNCY HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute top-20 left-10 w-64 h-64 bg-electric rounded-full blur-[80px] opacity-40 mix-blend-multiply" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-black rounded-full blur-[120px] opacity-10" />

        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1.5 }}
          className="z-10 bg-electric px-6 py-2 rounded-full border-4 border-black mb-10 transform -rotate-3 hover:rotate-3 transition-transform cursor-pointer"
        >
          <span className="font-mono text-sm tracking-widest font-black uppercase text-black">{hero.tag}</span>
        </motion.div>

        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 2 }}
          className="z-10 text-[clamp(2.5rem,12vw,7.5rem)] font-display font-black leading-[0.9] tracking-tighter max-w-6xl mx-auto mb-10 text-brand-black break-words"
        >
          {hero.h1}
        </motion.h1>

        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="z-10 text-xl md:text-3xl font-medium max-w-3xl leading-relaxed opacity-80 mb-16"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.9 }}>
          <Link 
            to="/contact" 
            className="z-10 bg-black text-electric text-2xl font-black px-12 py-5 rounded-[2rem] shadow-[8px_8px_0px_#DEFF00] hover:shadow-[12px_12px_0px_#DEFF00] transition-all border-4 border-black inline-block"
          >
            See It In Action
          </Link>
        </motion.div>
      </section>



      {/* 3. SCRAMBLED TOY-BOX SOLUTIONS */}
      <section className="py-40 bg-cream border-b border-black/10 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-[clamp(3.5rem,12vw,8rem)] font-display font-black tracking-tighter">The Toy Box.</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-16 md:gap-8 lg:gap-16 max-w-6xl mx-auto px-4">
          {solutions.map((sol, i) => {
            const rotations = [-6, 8, -4, 10];
            const yOffsets = [0, 40, -20, 60];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 150, rotate: rotations[i] * 2 }}
                whileInView={{ 
                  opacity: 1, 
                  y: window.innerWidth < 768 ? 0 : yOffsets[i], 
                  rotate: rotations[i] 
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className={`bg-brand-black text-white p-8 md:p-12 w-full max-w-sm rounded-[2rem] border-4 ${i % 2 === 0 ? 'border-electric' : 'border-[#F4F2E6] shadow-2xl'} shadow-xl relative cursor-crosshair`}
              >
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-black text-xl border-4 border-black border-dashed">
                  {i+1}
                </div>
                <h3 className="font-display font-bold text-3xl mb-6">{sol.title}</h3>
                <p className="font-medium text-lg opacity-80 leading-relaxed">{sol.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 4. THE MAGIC CHAT BUBBLE OVERLAY */}
      <section className="bg-brand-black text-cream py-40 px-6 relative overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative z-10 p-8 md:p-14 bg-electric border-8 border-black rounded-[3rem] shadow-[16px_16px_0px_#F4F2E6]">
             <div className="flex items-center gap-4 mb-10 pb-6 border-b-4 border-black/20">
                <div className="w-4 h-4 rounded-full border-4 border-black bg-cream animate-pulse" />
                <span className="font-bold text-black uppercase tracking-widest leading-none">{whatsappSection.context}</span>
             </div>
             <div className="flex flex-col gap-6">
                {whatsappSection.messages.map((m, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, opacity: 0, transformOrigin: m.sender === 'Hotel' ? 'left bottom' : 'right bottom' }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.6, delay: 0.2 + (i * 0.3) }}
                    className={`max-w-[90%] p-6 rounded-3xl text-lg font-bold border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] leading-snug ${
                      m.sender === 'Hotel' 
                        ? 'bg-cream text-black rounded-tl-none self-start mr-auto' 
                        : 'bg-black text-cream rounded-br-none self-end ml-auto'
                    }`}
                  >
                    {m.text}
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="order-1 lg:order-2 z-10 relative">
            <h2 className="text-[clamp(2.5rem,12vw,8rem)] font-display font-black mb-8 leading-[0.9] text-cream drop-shadow-lg">{whatsappSection.h2}</h2>
            <p className="text-2xl font-medium opacity-80 leading-relaxed border-l-4 border-electric pl-6">{whatsappSection.body}</p>
          </div>
        </div>
      </section>

      {/* 5. GIGANTIC BOUNCY STATS */}
      <section className="py-40 bg-cream text-brand-black px-6 border-t-[16px] border-electric">
        <h2 className="text-center font-display font-black text-5xl mb-24 uppercase">The Scoreboard</h2>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-8 divide-y-[4px] lg:divide-y-0 lg:divide-x-[4px] divide-black border-4 border-black rounded-[3rem] bg-white p-12 md:p-24 shadow-[24px_24px_0px_#000]">
          {results.map((r, i) => (
             <div key={i} className="flex flex-col items-center flex-1 text-center py-12 lg:py-0 w-full">
               <motion.div 
                 initial={{ y: 50, scale: 0.5, opacity: 0 }}
                 whileInView={{ y: 0, scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -20, rotate: i % 2 === 0 ? 5 : -5 }}
                 transition={{ type: "spring", bounce: 0.8 }}
                 className="text-[clamp(4.5rem,20vw,9rem)] font-display font-black tracking-tighter text-electric drop-shadow-[4px_4px_0px_#000] mb-6"
               >
                 {r.value}
               </motion.div>
               <span className="text-lg md:text-xl font-bold uppercase tracking-widest max-w-[200px] leading-snug">{r.label}</span>
             </div>
          ))}
        </div>
      </section>

    </div>
  );
}
