import PageTransition from '../components/ui/PageTransition';
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
}