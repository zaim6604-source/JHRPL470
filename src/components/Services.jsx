import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const services = [
  { icon: 'fa-plane-departure', title: 'Overseas Job Placement', desc: 'I connect you with verified employers across the Gulf and Europe, matching your skills to the right opportunity.', color: '#C44569' },
  { icon: 'fa-passport',        title: 'Visa Guidance',          desc: 'Step-by-step assistance with your visa application, documentation, and all related formalities.', color: '#9C2A52' },
  { icon: 'fa-file-alt',        title: 'Document Support',       desc: 'Help with attestation, certificates, and all paperwork required for overseas employment.', color: '#A1C4FD' },
  { icon: 'fa-stethoscope',     title: 'Medical & Trade Tests',  desc: 'Coordination of medical examinations and trade test preparations for your target country.', color: '#C44569' },
  { icon: 'fa-graduation-cap',  title: 'Pre-Departure Guidance', desc: 'Briefing on culture, work expectations, and travel tips to ensure a smooth transition abroad.', color: '#9C2A52' },
  { icon: 'fa-ticket-alt',      title: 'Air Ticketing Assistance',desc: 'Help with flight bookings and travel arrangements at competitive rates.', color: '#A1C4FD' },
  { icon: 'fa-shield-alt',      title: 'Employer Verification',  desc: 'I verify every employer to ensure they are legitimate and trustworthy before connecting you.', color: '#C44569' },
  { icon: 'fa-hard-hat',        title: 'Skilled & Unskilled Manpower', desc: 'Placement services for both skilled professionals and general workers across multiple sectors.', color: '#9C2A52' },
];

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fff 0%, var(--color-background) 30%, #fff 70%)' }}
      ref={ref}
    >
      <div className="blob blob-mulberry" style={{ width: 350, height: 350, top: '20%', right: '-10%', opacity: 0.1 }} />
      <div className="blob blob-blue" style={{ width: 300, height: 300, bottom: '10%', left: '-8%', opacity: 0.1 }} />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="HOW I HELP" title="My Services"
            sub="Standard overseas recruitment services tailored for workers from Buner and surrounding areas." />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i}
              className="reveal service-card rounded-[1.5rem] p-8 text-white"
              style={{
                background: s.color,
                transitionDelay: `${(i % 4) * 0.06}s`,
              }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 bg-white/20">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{s.title}</h3>
              <p className="text-sm leading-[1.7] text-white/80 mb-4">{s.desc}</p>
              <a href="#contact" onClick={e => scrollTo(e, '#contact')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-all duration-200 hover:gap-3">
                Enquire <i className="fas fa-arrow-right text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
