import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Flower2, Heart, BedDouble, PartyPopper, Baby, Compass } from 'lucide-react';

const stages = [
  {
    id: 'f-and-b',
    title: 'F&B',
    icon: <UtensilsCrossed size={22} />,
    categories: [
      {
        name: 'Drive Sales',
        items: [
          { text: 'Seasonal WhatsApp Campaign', preview: 'Hey! 🥑 Our Avocado Toast is back on the seasonal menu. Want me to send you the new menu PDF?' },
          { text: 'Flash Sale broadcast', preview: 'FLASHSALE: 🥂 2-for-1 cocktails at the Rooftop bar starts in 15 mins! Just show this msg to the bartender.' },
          { text: 'Weekend brunch promotion', preview: 'Weekend plans? 🍳 Our Saturday brunch is almost full. Can I grab a spot for you before they’re gone?' },
          { text: 'Private dining offer push', preview: 'Quick question—are you still looking for a private space for your dinner? Our garden room just opened up!' },
        ],
      },
      {
        name: 'Enhance Guest Exp.',
        items: [
          { text: 'AI agent reservation bookings', preview: 'I can definitely help with that. Which day were you thinking of coming by?' },
          { text: 'Social messages response', preview: 'Hey there! Yes, we have a few outdoor tables left for tonight. Shall I put your name down?' },
          { text: 'Table confirmation & reminders', preview: 'Just a friendly heads up—we’ve got your table saved for 7 PM. See you soon! 🍴' },
          { text: 'Post-dining review request', preview: 'Hope you enjoyed the pasta today! 🍝 If you have a sec, could you let us know how it was?' },
        ],
      },
      {
        name: 'Upselling',
        items: [
          { text: 'Wine pairing upgrade prompt', preview: 'By the way, our Sommelier just opened a rare vintage that pairs perfectly with your steak. Want a glass?' },
          { text: 'Birthday cake add-on offer', preview: 'I noticed it’s a special occasion! 🎂 Should I have a small surprise cake brought out after mains?' },
          { text: "Chef's tasting menu upsell", preview: "The Chef is doing a special off-menu tasting tonight with 3 extra courses. Interested in seeing it?" },
        ],
      },
    ],
  },
  {
    id: 'wellness-club',
    title: 'Wellness Club',
    icon: <Flower2 size={22} />,
    categories: [
      {
        name: 'Drive Sales',
        items: [
          { text: 'Spa special offers via WhatsApp', preview: 'Time for a break? 🧘‍♀️ I have one spot left for a 90-min massage today. Want it?' },
          { text: 'Membership promos & renewals', preview: 'Your membership is coming up for renewal soon! Should I send you the loyalty discount code?' },
          { text: 'New treatment launch blast', preview: 'We just launched a new Hot Stone therapy. It’s honestly amazing—want more info?' },
          { text: 'Couples retreat package push', preview: 'Surprise them? 🥂 Our couples retreat includes a private hot tub session. Interested?' },
        ],
      },
      {
        name: 'Guest Experience',
        items: [
          { text: 'Pre-appointment reminders', preview: 'Just a quick reminder about your 10 AM session tomorrow. Don’t forget to arrive 15 mins early!' },
          { text: 'Post-treatment feedback flow', preview: 'Hope you’re feeling relaxed! ✨ How was your therapist today? We value your thoughts.' },
          { text: 'Therapist preference capture', preview: 'Did you like working with Sarah? I can make sure you’re booked with her next time too.' },
        ],
      },
      {
        name: 'Upselling',
        items: [
          { text: 'Last-minute spa discounts', preview: 'Quick! ⚡️ A cancellation just opened up a 2 PM slot. I can give it to you for 30% off.' },
          { text: 'Retail product follow-up', preview: 'Glad you liked that lavender oil! 🌿 I have a few bottles left in the shop—want me to save one?' },
          { text: 'Loyalty tier upgrade nudge', preview: 'You’re so close to Gold status! One more visit and your next sauna session is on us.' },
        ],
      },
    ],
  },
  {
    id: 'weddings',
    title: 'Weddings',
    icon: <Heart size={22} />,
    categories: [
      {
        name: 'Lead Generation',
        items: [
          { text: 'Venue tours & quotes flow', preview: 'Hi! 🏰 Still thinking about a venue tour? I have a few slots open this Saturday morning.' },
          { text: 'Meta Ads to direct inbox', preview: 'Hey there! Saw you were interested in our outdoor weddings. Want to see our 2026 pricing?' },
          { text: 'WA auto-reply to enquiries', preview: 'Omg congrats on the engagement! 💍 I just got your inquiry—can\'t wait to chat more.' },
          { text: 'Available dates drip sequence', preview: 'Just a quick heads up... our most popular June date just opened up! Want first dibs?' },
        ],
      },
      {
        name: 'Planning & Follow-Up',
        items: [
          { text: 'Vendor checklist reminders', preview: 'How’s the planning going? 🌸 By the way, have you picked a florist yet? I have some ideas!' },
          { text: 'Final headcount confirmation', preview: 'Hey! We’re getting close. 🥂 Can you send over the final guest count by Wednesday?' },
          { text: 'Day-of logistics broadcast', preview: 'Weather update: It’s going to be a beautiful sunny day! We’re all set for the garden. ☀️' },
        ],
      },
      {
        name: 'Post-Event',
        items: [
          { text: 'Honeymoon suite upsell', preview: 'Thinking of staying the night? I can upgrade you to the Bridal Suite for half price! 🥂' },
          { text: 'Anniversary recall campaign', preview: 'Happy 1st Anniversary! ❤️ Want to come back and recreate your wedding dinner with us?' },
          { text: 'Review & testimonial request', preview: 'We loved hosting you! 🕊️ If you have any photos or a nice word to share, we’d love it.' },
        ],
      },
    ],
  },
  {
    id: 'room-stays',
    title: 'Room Stays',
    icon: <BedDouble size={22} />,
    categories: [
      {
        name: 'Pre-Arrival Experience',
        items: [
          { text: 'Personalised Milestone Welcome', preview: 'Congratulations on your honeymoon! 🥂 Should I have a bottle of chilled champagne waiting for you?' },
          { text: 'Private Airport Transfer', preview: 'Need a ride? 🚗 Our private driver can meet you at Terminal 2. One tap to book your transfer.' },
          { text: 'Digital Check-In & Entry', preview: 'Skip the lobby! 🏨 Check in here and I’ll send your digital key straight to your WhatsApp.' },
          { text: 'Choice of View Upsell', preview: 'We just had a high-floor sea view room open up. Want to swap your booking for just $20?' },
        ],
      },
      {
        name: 'In-Stay Luxury',
        items: [
          { text: 'Real-Time Suite Butler', preview: 'Need anything? 🧴 I’m your digital butler. Fresh towels, ice, or local tips—just ask me!' },
          { text: 'Milestone Package Push', preview: 'Thinking of a surprise? 🌹 I can arrange a romantic rose-petal turndown for tonight at 8 PM.' },
          { text: 'In-Room Celebration Dining', preview: 'A cozy night in? 🥂 Our private dining menu is available. Want me to send the Chef’s specials?' },
          { text: 'Extended Stay Benefits', preview: 'Loving your stay? ☀️ Extend for 2 more nights and I’ll include a complimentary spa credit.' },
        ],
      },
      {
        name: 'Upselling & Loyalty',
        items: [
          { text: 'One-Tap Suite Upgrade', preview: 'Upgrade to our Royal Suite today for 40% off the standard rate. Interested in a tour first?' },
          { text: 'Late Checkout Paid Extension', preview: 'Sleep in! 💤 We can extend your stay until 4 PM today for a small lazy-afternoon fee.' },
          { text: 'Return Milestone Recall', preview: 'Can you believe it’s been a year? ❤️ Come back for your anniversary and the cake is on us!' },
          { text: 'Seasonal Direct Booking', preview: 'Hey! 🌊 Our summer sale just started. Book direct here for the best room rates of the year.' },
        ],
      },
    ],
  },

  {
    id: 'special-happenings',
    title: 'Special Happenings',
    icon: <PartyPopper size={22} />,
    categories: [
      {
        name: 'Engagement',
        items: [
          { text: 'Private event invitations', preview: 'You’re on the list! 🥂 Join us for a secret sunset cocktail tonight at the North Terrace.' },
          { text: 'Festival & seasonal announcements', preview: 'Ready for the holidays? 🎄 See our full schedule of events and book your spots early!' },
          { text: 'VIP preview night blast', preview: 'Want to see the new lounge before it opens? Come by at 6 PM for a sneak peek. ✨' },
          { text: 'Live music & entertainment push', preview: 'Jazz night starts in 20 mins! 🎷 There’s a free drink waiting for you if you come down.' },
        ],
      },
      {
        name: 'Personalisation',
        items: [
          { text: 'Birthday & anniversary recall', preview: 'Happy Birthday! 🎉 I’ve arranged a small gift for you at the front desk for your next stay.' },
          { text: 'Tailored offers by past stay', preview: 'Remember that beach villa you liked last summer? I can get it for you at a discount!' },
          { text: 'Returning guest welcome back', preview: 'Hey! Welcome back! It’s been a while—here’s a little treat to celebrate your return. 🎁' },
        ],
      },
      {
        name: 'Revenue',
        items: [
          { text: 'Package add-on at booking', preview: 'Traveling for work? 💼 I can add the "Business Plus" package for high-speed Wi-Fi.' },
          { text: 'Early bird ticket campaign', preview: 'The New Year’s Gala tickets are live! Grab yours now before prices go up next week. 🥂' },
          { text: 'Last-seat urgency message', preview: 'Only 1 spot left for the boat tour! Want me to grab it and charge it to your room?' },
        ],
      },
    ],
  },
  {
    id: 'leisure-activities',
    title: 'Leisure & Activities',
    icon: <Compass size={22} />,
    categories: [
      {
        name: 'Drive Sales',
        items: [
          { text: 'Receive booking inquiries 24/7', preview: 'Sure thing! 🚣‍♂️ Our kayak sunrise tours depart daily. Which day works for you?' },
          { text: 'Tee time booking campaign', preview: 'Morning! ⛳️ The 8:30 AM tee time is open for tomorrow. Want it before someone else does?' },
          { text: 'Activity package promotion', preview: 'Thinking of a beach day? 🏖️ Our "All-In" watersports pass is 20% off today.' },
          { text: 'Early bird lesson offer push', preview: 'Want to sharpen your game? Book your pro tennis lesson now for an early-bird rate.' },
          { text: 'Group booking broadcast', preview: 'Corporate day out? 🏌️‍♂️ I can arrange a private golf tournament for your team.' },
        ],
      },
      {
        name: 'Enhance Guest Exp.',
        items: [
          { text: 'AI agent activity reservations', preview: 'Got it! I’ll check the availability for the Pottery class right now. 🏺' },
          { text: 'Equipment & slot confirmation', preview: 'All set! Your padel rackets are waiting at the front desk. Have a great game! 🎾' },
          { text: 'Pre-activity reminder message', preview: 'Just a heads up—your desert safari leaves in 45 mins. Meet us at the front entrance! 🏜️' },
          { text: 'Post-activity review request', preview: 'How was the scuba trip? 🤿 Hope you saw lots of fish! Let us know how we did.' },
        ],
      },
      {
        name: 'Upselling',
        items: [
          { text: 'Private coaching session upgrade', preview: 'Since you’re doing the group clinic, want to add 30 mins with the Pro afterwards? 🎾' },
          { text: 'Premium equipment rental offer', preview: 'We just got some new graphite clubs in—want to swap your rentals for those today? 🏌️‍♂️' },
          { text: 'Membership tier upgrade prompt', preview: 'By the way, becoming a "Leisure VIP" gets you free equipment rentals all year!' },
          { text: 'Multi-activity bundle offer', preview: 'Can’t decide? 🌊 Get the "Sea & Sky" bundle and save big on both parasailing and jet skis!' },
        ],
      },
    ],
    stats: [
      { label: 'Avg. open rate', value: '94%' },
      { label: 'Automations in this dept.', value: '9' },
      { label: 'Channels', value: 'WhatsApp · Instagram · Email · Facebook · TikTok' },
    ]
  },
  {
    id: 'kids-club',
    title: 'Kids Club',
    icon: <Baby size={22} />,
    categories: [
      {
        name: 'Inquiries & Booking',
        items: [
          { text: 'Instant birthday inquiry bot', preview: 'Hey! 🎂 I can check our birthday dates for you. When are you thinking of celebrating?' },
          { text: 'Theme & package selector', preview: 'We have Superhero, Safari, and Mermaid themes! 🧜‍♀️ Want to see the package details for each?' },
          { text: 'Calendar availability check', preview: 'Looking at June 14th... Yes, we have a slot at 2 PM! Shall I hold it for you for 24h?' },
          { text: 'Automated deposit collection', preview: 'To confirm the party, just tap here to pay the 20% deposit securely via WhatsApp. 💳' },
        ],
      },
      {
        name: 'Parent Engagement',
        items: [
          { text: 'Guest list & RSVP manager', preview: 'Hi! 📝 Here is your current guest list. 12 parents have RSVPed "Yes" so far. Want to see who?' },
          { text: 'Dietary requirement survey', preview: 'Quick question—any allergies I should tell the Chef about for Leos party on Saturday? 🥜' },
          { text: 'Real-time party updates', preview: 'The pizza has arrived! 🍕 The kids are having a blast in the play zone right now.' },
          { text: 'Post-party photo gallery', preview: 'What a day! 📸 Here are the photos from the celebration. Hope to see you again soon!' },
        ],
      },
      {
        name: 'Revenue & Upselling',
        items: [
          { text: 'Mascot & entertainment add-ons', preview: 'Want to make it extra special? 🦁 I can arrange a surprise visit from our Safari Mascot!' },
          { text: 'Custom cake & catering upsell', preview: 'Our pastry chef can make a 3-tier custom cake for the party. Want to see some designs?' },
          { text: 'Pro photography package', preview: 'Don\'t worry about the photos! 📷 Our pro photographer can capture the whole event for you.' },
          { text: 'Anniversary recall (re-booking)', preview: 'Can you believe it’s been a year? 🎈 Leo is turning 6 soon—want to see our new party themes?' },
        ],
      },
    ],
  },
];

