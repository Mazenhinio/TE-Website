import PageTransition from '../components/ui/PageTransition';
import { Building2, ArrowRight } from 'lucide-react';

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
                <div className="w-16 h-16 bg-brand-black text-electric flex items-center justify-center rounded-full mb-6">
                  <Building2 size={32} />
                </div>
                <h3 className="text-2xl mb-2">{s.title}</h3>
                <div className="text-5xl font-mono font-bold my-6">{s.stat}</div>
                <p className="text-text-muted-light mb-8">{s.desc}</p>
                <button className="text-brand-black font-semibold uppercase tracking-widest text-sm border-b-2 border-electric pb-1 hover:text-electric transition-colors flex items-center gap-2">
                  Read Story <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}