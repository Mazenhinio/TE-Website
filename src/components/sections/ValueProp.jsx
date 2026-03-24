import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bed, Utensils, LineChart, ArrowRight, Compass } from 'lucide-react';

const RunningMan = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="5" r="2" />
    <path d="M16 14L12 11V7l-4 0" />
    <path d="M6 14l2-3" />
    <path d="M12 11l2 4 4 1" />
    <path d="M10 21v-4l4-3" />
  </svg>
);

const BrideGroom = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Groom */}
    <circle cx="7" cy="5" r="2" />
    <path d="M4 17v-4a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4" />
    {/* Bride */}
    <circle cx="17" cy="5" r="2" />
    <path d="M14 18l1.5-8a1.5 1.5 0 0 1 3 0L20 18" />
    {/* Joining heart */}
    <path d="M12 10.5c.5-.5 1.5-.5 2 0s.5 1.5 0 2L12 14.5 10 12.5c-.5-.5-.5-1.5 0-2s1.5-.5 2 0z" />
  </svg>
);

const impactAreas = [
  {
    title: "Drive Direct Room Revenue",
    shortDesc: "Transform your Rooms & Suites operations by automating direct reservations, upselling early check-ins, and recovering abandoned bookings via WhatsApp.",
    icon: <Bed size={28} />,
    path: "/rooms-suites",
    theme: 'dark'
  },
  {
    title: "Maximize Restaurant Bookings",
    shortDesc: "Empower your Food & Beverage team to promote seasonal menus, push last-minute table reservations, and handle in-room dining orders natively.",
    icon: <Utensils size={28} />,
    path: "/food-beverage",
    theme: 'light'
  },
  {
    title: "Fill Empty Spa Slots",
    shortDesc: "Broadcast exclusive offers for your Wellness Club & Spa to in-house guests, effortlessly manage memberships, and maintain a fully booked schedule.",
    icon: <RunningMan size={28} />,
    path: "/wellness-spa",
    theme: 'dark'
  },
  {
    title: "Capture High-Ticket Leads",
    shortDesc: "Ensure Weddings & Events managers instantly capture corporate inquiries, send automated follow-ups, and convert venue tours straight into your CRM.",
    icon: <BrideGroom size={28} />,
    path: "/weddings-events",
    theme: 'light'
  },
  {
    title: "Track Marketing ROI",
    shortDesc: "Measure the exact revenue generated from every WhatsApp broadcast, attribute direct bookings, and optimize your property's marketing spend.",
    icon: <LineChart size={28} />,
    path: "/loyalty-retention",
    theme: 'dark'
  },
  {
    title: "Book Leisure & Activities Instantly",
    shortDesc: "Enable your golf course, tennis courts, watersports center, and activity desk to receive booking inquiries, confirm reservations, and upsell packages — all on WhatsApp, 24/7.",
    icon: <Compass size={28} />,
    path: "/contact",
    theme: 'light'
  }
];

export default function ValueProp() {
  return (
    <section className="bg-cream py-24 px-6 border-b border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <span className="text-black/40 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            Total Property Unification
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black leading-[1.1] mb-6">
            Elevate the guest journey, <br className="hidden md:block" />
            <span className="text-electric bg-brand-black px-3 pb-1 mt-2 inline-block -rotate-1 shadow-xl">maximize property revenue.</span>
          </h2>
          <p className="text-xl text-black/60 font-medium">
            Total Engage orchestrates seamless, personalized communication across every touchpoint—empowering your property & management teams and driving direct bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactAreas.map((area, idx) => {
            const isDark = area.theme === 'dark';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={area.path} className="block h-full group">
                  <div className={`h-full min-h-[280px] rounded-3xl p-8 lg:p-10 flex flex-col justify-between transition-shadow hover:shadow-2xl border ${
                    isDark 
                      ? 'bg-brand-black border-brand-black shadow-lg cursor-pointer' 
                      : 'bg-white border-black/5 shadow-md cursor-pointer'
                  }`}>
                    <div>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                        isDark ? 'bg-electric text-black' : 'bg-brand-black text-electric'
                      }`}>
                        {area.icon}
                      </div>
                      <h3 className={`text-2xl font-bold font-display mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                        {area.title}
                      </h3>
                      <p className={`text-base leading-relaxed ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                        {area.shortDesc}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 font-bold uppercase tracking-widest text-[11px]">
                      <span className={`${isDark ? 'text-electric' : 'text-black'} group-hover:underline underline-offset-4 decoration-2`}>
                        Explore Use Cases
                      </span>
                      <ArrowRight size={16} className={`${isDark ? 'text-electric' : 'text-black'} transition-transform group-hover:translate-x-2`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
