import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bed, Utensils, BarChart3, ArrowRight, Wallet, Users, Layout, Zap, RefreshCw, MessageCircle, TrendingUp, CheckCircle2, XCircle, Percent, DollarSign, Clock } from 'lucide-react';
import RotatingWord from '../ui/RotatingWord';

const DirectRevenueAnimation = ({ rounding }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-8 lg:p-12 bg-brand-black text-white ${rounding} border border-white/10 shadow-3xl relative overflow-hidden group`}>
      <div className="text-[10px] font-mono text-electric mb-10 tracking-[0.4em] uppercase opacity-80 font-bold">Revenue Capture Engine</div>
      
      <div className="w-full space-y-6 max-w-[440px] z-10">
        <motion.div 
          animate={step === 0 ? { opacity: 1, x: 0 } : { opacity: 0.3, x: -10 }}
          className="bg-white/5 p-5 rounded-3xl border border-white/10 flex justify-between items-center"
        >
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/40">
              <Users size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Guest Intent Detected</p>
              <p className="text-sm font-bold">Searching Expedia Route</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-red-500 font-mono">-$180 FEE</p>
          </div>
        </motion.div>

        <div className="h-24 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            {step >= 1 && (
              <motion.div 
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                className="bg-electric text-black px-6 py-4 rounded-3xl shadow-[0_20px_50px_rgba(222,255,0,0.3)] flex items-center gap-4 z-20 border-2 border-black"
              >
                <MessageCircle size={24} strokeWidth={3} className="animate-pulse" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">WhatsApp Direct Offer</p>
                  <p className="text-xs font-bold font-mono">Save 15% booking direct now!</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-electric/10 blur-[40px] rounded-full pointer-events-none" />
        </div>

        <motion.div 
          animate={step >= 2 ? { scale: 1.05, borderColor: '#DEFF00', backgroundColor: 'rgba(222,255,0,0.05)' } : { opacity: 0.3 }}
          className="p-6 rounded-[2.5rem] border border-white/20 flex flex-col gap-5 relative overflow-hidden"
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-xl bg-electric flex items-center justify-center text-black shadow-lg">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-electric">Capture Confirmed</p>
                <p className="text-lg font-bold">100% Direct Margin</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-display font-bold text-electric">+$180</p>
              <p className="text-[9px] font-bold text-white/40 uppercase">Fee Recalculated</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 w-full grid grid-cols-2 gap-4">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
          <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1">Success Rate</p>
          <p className="text-xl font-display font-bold text-electric">84.2%</p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
          <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em] mb-1">Avg Saving</p>
          <p className="text-xl font-display font-bold text-electric">$94/Stay</p>
        </div>
      </div>
    </div>
  );
};

const InventoryRecoveryAnimation = ({ rounding }) => {
  const [status, setStatus] = useState('cancelled'); // cancelled -> broadcast -> filled

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(prev => {
        if (prev === 'cancelled') return 'broadcast';
        if (prev === 'broadcast') return 'filled';
        return 'cancelled';
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-8 lg:p-12 bg-brand-black text-white ${rounding} border border-white/10 shadow-3xl relative overflow-hidden`}>
      <div className="text-[10px] font-mono text-electric mb-10 tracking-[0.4em] uppercase opacity-80 font-bold">Real-time Yield Optimizer</div>
      
      <div className="w-full space-y-4 max-w-[440px]">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center opacity-30">
          <div className="flex gap-3 items-center">
            <Utensils size={14} className="text-white/60" />
            <span className="text-xs font-bold tracking-tight">Table Booking: 12:30</span>
          </div>
          <CheckCircle2 size={16} className="text-white/40" />
        </div>

        <motion.div 
          animate={status === 'filled' ? { scale: 1.02, borderColor: '#DEFF00', backgroundColor: 'rgba(222,255,0,0.05)' } : {}}
          className="p-6 rounded-[2.5rem] border border-white/20 flex flex-col gap-6 relative overflow-hidden transition-all duration-500 shadow-2xl"
        >
          <div className="flex justify-between items-center z-10">
            <div className="flex gap-4 items-center">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${status === 'filled' ? 'bg-electric text-black' : 'bg-red-500/10 text-red-500'}`}>
                {status === 'filled' ? <CheckCircle2 size={24} /> : <Clock size={24} />}
              </div>
              <div>
                <p className="text-lg font-bold">Spa Therapy · 15:00</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Inventory Status:</span>
                  <AnimatePresence mode="wait">
                    {status === 'cancelled' && (
                      <motion.span key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-black uppercase text-red-500">Available (Loss)</motion.span>
                    )}
                    {status === 'filled' && (
                      <motion.span key="f" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-black uppercase text-electric">Fully Recovered</motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="h-24 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {status === 'broadcast' && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-electric text-black px-6 py-4 rounded-[1.5rem] flex flex-col gap-1 z-10 shadow-[0_15px_40px_rgba(222,255,0,0.3)] w-full"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">WhatsApp Push Active</span>
                  </div>
                  <p className="text-xs font-bold leading-tight">Reaching 42 qualified in-house guests...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center opacity-30">
          <div className="flex gap-3 items-center">
            <Layout size={14} className="text-white/60" />
            <span className="text-xs font-bold tracking-tight">Tennis Clinic: 17:30</span>
          </div>
          <CheckCircle2 size={16} className="text-white/40" />
        </div>
      </div>

      <div className="mt-12 text-center bg-white/5 px-8 py-4 rounded-full border border-white/5">
        <div className="flex items-center gap-3">
          <TrendingUp size={20} className="text-electric" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Revenue Velocity Increase:</span>
          <span className="text-xl font-display font-bold text-electric">+42.8%</span>
        </div>
      </div>
    </div>
  );
};

const ROIAnimation = ({ rounding }) => (
  <div className={`w-full h-full flex flex-col items-center justify-center p-10 lg:p-14 bg-brand-black text-white ${rounding} border border-white/10 shadow-3xl relative overflow-hidden group`}>
    <div className="text-[10px] font-mono text-electric mb-10 tracking-[0.4em] uppercase opacity-80 font-bold z-10">Property Revenue Analytics</div>
    
    <div className="w-full space-y-8 max-w-[420px] z-10">
      {[
        { label: 'Direct Booking Lift', val: '84.2%', color: 'bg-electric' },
        { label: 'Upsell Conversion', val: '62.1%', color: 'bg-white' },
        { label: 'Inventory Utilization', val: '91.8%', color: 'bg-electric' }
      ].map((item, i) => (
        <div key={i} className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">{item.label}</span>
            <span className="text-lg font-display font-bold text-electric">{item.val}</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: item.val }}
              transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }}
              className={`h-full ${item.color} shadow-[0_0_20px_rgba(222,255,0,0.3)]`}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-14 pt-8 border-t border-white/10 w-full text-center">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.4em]">Total Attributed Revenue (24h)</p>
        <div className="flex items-center gap-3">
          <DollarSign className="text-electric" size={42} />
          <span className="text-7xl font-display font-bold text-electric tracking-tighter shadow-electric-text">12,480</span>
        </div>
      </div>
    </div>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(222,255,0,0.08)_0%,transparent_70%)] pointer-events-none" />
  </div>
);

const FeatureCard = ({ title, sub, desc, subFeatures, AnimationComponent, color = "bg-white", index }) => {
  const isEven = index % 2 === 0;
  // Dynamic rounding for the animation box based on side
  const rounding = isEven ? 'rounded-l-[3.5rem] rounded-r-none' : 'rounded-r-[3.5rem] rounded-l-none';

  return (
    <div 
      className="sticky top-[10vh] w-full mb-[8vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`${color} rounded-[3.5rem] p-10 md:p-16 lg:p-18 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border border-black/5 flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''} gap-12 lg:items-center min-h-[70vh] overflow-hidden`}
      >
        <div className="lg:flex-[1] flex flex-col justify-between min-h-[50vh] space-y-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-6xl font-display font-bold text-black leading-[1.1] tracking-tighter">
                {title}
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium text-black/70 leading-tight max-w-xl">
                {sub}
              </p>
              <p className="text-lg text-black/40 leading-relaxed max-w-xl font-body">
                {desc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-black/5">
            {subFeatures.map((sf, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-electric flex-shrink-0 shadow-xl transition-transform hover:scale-110">
                  {sf.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-black uppercase tracking-[1px]">{sf.title}</h4>
                  <p className="text-xs text-black/40 leading-relaxed">{sf.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animation Container - Positioned to bleed off edges with no filet on the intersecting side */}
        <div className={`lg:flex-[1.6] w-full h-full flex justify-center lg:justify-end items-center relative transition-transform duration-700 ${isEven ? 'lg:translate-x-32' : 'lg:-translate-x-32'} py-6`}>
          <div className="w-full h-full min-h-[500px] relative flex items-center justify-center">
            <AnimationComponent rounding={rounding} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ValueProp() {
  const cards = [
    {
      title: "Drive Direct Bookings",
      sub: "Bypass OTAs and recapture 20% commission on every stay.",
      desc: "Stop leaking revenue. Total Engage automatically identifies high-intent guests and redirects them through personalized WhatsApp offers, securing direct margin instantly.",
      subFeatures: [
        { icon: <RefreshCw size={20} />, title: "Fee Elimination", text: "Turn 20% OTA fees into pure property profit." },
        { icon: <Zap size={20} />, title: "Lead Rescue", text: "Automated recovery of abandoned room searches." }
      ],
      AnimationComponent: DirectRevenueAnimation,
      color: "bg-white"
    },
    {
      title: "Maximize Slot Bookings",
      sub: "Turn idle inventory into re-occupied revenue in minutes.",
      desc: "Recover lost revenue from late cancellations. Our automated pulse blast re-fills empty Spa slots, F&B tables, and lifestyle activities by reaching your guests instantly.",
      subFeatures: [
        { icon: <RefreshCw size={20} />, title: "Inventory Recovery", text: "Instantly re-book canceled slots 24/7." },
        { icon: <TrendingUp size={20} />, title: "Revenue Velocity", text: "Increase property-wide utilization effortlessly." }
      ],
      AnimationComponent: InventoryRecoveryAnimation,
      color: "bg-cream"
    },
    {
      title: "Measure Marketing ROI",
      sub: "Track every message back to a direct dollar amount.",
      desc: "No more guessing games. Our attribution dashboard shows you precisely which broadcast campaigns generated revenue with total performance clarity.",
      subFeatures: [
        { icon: <BarChart3 size={20} />, title: "True Attribution", text: "Match every pulse back to a bank deposit." },
        { icon: <Wallet size={20} />, title: "Management Clarity", text: "Live ROI tracking for owners and directors." }
      ],
      AnimationComponent: ROIAnimation,
      color: "bg-white"
    }
  ];

  return (
    <section className="bg-cream py-40 px-6 relative overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-40 max-w-5xl">
          <span className="text-black/30 font-mono font-bold uppercase tracking-[0.5em] text-xs mb-8 block">
            The Revenue Engine
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-black leading-[1.1] tracking-tighter mb-12">
            Elevate the guest journey, <br className="hidden md:block" />
            <span className="text-electric bg-brand-black px-6 pb-2 mt-6 inline-block -rotate-1 shadow-[0_20px_60px_rgba(0,0,0,0.3)] whitespace-nowrap">
              maximize property <RotatingWord className="text-electric" words={["revenue", "profit", "bookings", "loyalty", "growth", "experience", "retention"]} />
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-black/40 font-medium max-w-3xl leading-relaxed mx-auto">
            Total Engage orchestrates seamless communication across every touchpoint—empowering your teams and driving direct revenue attribution.
          </p>
        </div>

        <div className="relative pb-[20vh] w-full">
          {cards.map((card, idx) => (
            <FeatureCard key={idx} {...card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
