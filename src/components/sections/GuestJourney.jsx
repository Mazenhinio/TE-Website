import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Bot, MessageSquare, Calendar, Share2, CreditCard, Tags, BarChart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
    {
        id: "step-1",
        title: "Unified Inbox",
        desc: "Slash lobby friction instantly. Handle room service requests and concierge questions from one inbox. No more ringing lobby phones.",
        icon: <MessageCircle className="text-electric" size={24} />
    },
    {
        id: "step-2",
        title: "CRM & Automation",
        desc: "Automate cross-sells for spa and dining based on guest profile and preferences. Stop using generic CRMs.",
        icon: <Bot className="text-electric" size={24} />
    },
    {
        id: "step-3",
        title: "WhatsApp Campaigns",
        desc: "Drive direct reservations and automate pre-stay upsells (like airport transfers or spa credits) via WhatsApp.",
        icon: <MessageSquare className="text-electric" size={32} />
    },
    {
        id: "step-4",
        title: "Appointment Booking",
        desc: "Let guests book F&B reservations, spa slots, and concierge services easily directly from their phones without calling.",
        icon: <Calendar className="text-electric" size={24} />
    },
    {
        id: "step-5",
        title: "Social Media Posting",
        desc: "Keep the guest expectation high across all channels and natively reply to prospective leads to drive direct bookings.",
        icon: <Share2 className="text-electric" size={24} />
    },
    {
        id: "step-6",
        title: "CRM Tagging",
        desc: "Precisely identify loyalty tiers automatically. Tag high-spending guests as VIPs and send targeted offers to bring them back.",
        icon: <Tags className="text-electric" size={24} />
    },
    {
        id: "step-7",
        title: "Analytics & Reporting",
        desc: "Identify your most profitable repeat guests and comprehensively track the performance of every campaign sent out.",
        icon: <BarChart className="text-electric" size={24} />
    }
];

export default function GuestJourney() {
    const containerRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Pin the left side while the right side scrolls
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftColRef.current,
                pinSpacing: false,
            });

            // Animate each node as it scrolls into view
            const nodes = gsap.utils.toArray('.journey-node');
            nodes.forEach((node, i) => {
                gsap.fromTo(node,
                    { opacity: 0, x: 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: node,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Highlight active node
                ScrollTrigger.create({
                    trigger: node,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleClass: { targets: node, className: "active-node" }
                });
            });

            // Draw the connecting line
            gsap.fromTo(".journey-line",
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    transformOrigin: "top center",
                    scrollTrigger: {
                        trigger: rightColRef.current,
                        start: "top 10%",
                        end: "bottom 50%",
                        scrub: true
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-cream text-brand-black w-full min-h-[150vh] relative">
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row relative">

                {/* Left Side (Pinned) */}
                <div ref={leftColRef} className="md:w-1/2 md:h-screen flex flex-col justify-center pr-10">
                    <span className="font-semibold uppercase tracking-widest text-sm mb-4 block">Platform Features</span>
                    <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 leading-[1.1]">The only CRM built around the guest journey.</h2>
                    <p className="text-lg text-text-muted-light max-w-md">
                        From pre-arrival campaigns to post-stay loyalty loops, Total Engage understands how hospitality works. Stop using generic CRMs and start using a platform that speaks your language.
                    </p>
                </div>

                {/* Right Side (Scrolling Timeline) */}
                <div ref={rightColRef} className="md:w-1/2 relative py-32">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-[rgba(0,0,0,0.1)]">
                        <div className="journey-line w-full h-full bg-brand-black origin-top"></div>
                    </div>

                    <div className="flex flex-col gap-24 relative z-10">
                        {journeySteps.map((step, i) => (
                            <div key={step.id} className="journey-node flex gap-8 items-start opacity-50 transition-opacity duration-300 [&.active-node]:opacity-100">

                                {/* Timeline Dot & Icon */}
                                <div className="w-20 h-20 rounded-full bg-brand-black flex-shrink-0 flex items-center justify-center border-4 border-cream relative shadow-lg z-10">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="pt-2">
                                    <h3 className="text-2xl font-bold font-display mb-3">{step.title}</h3>
                                    <p className="text-lg text-text-muted-light leading-relaxed">{step.desc}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
