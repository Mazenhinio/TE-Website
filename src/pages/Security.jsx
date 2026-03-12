import PageTransition from '../components/ui/PageTransition';
import { Shield, Lock, Server, CheckCircle, Award } from 'lucide-react';

export default function Security() {
    return (
        <PageTransition>
            <section className="bg-brand-black text-cream pt-40 pb-20 px-6 min-h-screen">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-[rgba(222,255,0,0.05)] border border-[rgba(222,255,0,0.2)] rounded-full mb-8 shadow-electric">
                        <Shield size={48} className="text-electric" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Enterprise-Grade <span className="text-electric">Security</span></h1>
                    <p className="text-xl text-cream-muted leading-relaxed">
                        Total Engage prioritizes your data privacy and security. Our platform infrastructure is engineered strictly to meet the compliance requirements of global hospitality brands.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Infrastructure Block */}
                    <div className="bg-black-card p-10 md:p-14 rounded-[2rem] border border-[rgba(255,255,255,0.05)] shadow-card-dark relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Server size={200} />
                        </div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-12 h-12 bg-electric rounded-xl flex items-center justify-center text-brand-black">
                                <Lock size={24} />
                            </div>
                            <h2 className="text-3xl font-display font-bold">Infrastructure & Compliance</h2>
                        </div>
                        <div className="space-y-6 text-cream-muted text-lg leading-relaxed relative z-10">
                            <p>
                                Our platform is certified under the <strong>EU Data Privacy Framework</strong>. We leverage the world's leading cloud providers—Google Cloud Platform (GCP) and Amazon Web Services (AWS)—which provide robust, uncompromising infrastructure security, including <strong>SOC 2 Type 2</strong> and <strong>ISO 27001</strong> compliance.
                            </p>
                            <p>
                                All customer and guest data is strictly encrypted in transit using <strong>TLS 1.2 or 1.3</strong> with 2,048-bit or stronger keys, and at rest using a hardened Key Management System (KMS) featuring automated and regular key rotation.
                            </p>
                            <p>
                                The platform enforces multi-layered security controls, including network-level firewalls, OWASP-aligned application protections, persistent DDoS mitigation, and strict system access controls via role-based access (RBAC) and bastion hosts. We conduct rigorous vulnerability scans and annual penetration tests to ensure continuous threat detection and mitigation.
                            </p>
                        </div>
                    </div>


                </div>
            </section>
        </PageTransition>
    )
}
