import { motion } from 'framer-motion';
import { TrendingUp, MessageSquare, Star, Users } from 'lucide-react';

const results = [
  {
    client: "High-Volume F&B Group",
    campaign: "NYE Campaign",
    metric: "1,270",
    label: "Table Bookings",
    detail: "Massive scale WhatsApp broadcast achieving 47,600 deliveries and 4,500+ unique guest replies.",
    icon: <TrendingUp className="text-electric" size={24} />
  },
  {
    client: "Luxury Hospitality Brand",
    campaign: "Founding Day Special",
    metric: "150x",
    label: "Campaign ROI",
    detail: "Achieved an unprecedented 150x return on campaign spend with a 66.9% message read rate.",
    icon: <Star className="text-electric" size={24} />
  },
  {
    client: "Boutique Travel Partner",
    campaign: "Property Promotion",
    metric: "58.2%",
    label: "Read Rate",
    detail: "Direct guest engagement via WhatsApp with a 96% delivery rate and high conversion velocity.",
    icon: <MessageSquare className="text-electric" size={24} />
  },
  {
    client: "International Hotel Chain",
    campaign: "Guest Loyalty Drive",
    metric: "97.4%",
    label: "Delivery Rate",
    detail: "Ensuring near-perfect reach across global guest segments with localized content delivery.",
    icon: <Users className="text-electric" size={24} />
  }
];

export default function CampaignResults() {
  return (
    <section className="bg-cream py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-black/40 uppercase tracking-widest text-sm font-bold mb-4 block">Proof of Performance</span>
          <h2 className="text-5xl md:text-7xl font-bold font-display text-brand-black mb-6">Real results.<br /><span className="text-text-muted-light/60">Real Impact.</span></h2>
          <p className="text-xl text-text-muted-light max-w-3xl mx-auto">
            We don't just provide software; we deliver measurable bottom-line growth for world-class property & travel brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-black/5 p-10 rounded-[2.5rem] hover:shadow-2xl transition-all group"
            >
              <div className="mb-8">
                <p className="text-electric bg-brand-black inline-block px-5 py-2 rounded-full text-5xl font-black font-mono mb-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                  {item.metric}
                </p>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">{item.label}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-brand-black leading-tight">{item.client}</h3>
                <div className="flex">
                  <span className="text-xs font-bold text-electric bg-brand-black px-3 py-1.5 rounded uppercase tracking-wider">
                    {item.campaign}
                  </span>
                </div>
                <p className="text-base text-black/70 leading-relaxed font-medium">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
