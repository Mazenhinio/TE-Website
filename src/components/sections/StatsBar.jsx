import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StatsBar() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.stat-number');

      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        gsap.to(counter, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          onUpdate: function () {
            counter.innerHTML = Math.round(this.targets()[0].innerHTML) + (counter.getAttribute('data-suffix') || '');
          }
        });
      });

      gsap.fromTo(containerRef.current,
        { scaleX: 0.95, opacity: 0 },
        {
          scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-electric text-brand-black py-16 px-6 origin-center">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-[rgba(0,0,0,0.1)]">
        <div><h2 className="font-mono text-4xl font-bold text-brand-black stat-number" data-target="400" data-suffix="%">0%</h2><span className="text-sm font-bold uppercase tracking-wide">More Lead Connections</span></div>
        <div><h2 className="font-mono text-4xl font-bold text-brand-black stat-number" data-target="250" data-suffix="%">0%</h2><span className="text-sm font-bold uppercase tracking-wide">Higher Conversion</span></div>
        <div><h2 className="font-mono text-4xl font-bold text-brand-black stat-number" data-target="40" data-suffix="%">0%</h2><span className="text-sm font-bold uppercase tracking-wide">Reduction in No-Shows</span></div>
        <div><h2 className="font-mono text-4xl font-bold text-brand-black stat-number" data-target="10" data-suffix="+">0+</h2><span className="text-sm font-bold uppercase tracking-wide">Properties Served</span></div>
        <div><h2 className="font-mono text-4xl font-bold text-brand-black stat-number" data-target="5" data-suffix="+">0+</h2><span className="text-sm font-bold uppercase tracking-wide">MENA Countries</span></div>
      </div>
    </section>
  );
}