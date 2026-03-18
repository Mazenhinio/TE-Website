import React from 'react';
import { motion } from 'framer-motion';
import { loyaltyRetentionData as data } from '../data/departmentPages';
import { Heart, Repeat, UserCheck, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoyaltyRetention() {
  const { hero, painPoint, solutions, whatsappSection, useCases, results } = data;

  return (
    <div className="bg-brand-black min-h-screen text-cream font-body pt-24 selection:bg-electric selection:text-black">
      
      {/* 1. NETWORK HERO - GLOWING CONNECTORS */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                d="M 100 200 L 900 800 M 100 800 L 900 200 M 500 0 L 500 1000"
                stroke="white" 
                strokeWidth="1" 
                fill="none" 
              />
              <motion.circle 
                animate={{ cx: [100, 900, 100], cy: [200, 800, 200] }}
                transition={{ duration: 5, repeat: Infinity }}
                r="4" fill="#DEFF00"
              />
           </svg>
        </div>
        
        <div className="max-w-5xl z-10 flex flex-col items-center">
          <motion.div 
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ type: "spring", stiffness: 200, damping: 20 }}
             className="w-20 h-20 bg-electric/10 rounded-full flex items-center justify-center mb-10 border border-electric/30"
          >
             <TrendingUp className="text-electric w-10 h-10" />
          </motion.div>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-black leading-none tracking-tighter mb-8"
          >
            {hero.h1.split(' ').slice(0,-1).join(' ')} <span className="text-electric">{hero.h1.split(' ').slice(-1)}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl font-light opacity-60 max-w-2xl leading-relaxed mb-16"
          >
             {hero.subheadline}
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              className="bg-electric text-black px-12 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(222,255,0,0.3)] hover:shadow-[0_0_50px_rgba(222,255,0,0.5)] transition-all inline-block"
            >
              Start Re-Engaging
            </Link>
          </motion.div>
        </div>
      </section>



      {/* 3. LIFECYCLE SOLUTIONS - TIMELINE CARDS */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-display font-bold mb-32 text-center">The Guest Journey.</h2>
        <div className="relative flex flex-col gap-12">
           <div className="absolute left-[31px] md:left-1/2 top-0 w-0.5 h-full bg-electric/20 -translate-x-1/2 hidden md:block" />
           {solutions.map((sol, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className={`flex flex-col md:flex-row gap-8 items-center w-full ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}
             >
                <div className="w-full md:w-1/2 p-10 bg-[#111] border border-white/5 rounded-[2.5rem] hover:border-electric transition-all shadow-2xl relative group">
                   <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-electric rounded-full border-4 border-black z-20 hidden md:block ${i % 2 === 0 ? '-right-10' : '-left-10'}`} />
                   <div className={`text-electric mb-8 flex items-center ${i % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      {i === 0 ? <UserCheck size={32} /> : i === 1 ? <Repeat size={32} /> : i === 2 ? <Heart size={32} /> : <BarChart3 size={32} />}
                   </div>
                   <h3 className="text-3xl font-display font-bold mb-4">{sol.title}</h3>
                   <p className="text-lg opacity-60 leading-relaxed font-light">{sol.description}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
             </motion.div>
           ))}
        </div>
      </section>

      {/* 4. THE LONG-DISTANCE CHAT */}
      <section className="py-40 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
           <div>
              <span className="font-mono text-electric text-xs tracking-widest uppercase mb-6 block uppercase">{whatsappSection.context}</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-none">{whatsappSection.h2}</h2>
              <p className="text-xl md:text-2xl opacity-60 max-w-xl leading-relaxed font-light">
                 {whatsappSection.body}
              </p>
           </div>
           
           <div className="relative">
              <div className="absolute inset-0 bg-electric/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="flex flex-col gap-6 relative z-10">
                 {whatsappSection.messages.map((m, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0.5, opacity: 0, rotate: i % 2 === 0 ? -10 : 10 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.3, type: "spring" }}
                      className={`max-w-[75%] p-8 rounded-[3rem] text-lg font-medium shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                        m.sender === 'Hotel' 
                          ? 'bg-white text-black self-start rounded-tl-none -mb-4' 
                          : 'bg-electric text-black self-end rounded-br-none -mt-4'
                      }`}
                    >
                      {m.text}
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 5. DATA HUD STATISTICS */}
      <section className="py-40 bg-brand-black text-cream px-6 relative border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-20">
           {results.map((r, i) => (
             <div key={i} className="flex flex-col items-center group">
                <div className="w-full h-1 bg-white/5 mb-20 overflow-hidden rounded-full">
                   <motion.div 
                     initial={{ scaleX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, delay: i * 0.2 }}
                     className="w-full h-full bg-electric origin-left"
                   />
                </div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-7xl md:text-8xl font-display font-black tracking-tighter text-white mb-6"
                >
                   {r.value}
                </motion.div>
                <span className="text-sm font-bold uppercase tracking-[0.3em] font-mono text-electric opacity-80">{r.label}</span>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}
