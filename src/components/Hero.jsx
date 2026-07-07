import { useEffect, useRef } from 'react';
import { site } from '../data/beaconData';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll('.h-reveal').forEach((el, i) => {
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 140);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .h-reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
        .h-badge { display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.15);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:7px 18px;border-radius:999px; }
        .h-badge-dot { width:7px;height:7px;border-radius:50%;background:var(--color-accent, #FFBE0B);box-shadow:0 0 8px rgba(255,190,11,.5);animation:hPing 1.8s ease infinite; }
        @keyframes hPing { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.6);opacity:.4} }
        .h-stat-bar { display:grid;grid-template-columns:repeat(4,1fr);background:rgba(255,255,255,.88);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.2);border-radius:20px;box-shadow:0 4px 24px rgba(0,0,0,.1); }
        @media(max-width:640px) { .h-stat-bar{grid-template-columns:repeat(2,1fr)} }
        .h-stat { padding:22px 16px;text-align:center;border-right:1px solid rgba(0,0,0,.06); }
        .h-stat:last-child { border-right:none; }
        @media(max-width:640px){ .h-stat:nth-child(2){border-right:none} .h-stat:nth-child(3){border-right:1px solid rgba(0,0,0,.06)} }
        .h-stat-n { font-weight:900;font-family:'Poppins',sans-serif;font-size:clamp(22px,3vw,28px);color:var(--color-primary, #0496FF);text-shadow:0 0 20px rgba(4,150,255,.2); }
        .h-stat-l { font-size:12px;font-weight:500;color:var(--ink-light, #4A5E7A);margin-top:3px; }
        .h-btn-primary { display:inline-flex;align-items:center;gap:8px;background:var(--color-cta, #FB5607);color:#fff;font-weight:800;font-size:16px;padding:15px 32px;border-radius:12px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(251,86,7,.4);transition:transform .25s,box-shadow .25s;text-decoration:none;font-family:'Inter',sans-serif; }
        .h-btn-primary:hover { transform:translateY(-2px);box-shadow:0 8px 30px rgba(251,86,7,.5); }
        .h-btn-outline { display:inline-flex;align-items:center;gap:8px;background:transparent;color:#fff;font-weight:700;font-size:16px;padding:13px 30px;border-radius:12px;border:2px solid rgba(255,255,255,.5);cursor:pointer;transition:background .25s,border-color .25s,transform .25s;text-decoration:none;font-family:'Inter',sans-serif; }
        .h-btn-outline:hover { background:rgba(255,255,255,.1);border-color:#fff;transform:translateY(-2px); }
      `}</style>

      <section id="home" ref={ref} style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', padding: '120px 24px 40px',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90&auto=format&fit=crop"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(4,150,255,.85) 0%, rgba(255,190,11,.7) 100%)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 820, width: '100%', textAlign: 'center' }}>
          <div className="h-badge h-reveal" style={{ marginBottom: 28, display: 'inline-flex' }}>
            <span className="h-badge-dot" />
            Govt. Licensed OEP &mdash; License No. [Add License]
          </div>

          <h1 className="h-reveal" style={{
            fontWeight: 900, fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(38px,6.5vw,74px)',
            color: '#fff', lineHeight: 1.08, marginBottom: 20,
            transitionDelay: '.1s',
          }}>
            {site.headline}
          </h1>

          <p className="h-reveal" style={{
            fontSize: 'clamp(15px,1.8vw,19px)', color: 'rgba(255,255,255,.9)',
            lineHeight: 1.7, maxWidth: 650, margin: '0 auto 12px',
            transitionDelay: '.2s',
          }}>
            {site.subheadline}
          </p>

          <div className="h-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 60, transitionDelay: '.38s' }}>
            <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="h-btn-primary">
              <i className="fa-brands fa-whatsapp"></i> Apply Now
            </a>
            <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="h-btn-outline">
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          <div className="h-stat-bar h-reveal" style={{ transitionDelay: '.5s' }}>
            {site.stats.map((s, i) => (
              <div key={i} className="h-stat">
                <div className="h-stat-n">{s.n}</div>
                <div className="h-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}