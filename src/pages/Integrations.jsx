import PageTransition from '../components/ui/PageTransition';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'WhatsApp Business API', category: 'Communication', desc: 'Direct WhatsApp integration for marketing and support.' },
  { name: 'Twilio', category: 'Communication', desc: 'SMS fallback and voice integration.' },
  { name: 'Zapier', category: 'Automation', desc: 'Connect to 5,000+ other tools.' },
  { name: 'Meta Business', category: 'Social', desc: 'Manage Instagram and Facebook messages.' },
  { name: 'Google Ads', category: 'Marketing', desc: 'Sync offline conversions and audiences.' }
];

export default function Integrations() {
  return (
    <PageTransition>
      <section className="bg-brand-black text-cream section-padding px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6">Connect Total Engage to your <span className="text-electric text-opacity-90">entire tech stack.</span></h1>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((app, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-black-card p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] hover:border-electric transition-colors group cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest text-[#deff00] bg-[rgba(222,255,0,0.1)] px-3 py-1 rounded-full mb-6 inline-block">{app.category}</span>
              <h3 className="text-xl font-bold mb-3">{app.name}</h3>
              <p className="text-cream-muted text-sm">{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}