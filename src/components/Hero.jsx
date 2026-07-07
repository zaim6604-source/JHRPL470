import { useEffect, useRef } from 'react';

const statChips = [
  { n: '500+', l: 'Workers Placed' },
  { n: '15+', l: 'Countries' },
  { n: '10+', l: 'Years Experience' },
  { n: '2199', l: 'License / DGK' },
];

export default function Hero() {
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const els = [h1Ref, subRef, ctaRef];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = 0;
        ref.current.style.transform = 'translateY(28px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            ref.current.style.opacity = 1;
            ref.current.style.transform = 'translateY(0)';
          }
        }, 200 + i * 150);
      }
    });
  }, []);

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(0,107,166,0.75) 0%, rgba(4,150,255,0.55) 50%, rgba(0,85,128,0.7) 100%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 4, width: '100%', maxWidth: 1100, margin: '0 auto', padding: '80px 24px 0' }}>
        {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid rgba(255,188,66,0.4)', paddingBottom: 12, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fas fa-globe-asia" style={{ color: '#FFBC42', fontSize: 16 }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.3px' }}>Qadir International</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#FFBC42', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>License 2199/DGK · Overseas Employment</div>
            </div>
          </div>
          <div style={{ border: '2px solid rgba(255,188,66,0.5)', borderRadius: 8, padding: '4px 12px', transform: 'rotate(3deg)' }}>
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 13, color: '#FFBC42', letterSpacing: '0.05em' }}>2199/DGK</span>
          </div>
        </div> */}

        <div ref={h1Ref} style={{ maxWidth: 760 }}>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 7vw, 68px)', color: '#fff', lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: 20 }}>
            Dependable Recruitment,<br /><span style={{ color: '#FFBC42' }}>Powered by Real Results</span>
          </h1>
          <p ref={subRef} style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: 600, marginBottom: 32 }}>
            Qadir International moves Dera Ghazi Khan's workers into secure Gulf and European jobs — licensed and thorough.
          </p>

          <div ref={ctaRef} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
            <a href="https://wa.me/923334857777?text=Hello%20Qadir%20International%2C%20I%20want%20to%20apply%20for%20a%20job." target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 700, color: '#fff', cursor: 'pointer', textDecoration: 'none', background: '#D81159', boxShadow: '0 4px 20px rgba(216,17,89,0.4)', transition: 'transform 0.25s, box-shadow 0.25s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(216,17,89,0.6)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(216,17,89,0.4)'; }}>
              <i className="fas fa-paper-plane" /> Apply Now
            </a>
            <a href="https://wa.me/923334857777" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 600, color: '#fff', cursor: 'pointer', textDecoration: 'none', background: 'transparent', border: '2px solid rgba(255,255,255,0.35)', transition: 'background 0.25s, border-color 0.25s, transform 0.25s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <i className="fab fa-whatsapp" /> WhatsApp
            </a>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,188,66,0.15)', border: '1px solid rgba(255,188,66,0.25)', borderRadius: 99, padding: '4px 14px', marginBottom: 32 }}>
            <i className="fas fa-certificate" style={{ color: '#FFBC42', fontSize: 11 }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: '#FFBC42', letterSpacing: '0.05em' }}>Government Licensed — 2199/DGK</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(16px, 3vw, 36px)', flexWrap: 'wrap', padding: '18px 28px', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16 }}>
          {statChips.map((s) => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(20px, 3vw, 28px)', color: '#fff', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => { const el = document.getElementById('about'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
        style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 5, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: 16, animation: 'floatY 2s ease-in-out infinite' }}>
        <i className="fas fa-chevron-down" />
      </button>
    </section>
  );
}
