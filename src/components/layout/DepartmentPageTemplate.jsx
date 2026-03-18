import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTrail, animated } from 'react-spring';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, ArrowUpRight, Eye, Calendar, RefreshCw, Heart, Zap, Users, Star, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Utility to render correct icons
function renderIcon(iconName) {
  if (!iconName) return <Star size={32} className="text-black" />;
  switch (iconName.toLowerCase()) {
    case 'downward arrow': return <ArrowDownRight size={32} className="text-black" />;
    case 'upward arrow': return <ArrowUpRight size={32} className="text-black" />;
    case 'eye/open envelope': return <Eye size={32} className="text-black" />;
    case 'calendar': return <Calendar size={32} className="text-black" />;
    case 'refresh/cycle': return <RefreshCw size={32} className="text-black" />;
    case 'heart': return <Heart size={32} className="text-black" />;
    case 'lightning bolt': return <Zap size={32} className="text-black" />;
    case 'children/people': return <Users size={32} className="text-black" />;
    case 'people': return <Users size={32} className="text-black" />;
    case 'star': return <Star size={32} className="text-black" />;
    case 'reply/chat bubble': return <RefreshCw size={32} className="text-black" />;
    case 'shield': return <Shield size={32} className="text-black" />;
    case 'chart': return <ArrowUpRight size={32} className="text-black" />;
    default: return <Star size={32} className="text-black" />;
  }
}

