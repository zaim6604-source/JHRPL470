import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const chips = [
  'Buner-Based Agent',
  'Overseas Jobs Expert',
  'Personal Guidance',
  'Direct Employer Contact',
  'End-to-End Support',
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="blob blob-mulberry hidden lg:block" style={{ width: 300, height: 300, top: '-10%', right: '-8%', opacity: 0.1 }} />
      <div className="blob blob-blue hidden lg:block" style={{ width: 250, height: 250, bottom: '-10%', left: '-5%', opacity: 0.1 }} />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal"><SectionHeader tag="WHO WE ARE" title="About Zahid Buneri" /></div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white"
                style={{ boxShadow: '0 20px 60px rgba(196,69,105,0.15)' }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop"
                  alt="Zahid Buneri"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80'; }}
                />
              </div>
              <div className="floating-3 absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-2xl"
                style={{ boxShadow: '0 20px 60px rgba(196,69,105,0.15)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white"
                  style={{ background: 'var(--color-primary)' }}>
                  <i className="fas fa-user-tie" />
                </div>
                <div>
                  <strong className="block text-sm text-[var(--color-ink)]">Local Agent</strong>
                  <span className="text-xs" style={{ color: 'var(--color-cta)' }}>Cheena Kalay, Buner</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="text-base leading-[1.85] mb-4" style={{ color: '#444' }}>
              <strong>Zahid Buneri</strong> is a trusted overseas recruiting agent based in <strong>Cheena Kalay, Buner, KPK, Pakistan</strong>.
              With years of hands-on experience, I help local workers find honest, well-paying jobs with verified employers across the Gulf and Europe.
            </p>
            <p className="text-sm leading-[1.8] mb-7" style={{ color: '#777' }}>
              My mission is simple: provide personal, transparent guidance from the first conversation to the day you depart. I handle every step — documentation, visa coordination, medical checks, and pre-departure briefing — so you can focus on preparing for your new life abroad.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map((t, i) => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? 'var(--color-background)' : 'rgba(161,196,253,0.2)',
                    color: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-highlight)',
                  }}>
                  <i className="fas fa-check-circle" />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-4 rounded-xl p-5"
              style={{ background: 'var(--color-background)', border: '1px solid rgba(196,69,105,0.1)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                style={{ background: 'var(--color-primary)' }}>
                <i className="fas fa-map-marker-alt text-sm" />
              </div>
              <div>
                <strong className="block text-sm text-[var(--color-ink)] mb-0.5">Location</strong>
                <span className="text-sm" style={{ color: '#666' }}>Cheena Kalay, Buner, KPK, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
