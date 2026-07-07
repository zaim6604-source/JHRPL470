import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const reasons = [
  { icon: 'fa-badge-check', title: 'Government Licensed', desc: 'We are a fully registered and licensed overseas recruiting agency, operating in full compliance with all regulations.' },
  { icon: 'fa-hand-holding-heart', title: 'Ethical & Transparent', desc: 'No hidden fees. We believe in complete transparency throughout the entire recruitment process.' },
  { icon: 'fa-chart-line', title: 'Proven Track Record', desc: 'Over 5,000 successful placements across 30+ countries with a 95% client satisfaction rate.' },
  { icon: 'fa-users-gear', title: 'Dedicated Support Team', desc: 'Our experienced counselors provide personalized guidance from initial application to post-placement.' },
  { icon: 'fa-bolt', title: 'Fast Processing', desc: 'Streamlined processes ensure quick turnaround times for visa applications and job placements.' },
  { icon: 'fa-handshake', title: 'Strong Employer Network', desc: 'We maintain partnerships with hundreds of reputable employers across multiple industries worldwide.' },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-24 relative overflow-hidden" style={{ background: '#0f172a' }} ref={ref}>
      {/* Decorative */}
      <div className="blob blob-pink" style={{ width: 450, height: 450, top: '-20%', left: '-10%', opacity: 0.15 }} />
      <div className="blob blob-teal" style={{ width: 350, height: 350, bottom: '-15%', right: '-8%', opacity: 0.12 }} />
      <div className="bg-hero-pattern absolute inset-0 opacity-30" />

      {/* Decorative image card */}
      <div className="floating-4 hidden xl:block absolute top-[15%] right-[4%] z-20">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/10" style={{ width: 200, border: '1px solid rgba(255,255,255,.08)' }}>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop"
            alt="Professional consultant"
            className="w-full h-28 object-cover"
          />
          <div className="px-4 py-3 text-center" style={{ background: 'rgba(255,255,255,.04)' }}>
            <span className="text-[0.65rem] text-white/60 font-medium">95% Client Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="Why Choose Us" title="Why Tahir & Company?" light
            sub="We stand out because of our commitment to excellence, transparency, and results." />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i}
              className="reveal why-card bg-white/5 backdrop-blur-sm rounded-2xl p-7"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(0,245,212,.15), rgba(43,134,197,.15))', color: '#00F5D4' }}>
                <i className={`fas ${r.icon}`} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
              <p className="text-sm leading-[1.7]" style={{ color: 'rgba(255,255,255,.55)' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}