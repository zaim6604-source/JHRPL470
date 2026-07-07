import { useEffect } from 'react';

const steps = [
  { num: 1, title: 'Free Consultation', desc: 'Contact us via phone, WhatsApp, or visit our D.G. Khan office for a free career discussion.', icon: 'fa-comments' },
  { num: 2, title: 'Documentation & Visa', desc: 'Submit your documents. We handle attestation, application, and visa processing on your behalf.', icon: 'fa-file-lines' },
  { num: 3, title: 'Medical & Trade Test', desc: 'We coordinate medical exams and trade tests required by your destination country.', icon: 'fa-stethoscope' },
  { num: 4, title: 'Job Confirmation', desc: 'Receive your official job offer and contract from our verified overseas employer partners.', icon: 'fa-file-signature' },
  { num: 5, title: 'Departure & Settlement', desc: 'Flight booking, pre-departure briefing, and smooth handover at your new workplace.', icon: 'fa-plane-departure' },
];

export default function Process() {
  useEffect(() => {
    const els = document.querySelectorAll('.pr-reveal');
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); } }); },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-[clamp(80px,10vw,120px)] px-5 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #006BA6 0%, #005580 50%, #0496FF 100%)' }}>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="pr-reveal reveal text-center mb-16">
          <span className="section-pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#E6F3FB', borderColor: 'rgba(230,243,251,0.3)' }}>
            <i className="fas fa-route" style={{ fontSize: 10 }} /> HOW IT WORKS
          </span>
          <h2 className="font-display font-extrabold mt-4" style={{ fontSize: 'clamp(28px,5vw,44px)', color: '#fff', letterSpacing: '-0.8px' }}>
            Our <span style={{ color: '#FFBC42' }}>Process</span>
          </h2>
        </div>

        {/* Progress-tracker desktop */}
        <div className="hidden md:block" style={{ position: 'relative', padding: '0 40px' }}>
          {/* Track line */}
          <div style={{ position: 'absolute', top: 36, left: '8%', right: '8%', height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 4 }}>
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #FFBC42, #0496FF)', borderRadius: 4, position: 'relative' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {steps.map((s, i) => (
              <div key={s.num} className="pr-reveal reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '18%', transitionDelay: `${i * 0.1}s` }}>
                {/* Numbered pin */}
                <div style={{ width: 72, height: 72, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, position: 'relative', zIndex: 2, background: 'linear-gradient(135deg, #FFBC42, #0496FF)', boxShadow: '0 8px 24px rgba(255,188,66,0.4)' }}>
                  <i className={`fas ${s.icon}`} style={{ color: '#fff', fontSize: 22 }} />
                </div>

                {/* Card alternates above/below */}
                <div style={{
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '16px 12px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(4px)',
                  width: '100%',
                  marginTop: i % 2 === 0 ? 0 : 'auto',
                  marginBottom: i % 2 === 0 ? 'auto' : 0,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 6 }}>
                    <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 14, color: '#FFBC42' }}>Step {s.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-white mb-2">{s.title}</h3>
                  <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="pr-reveal reveal flex items-start gap-4" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ background: 'linear-gradient(135deg, #FFBC42, #0496FF)', boxShadow: '0 8px 24px rgba(255,188,66,0.4)' }}>
                <i className={`fas ${s.icon}`} style={{ color: '#fff', fontSize: 16 }} />
              </div>
              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 16, padding: '14px 16px', border: '1px solid rgba(255,255,255,0.1)', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 11, color: '#FFBC42' }}>STEP {s.num}</span>
                </div>
                <h3 className="font-display font-bold text-base text-white mb-1">{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
