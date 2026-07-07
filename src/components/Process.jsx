import { useEffect, useRef } from 'react';
import { site } from '../data/aleshahData';

export default function Process() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pr-section { padding:96px 24px;position:relative;overflow:hidden; }
        .pr-inner { max-width:1200px;margin:0 auto;position:relative;z-index:10; }
        .pr-steps { display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;align-items:start; }
        @media(max-width:1024px){ .pr-steps{grid-template-columns:repeat(3,1fr);gap:16px} }
        @media(max-width:640px){ .pr-steps{grid-template-columns:1fr;max-width:400px;margin:0 auto} }
        .pr-step { text-align:center;padding:32px 16px;position:relative; }
        .pr-chevron { display:flex;align-items:center;position:absolute;right:-12px;top:50%;transform:translateY(-50%);color:var(--color-secondary);font-size:20px;opacity:.9;z-index:5; }
        @media(max-width:1024px){ .pr-chevron{display:none} }
        .pr-step-num { width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:20px;margin:0 auto 16px;box-shadow:0 4px 16px rgba(0,0,0,.15); }
        .pr-step-title { font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:15px;margin-bottom:8px; }
        .pr-step-desc { font-size:13px;line-height:1.6;opacity:.85; }
      `}</style>

      <section id="process" className="pr-section" ref={ref}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',transform:'skewY(-2deg)',transformOrigin:'top left',width:'100%',height:'120%',top:'-10%'}} />
        <div style={{position:'absolute',bottom:-2,left:0,right:0,zIndex:5}}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{width:'100%',height:'60px'}}>
            <path d="M0,30 C360,0 720,60 1440,20 L1440,60 L0,60 Z" fill="var(--color-background)"/>
          </svg>
        </div>

        <div className="pr-inner">
          <div style={{textAlign:'center',marginBottom:48}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px',background:'rgba(255,255,255,.15)',borderColor:'rgba(255,255,255,.3)',color:'#fff'}}>
              <span className="pill-dot" style={{background:'var(--color-secondary)'}} />HOW IT WORKS
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(28px,3.5vw,42px)',color:'#fff',marginBottom:14}}>
              Your Journey <span style={{color:'var(--color-secondary)'}}>Step by Step</span>
            </h2>
            <p style={{color:'rgba(255,255,255,.8)',fontSize:15,maxWidth:520,margin:'0 auto',lineHeight:1.7}}>
              From your first call to your departure — we guide you through every stage with clarity and care.
            </p>
          </div>

          <div className="pr-steps">
            {site.process.map((p, i) => (
              <div key={i} className="pr-step reveal" style={{transitionDelay:`${i*0.1}s`}}>
                {i < site.process.length - 1 && (
                  <div className="pr-chevron"><i className="fa-solid fa-chevron-right"></i></div>
                )}
                <div className="pr-step-num" style={{background:i%2===0?'var(--color-secondary)':'#fff',color:i%2===0?'var(--ink)':'var(--color-primary)'}}>
                  {p.num}
                </div>
                <div className="pr-step-title" style={{color:'#fff'}}>{p.title}</div>
                <div className="pr-step-desc" style={{color:'rgba(255,255,255,.8)'}}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}