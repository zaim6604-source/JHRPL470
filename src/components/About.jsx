import { useEffect, useRef } from 'react';
import { site } from '../data/aleshahData';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ab-section { background:var(--white);padding:96px 24px; }
        .ab-inner { max-width:1200px;margin:0 auto; }
        .ab-grid { display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center; }
        @media(max-width:900px){ .ab-grid{grid-template-columns:1fr;gap:40px} }
        .ab-img { width:100%;height:480px;object-fit:cover;border-radius:24px;display:block;border:1px solid var(--card-border);box-shadow:0 4px 20px rgba(0,0,0,.04); }
        .ab-img-wrap { position:relative; }
        .ab-img-badge { position:absolute;background:var(--white);border:1px solid rgba(255,32,110,.15);border-radius:16px;padding:14px 20px;box-shadow:0 8px 32px rgba(0,0,0,.06); }
        .ab-badge-n { font-weight:900;font-size:24px;color:var(--color-primary);line-height:1;font-family:'Plus Jakarta Sans',sans-serif; }
        .ab-badge-l { font-size:12px;color:var(--ink-light);font-weight:600;margin-top:3px; }
        .ab-title { font-weight:900;font-size:clamp(26px,3.2vw,38px);color:var(--ink);margin-bottom:16px;font-family:'Plus Jakarta Sans',sans-serif; }
        .ab-body { font-size:15px;line-height:1.8;color:var(--ink-light);margin-bottom:14px; }
        .ab-chips { display:flex;flex-wrap:wrap;gap:10px;margin-top:24px; }
        .ab-chip { display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:999px;font-size:13px;font-weight:700;background:rgba(255,32,110,.08);border:1px solid rgba(255,32,110,.15);color:var(--ink); }
      `}</style>

      <section id="about" className="ab-section" ref={ref}>
        <div className="ab-inner">
          <div style={{textAlign:'center',marginBottom:56}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />WHO WE ARE
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(30px,4vw,46px)',color:'var(--ink)',marginBottom:16}}>
              About <span style={{color:'var(--color-primary)'}}>Al Eshah International</span>
            </h2>
            <p style={{color:'var(--ink-light)',fontSize:16,maxWidth:560,margin:'0 auto',lineHeight:1.7}}>
              A government-licensed recruiting and overseas employment agency based on Commissioner Road, Sialkot — connecting talent with global opportunities.
            </p>
          </div>

          <div className="ab-grid">
            <div className="ab-img-wrap reveal-l">
              <img src="/images/hero-2.jpg" alt="Al Eshah office" className="ab-img" />
              <div className="ab-img-badge float" style={{top:-16,right:-16}}>
                <div className="ab-badge-n">2197</div>
                <div className="ab-badge-l">License / SKT</div>
              </div>
              <div className="ab-img-badge float" style={{bottom:-16,left:-16,animationDelay:'2s'}}>
                <div className="ab-badge-n">Commissioner</div>
                <div className="ab-badge-l">Road, Sialkot</div>
              </div>
            </div>

            <div className="reveal-r">
              <div className="section-pill" style={{borderColor:'rgba(65,234,212,.25)',color:'var(--color-accent)'}}>
                <span className="pill-dot" style={{background:'var(--color-accent)'}} />
                Commissioner Road, Sialkot — Punjab
              </div>
              <h3 className="ab-title">
                Trusted Partner for <span style={{color:'var(--color-primary)'}}>Overseas Employment</span>
              </h3>
              <p className="ab-body">{site.about.para1}</p>
              <p className="ab-body">{site.about.para2}</p>
              <div className="ab-chips">
                {site.about.chips.map((c, i) => (
                  <span key={i} className="ab-chip">
                    <i className={c.icon} style={{color:'var(--color-primary)',fontSize:12}}></i>
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}