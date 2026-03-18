import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { roomsSuitesData as data } from '../data/departmentPages';
import { Bed, Star, ChevronRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoomsSuites() {
  const { hero, painPoint, solutions, whatsappSection, useCases, results } = data;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] min-h-screen text-black font-body pt-20 selection:bg-electric">
      
      {/* 1. LUXURY EDITORIAL HERO */}
      <section className="relative w-full h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-5">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="border-x border-black h-full" />
           ))}
        </div>
        
        <div className="max-w-7xl w-full z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <span className="font-mono text-xs tracking-[0.4em] uppercase opacity-40 mb-8 block">THE PRE-ARRIVAL EXPERIENCE</span>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.95] tracking-tighter mb-10 text-black">
              {hero.h1.split(' ').slice(0,3).join(' ')} <br/>
              <span className="font-italic italic text-electric stroke-black" style={{ WebkitTextStroke: '2px black' }}>{hero.h1.split(' ').slice(3).join(' ')}</span>
            </h1>
            <p className="text-xl text-black font-medium max-w-md leading-relaxed mb-12 opacity-80">{hero.subheadline}</p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-6 bg-black text-white px-10 py-5 rounded-full font-medium"
              >
                Master Your Inventory <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <div className="w-full max-w-[800px] aspect-[16/11] border-4 border-black rounded-[3rem] rounded-br-none relative overflow-hidden shadow-2xl group mx-auto lg:-mr-32">
                <img 
                   src="/images/Room.png" 
                   alt="Luxury Suite" 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
             </div>
          </motion.div>
        </div>
      </section>



       {/* 3. ARCHITECTURAL STACKED SOLUTIONS */}
       <section className="py-48 bg-brand-black px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-8">
               <div className="max-w-2xl">
                  <span className="font-mono text-electric text-xs tracking-widest uppercase mb-6 block">The Workflow</span>
                  <h2 className="text-6xl md:text-8xl font-display font-medium text-cream leading-none tracking-tight">Seamless <br/>Transitions.</h2>
               </div>
               <p className="text-xl text-cream/50 max-w-sm mb-4">Master every touchpoint from the moment of booking to the final check-out.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
               {solutions.map((sol, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: i * 0.1 }}
                   className={`relative group p-12 lg:p-16 border-t border-white/10 hover:border-electric transition-all duration-500 flex flex-col justify-between min-h-[450px] ${i % 2 === 1 ? 'md:mt-24' : ''}`}
                 >
                    <span className="absolute top-12 right-12 font-display text-8xl text-white/5 font-black group-hover:text-electric/10 transition-colors">0{i+1}</span>
                    <div className="relative z-10 mt-auto">
                       <h3 className="text-4xl md:text-5xl font-display font-medium mb-8 text-electric leading-tight group-hover:translate-x-4 transition-transform duration-500">
                          {sol.title}
                       </h3>
                       <p className="text-xl text-cream/60 leading-relaxed font-light max-w-md group-hover:text-cream transition-colors duration-500">
                          {sol.description}
                       </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric/0 via-electric/0 to-electric/0 group-hover:via-electric/50 transition-all duration-700" />
                 </motion.div>
               ))}
            </div>
         </div>
       </section>

      {/* 4. THE WHITE GLOVE CHAT */}
      <section className="py-40 bg-[#111] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-5">
              <span className="font-mono text-electric text-xs tracking-widest uppercase mb-6 block">{whatsappSection.context}</span>
              <h2 className="text-6xl font-display font-bold mb-8 leading-none">{whatsappSection.h2}</h2>
              <p className="text-xl opacity-60 leading-relaxed font-light italic border-l-2 border-electric pl-8">
                {whatsappSection.body}
              </p>
           </div>
           
           <div className="lg:col-span-7 flex flex-col gap-6 items-end">
              {whatsappSection.messages.map((m, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.9, x: i % 2 === 0 ? -30 : 30 }}
                   whileInView={{ opacity: 1, scale: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.2 }}
                   className={`max-w-[70%] p-8 rounded-[2rem] text-lg font-light shadow-2xl ${
                     m.sender === 'Hotel' 
                      ? 'bg-white text-black self-start rounded-bl-none' 
                      : 'bg-electric text-black self-end rounded-br-none'
                   }`}
                 >
                   {m.text}
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. ELEGANT STATISTICS */}
      <section className="py-40 bg-electric text-black px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
           {results.map((r, i) => (
             <div key={i} className="flex flex-col items-center text-center">
                <motion.div 
                  initial={{ rotateY: 90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="text-8xl md:text-[9rem] font-display font-black tracking-tighter leading-none mb-4"
                >
                  {r.value}
                </motion.div>
                <div className="w-20 h-0.5 bg-black/20 mb-6" />
                <span className="text-sm font-mono uppercase tracking-[0.2em] font-bold opacity-60">{r.label}</span>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}
