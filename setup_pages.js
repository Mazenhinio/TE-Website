import fs from 'fs';
import path from 'path';

const files = {
    'src/pages/Features.jsx': `import PageTransition from '../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, MessageSquare, Calendar, Share2, CreditCard, Tags, BarChart } from 'lucide-react';

const featuresList = [
  { id: 'inbox', icon: <MessageCircle size={48} />, title: "Unified Inbox", desc: "Show WhatsApp, email, SMS, Instagram threads in a single view. Never ask a guest 'Can you tell us more?' again — their full history is right there." },
  { id: 'automation', icon: <Bot size={48} />, title: "CRM & Automation Builder", desc: "Drag-and-drop workflow animation. Highlight segments: VIP guests, repeat bookers, lapsed guests." },
  { id: 'whatsapp', icon: <MessageSquare size={48} />, title: "WhatsApp Campaigns", desc: "Broadcast campaigns to segmented lists. 98% open rate vs. 22% email." },
  { id: 'booking', icon: <Calendar size={48} />, title: "Appointment & Reservation", desc: "Let guests book F&B reservations, spa slots, and concierge services." },
  { id: 'social', icon: <Share2 size={48} />, title: "Social Media Scheduling", desc: "Multi-platform posting interface." },
  { id: 'payments', icon: <CreditCard size={48} />, title: "Payment Processing", desc: "Accept payments from every guest, everywhere. Stripe, Tap, Moyasar, HyperPay." },
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
              <a key={f.id} href={\`#\${f.id}\`} className="text-cream text-lg hover:text-electric transition-colors p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)]">{f.title}</a>
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
}`,
    'src/pages/Pricing.jsx': `import PageTransition from '../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

const tiers = [
  { name: 'Starter', price: '$99', period: '/mo', properties: '1', contacts: '2,500', automation: '1', popular: false },
  { name: 'Growth', price: '$220', period: '/mo', properties: 'Up to 3', contacts: '10,000', automation: '5', popular: true },
  { name: 'Enterprise', price: 'Custom', period: '', properties: 'Unlimited', contacts: 'Unlimited', automation: 'Unlimited', popular: false }
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <PageTransition>
      <section className="bg-cream text-brand-black section-padding px-6 min-h-screen">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="mb-6">Pricing Plans</h1>
          <p className="text-xl text-text-muted-light mb-8">Simple, transparent pricing for hotels of all sizes.</p>
          <div className="inline-flex items-center gap-4 bg-[rgba(0,0,0,0.05)] p-2 rounded-full px-6">
            <span className={\`font-semibold transition-colors \${!annual ? 'text-brand-black' : 'text-text-muted-light'}\`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className="w-16 h-8 bg-brand-black rounded-full relative transition-colors duration-300 flex items-center px-1">
              <motion.div animate={{ x: annual ? 32 : 0 }} className="w-6 h-6 bg-electric rounded-full shadow-md" />
            </button>
            <span className={\`font-semibold transition-colors \${annual ? 'text-brand-black' : 'text-text-muted-light'}\`}>Annual <span className="text-xs bg-electric text-brand-black px-2 py-1 rounded-full ml-1 font-bold">20% OFF</span></span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, i) => (
            <div key={i} className={\`p-8 rounded-3xl border transition-all \${tier.popular ? 'bg-brand-black text-cream shadow-2xl scale-105 border-electric' : 'bg-white text-brand-black border-[rgba(0,0,0,0.1)]'}\`}>
              {tier.popular && <div className="text-electric text-sm font-bold tracking-widest uppercase mb-4">Most Popular</div>}
              <h3 className="text-2xl mb-4 font-display">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className={\`text-5xl font-bold font-mono \${tier.popular ? 'text-electric' : 'text-brand-black'}\`}>{annual && tier.price !== 'Custom' ? \`$\${Math.floor(parseInt(tier.price.replace('$','')) * 0.8)}\` : tier.price}</span>
                <span className={tier.popular ? 'text-cream-muted' : 'text-text-muted-light'}>{tier.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 items-center"><CheckCircle size={20} className={tier.popular ? 'text-electric' : 'text-brand-black'} /> <span>{tier.properties} Properties</span></li>
                <li className="flex gap-3 items-center"><CheckCircle size={20} className={tier.popular ? 'text-electric' : 'text-brand-black'} /> <span>{tier.contacts} Contacts</span></li>
                <li className="flex gap-3 items-center"><CheckCircle size={20} className={tier.popular ? 'text-electric' : 'text-brand-black'} /> <span>WhatsApp Campaigns</span></li>
                <li className="flex gap-3 items-center"><CheckCircle size={20} className={tier.popular ? 'text-electric' : 'text-brand-black'} /> <span>{tier.automation} Automation Workflows</span></li>
              </ul>
              <button className={\`w-full py-4 rounded-full font-bold transition-all \${tier.popular ? 'bg-electric text-brand-black hover:bg-white' : 'bg-brand-black text-white hover:bg-gray-800'}\`}>
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}`,
    'src/pages/Integrations.jsx': `import PageTransition from '../components/ui/PageTransition';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'WhatsApp Business API', category: 'Communication', desc: 'Direct WhatsApp integration for marketing and support.' },
  { name: 'Stripe', category: 'Payments', desc: 'Accept credit cards globally with low fees.' },
  { name: 'Tap Payments', category: 'Payments', desc: 'MENA-specific payment gateway integration.' },
  { name: 'Moyasar', category: 'Payments', desc: 'Saudi Arabia local payment processor.' },
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
}`,
    'src/pages/Hospitality.jsx': `import PageTransition from '../components/ui/PageTransition';
export default function Hospitality() {
  return (
    <PageTransition>
      <section className="bg-brand-black text-cream section-padding px-6 text-center">
        <h1 className="mb-6 max-w-5xl mx-auto">The engagement platform <span className="text-electric block">5-star hotels trust.</span></h1>
        <p className="text-xl text-cream-muted max-w-3xl mx-auto mb-16">From chain hotels in Jeddah to resort groups in the UAE — Total Engage powers guest relationships for MENA's finest properties.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
          <div className="bg-black-card p-10 rounded-2xl border border-[rgba(255,255,255,0.05)]">
            <h3 className="text-2xl text-electric mb-4">General Manager</h3>
            <p className="text-cream-muted">Increase direct bookings and improve TripAdvisor scores. Unify multiple property reports in one click.</p>
          </div>
          <div className="bg-black-card p-10 rounded-2xl border border-[rgba(255,255,255,0.05)]">
            <h3 className="text-2xl text-electric mb-4">Marketing Director</h3>
            <p className="text-cream-muted">Send targeted Ramadan campaigns on WhatsApp. Measure ROI instantly without relying on fragmented tools.</p>
          </div>
          <div className="bg-black-card p-10 rounded-2xl border border-[rgba(255,255,255,0.05)]">
            <h3 className="text-2xl text-electric mb-4">Revenue Manager</h3>
            <p className="text-cream-muted">Automate cross-sells for spa and dining. Drastically reduce room no-shows through automated reminders.</p>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}`,
    'src/pages/CaseStudies.jsx': `import PageTransition from '../components/ui/PageTransition';
export default function CaseStudies() {
  const studies = [
    { title: "Shangri-La Jeddah", stat: "-38%", desc: "No-shows dropped significantly within 60 days." },
    { title: "Shangri-La Abu Dhabi", stat: "10x", desc: "ROI generated from WhatsApp campaigns in Q1." },
    { title: "InterContinental", stat: "200h", desc: "Hours saved per month on guest followups." }
  ]
  return (
    <PageTransition>
      <section className="bg-cream text-brand-black section-padding px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-16 text-center text-brand-black">Results that speak <span className="text-electric bg-brand-black px-4 block md:inline-block mt-2">for themselves.</span></h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studies.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-card-light border border-[rgba(0,0,0,0.05)] flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-black text-electric flex items-center justify-center rounded-full text-2xl mb-6">🏨</div>
                <h3 className="text-2xl mb-2">{s.title}</h3>
                <div className="text-5xl font-mono font-bold my-6">{s.stat}</div>
                <p className="text-text-muted-light mb-8">{s.desc}</p>
                <button className="text-brand-black font-semibold uppercase tracking-widest text-sm border-b-2 border-electric pb-1 hover:text-electric transition-colors">Read Story →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}`
};

Object.entries(files).forEach(([file, content]) => {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file, content);
});
console.log('Extra pages added successfully.');
