import { useEffect, useRef } from 'react';
import { site } from '../data/beaconData';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ab-section { background:#fff; padding:96px 24px; }
        .ab-inner { max-width:1200px; margin:0 auto; }
        .ab-header { text-align:center; margin-bottom:64px; }
        .ab-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){ .ab-grid{grid-template-columns:1fr; gap:48px} }
        .ab-img-wrap { position:relative; }
        .ab-img { width:100%; height:460px; object-fit:cover; border-radius:24px; display:block; border:1px solid var(--card-border, #D0E4F5); box-shadow:0 4px 20px rgba(0,0,0,.04); }
        .ab-img-badge { position:absolute; background:#fff; border:1px solid rgba(4,150,255,.2); border-radius:16px; padding:14px 20px; box-shadow:0 8px 32px rgba(0,0,0,.06); }
        .ab-badge-n { font-weight:900; font-size:26px; color:var(--color-primary, #0496FF); line-height:1; }
        .ab-badge-l { font-size:12px; color:var(--ink-light, #4A5E7A); font-weight:600; margin-top:3px; }
        .ab-title { font-weight:900; font-size:clamp(26px,3.2vw,38px); color:var(--ink, #062A45); margin-bottom:16px;font-family:'Poppins',sans-serif; }
        .ab-body  { font-size:15px; line-height:1.8; color:var(--ink-light, #4A5E7A); margin-bottom:14px; }
        .ab-addr-row { display:flex; align-items:flex-start; gap:12px; padding:14px 18px; background:var(--color-background, #E8F5FF); border:1px solid rgba(4,150,255,.15); border-radius:14px; margin-bottom:12px; }
        .ab-addr-icon { width:38px; height:38px; border-radius:10px; background:rgba(4,150,255,.1); display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .ab-addr-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--color-primary, #0496FF); margin-bottom:3px; }
        .ab-addr-value { font-size:14px; font-weight:600; color:var(--ink, #062A45); line-height:1.5; }
        .ab-chips { display:flex; flex-wrap:wrap; gap:10px; margin-top:24px; }
        .ab-chip { display:inline-flex; align-items:center; gap:8px; background:rgba(4,150,255,.08); border:1px solid rgba(4,150,255,.2); border-radius:999px; padding:8px 16px; font-size:13px; font-weight:600; color:var(--color-primary, #0496FF); }
      `}</style>

      <section id="about" className="ab-section" ref={ref}>
        <div className="ab-inner">

          {/* Header */}
          <div className="ab-header reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />
              WHO WE ARE
            </div>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(30px,4vw,46px)', color: 'var(--ink, #062A45)', marginBottom: 16, fontFamily: "'Poppins', sans-serif" }}>
              About{' '}
              <span style={{color: 'var(--color-primary, #0496FF)'}}>Beacon Bright</span>
            </h2>
            <p style={{ color: 'var(--ink-light, #4A5E7A)', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              {site.about.title}
            </p>
          </div>

          {/* Two column */}
          <div className="ab-grid">
            {/* Image */}
            <div className="ab-img-wrap reveal-l">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=90&auto=format&fit=crop"
                alt="Beacon Bright office"
                className="ab-img"
              />
              <div className="ab-img-badge float" style={{ top: -20, right: -20 }}>
                <div className="ab-badge-n">9+</div>
                <div className="ab-badge-l">Countries</div>
              </div>
              <div className="ab-img-badge float" style={{ bottom: -20, left: -20, animationDelay: '2s' }}>
                <div className="ab-badge-n">2K+</div>
                <div className="ab-badge-l">Placements</div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal-r">
              <div className="section-pill" style={{ marginBottom: 18, borderColor: 'rgba(4,150,255,.25)', color: 'var(--color-primary, #0496FF)' }}>
                <span className="pill-dot" />
                Bypass Road, Baghdada — Mardan
              </div>
              <h3 className="ab-title">
                Trusted Partner for<br />
                <span style={{ color: 'var(--color-primary, #0496FF)' }}>Overseas Employment & HR</span>
              </h3>
              <p className="ab-body">{site.about.para1}</p>
              <p className="ab-body">{site.about.para2}</p>

              {/* Chips */}
              <div className="ab-chips">
                {site.about.chips.map((c, i) => (
                  <span key={i} className="ab-chip">
                    <i className={c.icon}></i> {c.label}
                  </span>
                ))}
              </div>

              {/* Address detail */}
              <div style={{ marginTop: 28 }}>
                <div className="ab-addr-row">
                  <div className="ab-addr-icon">
                    <i className="fa-solid fa-location-dot" style={{color:'var(--color-primary, #0496FF)',fontSize:16}}></i>
                  </div>
                  <div>
                    <div className="ab-addr-label">Office Address</div>
                    <div className="ab-addr-value">{site.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}