/* ─── Preview Bubble Component ────────────────────────────── */
function PreviewBubble({ text, channel = 'whatsapp' }) {
  const isWA = channel === 'whatsapp';
  
  return (
    <div className={`relative px-4 py-3 rounded-2xl min-w-[180px] max-w-[240px] shadow-2xl transition-all border border-white/5 ${
      isWA ? 'bg-[#0b5c4b] text-white/95' : 'bg-[#262626] text-white/95'
    }`}>
      <p className="text-[12px] leading-relaxed font-medium">
        {text}
      </p>
      
      <div className="flex items-center justify-end gap-1 mt-2 opacity-50">
        <span className="text-[9px] font-mono tracking-tight">10:00 AM</span>
        <div className="flex -space-x-[7px]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DEFF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DEFF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="-ml-1">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      {/* Speech Bubble Tail - Bottom centered */}
      <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 overflow-hidden pointer-events-none`}>
        <svg viewBox="0 0 20 20" className={isWA ? 'text-[#0b5c4b]' : 'text-[#262626]'} fill="currentColor">
          <path d="M0 0 L10 10 L20 0 Z" />
        </svg>
      </div>
    </div>
  );
}

export default function AutomationSystem() {
  const [activeStage, setActiveStage] = useState(stages[0].id);
  const [showVideo, setShowVideo] = useState(false);

  const active = stages.find((s) => s.id === activeStage);

  return (
    <section className="bg-brand-black py-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-electric uppercase tracking-widest text-sm font-bold mb-4 block">
            Automation Engine
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
            Available <span className="text-electric">Automations</span>
          </h2>
          <div className="flex flex-col items-center gap-8">
            <p className="text-xl text-cream-muted max-w-3xl mx-auto">
              Purpose-built automation frameworks for every property department — set once, run forever.
            </p>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-electric font-bold text-sm tracking-widest hover:bg-white/10 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-electric/20 flex items-center justify-center group-hover:bg-electric/40 transition-colors">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-electric border-b-[4px] border-b-transparent ml-0.5" />
              </div>
              SEE THE ENGINE IN ACTION
            </button>
          </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            >
              <div className="absolute inset-0" onClick={() => setShowVideo(false)} />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors"
                >
                  ✕
                </button>
                <iframe
                  src="https://www.youtube.com/embed/YOUTUBE_ID_HERE?autoplay=1&mute=1&playsinline=1"
                  className="w-full h-full bg-black/50"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Automation Module Demo"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab strip */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? 'bg-electric text-black border-electric shadow-[0_0_20px_rgba(222,255,0,0.3)]'
                    : 'bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <span className={`transition-colors ${isActive ? 'text-black' : 'text-white/40'}`}>
                  {stage.icon}
                </span>
                {stage.title}
              </button>
            );
          })}
        </div>

        {/* Active tab content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2rem] border border-electric/30 bg-[#0d0d0d] overflow-hidden"
          >
            {/* Subtle electric glow behind card */}
            <div className="absolute inset-0 bg-electric opacity-[0.04] pointer-events-none" />

            <div className="relative z-10 p-8 md:p-12">
              {/* Card header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-electric flex items-center justify-center text-black flex-shrink-0">
                  {active.icon}
                </div>
                <div>
                  <p className="text-electric text-[10px] font-bold uppercase tracking-[0.25em] mb-0.5">
                    Automation Framework
                  </p>
                  <h3 className="text-white text-2xl font-bold font-display">
                    {active.title}
                  </h3>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-2 text-white/20 text-xs font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                  Live & active
                </div>
              </div>

              {/* Category columns — no scrolling */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {active.categories.map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="text-electric text-[10px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 mb-5 opacity-90">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                      {cat.name}
                    </h4>
                    <ul className="space-y-3">
                      {cat.items.map((item, i) => (
                        <li
                          key={i}
                          className="group relative text-cream/85 text-sm leading-snug font-medium pl-4 border-l border-white/10 hover:border-electric transition-colors cursor-pointer py-1"
                        >
                          {typeof item === 'string' ? item : item.text}
                          
                          {/* Chat Preview bubble - Now positioned ABOVE to prevent column overlap */}
                          <div className="absolute bottom-full left-4 mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none z-50 hidden md:block">
                             <PreviewBubble 
                               text={item.preview || `Ready to automate your ${item}? Reply YES to learn more!`} 
                               channel="whatsapp" 
                             />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer stat row */}
              <div className="mt-10 pt-8 border-t border-white/6 flex flex-wrap items-center gap-6 justify-between">
                <div className="flex flex-wrap gap-6">
                  {(active.stats || [
                    { label: 'Avg. open rate', value: '97%' },
                    { label: 'Automations in this dept.', value: `${active.categories.reduce((a, c) => a + c.items.length, 0)}` },
                    { label: 'Channels', value: 'WhatsApp · Instagram · Email · Facebook · TikTok' },
                  ]).map((stat) => (
                    <div key={stat.label}>
                      <p className="text-electric text-lg font-black font-mono">{stat.value}</p>
                      <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="w-10 h-10 rounded-full border border-electric/30 flex items-center justify-center text-electric cursor-pointer hover:border-electric transition-colors"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
