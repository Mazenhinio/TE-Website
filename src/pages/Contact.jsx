import PageTransition from '../components/ui/PageTransition';
import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageTransition>
      <section className="bg-brand-black text-cream section-padding px-6 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          <div>
            <h1 className="mb-6 font-display">Let's talk engagement.</h1>
            <p className="text-xl text-cream-muted mb-10">We'll show you exactly how Total Engage can transform your property within 48 hours.</p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start"><CheckCircle className="text-electric shrink-0" /><p>We'll confirm your slot within 2 hours</p></div>
              <div className="flex gap-4 items-start"><CheckCircle className="text-electric shrink-0" /><p>30-minute live walkthrough tailored to your property</p></div>
              <div className="flex gap-4 items-start"><CheckCircle className="text-electric shrink-0" /><p>See your use case demoed live</p></div>
              <div className="flex gap-4 items-start"><CheckCircle className="text-electric shrink-0" /><p>Get a custom implementation plan</p></div>
            </div>
          </div>
          <div className="bg-black-card p-10 rounded-2xl border border-[rgba(255,255,255,0.08)]">
            {submitted ? (
              <div className="text-center py-20 flex flex-col items-center">
                <CheckCircle size={64} className="text-electric mb-6" />
                <h3 className="text-2xl mb-4 text-electric">Request Received</h3>
                <p className="text-cream-muted">We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-6 flex flex-col">
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">Full Name *</label>
                  <input required className="bg-transparent border-b border-[rgba(255,255,255,0.2)] pb-2 text-cream focus:outline-none focus:border-electric transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">Work Email *</label>
                  <input required type="email" className="bg-transparent border-b border-[rgba(255,255,255,0.2)] pb-2 text-cream focus:outline-none focus:border-electric transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">Hotel / Property Name *</label>
                  <input required type="text" className="bg-transparent border-b border-[rgba(255,255,255,0.2)] pb-2 text-cream focus:outline-none focus:border-electric transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">What's your biggest challenge?</label>
                  <textarea rows="3" className="bg-transparent border-b border-[rgba(255,255,255,0.2)] pb-2 text-cream focus:outline-none focus:border-electric transition-colors"></textarea>
                </div>
                <button type="submit" className="mt-4 px-8 py-4 bg-electric text-brand-black font-bold text-lg rounded-full hover:shadow-button-hover transition-shadow flex items-center justify-center gap-2">
                  Schedule My Free Demo <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
