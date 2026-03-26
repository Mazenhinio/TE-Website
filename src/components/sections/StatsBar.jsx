import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Utensils, Star, Building2, Globe } from 'lucide-react';

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
    <section ref={containerRef} className="bg-electric text-brand-black py-20 px-6 origin-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-center divide-x-0 lg:divide-x divide-[rgba(0,0,0,0.1)]">
        
        <div className="flex flex-col items-center">
          <div className="mb-4 text-brand-black/40"><TrendingUp size={36} /></div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-brand-black stat-number" data-target="400" data-suffix="%">0%</h2>
          <span className="text-base font-extrabold uppercase tracking-widest mt-2">ROI Growth</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-4 text-brand-black/40"><Utensils size={36} /></div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-brand-black stat-number" data-target="250" data-suffix="%">0%</h2>
          <span className="text-base font-extrabold uppercase tracking-widest mt-2">More Bookings</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-4 text-brand-black/40"><Star size={36} /></div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-brand-black stat-number" data-target="40" data-suffix="%">0%</h2>
          <span className="text-base font-extrabold uppercase tracking-widest mt-2">More 5★ Reviews</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-4 text-brand-black/40"><Building2 size={36} /></div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-brand-black stat-number" data-target="10" data-suffix="+">0+</h2>
          <span className="text-base font-extrabold uppercase tracking-widest mt-2">Properties Served</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-4 text-brand-black/40"><Globe size={36} /></div>
          <h2 className="font-display text-5xl md:text-6xl font-black text-brand-black stat-number" data-target="5" data-suffix="+">0+</h2>
          <span className="text-base font-extrabold uppercase tracking-widest mt-2">MENA Countries</span>
        </div>

      </div>
    </section>
  );
}