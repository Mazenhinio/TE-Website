import { ShieldCheck, Lock, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SecuritySummary() {
    return (
        <section className="bg-brand-black text-cream py-24 px-6 relative border-y border-[rgba(255,255,255,0.05)] overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[rgba(222,255,0,0.05)] via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
                <div className="md:w-1/2">
                    <span className="text-electric tracking-widest text-sm font-semibold uppercase block mb-4">Enterprise Compliance</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 !leading-[1.1]">Your guest data, <br />fully protected.</h2>
                    <p className="text-lg text-cream-muted leading-relaxed mb-8 max-w-lg">
                        Total Engage is built on SOC 2 Type 2 and ISO 27001 compliant infrastructure. With rigorous TLS 1.3 encryption, DDoS mitigation, and EU Data Privacy Framework certification, your guests' sensitive information is never compromised.
                    </p>
                    <Link to="/security" className="inline-block">
                        <button className="px-6 py-3 bg-[rgba(222,255,0,0.1)] border border-electric text-electric font-semibold rounded-full hover:bg-[rgba(222,255,0,0.2)] transition-colors flex items-center gap-2">
                            <ShieldCheck size={20} /> Read Security Overview
                        </button>
                    </Link>
                </div>

                <div className="md:w-1/2 flex flex-col gap-6 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-black-card p-6 md:p-8 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-card-dark">
                            <div className="flex items-center gap-4 mb-6 md:block md:mb-0">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[rgba(222,255,0,0.1)] flex items-center justify-center mb-0 md:mb-6 shrink-0">
                                    <Lock size={20} className="text-electric md:w-[24px] md:h-[24px]" />
                                </div>
                                <h4 className="font-bold text-lg md:text-xl mb-0 md:mb-3 whitespace-nowrap">TLS 1.3 Encryption</h4>
                            </div>
                            <p className="text-xs md:text-sm text-cream-muted leading-relaxed">2,048-bit encryption for all data in transit alongside hardened KMS at rest.</p>
                        </div>

                        <div className="bg-black-card p-6 md:p-8 rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-card-dark lg:translate-y-8">
                            <div className="flex items-center gap-4 mb-6 md:block md:mb-0">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[rgba(222,255,0,0.1)] flex items-center justify-center mb-0 md:mb-6 shrink-0">
                                    <Server size={20} className="text-electric md:w-[24px] md:h-[24px]" />
                                </div>
                                <h4 className="font-bold text-lg md:text-xl mb-0 md:mb-3 whitespace-nowrap">AWS & GCP Hosted</h4>
                            </div>
                            <p className="text-xs md:text-sm text-cream-muted leading-relaxed">Leveraging the world's most secure and redundant cloud infrastructure.</p>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-6 items-start">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="h-32 px-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 w-full mb-2">
                                <span className="font-black text-4xl tracking-tighter text-cream uppercase">SOC2</span>
                            </div>
                            <span className="text-sm text-electric uppercase font-black tracking-widest leading-tight">Type II Certified</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="h-32 px-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 w-full mb-2">
                                <img src="/images/Meta Logo.webp" alt="Meta Partner" className="h-20 w-auto object-contain brightness-0 invert opacity-60" />
                            </div>
                            <span className="text-sm text-electric uppercase font-black tracking-widest leading-tight">Official Partner</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="h-32 px-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 w-full mb-2">
                                <img src="/images/Google logo.webp" alt="Google Partner" className="h-20 w-auto object-contain brightness-0 invert opacity-60" />
                            </div>
                            <span className="text-sm text-electric uppercase font-black tracking-widest leading-tight">Global Partner</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="h-32 px-4 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 w-full mb-2">
                                <span className="font-black text-4xl tracking-tighter text-cream uppercase">GDPR</span>
                            </div>
                            <span className="text-sm text-electric uppercase font-black tracking-widest leading-tight">Compliant</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
