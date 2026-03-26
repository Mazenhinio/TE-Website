import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { foodBeverageData as data } from '../data/departmentPages';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FoodBeverage() {
  const { hero, painPoint, solutions, whatsappSection, useCases, results } = data;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div className="bg-brand-black min-h-screen text-cream selection:bg-electric selection:text-black pt-20">
      
      {/* 1. EDITORIAL HERO */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center bg-electric text-black px-6 overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        >
          <span className="font-display font-black text-[30vw] whitespace-nowrap leading-none tracking-tighter mix-blend-overlay">F & B</span>
        </motion.div>
        
        <div className="max-w-6xl w-full z-10 grid lg:grid-cols-12 gap-12 items-end pb-12">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-16 h-1 bg-black"
            />
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-[clamp(2.5rem,10vw,7rem)] font-display font-black leading-[0.9] tracking-tighter text-black break-words"
              >
                {hero.h1}
              </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end h-full text-left lg:text-right"
          >
            <p className="font-body text-xl font-medium max-w-sm mb-8 leading-tight">{hero.subheadline}</p>
            <Link to="/contact" className="group flex items-center gap-4 bg-black text-electric px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform text-sm md:text-base">
              Serve Revenue <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* 3. ASYMMETRIC STICKY SOLUTIONS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 pt-12 lg:sticky lg:top-32 h-max">
            <h3 className="text-sm font-mono tracking-widest text-electric uppercase mb-4">The Solution</h3>
            <h2 className="text-[clamp(2.25rem,6vw,3.5rem)] font-display font-bold mb-8 leading-[1.1]">Automate the Kitchen<br className="hidden md:block" /> to the Cloud.</h2>
            <p className="text-cream/70 text-lg">Total Engage cuts out the manual grunt work, putting your seasonal menus and table bookings onto auto-pilot.</p>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                className={`bg-[#111] border border-white/5 p-8 rounded-[2rem] hover:bg-electric hover:text-black transition-colors group ${i === 1 ? 'sm:translate-y-12' : ''} ${i === 3 ? 'sm:translate-y-12' : ''}`}
              >
                <div className="w-12 h-12 bg-cream/10 group-hover:bg-black/10 rounded-full flex items-center justify-center mb-16">
                  <span className="font-mono text-sm font-bold">0{i+1}</span>
                </div>
                <h4 className="text-2xl font-bold font-display mb-4 group-hover:text-black transition-colors">{sol.title}</h4>
                <p className="opacity-70 group-hover:opacity-100 font-medium leading-relaxed group-hover:text-black transition-colors">{sol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHAT DEMO - GIANT PHONE */}
      <section className="bg-cream text-black py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="w-24 h-24 bg-electric rounded-full blur-[40px] absolute -top-12 -left-12 mix-blend-multiply" />
            <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-display font-black leading-[0.9] mb-8 relative z-10 text-black">{whatsappSection.h2}</h2>
            <p className="text-2xl font-medium max-w-md relative z-10">{whatsappSection.body}</p>
          </div>
          <div className="relative mx-auto w-full max-w-[320px]">
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, mass: 1.5 }}
              className="bg-brand-black border-[12px] border-black rounded-[3rem] h-auto w-full shadow-2xl p-4 pt-16 flex flex-col gap-3 pb-8 overflow-hidden relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20" />
              {whatsappSection.messages.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: m.sender === 'Hotel' ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.4), type: "spring" }}
                  className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-tight shadow-sm font-body ${m.sender === 'Hotel' ? 'bg-[#222] text-cream rounded-tl-none self-start mr-auto' : 'bg-electric text-black rounded-tr-none self-end ml-auto'}`}
                >
                  {m.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. OVERLAPPING RESULTS */}
      <section ref={targetRef} className="py-40 bg-brand-black px-6 flex flex-col items-center">
        <h2 className="text-electric font-mono uppercase tracking-widest text-sm mb-20 text-center">The ROI of F&B Automation</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 w-full max-w-6xl">
          {results.map((r, i) => (
            <motion.div 
              key={i}
              style={{ y: i % 2 === 0 ? y : 0 }}
              className="w-64 h-64 md:-ml-8 first:ml-0 rounded-full bg-electric flex flex-col items-center justify-center text-black shadow-2xl mix-blend-screen relative hover:scale-110 transition-transform duration-500 z-10 hover:z-50"
            >
              <span className="text-6xl font-display font-black tracking-tighter mb-2">{r.value}</span>
              <span className="font-bold text-center text-sm px-6 leading-tight uppercase tracking-wider">{r.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-electric text-black py-32 px-6 text-center">
        <h2 className="text-[clamp(3.5rem,12vw,8rem)] font-display font-black mb-12 text-black">Table for Two?</h2>
        <Link to="/contact" className="inline-block bg-black text-electric text-2xl font-bold px-12 py-6 rounded-full hover:scale-110 transition-transform shadow-button group">
          Schedule Demo <span className="inline-block group-hover:translate-x-2 transition-transform">&rarr;</span>
        </Link>
      </section>
    </div>
  );
}
