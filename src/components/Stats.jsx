import { useEffect, useRef } from 'react';
import { site } from '../data/beaconData';

export default function Stats() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.3 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .st-section { background:var(--color-primary, #0496FF);padding:48px 24px; }
        .st-inner { max-width:1000px;margin:0 auto; }
        .st-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:0; }
        @media(max-width:640px){ .st-grid{grid-template-columns:repeat(2,1fr);gap:20px} }
        .st-item { text-align:center;padding:0 16px; }
        .st-item:not(:last-child) { border-right:1px solid rgba(255,255,255,.2); }
        @media(max-width:640px){ .st-item:nth-child(2){border-right:none} .st-item:nth-child(3){border-right:1px solid rgba(255,255,255,.2)} }
        .st-num { font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(28px,3.5vw,40px);color:var(--color-secondary, #5FB8FF);line-height:1;margin-bottom:4px; }
        .st-label { font-size:13px;font-weight:600;color:rgba(255,255,255,.85);letter-spacing:.02em; }
      `}</style>

      <div className="st-section" ref={ref}>
        <div className="st-inner">
          <div className="st-grid reveal">
            {site.stats.map((s, i) => (
              <div key={i} className="st-item">
                <div className="st-num">{s.n}</div>
                <div className="st-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}