import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-electric py-24 px-6 text-center">
      <h2 className="mb-6 font-display font-bold text-black">Ready to transform your guest experience?</h2>
      <p className="text-xl mb-10 max-w-2xl mx-auto text-black/80 font-medium">Join Shangri-La, InterContinental, and dozens of MENA's finest properties already on Total Engage.</p>
      <button className="px-10 py-4 bg-brand-black text-electric font-bold rounded-full text-lg shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
        Schedule Your Free Demo <ArrowRight size={20} />
      </button>
      <p className="mt-4 text-sm font-medium text-black/60 uppercase tracking-widest">No credit card required. Setup in under 48 hours.</p>
    </section>
  )
}