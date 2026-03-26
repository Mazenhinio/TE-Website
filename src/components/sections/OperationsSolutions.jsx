import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  TrendingUp,
  Bot,
  Megaphone,
  Zap,
  Star,
  Play,
  X,
  ArrowRight,
  ArrowDownRight
} from 'lucide-react';
import PhoneChatAnimation from '../ui/PhoneChatAnimation';

/* ─── Video Demo Mapping ─────────────────────────────────── */
const MODULE_VIDEOS = {
  conversations: 'YOUTUBE_ID_HERE', // Unified Inbox
  opportunities: 'YOUTUBE_ID_HERE', // CRM/Opportunities
  reviews:       'YOUTUBE_ID_HERE', // Reputation
  automation:    'YOUTUBE_ID_HERE', // Automations
};

/* ─── Video Modal Component ─────────────────────────────── */
function VideoModal({ videoId, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors"
        >
          <X size={20} />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`}
          className="w-full h-full bg-black/50"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Module Demo Video"
        />
      </motion.div>
    </motion.div>
  );
}

/* ─── Channel → Total Engage converging SVG funnel ─────── */
const CHANNEL_LOGOS = [
  { src: '/images/Whatsapp Logo.webp',                          alt: 'WhatsApp' },
  { src: '/images/instagram logo.webp',                         alt: 'Instagram' },
  { src: '/images/Microsoft_Office_Outlook_Logo_512px.webp',    alt: 'Outlook' },
  { src: '/images/TikTok-Logo-Transparent.webp',                alt: 'TikTok' },
];

const TE_LOGO = '/images/Total engage logo neon.png';

function ChannelFunnel() {
  const W = 400, H = 240;
  const LOGO_S = 44;    // standard logo size
  const WA_S   = 72;    // WhatsApp — slightly larger but same center

  // Center-alignment: all logos share the same vertical midpoint
  const LOGO_CENTER_Y = WA_S / 2 + 4;          // = 40
  const LINE_Y        = LOGO_CENTER_Y + WA_S / 2 + 12; // below tallest logo

  const TE_W = 120, TE_H = 32;
  const TE_CX  = W / 2;
  const TE_TOP = H - TE_H - 8;
  const TE_GAP = 16;   // spacing between convergence dot and TE logo
  const MID_Y  = (LINE_Y + (TE_TOP - TE_GAP)) / 2;

  const spacing = W / (CHANNEL_LOGOS.length + 1);
  const logoX   = CHANNEL_LOGOS.map((_, i) => spacing * (i + 1));

  return (
    <div className="mt-8 w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <defs>
          <style>{
            `@keyframes flowDash {
              0%   { stroke-dashoffset: 22; }
              100% { stroke-dashoffset: 0;  }
            }`
          }</style>
          <filter id="te-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ─ Bezier lines ─ */}
        {logoX.map((cx, i) => (
          <path
            key={i}
            d={`M ${cx} ${LINE_Y} C ${cx} ${MID_Y}, ${TE_CX} ${MID_Y}, ${TE_CX} ${TE_TOP - TE_GAP}`}
            fill="none"
            stroke="#deff00"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            strokeDasharray="6 4"
            style={{
              animation: `flowDash 1.4s linear infinite`,
              animationDelay: `${i * 0.18}s`,
            }}
          />
        ))}

        {/* ─ Origin dots under each logo ─ */}
        {logoX.map((cx, i) => (
          <circle key={`d-${i}`} cx={cx} cy={LINE_Y} r="2.5"
            fill="#deff00" opacity="0.5" />
        ))}

        {/* ─ Convergence dot above TE logo (glowing) ─ */}
        <circle cx={TE_CX} cy={TE_TOP - TE_GAP} r="4"
          fill="#deff00" filter="url(#te-glow)" />

        {/* ─ Channel logos — center-aligned at LOGO_CENTER_Y ─ */}
        {logoX.map((cx, i) => {
          const s = i === 0 ? WA_S : LOGO_S;
          // All logos share the same vertical center (LOGO_CENTER_Y)
          const y = LOGO_CENTER_Y - s / 2;
          return (
            <image
              key={CHANNEL_LOGOS[i].alt}
              href={CHANNEL_LOGOS[i].src}
              x={cx - s / 2}
              y={y}
              width={s}
              height={s}
              preserveAspectRatio="xMidYMid meet"
            />
          );
        })}

        {/* ─ Total Engage logo (neon) ─ */}
        <image
          href={TE_LOGO}
          x={TE_CX - TE_W / 2}
          y={TE_TOP}
          width={TE_W}
          height={TE_H}
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </div>
  );
}

function ReputationFlow() {
  const steps = [
    { icon: <Zap size={20} />, label: "Guest Checks Out", note: "System Trigger" },
    { icon: <MessageSquare size={20} />, label: "Review Request", note: "Sent via WhatsApp" },
    { icon: <Bot size={20} />, label: "Review Received", note: "AI Evaluates Stars" },
  ];

  const outcomes = [
    { icon: <Star size={18} fill="currentColor" />, color: "text-green-500", label: "Good Review", note: "AI Auto-Reply on Google", bg: "bg-green-500/10" },
    { icon: <Megaphone size={18} />, color: "text-red-500", label: "Bad Review", note: "Team Alerted for Follow-up", bg: "bg-red-500/10" }
  ];

  return (
    <div className="p-8 md:p-10 h-full flex flex-col justify-center gap-8 md:gap-12 max-w-5xl">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative">
         
         {/* Vertical line for mobile, horizontal for desktop */}
         <div className="absolute top-5 bottom-5 lg:bottom-auto left-1/2 lg:left-0 lg:right-0 w-px lg:w-full h-full lg:h-px bg-white/10 -z-10 -translate-x-1/2 lg:translate-x-0" />

         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 relative z-10 w-32">
                 <div className="w-10 h-10 rounded-full bg-electric text-black flex items-center justify-center font-black text-sm shadow-[0_0_20px_rgba(222,255,0,0.4)]">
                   {s.icon}
                 </div>
                 <div>
                   <p className="text-white text-[11px] font-bold uppercase tracking-widest leading-tight">{s.label}</p>
                   <p className="text-white/30 text-[9px] uppercase font-black mt-1 leading-tight">{s.note}</p>
                 </div>
              </div>
            ))}
         </div>

         {/* Arrow indicating split */}
         <div className="flex justify-center text-white/20 rotate-90 lg:rotate-0">
           <ArrowRight size={24} />
         </div>

         {/* Outcomes Split */}
         <div className="flex flex-col gap-4 w-full lg:w-auto">
            {outcomes.map((o, i) => (
              <div key={i} className={`flex items-center gap-3 p-4 rounded-2xl border border-white/5 ${o.bg} w-full lg:min-w-[240px]`}>
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-current ${o.color} shrink-0`}>
                   {o.icon}
                 </div>
                 <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${o.color}`}>{o.label}</p>
                    <p className="text-white/60 text-[10px] font-medium leading-tight">{o.note}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}

/* ─── Animated Timeline Component ────────────────────────── */
function AutomationsTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(s => (s + 1) % 5);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { label: 'Pre-Arrival', note: 'Forms & reminders' },
    { label: 'Check-In', note: 'Digital concierge' },
    { label: 'In-Stay', note: 'Upsells & surveys' },
    { label: 'Checkout', note: 'Express flow' },
    { label: 'Post-Stay', note: 'Reviews & loyalty' },
  ];

  return (
    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap items-center md:items-start justify-center md:justify-end gap-y-8 gap-x-2 md:gap-1 overflow-visible">
      {steps.map((step, i) => {
        const isActive = i === activeStep;
        const isPassed = i < activeStep;
        
        return (
          <div key={step.label} className="flex items-center flex-shrink-0 relative group justify-center md:justify-start">
            <div className="flex flex-col items-center gap-2 min-w-[100px] md:min-w-[90px] relative z-10">
              <motion.div 
                animate={{
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: isActive || isPassed ? '#deff00' : 'rgba(255,255,255,0.05)',
                  borderColor: isActive || isPassed ? '#deff00' : 'rgba(255,255,255,0.15)',
                  boxShadow: isActive ? '0px 0px 18px rgba(222,255,0,0.5)' : 'none'
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
              >
                <span className={`text-xs font-bold transition-colors duration-300 ${isActive || isPassed ? 'text-black' : 'text-white/30'}`}>
                  {i + 1}
                </span>
              </motion.div>
              <h4 className={`text-[11px] font-bold text-center mt-2 transition-colors duration-300 ${isActive || isPassed ? 'text-electric' : 'text-white/30'}`}>
                {step.label}
              </h4>
              <p className={`text-[10px] text-center whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/20'}`}>
                {step.note}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="h-px w-6 md:w-10 xl:w-16 mx-0 xl:mx-1 mb-10 flex-shrink-0 relative overflow-hidden bg-white/10 hidden md:block">
                <motion.div 
                  className="absolute inset-0 h-full bg-electric origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isPassed ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Shared card shell ──────────────────────────────────── */
function Card({ children, span = '', className = '', index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`${span} bg-[#111] border border-white/[0.06] rounded-[2rem] overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── Module label ───────────────────────────────────────── */
function Label({ icon, text, num }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-6">
      <span className="text-cream/50 text-[10px] font-black font-mono tabular-nums">{String(num).padStart(2, '0')}</span>
      <span className="w-px h-3 bg-white/15" />
      <span className="text-electric">{icon}</span>
      <span className="text-electric text-[10px] font-bold uppercase tracking-[0.22em]">{text}</span>
    </div>
  );
}

/* ─── Play Button Overlay ────────────────────────────────── */
function VideoTrigger({ onClick, label = "Watch Demo" }) {
  return (
    <button 
      onClick={onClick}
      className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
    >
      <div className="w-16 h-16 rounded-full bg-electric flex items-center justify-center text-black shadow-[0_0_30px_rgba(222,255,0,0.3)] group-hover:shadow-[0_0_50px_rgba(222,255,0,0.5)] transition-all">
        <Play size={24} fill="currentColor" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-electric/80 group-hover:text-electric">{label}</span>
    </button>
  );
}

/* ─── Main section ───────────────────────────────────────── */
export default function OperationsSolutions() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-cream section-padding px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header — full-width black card */}
        <div className="bg-brand-black rounded-[2rem] px-12 py-14 text-center mb-4">
          <span className="inline-block font-bold uppercase tracking-widest text-xs mb-5 px-4 py-1.5 bg-electric/10 border border-electric/20 text-electric rounded-full">
            Platform Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] text-white mb-5">
            The best WhatsApp and social media marketing platform<br className="hidden md:block" />
            <span className="text-electric"> for your property.</span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Purpose-built for travel, entertainment & stays — every tool works together seamlessly across your entire property portfolio.
          </p>
        </div>

        {/* ── ROW 1: Chat (wide) + AI Agents (narrow tall) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Conversations — col-span-2 */}
          <Card span="md:col-span-2" index={0}>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[380px]">
              <div className="p-10 flex flex-col min-h-[380px]">
                <div>
                  <Label icon={<MessageSquare size={16} />} text="Conversations" num={1} />
                  <h3 className="text-white text-[clamp(1.5rem,6vw,2.5rem)] font-bold font-display leading-[1.15] mb-5">
                    One inbox for every channel.
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed mb-6">
                    WhatsApp, Outlook, TikTok, Instagram DMs — all threaded in one unified view with complete guest history visible the moment you respond.
                  </p>
                  
                  {/* Restore Channel Funnel (octopus animation) beneath paragraph */}
                  <div className="w-full max-w-[320px] mb-8 relative z-10">
                    <ChannelFunnel />
                  </div>
                </div>
                <div className="mt-auto items-start justify-start flex">
                   <VideoTrigger onClick={() => setActiveVideo(MODULE_VIDEOS.conversations)} />
                </div>
              </div>
              <div className="flex items-center justify-center bg-black/20 border-l border-white/5 p-8 relative group overflow-hidden">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center">
                   <VideoTrigger onClick={() => setActiveVideo(MODULE_VIDEOS.conversations)} />
                </div>
                <div className="transform scale-75 md:scale-90 origin-center z-10 pointer-events-none">
                  <PhoneChatAnimation />
                </div>
              </div>
            </div>
          </Card>

          {/* AI Agents — col-span-1 */}
          <Card span="md:col-span-1" index={1}>
            <div className="p-10 h-full flex flex-col justify-between min-h-[380px]">
              <Label icon={<Bot size={16} />} text="AI Agents" num={2} />
              <div className="flex flex-col flex-grow justify-between pt-4">
                <h3 className="text-white text-[clamp(1.5rem,6vw,2.5rem)] font-bold font-display leading-[1.15] mb-6">
                  24/7 AI front desk — always on.
                </h3>
                <div className="flex-grow flex flex-col justify-center">
                  <p className="text-electric text-5xl md:text-7xl font-black font-mono leading-none mb-2">&lt;30s</p>
                  <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-6">Avg. AI response time</p>
                </div>
                <div>
                  <p className="text-white/45 text-base leading-relaxed">
                    Handles inquiries, room availability, and booking flows in any language — while your team focuses on in-person service.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ── ROW 2: Automations (full-width timeline) ──────── */}
        <div className="mb-4">
          <Card index={2}>
            <div className="p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <div className="md:w-1/3 flex-shrink-0">
                <Label icon={<Zap size={16} />} text="Automations" num={3} />
                <h3 className="text-white text-2xl font-bold font-display leading-[1.2] mb-3">
                  The full guest journey — fully automated.
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  Every touchpoint triggered at the right moment. Set it once, run forever.
                </p>
                <VideoTrigger onClick={() => setActiveVideo(MODULE_VIDEOS.automation)} label="System Automation Demo" />
              </div>
              {/* Timeline */}
              <AutomationsTimeline />
            </div>
          </Card>
        </div>

        {/* ── ROW 3: Opportunities + Reputation (Swapped) ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

          {/* Opportunities — col-span-1 */}
          <Card span="md:col-span-1" index={3}>
            <div className="p-10 h-full flex flex-col justify-between min-h-[460px] relative group overflow-hidden">
               <div className="absolute inset-x-0 bottom-0 top-1/2 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center">
                   <VideoTrigger onClick={() => setActiveVideo(MODULE_VIDEOS.opportunities)} label="Pipeline Demo" />
                </div>
              <div>
                <Label icon={<TrendingUp size={16} />} text="Opportunities" num={4} />
                <h3 className="text-white text-2xl font-bold font-display leading-[1.2] mb-3 uppercase tracking-tighter">
                  Pipeline
                </h3>
                <p className="text-white/40 text-[13px] leading-relaxed mb-8">
                  Track weddings, MICE, and corporate deals across stages.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'New Inquiry', active: true },
                  { label: 'Proposal', active: false },
                  { label: 'Contracting', active: false },
                  { label: 'Confirmed', highlight: true },
                ].map((stage, i) => (
                  <div key={stage.label} className="flex flex-col gap-1">
                    <span className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all text-center ${
                      stage.active
                        ? 'bg-electric/10 border-electric/40 text-electric'
                        : stage.highlight
                        ? 'bg-electric border-electric text-black shadow-[0_10px_30px_rgba(222,255,0,0.3)]'
                        : 'bg-white/4 border-white/8 text-white/35'
                    }`}>
                      {stage.label}
                    </span>
                    {i < 3 && <div className="h-2 w-px bg-white/5 self-center" />}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Reputation — col-span-2 */}
          <Card span="md:col-span-2" index={4}>
            <div className="p-10 h-full flex flex-col min-h-[560px] relative group overflow-hidden">
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center gap-4">
                   <VideoTrigger onClick={() => setActiveVideo(MODULE_VIDEOS.reviews)} label="Automatic Reviews Demo" />
                </div>
              <Label icon={<Star size={16} />} text="Reputation" num={5} />
              
              <div className="max-w-xl mb-12">
                <h4 className="text-electric text-5xl font-black font-display leading-[1.1] mb-4 tracking-tighter">AI Reputation Logic</h4>
                <p className="text-white/40 text-sm leading-relaxed">
                  Reply to reviews instantly with AI. 5-star guests go to Google. Unhappy guests get a private recovery flow — before they post publicly.
                </p>
              </div>
              
              <div className="flex-1 mt-6 md:-mx-10 md:-mb-10 bg-black/20 border-t border-white/5 overflow-hidden">
                <ReputationFlow />
              </div>
            </div>
          </Card>
        </div>

        {/* ── ROW 4: Contacts + Marketing + Dashboard ────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Contacts */}
          <Card span="md:col-span-1" index={5}>
            <div className="p-10 h-full flex flex-col min-h-[280px]">
              <Label icon={<Users size={16} />} text="Contacts" num={6} />
              <h3 className="text-white text-xl font-bold font-display leading-[1.2] mb-5">
                Rich profiles for every guest.
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {['VIP', 'Anniversary', 'Corporate', 'Repeat Visitor', 'Lapsed', 'Honey Mooners', 'Golf Member', 'High Spender', 'Event Lead', 'Table Regular', 'Pool & Beach'].map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                      i % 4 === 0
                        ? 'bg-electric/8 border-electric/25 text-electric'
                        : 'bg-white/4 border-white/8 text-white/40'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Marketing */}
          <Card span="md:col-span-1" index={6}>
            <div className="p-10 h-full flex flex-col justify-between min-h-[280px]">
              <Label icon={<Megaphone size={16} />} text="Marketing" num={7} />
              <div>
                <p className="text-electric text-5xl md:text-7xl font-black font-mono leading-none mb-2">98%</p>
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-6">WhatsApp open rate</p>
                <h3 className="text-white text-xl font-bold font-display leading-[1.2]">
                  Plan every campaign from one calendar.
                </h3>
              </div>
            </div>
          </Card>

          {/* Dashboard */}
          <Card span="md:col-span-1" index={7}>
            <div className="p-10 h-full flex flex-col min-h-[280px]">
              <Label icon={<LayoutDashboard size={16} />} text="Dashboard" num={8} />
              <h3 className="text-white text-xl font-bold font-display leading-[1.2] mb-6">
                Every metric. One screen.
              </h3>
              <div className="grid grid-cols-1 gap-3 mt-auto">
                {[
                  { label: 'Avg. Response', value: '28s' },
                  { label: 'Campaign ROI', value: '412%' },
                  { label: 'Rev. Attributed', value: '$124k' },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between px-4 py-3 bg-white/4 border border-white/6 rounded-xl">
                    <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">{m.label}</span>
                    <span className="text-electric text-lg font-black font-mono">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Reusable Video Modal */}
      <AnimatePresence>
        <VideoModal 
          videoId={activeVideo} 
          isOpen={!!activeVideo} 
          onClose={() => setActiveVideo(null)} 
        />
      </AnimatePresence>
    </section>
  );
}
