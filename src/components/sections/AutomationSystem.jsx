import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Flower2, Heart, BedDouble, PartyPopper, Baby, Compass, CheckCircle2, ArrowLeft } from 'lucide-react';

const stages = [
  {
    id: 'f-and-b',
    title: 'Food & Beverage',
    icon: <UtensilsCrossed size={22} />,
    categories: [
      {
        name: 'Drive Sales',
        label: 'Lead Gen',
        items: [
          { text: 'Comment-to-DM Automation', preview: 'Saw your comment! 💬 Want the menu? Just reply with "MENU" and I\'ll send it over instantly.', highlight: true },
          { text: 'Auto-Reply to Comments', preview: 'Thanks for the love! ❤️ We just sent you a secret discount code in your DMs. Check it out!', highlight: true },
          { text: 'Seasonal WhatsApp Campaign', preview: 'Hey! 🥑 Our Avocado Toast is back on the seasonal menu. Want me to send you the new menu PDF?' },
          { text: 'Flash Sale broadcast', preview: 'FLASHSALE: 🥂 2-for-1 cocktails at the Rooftop bar starts in 15 mins! Just show this msg to the bartender.' },
          { text: 'Weekend brunch promotion', preview: 'Weekend plans? 🍳 Our Saturday brunch is almost full. Can I grab a spot for you before they’re gone?' },
          { text: 'Private dining offer push', preview: 'Quick question—are you still looking for a private space for your dinner? Our garden room just opened up!' },
        ],
      },
      {
        name: 'Enhance Guest Exp.',
        label: 'Operations',
        items: [
          { text: 'AI agent reservation bookings', preview: 'I can definitely help with that. Which day were you thinking of coming by?' },
          { text: 'Social messages response', preview: 'Hey there! Yes, we have a few outdoor tables left for tonight. Shall I put your name down?' },
          { text: 'Table confirmation & reminders', preview: 'Just a friendly heads up—we’ve got your table saved for 7 PM. See you soon! 🍴' },
          { text: 'Post-dining review request', preview: 'Hope you enjoyed the pasta today! 🍝 If you have a sec, could you let us know how it was?' },
        ],
      },
      {
        name: 'Upselling',
        label: 'Revenue',
        items: [
          { text: 'Family Value Bundle', preview: 'Dining with the whole crew? 👨‍👩‍👧‍👦 I can upgrade your order to the Family Bundle and save you 25% on your total. Interested?' },
          { text: 'Birthday cake add-on offer', preview: 'I noticed it’s a special occasion! 🎂 Should I have a small surprise cake brought out after mains?' },
          { text: "Chef's tasting menu upsell", preview: "The Chef is doing a special off-menu tasting tonight with 3 extra courses. Interested in seeing it?" },
          { text: "Late Night Menu Push", preview: "Still hungry? 🍔 Our room service menu is available 24/7. Want to see the late-night bites?" },
        ],
      },
    ],
    categoryDescription: 'Automated dining experiences that increase table turnover and guest satisfaction.'
  },
  {
    id: 'wellness-club',
    title: 'Wellness & Spa',
    icon: <Flower2 size={22} />,
    categories: [
      {
        name: 'Drive Sales',
        label: 'Booking',
        items: [
          { text: 'Comment-to-DM Automation', preview: 'Loved your spa post! ✨ Want the private membership brochure? Just comment "SPA"!', highlight: true },
          { text: 'Auto-Reply to Comments', preview: 'So glad you enjoyed the session! ❤️ We’ve just sent a special discount for your next visit to your DMs.', highlight: true },
          { text: 'Spa special offers via WhatsApp', preview: 'Time for a break? 🧘‍♀️ I have one spot left for a 90-min massage today. Want it?' },
          { text: 'Membership promos & renewals', preview: 'Your membership is coming up for renewal soon! Should I send you the loyalty discount code?' },
          { text: 'New treatment launch blast', preview: 'We just launched a new Hot Stone therapy. It’s honestly amazing—want more info?' },
          { text: 'Couples retreat package push', preview: 'Surprise them? 🥂 Our couples retreat includes a private hot tub session. Interested?' },
        ],
      },
      {
        name: 'Guest Experience',
        label: 'Service',
        items: [
          { text: 'Pre-appointment reminders', preview: 'Just a quick reminder about your 10 AM session tomorrow. Don’t forget to arrive 15 mins early!' },
          { text: 'Post-treatment feedback flow', preview: 'Hope you’re feeling relaxed! ✨ How was your therapist today? We value your thoughts.' },
          { text: 'Therapist preference capture', preview: 'Did you like working with Sarah? I can make sure you’re booked with her next time too.' },
        ],
      },
      {
        name: 'Upselling',
        label: 'Profit',
        items: [
          { text: 'Last-minute spa discounts', preview: 'Quick! ⚡️ A cancellation just opened up a 2 PM slot. I can give it to you for 30% off.' },
          { text: 'Retail product follow-up', preview: 'Glad you liked that lavender oil! 🌿 I have a few bottles left in the shop—want me to save one?' },
          { text: 'Loyalty tier upgrade nudge', preview: 'You’re so close to Gold status! One more visit and your next sauna session is on us.' },
        ],
      },
    ],
    categoryDescription: 'Maximize therapist utilization and increase retail sales with automated spa flows.'
  },
  {
    id: 'weddings',
    title: 'Weddings & Events',
    icon: <Heart size={22} />,
    categories: [
      {
        name: 'Lead Generation',
        label: 'Inquiry',
        items: [
          { text: 'Comment-to-DM Automation', preview: 'Congratulations! 💍 Want our 2026 wedding brochure? Just reply "YES" to this msg.', highlight: true },
          { text: 'Auto-Reply to Comments', preview: 'Such a beautiful couple! ❤️ We just DMed you our available dates for next summer.', highlight: true },
          { text: 'Venue tours & quotes flow', preview: 'Hi! 🏰 Still thinking about a venue tour? I have a few slots open this Saturday morning.' },
          { text: 'Meta Ads to direct inbox', preview: 'Hey there! Saw you were interested in our outdoor weddings. Want to see our 2026 pricing?' },
          { text: 'WA auto-reply to enquiries', preview: 'Omg congrats on the engagement! 💍 I just got your inquiry—can\'t wait to chat more.' },
          { text: 'Available dates drip sequence', preview: 'Just a quick heads up... our most popular June date just opened up! Want first dibs?' },
        ],
      },
      {
        name: 'Planning & Follow-Up',
        label: 'Coordination',
        items: [
          { text: 'Vendor checklist reminders', preview: 'How’s the planning going? 🌸 By the way, have you picked a florist yet? I have some ideas!' },
          { text: 'Final headcount confirmation', preview: 'Hey! We’re getting close. 🥂 Can you send over the final guest count by Wednesday?' },
          { text: 'Day-of logistics broadcast', preview: 'Weather update: It’s going to be a beautiful sunny day! We’re all set for the garden. ☀️' },
        ],
      },
      {
        name: 'Post-Event',
        label: 'Upsell',
        items: [
          { text: 'Honeymoon suite upsell', preview: 'Thinking of staying the night? I can upgrade you to the Bridal Suite for half price! 🥂' },
          { text: 'Anniversary recall campaign', preview: 'Happy 1st Anniversary! ❤️ Want to come back and recreate your wedding dinner with us?' },
          { text: 'Review & testimonial request', preview: 'We loved hosting you! 🕊️ If you have any photos or a nice word to share, we’d love it.' },
        ],
      },
    ],
    categoryDescription: 'Nurture high-value leads and automate event logistics with precision.'
  },
  {
    id: 'room-stays',
    title: 'Room Stays & Suites',
    icon: <BedDouble size={22} />,
    categories: [
      {
        name: 'Pre-Arrival Experience',
        label: 'Anticipation',
        items: [
          { text: 'Personalised Milestone Welcome', preview: 'Congratulations on your honeymoon! 🥂 Should I have a bottle of chilled champagne waiting for you?' },
          { text: 'Private Airport Transfer', preview: 'Need a ride? 🚗 Our private driver can meet you at Terminal 2. One tap to book your transfer.' },
          { text: 'Digital Check-In & Entry', preview: 'Skip the lobby! 🏨 Check in here and I’ll send your digital key straight to your WhatsApp.' },
          { text: 'Choice of View Upsell', preview: 'We just had a high-floor sea view room open up. Want to swap your booking for just $20?' },
        ],
      },
      {
        name: 'In-Stay Luxury',
        label: 'Service',
        items: [
          { text: 'Real-Time Suite Butler', preview: 'Need anything? 🧴 I’m your digital butler. Fresh towels, ice, or local tips—just ask me!' },
          { text: 'Milestone Package Push', preview: 'Thinking of a surprise? 🌹 I can arrange a romantic rose-petal turndown for tonight at 8 PM.' },
          { text: 'In-Room Celebration Dining', preview: 'A cozy night in? 🥂 Our private dining menu is available. Want me to send the Chef’s specials?' },
          { text: 'Extended Stay Benefits', preview: 'Loving your stay? ☀️ Extend for 2 more nights and I’ll include a complimentary spa credit.' },
        ],
      },
      {
        name: 'Upselling & Loyalty',
        label: 'Retention',
        items: [
          { text: 'One-Tap Suite Upgrade', preview: 'Upgrade to our Royal Suite today for 40% off the standard rate. Interested in a tour first?' },
          { text: 'Late Checkout Paid Extension', preview: 'Sleep in! 💤 We can extend your stay until 4 PM today for a small lazy-afternoon fee.' },
          { text: 'Return Milestone Recall', preview: 'Can you believe it’s been a year? ❤️ Come back for your anniversary and the cake is on us!' },
          { text: 'Seasonal Direct Booking', preview: 'Hey! 🌊 Our summer sale just started. Book direct here for the best room rates of the year.' },
        ],
      },
    ],
    categoryDescription: 'Elevate every guest touchpoint from booking to checkout and beyond.'
  },
  {
    id: 'special-happenings',
    title: 'Special Happenings',
    icon: <PartyPopper size={22} />,
    categories: [
      {
        name: 'Engagement',
        label: 'Promotion',
        items: [
          { text: 'Comment-to-DM Automation', preview: 'This event is going to be huge! 🥂 Want early-bird tickets? Just comment "GALA" below.', highlight: true },
          { text: 'Auto-Reply to Comments', preview: 'Can\'t wait to see you there! ✨ Check your DMs for the VIP entrance map.', highlight: true },
          { text: 'Private event invitations', preview: 'You’re on the list! 🥂 Join us for a secret sunset cocktail tonight at the North Terrace.' },
          { text: 'Festival & seasonal announcements', preview: 'Ready for the holidays? 🎄 See our full schedule of events and book your spots early!' },
          { text: 'VIP preview night blast', preview: 'Want to see the new lounge before it opens? Come by at 6 PM for a sneak peek. ✨' },
          { text: 'Live music & entertainment push', preview: 'Jazz night starts in 20 mins! 🎷 There’s a free drink waiting for you if you come down.' },
        ],
      },
      {
        name: 'Personalisation',
        label: 'Retention',
        items: [
          { text: 'Birthday & anniversary recall', preview: 'Happy Birthday! 🎉 I’ve arranged a small gift for you at the front desk for your next stay.' },
          { text: 'Tailored offers by past stay', preview: 'Remember that beach villa you liked last summer? I can get it for you at a discount!' },
          { text: 'Returning guest welcome back', preview: 'Hey! Welcome back! It’s been a while—here’s a little treat to celebrate your return. 🎁' },
        ],
      },
      {
        name: 'Revenue',
        label: 'Conversion',
        items: [
          { text: 'Package add-on at booking', preview: 'Traveling for work? 💼 I can add the "Business Plus" package for high-speed Wi-Fi.' },
          { text: 'Early bird ticket campaign', preview: 'The New Year’s Gala tickets are live! Grab yours now before prices go up next week. 🥂' },
          { text: 'Last-seat urgency message', preview: 'Only 1 spot left for the boat tour! Want me to grab it and charge it to your room?' },
        ],
      },
    ],
    categoryDescription: 'Turn one-off events into recurring direct revenue opportunities.'
  },
  {
    id: 'leisure-activities',
    title: 'Leisure & Activities',
    icon: <Compass size={22} />,
    categories: [
      {
        name: 'Drive Sales',
        label: 'Discovery',
        items: [
          { text: 'Comment-to-DM Automation', preview: 'Ready for an adventure? 🚣‍♂️ Want the activity price list? Just comment "GO"!', highlight: true },
          { text: 'Auto-Reply to Comments', preview: 'Great choice! 🌊 Check your DMs—we just sent you a 10% discount for today\'s kayak tour.', highlight: true },
          { text: 'Receive booking inquiries 24/7', preview: 'Sure thing! 🚣‍♂️ Our kayak sunrise tours depart daily. Which day works for you?' },
          { text: 'Tee time booking campaign', preview: 'Morning! ⛳️ The 8:30 AM tee time is open for tomorrow. Want it before someone else does?' },
          { text: 'Activity package promotion', preview: 'Thinking of a beach day? 🏖️ Our "All-In" watersports pass is 20% off today.' },
          { text: 'Early bird lesson offer push', preview: 'Want to sharpen your game? Book your pro tennis lesson now for an early-bird rate.' },
        ],
      },
      {
        name: 'Enhance Guest Exp.',
        label: 'Experience',
        items: [
          { text: 'AI agent activity reservations', preview: 'Got it! I’ll check the availability for the Pottery class right now. 🏺' },
          { text: 'Equipment & slot confirmation', preview: 'All set! Your padel rackets are waiting at the front desk. Have a great game! 🎾' },
          { text: 'Pre-activity reminder message', preview: 'Just a heads up—your desert safari leaves in 45 mins. Meet us at the front entrance! 🏜️' },
          { text: 'Post-activity review request', preview: 'How was the scuba trip? 🤿 Hope you saw lots of fish! Let us know how we did.' },
        ],
      },
      {
        name: 'Upselling',
        label: 'Growth',
        items: [
          { text: 'Private coaching session upgrade', preview: 'Since you’re doing the group clinic, want to add 30 mins with the Pro afterwards? 🎾' },
          { text: 'Premium equipment rental offer', preview: 'We just got some new graphite clubs in—want to swap your rentals for those today? 🏌️‍♂️' },
          { text: 'Membership tier upgrade prompt', preview: 'By the way, becoming a "Leisure VIP" gets you free equipment rentals all year!' },
        ],
      },
    ],
    categoryDescription: 'Streamline activity bookings and maximize yield from leisure assets.'
  },
  {
    id: 'kids-club',
    title: 'Kids Club',
    icon: <Baby size={22} />,
    categories: [
      {
        name: 'Inquiries & Booking',
        label: 'Nurture',
        items: [
          { text: 'Instant birthday inquiry bot', preview: 'Hi! 🎂 I can definitely check our birthday availability for you. When were you thinking of celebrating?' },
          { text: 'Theme & package selector', preview: 'We have Superhero, Safari, and Mermaid themes! 🧜‍♀️ Want to see the package details for each?' },
          { text: 'Calendar availability check', preview: 'Checking June 14th... Yes, we have a slot at 2 PM! Shall I hold it for you for 24h?' },
        ],
      },
      {
        name: 'Parent Engagement',
        label: 'Updates',
        items: [
          { text: 'Guest list & RSVP manager', preview: 'Hi! 📝 Here is your current guest list. 12 parents have RSVPed "Yes" so far. Want to see who?' },
          { text: 'Dietary requirement survey', preview: 'Quick question—any allergies I should tell the Chef about for Leo\'s party on Saturday? 🥜' },
          { text: 'Parent check-in check-out', preview: 'Good news—all the kids are settled in and the pizza just arrived! 🍕 Everyone is having a blast.' },
        ],
      },
      {
        name: 'Revenue & Upselling',
        label: 'Revenue',
        items: [
          { text: 'Mascot & entertainment add-ons', preview: 'Want to make it extra special? 🦁 I can arrange a surprise visit from our Safari Mascot!' },
          { text: 'Custom cake & catering upsell', preview: 'Our pastry chef can make a 3-tier custom cake for the party. Want to see some designs?' },
          { text: 'Pro photography package', preview: 'Don\'t worry about the photos! 📷 Our pro photographer can capture the whole event for you.' },
        ],
      },
    ],
    categoryDescription: 'Automate party planning and keep parents engaged in real-time.'
  },
];

