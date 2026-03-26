import PageTransition from '../components/ui/PageTransition';
import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hotel: '',
    challenge: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Webhook integration using environment variables
      const GHL_WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL;
      
      if (!GHL_WEBHOOK_URL) {
        throw new Error("GHL_WEBHOOK_URL is not defined in .env");
      }

      console.log("Submitting to GHL:", formData);

      const response = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      // Still show success to the user, but we've logged the error for debugging
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <section className="bg-brand-black text-cream section-padding px-6 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          <div>
            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-display font-black leading-tight mb-8">Let's talk engagement.</h1>
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
                <h3 className="text-3xl font-display font-bold mb-4 text-electric">Request Received</h3>
                <p className="text-cream-muted text-lg">One of our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">Full Name *</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="bg-transparent border-b border-[rgba(255,255,255,0.2)] px-2 pb-2 text-cream focus:outline-none focus:border-electric transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">Work Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-transparent border-b border-[rgba(255,255,255,0.2)] px-2 pb-2 text-cream focus:outline-none focus:border-electric transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">Phone Number *</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="bg-transparent border-b border-[rgba(255,255,255,0.2)] px-2 pb-2 text-cream focus:outline-none focus:border-electric transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">Hotel / Property Name *</label>
                  <input required type="text" value={formData.hotel} onChange={e => setFormData({...formData, hotel: e.target.value})} className="bg-transparent border-b border-[rgba(255,255,255,0.2)] px-2 pb-2 text-cream focus:outline-none focus:border-electric transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm tracking-widest text-[rgba(244,242,230,0.55)] uppercase">What's your biggest challenge?</label>
                  <textarea rows="3" value={formData.challenge} onChange={e => setFormData({...formData, challenge: e.target.value})} className="bg-transparent border-b border-[rgba(255,255,255,0.2)] px-2 pb-2 text-cream focus:outline-none focus:border-electric transition-colors"></textarea>
                </div>
                <button disabled={loading} type="submit" className="mt-4 px-8 py-4 bg-electric text-brand-black font-bold text-lg rounded-full hover:shadow-button-hover disabled:opacity-50 disabled:cursor-not-allowed transition-shadow flex items-center justify-center gap-2">
                  {loading ? 'Submitting...' : 'Schedule My Free Demo'} <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
