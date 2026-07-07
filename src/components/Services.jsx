import { useEffect, useRef } from 'react';
import { site } from '../data/beaconData';

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .sv-section { background:var(--alt-section, #F0F8FF); padding:96px 24px; }
        .sv-inner { max-width:1200px; margin:0 auto; }
        .sv-title { font-weight:900; font-size:clamp(30px,4vw,46px); color:var(--ink, #062A45); margin-bottom:16px;font-family:'Poppins',sans-serif; }
        .sv-honeycomb { display:flex;flex-wrap:wrap;justify-content:center;gap:20px; }
        .sv-hex { width:270px;min-height:250px;padding:32px 24px;border-radius:20px;position:relative;cursor:pointer;transition:all .35s ease;display:flex;flex-direction:column;align-items:center;text-align:center;overflow:hidden; }
        .sv-hex:hover { transform:translateY(-8px) scale(1.02);box-shadow:0 20px 48px rgba(0,0,0,.12); }
        .sv-hex-icon { width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px;flex-shrink:0; }
        .sv-hex-title { font-weight:800;font-size:15px;margin-bottom:10px;font-family:'Poppins',sans-serif;line-height:1.3; }
        .sv-hex-desc { font-size:13px;line-height:1.7;opacity:0;max-height:0;transition:all .35s ease; }
        .sv-hex:hover .sv-hex-desc { opacity:1;max-height:120px; }
        .sv-hex:hover .sv-hex-icon { transform:scale(1.1); }
        @media(max-width:640px){ .sv-hex{width:100%;max-width:340px;min-height:auto;padding:24px 20px;} }
      `}</style>

      <section id="services" className="sv-section" ref={ref}>
        <div className="sv-inner">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />
              OUR SERVICES
            </div>
            <h2 className="sv-title">
              Comprehensive{' '}
              <span style={{color:'var(--color-primary, #0496FF)'}}>HR & Recruitment</span>
            </h2>
            <p style={{ color: 'var(--ink-light, #4A5E7A)', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              From job placement to travel support — we cover every aspect of overseas employment with care and professionalism.
            </p>
          </div>

          {/* Honeycomb grid */}
          <div className="sv-honeycomb">
            {site.services.map((s, i) => (
              <div
                key={i}
                className="sv-hex reveal"
                style={{ transitionDelay: `${(i % 4) * 0.08}s`, background: `${s.color}12`, border: `1.5px solid ${s.color}30` }}
              >
                <div className="sv-hex-icon" style={{ background: `${s.color}20`, color: s.color }}>
                  <i className={s.icon}></i>
                </div>
                <div className="sv-hex-title" style={{ color: 'var(--ink, #062A45)' }}>{s.title}</div>
                <div className="sv-hex-desc" style={{ color: 'var(--ink-light, #4A5E7A)' }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 56 }} className="reveal">
            <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" style={{
              display:'inline-flex',alignItems:'center',gap:10,
              background:'var(--color-cta, #FB5607)',color:'#fff',
              fontWeight:800,fontSize:15,padding:'14px 32px',
              borderRadius:999,border:'none',cursor:'pointer',
              textDecoration:'none',fontFamily:'Inter,sans-serif',
              boxShadow:'0 4px 20px rgba(251,86,7,.35)',
              transition:'transform .25s,box-shadow .25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(251,86,7,.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              <i className="fa-brands fa-whatsapp"></i> Apply for Overseas Employment
            </a>
          </div>

        </div>
      </section>
    </>
  );
}