function PreviewBubble({ text, channel = 'whatsapp' }) {
  const isWA = channel === 'whatsapp';
  return (
    <div className={`relative px-4 py-3 rounded-2xl min-w-[200px] max-w-[280px] shadow-2xl transition-all border border-white/5 ${
      isWA ? 'bg-[#0b5c4b] text-white/95' : 'bg-[#262626] text-white/95'
    }`}>
      <p className="text-[12.5px] leading-relaxed font-medium">{text}</p>
      <div className="flex items-center justify-end gap-1.5 mt-2.5 opacity-60">
        <span className="text-[9px] font-mono tracking-tighter">10:00 AM</span>
        <div className="flex -space-x-[8px]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DEFF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DEFF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-ml-1">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
      <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 overflow-hidden pointer-events-none`}>
        <svg viewBox="0 0 20 20" className={isWA ? 'text-[#0b5c4b]' : 'text-[#262626]'} fill="currentColor">
          <path d="M0 0 L10 10 L20 0 Z" />
        </svg>
      </div>
    </div>
  );
}

const WireframeLines = ({ isHovered, activeStageId }) => {
  // Extended horizontal reach to match wider card distribution
  const pathLeft = "M 500 0 L 500 80 Q 500 160 400 160 L 205 160 Q 125 160 125 220 L 125 380";
  const pathCenter = "M 500 0 L 500 380";
  const pathRight = "M 500 0 L 500 80 Q 500 160 600 160 L 795 160 Q 875 160 875 220 L 875 380";

  const paths = [pathLeft, pathCenter, pathRight];
  const pulseInstances = [0, 1, 2];
  const baseMesh = `M 500 0 L 500 80 Q 500 160 400 160 L 205 160 Q 125 160 125 220 L 125 380 M 500 80 L 500 380 M 500 80 Q 500 160 600 160 L 795 160 Q 875 160 875 220 L 875 380`;

  return (
    <div className="absolute inset-x-0 h-[400px] top-[60px] pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMin meet" className="overflow-visible">
        <motion.path 
           key={`base-${activeStageId}`}
           initial={{ pathLength: 0, opacity: 0 }}
           animate={{ pathLength: 1, opacity: 1 }}
           transition={{ duration: 1.2, ease: "easeInOut" }}
           d={baseMesh} 
           stroke="#333" 
           strokeWidth="1.5" 
           fill="none" 
           strokeLinejoin="round" 
           strokeLinecap="round" 
        />
        <AnimatePresence>
          {isHovered && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {paths.map((path, pIdx) => (
                <g key={`path-${pIdx}`}>
                  <motion.path d={path} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.5 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} stroke="#DEFF00" strokeWidth="3" fill="none" />
                  {pulseInstances.map((pulseIdx) => (
                    <motion.g key={`pulse-${pIdx}-${pulseIdx}`} initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }} transition={{ duration: 1.5, ease: "linear", repeat: Infinity, delay: pulseIdx * 0.2 }} style={{ offsetPath: `path("${path}")`, offsetRotate: "auto", filter: 'drop-shadow(0 0 25px #DEFF00)' }}>
                      <g transform="scale(0.6)"><path fill="#DEFF00" d="M -15 10 L 0 0 L -15 -10 Z" /></g>
                    </motion.g>
                  ))}
                </g>
              ))}
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
};

export default function AutomationSystem() {
  const [activeStage, setActiveStage] = useState(stages[0].id);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const active = stages.find((s) => s.id === activeStage);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    const currentIndex = stages.findIndex(s => s.id === activeStage);
    const prevIndex = (currentIndex - 1 + stages.length) % stages.length;
    setActiveStage(stages[prevIndex].id);
  };

  const handleNext = () => {
    setDirection(1);
    const currentIndex = stages.findIndex(s => s.id === activeStage);
    const nextIndex = (currentIndex + 1) % stages.length;
    setActiveStage(stages[nextIndex].id);
  };

  const cardsScrollRef = useRef(null);

  const scrollCards = (direction) => {
    if (cardsScrollRef.current) {
      const scrollAmount = window.innerWidth * 0.85;
      cardsScrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  const [activeCardIdx, setActiveCardIdx] = useState(0);

  const handleCardsScroll = (e) => {
    const scrollAmount = window.innerWidth * 0.85;
    const newIdx = Math.round(e.target.scrollLeft / scrollAmount);
    if (newIdx !== activeCardIdx) {
      setActiveCardIdx(newIdx);
    }
  };

  return (
    <section className="bg-brand-black py-40 px-6 overflow-hidden relative min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        <div className="mb-12 md:mb-24">
          <span className="text-electric uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Automation Engine
          </span>
          <h2 className="text-6xl md:text-8xl font-bold font-display text-white mb-8 tracking-tighter leading-[0.9]">
            Available <span className="text-electric">Automations</span>
          </h2>
          <p className="text-xl text-cream/40 max-w-2xl mx-auto leading-relaxed">
            Purpose-built automation frameworks for every department — set once, run forever.
          </p>
        </div>

        {/* 1. Pill Tabs — Hidden on mobile as per request */}
        <div className="hidden md:flex flex-wrap gap-2 mb-12 md:mb-20 justify-center">
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setDirection(stages.findIndex(s => s.id === stage.id) > stages.findIndex(s => s.id === activeStage) ? 1 : -1);
                  setActiveStage(stage.id);
                  setActiveCardIdx(0); // Reset cards on stage change
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 border ${
                  isActive ? 'bg-electric text-black border-electric shadow-[0_10px_30px_rgba(222,255,0,0.2)]' : 'bg-white/5 text-white/30 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {stage.title}
              </button>
            );
          })}
        </div>

        <div className="w-full relative px-2 md:px-4">
          
          {/* 2. Swipable Title Area — Shifted mb to bring cards up */}
          <div className="relative z-20 mb-12 md:mb-56 w-full group">
            <div className="flex items-center justify-center w-full relative">
              {/* Left Side Labels — Closer to pill for better rhythm */}
              <div className="hidden lg:flex items-center justify-end gap-6 absolute right-[calc(50%+240px)] whitespace-nowrap">
                <button 
                  onClick={handlePrev} 
                  className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-electric transition-colors shrink-0 active:scale-90"
                  aria-label="Previous Department"
                >
                  <ArrowLeft size={20} />
                </button>
                <button onClick={handlePrev} className="hidden lg:block text-white/10 hover:text-electric/40 transition-all font-display text-2xl font-bold -rotate-12 transform origin-right hover:scale-105">
                  {stages[(stages.findIndex(s => s.id === activeStage) - 1 + stages.length) % stages.length].title}
                </button>
              </div>

              {/* CENTER PILL */}
              <div className="relative flex items-center justify-center w-full max-w-[420px] touch-pan-y shrink-0">
                <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                  <motion.div
                    key={active.id}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset }) => {
                      const swipeThreshold = 30;
                      if (offset.x > swipeThreshold) handlePrev();
                      else if (offset.x < -swipeThreshold) handleNext();
                    }}
                    initial={{ x: direction > 0 ? 50 : -50, opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: direction > 0 ? -50 : 50, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="bg-brand-black border-2 border-electric/30 p-1 rounded-2xl md:rounded-[2.5rem] shadow-[0_0_80px_rgba(222,255,0,0.1)] flex items-center w-full cursor-grab active:cursor-grabbing"
                  >
                    <div className="bg-white/5 w-full flex items-center justify-center p-4 md:p-3 md:px-8 rounded-2xl md:rounded-[2.2rem] pointer-events-none">
                      <div className="flex gap-3 md:gap-4 items-center">
                        <span className="text-electric">{active.icon}</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white tracking-tight">{active.title}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Side Labels */}
              <div className="hidden lg:flex items-center justify-start gap-6 absolute left-[calc(50%+240px)] whitespace-nowrap">
                <button onClick={handleNext} className="hidden lg:block text-white/10 hover:text-electric/40 transition-all font-display text-2xl font-bold rotate-12 transform origin-left hover:scale-105">
                  {stages[(stages.findIndex(s => s.id === activeStage) + 1) % stages.length].title}
                </button>
                <button 
                  onClick={handleNext} 
                  className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-electric transition-colors shrink-0 active:scale-90"
                  aria-label="Next Department"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Mobile Arrows (Visible only on small screens) */}
              <div className="absolute inset-x-0 flex justify-between items-center px-4 pointer-events-none md:hidden">
                 <button onClick={handlePrev} className="pointer-events-auto w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/40"><ArrowLeft size={18} /></button>
                 <button onClick={handleNext} className="pointer-events-auto w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/40"><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
             <WireframeLines isHovered={hoveredCardIndex !== null} activeStageId={activeStage} />
          </div>

          {/* 3. Swipable Cards Container — Pure Swipe UX on Mobile */}
          <div className="relative overflow-visible md:overflow-visible">
            {/* Desktop View (Grid) */}
            <div className="hidden md:grid grid-cols-3 gap-8 relative z-20">
              {active.categories.map((cat, idx) => (
                 <AutomationCard 
                    key={`${active.id}-${idx}`} 
                    cat={cat} 
                    idx={idx} 
                    activeId={active.id} 
                    categoryDescription={active.categoryDescription}
                    setHoveredCardIndex={setHoveredCardIndex} 
                 />
              ))}
            </div>

            {/* Mobile View (Swipeable Carousel) */}
            <div className="md:hidden relative z-20 overflow-hidden px-4 -mx-4">
              <div className="flex flex-col items-center py-4">
                <div 
                  ref={cardsScrollRef}
                  onScroll={handleCardsScroll}
                  className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 scroll-smooth touch-pan-x w-full"
                >
                   {active.categories.map((cat, idx) => (
                     <div key={idx} className="min-w-[85vw] snap-center">
                        <AutomationCard 
                            cat={cat} 
                            idx={idx} 
                            activeId={active.id} 
                            categoryDescription={active.categoryDescription}
                            setHoveredCardIndex={setHoveredCardIndex} 
                        />
                     </div>
                   ))}
                </div>

                {/* Mobile Navigation Arrows for Cards */}
                <div className="flex items-center gap-6 mt-4">
                   <button 
                     onClick={() => scrollCards(-1)}
                     className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 active:text-electric active:border-electric transition-all shadow-lg active:scale-90"
                   >
                     <ArrowLeft size={18} />
                   </button>
                   <div className="flex gap-1.5 opacity-40">
                      {[0, 1, 2].map(i => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeCardIdx ? 'bg-electric scale-125' : 'bg-white/30'}`} />
                      ))}
                   </div>
                   <button 
                     onClick={() => scrollCards(1)}
                     className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 active:text-electric active:border-electric transition-all shadow-lg active:scale-90"
                   >
                     <ArrowRight size={18} />
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-16">
           <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-5xl font-display font-bold text-electric mb-2 tracking-tighter">94%</span>
              <span className="text-[11px] font-black uppercase tracking-widest text-white/30">Avg. Message Open Rate</span>
           </div>
           <div className="flex flex-col items-center md:items-start border-y md:border-y-0 md:border-x border-white/5 py-8 md:py-0 px-12 text-center md:text-left">
              <span className="text-5xl font-display font-bold text-white mb-2 tracking-tighter">Instant</span>
              <span className="text-[11px] font-black uppercase tracking-widest text-white/30">Guest Response Velocity</span>
           </div>
           <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-sm font-bold text-white leading-relaxed">Compatible with WhatsApp, Instagram, Email, Facebook & TikTok.</span>
              <span className="text-[11px] font-black uppercase tracking-widest text-white/30 mt-3 italic">Unified Omni-channel Engine</span>
           </div>
        </div>
      </div>
    </section>
  );
}

