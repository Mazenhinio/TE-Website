import { motion } from 'framer-motion';
import { MessageCircle, Bot, MessageSquare, Calendar, Share2, CreditCard, Tags, BarChart } from 'lucide-react';

const features = [
  { icon: <MessageCircle size={36} />, title: 'Unified Inbox', desc: 'All guest messages — WhatsApp, SMS, Email, Instagram — in one thread. Never miss a conversation.' },
  { icon: <Bot size={36} />, title: 'CRM & Automation', desc: 'Tag, segment, and automate guest workflows. Set it once, run forever.' },
  { icon: <MessageSquare size={48} />, title: 'WhatsApp Campaigns', desc: 'Send broadcast campaigns to segmented lists. High open rates, personal feel.' },
  { icon: <Calendar size={36} />, title: 'Appointment Booking', desc: 'Let guests book F&B reservations, spa slots, and concierge services.' },
  { icon: <Share2 size={36} />, title: 'Social Media Posting', desc: 'Schedule and publish across all channels from one dashboard.' },
  { icon: <Tags size={36} />, title: 'Tagging & Segmentation', desc: 'Build precision guest segments. VIP, Repeat Visitor, Corporate.' },
  { icon: <BarChart size={36} />, title: 'Analytics & Reporting', desc: 'Understand performance across every campaign, channel, and property.' }
];

export default function FeaturesGrid() {
  return (
    <section className="bg-black-card text-cream px-6 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-electric tracking-widest text-sm font-semibold uppercase block mb-4">Platform Features</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream font-bold mb-6">One platform. Every channel. Zero complexity.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="bg-brand-black border border-[rgba(222,255,0,0.1)] p-8 rounded-2xl hover:border-[rgba(222,255,0,0.4)] hover:bg-[rgba(222,255,0,0.04)] transition-all hover:translate-y-[-6px] hover:shadow-electric cursor-default group"
            >
              <div className="text-4xl mb-6 truncate">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-cream font-display group-hover:text-electric transition-colors">{f.title}</h3>
              <p className="text-cream-muted text-lg">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}