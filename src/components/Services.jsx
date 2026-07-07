import { useEffect, useRef, useState } from 'react';
import { site } from '../data/aleshahData';

const SVC_COLORS = ['#FF206E','#FBFF12','#41EAD4','#D4005A','#FF206E','#41EAD4','#FBFF12','#D4005A'];

function rgbaString(hex, alpha) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function Services() {
  const ref = useRef(null);
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const toggleFlip = (i) => setFlipped(p => ({...p, [i]: !p[i]}));

  return (
    <>
      <style>{`
        .sv-section { background:var(--color-background);padding:96px 24px; }
        .sv-inner { max-width:1200px;margin:0 auto; }
        .sv-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:20px; }
        @media(max-width:1024px){ .sv-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:560px){ .sv-grid{grid-template-columns:1fr;max-width:360px;margin:0 auto} }
        .flip-card { aspect-ratio:3/4;perspective:1000px;cursor:pointer; }
        .flip-inner { position:relative;width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d;border-radius:20px; }
        .flip-inner.flipped { transform:rotateY(180deg); }
        .flip-front, .flip-back { position:absolute;inset:0;border-radius:20px;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 20px;text-align:center; }
        .flip-front { border:1.5px solid var(--card-border); }
        .flip-back { transform:rotateY(180deg);padding:24px 18px;justify-content:center; }
        .flip-front-icon { width:64px;height:64px;border-radius:18px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:28px; }
        .flip-front-title { font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:15px;color:var(--ink);line-height:1.3; }
        .flip-back-desc { font-size:13px;line-height:1.7; }
      `}</style>

      <section id="services" className="sv-section" ref={ref}>
        <div className="sv-inner">
          <div style={{textAlign:'center',marginBottom:56}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px',borderColor:'rgba(65,234,212,.25)',color:'var(--color-accent)'}}>
              <span className="pill-dot" style={{background:'var(--color-accent)'}} />
              OUR SERVICES
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(30px,4vw,46px)',color:'var(--ink)',marginBottom:16}}>
              What We <span style={{color:'var(--color-primary)'}}>Offer</span>
            </h2>
            <p style={{color:'var(--ink-light)',fontSize:16,maxWidth:520,margin:'0 auto',lineHeight:1.7}}>
              Comprehensive recruitment services tailored to connect Pakistani talent with global opportunities.
            </p>
          </div>

          <div className="sv-grid">
            {site.services.map((s, i) => (
              <div key={i} className="flip-card reveal" style={{transitionDelay:`${i*0.08}s`}} onClick={() => toggleFlip(i)}>
                <div className={`flip-inner${flipped[i] ? ' flipped' : ''}`}>
                  <div className="flip-front" style={{background:SVC_COLORS[i],borderColor:SVC_COLORS[i]}}>
                    <div className="flip-front-icon" style={{background:'rgba(255,255,255,.2)',color:'#fff'}}>
                      <i className={s.icon}></i>
                    </div>
                    <div className="flip-front-title" style={{color:'#fff'}}>{s.title}</div>
                    <div style={{marginTop:12,color:'rgba(255,255,255,.7)',fontSize:11,fontWeight:600,letterSpacing:'.05em'}}>
                      <i className="fa-solid fa-rotate"></i> Tap to flip
                    </div>
                  </div>
                  <div className="flip-back" style={{background:'var(--white)',border:'1.5px solid ' + SVC_COLORS[i],borderTop:`4px solid ${SVC_COLORS[i]}`}}>
                    <div style={{width:44,height:44,borderRadius:12,background:rgbaString(SVC_COLORS[i],.1),display:'flex',alignItems:'center',justifyContent:'center',marginBottom:14,fontSize:20,color:SVC_COLORS[i]}}>
                      <i className={s.icon}></i>
                    </div>
                    <div className="flip-front-title" style={{fontSize:14,marginBottom:10}}>{s.title}</div>
                    <div className="flip-back-desc" style={{color:'var(--ink-light)'}}>{s.desc}</div>
                    <div style={{marginTop:12,color:SVC_COLORS[i],fontSize:11,fontWeight:600}}>
                      <i className="fa-solid fa-rotate"></i> Tap to flip back
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}