function AutomationCard({ cat, idx, activeId, categoryDescription, setHoveredCardIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: idx * 0.1 }}
      onMouseEnter={() => setHoveredCardIndex(idx)}
      onMouseLeave={() => setHoveredCardIndex(null)}
      className="bg-[#0f0f0f] rounded-[2.5rem] border border-white/5 p-8 md:p-10 shadow-2xl flex flex-col items-center text-center group transition-colors hover:border-electric/20 h-full"
    >
      <span className="text-electric/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">{cat.label}</span>
      <h4 className="text-2xl md:text-[42px] font-display font-bold text-white mb-6 leading-[1.1]">{cat.name}</h4>
      <p className="text-xs text-cream/30 mb-8 leading-relaxed italic">{categoryDescription}</p>
      <div className="w-full space-y-4 text-left">
        {cat.items.map((item, i) => (
          <div key={i} className={`group/item relative flex items-center justify-between p-4 py-3 border rounded-2xl transition-all cursor-pointer ${item.highlight ? 'bg-electric/10 border-electric/40 shadow-[0_0_20px_rgba(222,255,0,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-electric/40 hover:bg-white/[0.04]'}`}>
            <div className="flex flex-col gap-0.5">
              {item.highlight && <span className="text-[8px] font-black uppercase tracking-tighter text-electric mb-1 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-electric animate-pulse" />Most Popular</span>}
              <span className={`text-[13px] md:text-[18px] font-medium line-clamp-1 ${item.highlight ? 'text-white' : 'text-cream/70'}`}>{item.text}</span>
            </div>
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${item.highlight ? 'text-electric border-electric shadow-[0_0_10px_rgba(222,255,0,0.3)]' : 'text-white/20 border-white/10 group-hover/item:text-electric group-hover/item:border-electric'}`}>
               <CheckCircle2 size={12} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[110%] mb-4 opacity-0 group-hover/item:opacity-100 translate-y-2 group-hover/item:translate-y-0 transition-all pointer-events-none z-50"><PreviewBubble text={item.preview} /></div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
