import { motion } from 'framer-motion';
import { Sparkles, Users, Award, ShieldCheck } from 'lucide-react';

export default function DoneForYou() {
  return (
    <section className="bg-brand-black py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-electric rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric mb-8"
        >
          <Sparkles size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">White-Glove Service</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-8 !leading-[1.1]"
        >
          You won't do anything yourself. <br />
          <span className="text-electric">We take care of everything.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-cream/70 max-w-4xl mx-auto leading-relaxed mb-16"
        >
          Your hospitality marketing team with award-winning marketeers featuring over <span className="text-white font-bold">15 years of collective experience</span> in the global hospitality industry.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            {
              icon: <Award className="text-electric" size={32} />,
              title: "Award Winning",
              desc: "Recognized industry leaders handling your guest engagement strategy."
            },
            {
              icon: <Users className="text-electric" size={32} />,
              title: "15+ Years Experience",
              desc: "Decades of collective horizontal and vertical hospitality marketing expertise."
            },
            {
              icon: <ShieldCheck className="text-electric" size={32} />,
              title: "Full Account Management",
              desc: "We build, optimize, and manage every single automation for you."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-black-card p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-electric/20 transition-colors text-left group"
            >
              <div className="flex items-center gap-4 mb-6 md:block md:mb-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-0 md:mb-8 group-hover:bg-electric/10 transition-colors shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-0 md:mb-4">{item.title}</h3>
              </div>
              <p className="text-cream/50 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
