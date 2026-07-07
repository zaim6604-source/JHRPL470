import { useEffect, useRef, useState } from 'react';
import { site } from '../data/aleshahData';

const FALLBACK = 'https://via.placeholder.com/600x400/FFF8E0/FF206E?text=Al+Eshah';

export default function Countries() {
  const ref = useRef(null);
  const [imgErrs, setImgErrs] = useState({});
  const h = (k) => setImgErrs(p => ({...p, [k]: true}));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .co-section { background:var(--white);padding:96px 24px; }
        .co-inner { max-width:1200px;margin:0 auto; }
        .co-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px; }
        @media(max-width:900px){ .co-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:480px){ .co-grid{grid-template-columns:1fr} }
        .co-card { border-radius:16px;overflow:hidden;border:1px solid rgba(255,32,110,.12);transition:transform .35s,box-shadow .35s;background:var(--white); }
        .co-card:hover { transform:translateY(-5px);box-shadow:0 12px 32px rgba(255,32,110,.1); }
        .co-card-img { width:100%;height:180px;object-fit:cover;display:block;transition:transform .5s; }
        .co-card:hover .co-card-img { transform:scale(1.05); }
        .co-card-img-wrap { overflow:hidden;position:relative; }
        .co-card-overlay { position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,.5),transparent);padding:12px 16px; }
        .co-card-flag { font-size:28px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3)); }
        .co-chip-grid { display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:32px; }
        .co-chip { display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;font-size:12px;font-weight:700;transition:transform .2s;cursor:default;border:1px solid rgba(255,32,110,.1); }
        .co-chip:hover { transform:translateY(-2px); }
      `}</style>

      <section id="countries" className="co-section" ref={ref}>
        <div className="co-inner">
          <div style={{textAlign:'center',marginBottom:48}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />DESTINATIONS
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(28px,3.5vw,42px)',color:'var(--ink)',marginBottom:14}}>
              Countries We <span style={{color:'var(--color-primary)'}}>Serve</span>
            </h2>
            <p style={{color:'var(--ink-light)',fontSize:15,maxWidth:520,margin:'0 auto',lineHeight:1.7}}>
              Trusted placements across the Gulf, Europe, and Asia — verified employers in every destination.
            </p>
          </div>

          <div className="co-grid">
            {site.countries.map((c, i) => (
              <div key={i} className="co-card reveal" style={{transitionDelay:`${(i%3)*0.1}s`}}>
                <div className="co-card-img-wrap">
                  <img src={imgErrs[c.name] ? FALLBACK : c.img} alt={c.name} className="co-card-img" onError={() => h(c.name)} loading="lazy" />
                  <div className="co-card-overlay">
                    <span className="co-card-flag">{c.flag}</span>
                  </div>
                </div>
                <div style={{padding:'16px 18px 18px'}}>
                  <div style={{fontWeight:800,fontSize:17,color:'var(--ink)',marginBottom:6,fontFamily:'Plus Jakarta Sans,sans-serif'}}>{c.name}</div>
                  <div style={{fontSize:13,color:'var(--ink-light)',lineHeight:1.5}}>
                    <i className="fa-solid fa-briefcase" style={{marginRight:6,color:'var(--color-primary)',fontSize:11}}></i>
                    {c.roles}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="co-chip-grid reveal" style={{transitionDelay:'.3s'}}>
            {site.countryChips.map((c, i) => (
              <span key={i} className="co-chip" style={{
                background: [
                  'rgba(255,32,110,.1)','rgba(251,255,18,.15)','rgba(65,234,212,.1)','rgba(212,0,90,.08)',
                  'rgba(255,32,110,.06)','rgba(65,234,212,.08)','rgba(251,255,18,.1)','rgba(212,0,90,.06)',
                  'rgba(255,32,110,.08)','rgba(65,234,212,.06)','rgba(251,255,18,.12)','rgba(212,0,90,.1)',
                ][i] || 'rgba(255,32,110,.06)',
              }}>{c}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}