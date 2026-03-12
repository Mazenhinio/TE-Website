import PageTransition from '../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, MessageSquare, Calendar, Share2, CreditCard, Tags, BarChart } from 'lucide-react';

const featuresList = [
  { id: 'inbox', icon: <MessageCircle size={48} />, title: "Unified Inbox", desc: "Show WhatsApp, email, SMS, Instagram threads in a single view. Never ask a guest 'Can you tell us more?' again — their full history is right there." },
  { id: 'automation', icon: <Bot size={48} />, title: "CRM & Automation Builder", desc: "Drag-and-drop workflow animation. Highlight segments: VIP guests, repeat bookers, lapsed guests." },
  { id: 'whatsapp', icon: <MessageSquare size={48} />, title: "WhatsApp Campaigns", desc: "Broadcast campaigns to segmented lists. 98% open rate vs. 22% email." },
  { id: 'booking', icon: <Calendar size={48} />, title: "Appointment & Reservation", desc: "Let guests book F&B reservations, spa slots, and concierge services." },
  { id: 'social', icon: <Share2 size={48} />, title: "Social Media Scheduling", desc: "Multi-platform posting interface." },
  { id: 'tags', icon: <Tags size={48} />, title: "CRM Tagging & Segmentation", desc: "Build precision guest segments: VIP | Repeat Visitor | Anniversary Guest | Corporate" },
  { id: 'analytics', icon: <BarChart size={48} />, title: "Analytics Dashboard", desc: "Real-time dashboard reporting across all campaigns and channels." }
];

export default function Features() {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 px-6 bg-brand-black text-center border-b border-[rgba(255,255,255,0.05)]">
        <h1 className="max-w-4xl mx-auto mb-6">Every feature a <span className="text-electric block">hospitality team needs.</span></h1>
        <p className="text-xl text-cream-muted max-w-2xl mx-auto">Purpose-built tools for guest acquisition, engagement, retention, and revenue.</p>
      </section>
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto py-16 px-6 gap-16 relative">
        <div className="md:w-1/3 hidden md:block">
          <div className="sticky top-32 flex flex-col gap-4">
            {featuresList.map((f) => (
              <a key={f.id} href={`#${f.id}`} className="text-cream text-lg hover:text-electric transition-colors p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)]">{f.title}</a>
            ))}
          </div>
        </div>
        <div className="md:w-2/3 flex flex-col gap-32">
          {featuresList.map((f, i) => (
            <motion.div key={f.id} id={f.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-6 scroll-mt-32">
              <div className="text-electric">{f.icon}</div>
              <h2 className="text-3xl md:text-4xl text-cream">{f.title}</h2>
              <p className="text-lg text-cream-muted leading-relaxed">{f.desc}</p>
              <div className="h-64 md:h-80 w-full bg-black-card rounded-2xl border border-[rgba(255,255,255,0.1)] mt-4 flex items-center justify-center text-[rgba(255,255,255,0.2)]">
                [ {f.title} Mockup ]
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}