import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const steps = [
  { num: '01', icon: 'fa-pen-to-square',  title: 'Reach Out',         desc: 'Contact me via WhatsApp or fill the enquiry form. Tell me about your skills, experience, and desired country.' },
  { num: '02', icon: 'fa-phone',          title: 'Consultation',      desc: 'I discuss your profile and preferences to identify the best job opportunities for you.' },
  { num: '03', icon: 'fa-file-contract',  title: 'Documentation & Visa', desc: 'I help compile documents, coordinate medical checks, and guide you through the visa process.' },
  { num: '04', icon: 'fa-plane',          title: 'Job Match & Offer', desc: 'I connect you with verified employers, arrange interviews, and help secure your job offer.' },
  { num: '05', icon: 'fa-circle-check',   title: 'Departure',         desc: 'Pre-departure briefing, travel arrangements, and support to ensure a smooth start abroad.' },
];

export default function Process() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 relative overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}>
      {/* Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="HOW IT WORKS" title="My 5-Step Process" light
            sub="A simple, clear path from application to departure." />
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-[42px] top-0 bottom-0 w-0.5 bg-white/30" />

          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <div key={i}
                className="reveal step-card relative flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all"
                style={{ transitionDelay: `${i * 0.1}s` }}>

                {/* Big number */}
                <div className="flex-shrink-0 w-[84px] h-[84px] rounded-2xl flex flex-col items-center justify-center text-white font-black text-lg relative z-10 bg-white/20 backdrop-blur-sm border border-white/20">
                  <span className="text-[0.5rem] font-bold uppercase tracking-wider opacity-70">Step</span>
                  {s.num}
                </div>

                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <i className={`fas ${s.icon} text-white/80 text-sm`} />
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm leading-[1.7] text-white/75">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
