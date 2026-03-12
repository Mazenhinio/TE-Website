import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Star } from 'lucide-react';

const stages = [
  {
    id: 'pre-booking',
    title: 'Pre-Booking',
    color: '#deff00',
    icon: <Sparkles size={24} />,
    categories: [
      {
        name: 'Drive Sales',
        items: ['Seasonal WhatsApp Campaign', 'Secret deals / Flash Sale broadcast', 'Paid Meta Ads']
      },
      {
        name: 'Enhance Guest Exp.',
        items: ['AI agent or auto respond to inquiries', 'Social messages response']
      },
      {
        name: 'Upselling',
        items: ['Wedding venues & Corporate deals', 'Private events invitations']
      }
    ]
  },
  {
    id: 'pre-checkin',
    title: 'Pre-Check In',
    color: '#f4f2e6',
    icon: <TrendingUp size={24} />,
    categories: [
      {
        name: 'Drive Sales',
        items: ['F&B special offers', 'Wellness club offers', 'Paid tours & activities']
      },
      {
        name: 'Enhance Guest Exp.',
        items: ['Pre-check In Instructions', 'Special activities']
      },
      {
        name: 'Upselling',
        items: ['Auto send upgrade offers', 'Airport pickup & Room types']
      }
    ]
  },
  {
    id: 'in-house',
    title: 'In House Guests',
    color: '#deff00',
    icon: <Users size={24} />,
    categories: [
      {
        name: 'Drive Sales',
        items: ['Restaurant/Activities promos', 'Paid Late Checkout Promo']
      },
      {
        name: 'Enhance Guest Exp.',
        items: ['Welcome message', 'Maintenance message coordination']
      },
      {
        name: 'Upselling',
        items: ['Last-Minute Spa Discounts', 'Dining Upsells']
      },
      {
        name: 'Reputation',
        items: ['Mid-Stay Satisfaction Check', 'Manager Alert for "Bad" Feedback']
      }
    ]
  },
  {
    id: 'post-departure',
    title: 'Post Departure',
    color: '#f4f2e6',
    icon: <Star size={24} />,
    categories: [
      {
        name: 'Drive Sales',
        items: ['Book Again Promo', '"We miss you" campaign', 'Referral discounts']
      },
      {
        name: 'Enhance Guest Exp.',
        items: ['Courtesy & Thank you messages']
      },
      {
        name: 'Upselling',
        items: ['Room Upgrade Offer for Next Stay', 'Tags for targeted seasonal campaigns']
      },
      {
        name: 'Reputation',
        items: ['Google Review Request with buttons', 'Bad Review Recovery Automation']
      }
    ]
  }
];

export default function AutomationSystem() {
  const [activeStage, setActiveStage] = useState(stages[0].id);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-brand-black py-24 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-electric uppercase tracking-widest text-sm font-bold mb-4 block">Automation Engine</span>
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">Available <span className="text-electric">Automations</span></h2>
          <div className="flex flex-col items-center gap-8">
            <p className="text-xl text-cream-muted max-w-3xl mx-auto">
              Experience the full power of Total Engage through our specialized hospitality automation frameworks.
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
              <div className="absolute inset-0" onClick={() => setShowVideo(false)} title="Close Modal" />
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
                  src="https://drive.google.com/file/d/1A0R95nb6FbMAwMX8WJvcFFxwKVCbjt42/preview"
                  className="w-full h-full"
                  allow="autoplay"
                  title="Automation Module Demo"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <motion.div
                key={stage.id}
                layout
                onClick={() => setActiveStage(stage.id)}
                className={`relative cursor-pointer overflow-hidden rounded-[2rem] border transition-colors duration-500 flex-grow lg:flex-grow-0 ${
                  isActive 
                    ? 'lg:w-[50%] bg-brand-black border-electric' 
                    : 'lg:w-[15%] bg-black-card border-white/10 hover:border-white/30'
                }`}
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {/* Background Glow */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-electric pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-electric text-black' : 'bg-white/10 text-white'}`}>
                      {stage.icon}
                    </div>
                    {isActive && (
                      <motion.h3 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold font-display text-white"
                      >
                        {stage.title}
                      </motion.h3>
                    )}
                  </div>

                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center lg:rotate-[-90deg]">
                       <span className="text-xl font-bold whitespace-nowrap text-white/40 uppercase tracking-widest">{stage.title}</span>
                    </div>
                  )}

                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 overflow-y-auto pr-4 custom-scrollbar"
                    >
                      {stage.categories.map((cat, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-electric text-[10px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 opacity-80">
                            <div className="w-1.5 h-1.5 rounded-full bg-electric" /> {cat.name}
                          </h4>
                          <ul className="space-y-3">
                            {cat.items.map((item, i) => (
                              <li key={i} className="text-cream/90 text-[15px] leading-snug font-medium pl-4 border-l border-white/10 hover:border-electric transition-colors">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {isActive && (
                    <div className="mt-auto pt-8 flex justify-end">
                       <motion.div 
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         className="w-10 h-10 rounded-full border border-electric/30 flex items-center justify-center text-electric"
                       >
                         <ArrowRight size={20} />
                       </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
