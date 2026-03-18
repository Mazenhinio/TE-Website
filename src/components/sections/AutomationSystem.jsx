import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Flower2, Heart, BedDouble, PartyPopper, Baby } from 'lucide-react';

const stages = [
  {
    id: 'f-and-b',
    title: 'F&B',
    icon: <UtensilsCrossed size={22} />,
    categories: [
      {
        name: 'Drive Sales',
        items: [
          'Seasonal WhatsApp Campaign',
          'Flash Sale broadcast',
          'Weekend brunch promotion',
          'Private dining offer push',
        ],
      },
      {
        name: 'Enhance Guest Exp.',
        items: [
          'AI agent reservation bookings',
          'Social messages response',
          'Table confirmation & reminders',
          'Post-dining review request',
        ],
      },
      {
        name: 'Upselling',
        items: [
          'Wine pairing upgrade prompt',
          'Birthday cake add-on offer',
          "Chef's tasting menu upsell",
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
          'Spa special offers via WhatsApp',
          'Membership promos & renewals',
          'New treatment launch blast',
          'Couples retreat package push',
        ],
      },
      {
        name: 'Guest Experience',
        items: [
          'Pre-appointment reminders',
          'Post-treatment feedback flow',
          'Therapist preference capture',
        ],
      },
      {
        name: 'Upselling',
        items: [
          'Last-minute spa discounts',
          'Retail product follow-up',
          'Loyalty tier upgrade nudge',
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
          'Venue tours & quotes flow',
          'Meta Ads to direct inbox',
          'WA auto-reply to enquiries',
          'Available dates drip sequence',
        ],
      },
      {
        name: 'Planning & Follow-Up',
        items: [
          'Vendor checklist reminders',
          'Final headcount confirmation',
          'Day-of logistics broadcast',
        ],
      },
      {
        name: 'Post-Event',
        items: [
          'Honeymoon suite upsell',
          'Anniversary recall campaign',
          'Review & testimonial request',
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
        name: 'Pre-Arrival',
        items: [
          'Online check-in nudge',
          'Pillow & preference survey',
          'Transfer & airport pickup offer',
          'Early check-in upsell',
        ],
      },
      {
        name: 'In-Stay',
        items: [
          'Real-time service requests',
          'Mid-stay satisfaction check',
          'In-room dining push',
        ],
      },
      {
        name: 'Upselling',
        items: [
          'Room upgrade offer on arrival',
          'Late checkout paid extension',
          'Minibar & amenity prompt',
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
          'Private event invitations',
          'Festival & seasonal announcements',
          'VIP preview night blast',
          'Live music & entertainment push',
        ],
      },
      {
        name: 'Personalisation',
        items: [
          'Birthday & anniversary recall',
          'Tailored offers by past stay',
          'Returning guest welcome back',
        ],
      },
      {
        name: 'Revenue',
        items: [
          'Package add-on at booking',
          'Early bird ticket campaign',
          'Last-seat urgency message',
        ],
      },
    ],
  },
  {
    id: 'kids-club',
    title: 'Kids Club',
    icon: <Baby size={22} />,
    categories: [
      {
        name: 'Information',
        items: [
          'Daily activities schedule',
          'Babysitting requests flow',
          'Age-group programme updates',
          'Pool & beach session times',
        ],
      },
      {
        name: 'Parent Engagement',
        items: [
          'Real-time pickup notifications',
          'Photo & activity highlights',
          'Safety & allergy confirmation',
        ],
      },
      {
        name: 'Upselling',
        items: [
          'Premium session booking',
          'Birthday party packages',
          'Souvenir & activity add-ons',
        ],
      },
    ],
  },
];

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
              Purpose-built automation frameworks for every hotel department — set once, run forever.
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
                          {item}
                          {/* WhatsApp / Instagram preview tooltip */}
                          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black px-4 py-2.5 rounded-xl border border-white/10 pointer-events-none whitespace-nowrap z-50 shadow-2xl hidden md:flex items-center gap-3">
                            <span className="text-electric text-[10px] font-bold uppercase tracking-widest text-left">
                              Preview flow<br />on channel
                            </span>
                            <div className="flex -space-x-2">
                              <img src="/images/Whatsapp Logo.webp" alt="WhatsApp" className="w-6 h-6 rounded-full border-2 border-black bg-[#25D366] p-1" />
                              <img src="/images/instagram logo.webp" alt="Instagram" className="w-6 h-6 rounded-full border-2 border-black object-cover" />
                            </div>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer stat row */}
              <div className="mt-10 pt-8 border-t border-white/6 flex flex-wrap items-center gap-6 justify-between">
                <div className="flex flex-wrap gap-6">
                  {[
                    { label: 'Avg. open rate', value: '97%' },
                    { label: 'Automations in this dept.', value: `${active.categories.reduce((a, c) => a + c.items.length, 0)}` },
                    { label: 'Channels', value: 'WhatsApp · Instagram · Email' },
                  ].map((stat) => (
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