export default function DepartmentPageTemplate({ data, children }) {
  const { theme, meta, hero, painPoint, solutions, whatsappSection, useCases, results } = data;

  // Render varying animations per page
  const animationMap = {
    'dynamic-fade': { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 }, transition: { type: "spring", stiffness: 100 } },
    'smooth-float': { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" } },
    'slow-reveal': { initial: { opacity: 0, rotateX: -20 }, whileInView: { opacity: 1, rotateX: 0 }, transition: { duration: 0.9 } },
    'bouncy-pop': { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { type: "spring", bounce: 0.6 } },
    'sharp-slide': { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5, ease: "anticipate" } },
    'sequential-grow': { initial: { opacity: 0, scaleY: 0.5, transformOrigin: 'top' }, whileInView: { opacity: 1, scaleY: 1 }, transition: { duration: 0.6 } },
    'zoom-in': { initial: { opacity: 0, scale: 1.05 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.4 } },
  };
  const animStyles = animationMap[theme?.animation] || animationMap['dynamic-fade'];

  // Render varying CSS grid layouts per page
  const getLayoutClasses = (section) => {
    const type = theme?.layout;
    if (section === 'solutions') {
      if (type === 'offset-grid') return "grid md:grid-cols-2 gap-8 items-start [&>*:nth-child(even)]:mt-0 lg:[&>*:nth-child(even)]:mt-16 lg:grid-cols-4 lg:gap-6";
      if (type === 'minimal-centered') return "flex flex-col items-center gap-12 max-w-4xl mx-auto text-center";
      if (type === 'elegant-split') return "grid md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-12";
      if (type === 'playful-stack') return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 [&>*:nth-child(odd)]:-rotate-2 [&>*:nth-child(even)]:rotate-2";
      if (type === 'timeline') return "flex flex-col gap-8 max-w-3xl mx-auto border-l-2 border-electric/30 pl-8 lg:pl-12";
      if (type === 'dashboard-grid') return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr lg:[&>*:nth-child(1)]:col-span-2 lg:[&>*:nth-child(4)]:col-span-2";
      return "grid md:grid-cols-2 lg:grid-cols-4 gap-6"; // classic
    }
    if (section === 'useCases') {
      if (type === 'timeline') return "flex flex-col gap-12 relative border-l-2 border-white/10 pl-6 lg:pl-10 before:content-[''] before:absolute before:left-[-2px] before:top-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-electric before:to-transparent";
      if (type === 'playful-stack') return "grid md:grid-cols-2 lg:grid-cols-3 gap-6";
      if (type === 'offset-grid') return "grid md:grid-cols-2 gap-10 items-center [&>*:nth-child(even)]:translate-y-8";
      if (type === 'elegant-split') return "flex flex-col divide-y divide-white/10 [&>*]:py-8 first:pt-0";
      return "grid md:grid-cols-2 gap-6"; // classic
    }
  };

  const statsRef = useRef([]);

  // Setup document meta tags (since react-helmet might not be in package.json)
  useEffect(() => {
    document.title = meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', meta.description);
  }, [meta]);

  // GSAP Number Animation
  useEffect(() => {
    statsRef.current.forEach((el, index) => {
      if (!el) return;
      const targetVal = parseFloat(results[index].value.replace(/[^0-9.]/g, ''));
      const isMultiple = results[index].value.includes('x');
      const isPercentage = results[index].value.includes('%');
      const isPlus = results[index].value.includes('+');

      gsap.fromTo(el, 
        { innerHTML: 0 },
        {
          innerHTML: targetVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top 85%",
          },
          onUpdate() {
            let val = Number(el.innerHTML);
            if (isNaN(val)) return; // Safety check
            let formatted = isMultiple ? val.toFixed(1) : Math.floor(val);
            // Re-apply prefix/suffix based on formatting logic
            let str = formatted.toString();
            if (isPlus && !results[index].value.endsWith('+')) str = '+' + str;
            if (isPercentage) str += '%';
            if (isMultiple) str += 'x';
            if (results[index].value.endsWith('+')) str += '+';
            
            // simple fix for specific static outputs if needed
            el.innerHTML = str;
          }
        }
      );
    });
  }, [results]);

  // React Spring Trail for WhatsApp Bubbles
  const [trail] = useTrail(whatsappSection.messages.length, () => ({
    from: { opacity: 0, scale: 0.9, y: 20 },
    to: { opacity: 1, scale: 1, y: 0 },
    config: { tension: 200, friction: 20 },
    delay: 400,
  }));

  return (
    <div className="w-full relative">
      
      {/* SECTION 1: HERO */}
      <section className="bg-brand-black text-white py-20 md:py-32 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: data.hero?.reverse ? 50 : -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col items-start ${data.hero?.reverse ? 'md:order-2' : ''}`}
          >
            <span className="text-electric font-mono font-bold tracking-widest text-xs uppercase mb-6 px-3 py-1 rounded-full border border-electric/30 bg-electric/5">
              {hero.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-8">
              {hero.h1}
            </h1>
            <p className="text-cream/80 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-lg">
              {hero.subheadline}
            </p>
            <a href="/contact" className="bg-electric text-black font-semibold font-body text-base px-8 py-4 rounded-full shadow-button hover:shadow-button-hover transition-all duration-200">
              Schedule a Demo
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: data.hero?.reverse ? -50 : 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`relative ${data.hero?.reverse ? 'md:order-1' : ''}`}
          >
            <div className="absolute inset-0 bg-electric-glow opacity-50 blur-[100px] z-0 pointer-events-none rounded-full" />
            <div className="relative z-10 w-full max-w-sm mx-auto bg-black border border-white/10 rounded-3xl p-4 shadow-2xl">
               <img src="/images/mobile-chat.png" alt="WhatsApp Mobile Chat" className="w-full object-cover rounded-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINT */}
      <section className="bg-cream py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl md:text-4xl font-display font-bold text-black leading-tight sm:leading-snug mix-blend-multiply"
          >
            {painPoint}
          </motion.p>
        </div>
      </section>

      {/* SECTION 3: SOLUTIONS OVERVIEW */}
      <section className="bg-brand-black text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center">
             <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What We Do</h2>
          </div>
          <div className={getLayoutClasses('solutions')}>
            {solutions.map((item, i) => (
              <motion.div 
                key={i}
                initial={animStyles.initial}
                whileInView={animStyles.whileInView}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...animStyles.transition, delay: i * 0.15 }}
                className={`bg-brand-card border border-white/5 rounded-2xl p-8 hover:border-electric/40 transition-colors ${theme?.layout === 'minimal-centered' ? 'w-full flex flex-col items-center' : ''}`}
              >
                <div className="w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-electric rounded-sm rotate-45" />
                </div>
                <h3 className="text-xl font-bold font-display mb-4">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHATSAPP PREVIEW */}
      <section className="bg-cream text-black py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className={data.whatsappSection?.reverse ? 'md:order-2' : ''}>
            <span className="font-mono text-xs uppercase tracking-widest font-bold mb-4 block px-3 py-1 bg-black/5 rounded-full w-max">
              {whatsappSection.context}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-[1.1]">
              {whatsappSection.h2}
            </h2>
            <p className="text-black/80 text-lg md:text-xl leading-relaxed">
              {whatsappSection.body}
            </p>
          </div>
          
          <div className={`relative max-w-md mx-auto w-full ${data.whatsappSection?.reverse ? 'md:order-1' : ''}`}>
            <div className="bg-[#E5DDD5] rounded-[2rem] p-4 md:p-6 shadow-2xl border-8 border-white relative">
              <div className="w-full flex justify-between items-center mb-6 px-2">
                 <span className="font-bold text-sm bg-white/50 px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">Today</span>
              </div>
              <div className="flex flex-col gap-4">
                {trail.map((props, i) => {
                  const msg = whatsappSection.messages[i];
                  const isHotel = msg.sender === 'Hotel';
                  return (
                    <animated.div 
                      key={i} 
                      style={props} 
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                        isHotel 
                          ? 'bg-white rounded-tl-none self-start text-black' 
                          : 'bg-[#DCF8C6] rounded-tr-none self-end text-black'
                      }`}
                    >
                      {msg.text}
                    </animated.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: USE CASES */}
      <section className="bg-brand-black text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Automated Workflows</h2>
            <p className="text-cream/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Set these powerful automations up once and let them convert guests day after day.
            </p>
          </div>
          
          <div className={getLayoutClasses('useCases')}>
            {useCases.map((uc, i) => (
              <motion.div 
                key={i}
                initial={animStyles.initial}
                whileInView={animStyles.whileInView}
                viewport={{ once: true }}
                transition={{ ...animStyles.transition, delay: i * 0.1 }}
                className={`flex flex-col justify-between hover:bg-brand-card transition-colors ${
                  theme?.layout === 'elegant-split' 
                    ? 'border-none bg-transparent' 
                    : 'bg-brand-card/50 border border-white/10 rounded-2xl p-6 md:p-8'
                }`}
              >
                <div>
                  <h3 className="text-xl font-bold font-display text-electric mb-6">{uc.title}</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <span className="bg-white/10 text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded text-cream/70 mt-1">Trigger</span>
                      <p className="text-cream text-sm flex-1 leading-snug">{uc.trigger}</p>
                    </div>
                    <div className="w-0.5 h-6 bg-white/10 ml-6 relative">
                       <div className="w-2 h-2 rounded-full border border-electric bg-black absolute -left-[3px] top-1/2 -translate-y-1/2" />
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="bg-electric/20 text-electric text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded mt-1">Action</span>
                      <p className="text-cream text-sm flex-1 leading-snug">{uc.action}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RESULTS */}
      <section className="bg-electric text-black py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {results.map((res, i) => (
            <div key={i} className="flex flex-col items-center text-center pt-12 md:pt-0 first:pt-0">
              <div className="mb-6 opacity-80">
                {renderIcon(res.icon)}
              </div>
              <div className="font-display font-bold text-6xl md:text-7xl lg:text-[5rem] tabular-nums tracking-tighter mb-4 whitespace-nowrap">
                <span ref={(el) => (statsRef.current[i] = el)}>0</span>
              </div>
              <p className="font-bold text-black/70 uppercase tracking-widest text-xs md:text-sm max-w-[250px] mx-auto">
                {res.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Section Injection block */}
      {children}

      {/* SECTION 7: CTA */}
      <section className="bg-brand-black text-white py-32 md:py-48 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Ready to transform your {hero.tag.toLowerCase()}?
          </h2>
          <p className="text-xl md:text-2xl text-cream/70 font-body mb-12">
            One platform. Every guest. Every property.
          </p>
          <a href="/contact" className="bg-electric text-black font-semibold font-body text-lg px-10 py-5 rounded-full shadow-button hover:shadow-button-hover hover:scale-105 transition-all duration-300">
            Schedule a Demo
          </a>
        </div>
      </section>

    </div>
  );
}
