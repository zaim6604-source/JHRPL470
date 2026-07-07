import { useEffect, useRef, useState } from 'react';
import { site } from '../data/balochData';

const FALLBACK = '/images/fallback.svg';

export default function ProcessTestimonials() {
  const ref = useRef(null);
  const [galleryErrs, setGalleryErrs] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <style>{`
        .pr-section{padding:96px 24px;position:relative;overflow:hidden}
        .pr-inner{max-width:1200px;margin:0 auto;position:relative;z-index:10}
        .pr-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;position:relative}
        @media(max-width:1024px){.pr-steps{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:640px){.pr-steps{grid-template-columns:1fr;max-width:400px;margin:0 auto}}
        .pr-step{text-align:center;padding:32px 16px;border-radius:16px;position:relative}
        .pr-step-num{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:20px;margin:0 auto 16px;box-shadow:0 4px 16px rgba(0,0,0,.15)}
        .pr-step-title{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:15px;margin-bottom:8px}
        .pr-step-desc{font-size:13px;line-height:1.6;opacity:.85}
        .test-section{background:#fff;padding:80px 24px}
        .test-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
        @media(max-width:768px){.test-grid{grid-template-columns:1fr}}
        .test-card{background:var(--color-background);border:1px solid rgba(224,33,138,.1);border-radius:16px;padding:28px;transition:transform .3s}
        .test-card:hover{transform:translateY(-4px)}
        .test-stars{display:flex;gap:3px;margin-bottom:12px}
        .test-stars i{color:var(--color-cta);font-size:14px}
        .test-quote{font-size:14px;line-height:1.7;color:var(--ink-light);margin-bottom:16px;font-style:italic}
        .test-author{display:flex;align-items:center;gap:12px}
        .test-avatar{width:40px;height:40px;border-radius:50%;background:var(--color-primary);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:14px;flex-shrink:0}
        .test-name{font-weight:700;font-size:14px;color:var(--ink)}
        .test-role{font-size:12px;color:var(--ink-light);opacity:.7}
        .gallery-section{background:var(--color-background);padding:60px 24px}
        .gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        @media(max-width:768px){.gallery-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:480px){.gallery-grid{grid-template-columns:1fr}}
        .gallery-item{border-radius:14px;overflow:hidden;position:relative;cursor:pointer}
        .gallery-item img{width:100%;height:220px;object-fit:cover;display:block;transition:transform .5s}
        .gallery-item:hover img{transform:scale(1.08)}
      `}</style>

      <section id="process" className="pr-section">
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg, var(--color-primary) 0%, var(--color-cta) 100%)',transform:'skewY(-3deg)',transformOrigin:'top left',width:'100%',height:'120%',top:'-10%'}} />
        <div className="wave-divider" style={{position:'absolute',bottom:-2,left:0,right:0,zIndex:5}}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{width:'100%',height:'100%'}}>
            <path d="M0,30 C360,0 720,60 1440,20 L1440,60 L0,60 Z" fill="#fff"/>
          </svg>
        </div>
        <div className="pr-inner">
          <div style={{textAlign:'center',marginBottom:48}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px',background:'rgba(255,255,255,.15)',borderColor:'rgba(255,255,255,.3)',color:'#fff'}}>
              <span className="pill-dot" style={{background:'var(--color-cta)'}} />How It Works
            </div>
            <h2 style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontWeight:900,fontSize:'clamp(28px,3.5vw,42px)',color:'#fff',marginBottom:14}}>
              Your Journey <span style={{color:'var(--color-cta)'}}>Step by Step</span>
            </h2>
            <p style={{color:'rgba(255,255,255,.8)',fontSize:15,maxWidth:520,margin:'0 auto',lineHeight:1.7}}>From your first call to your departure — we guide you through every stage with clarity and care.</p>
          </div>
          <div className="pr-steps">
            {site.process.map((p,i)=>(
              <div key={i} className="pr-step reveal" style={{transitionDelay:`${i*0.1}s`,background:'rgba(255,255,255,.12)',backdropFilter:'blur(4px)'}}>
                <div className="pr-step-num" style={{background:i%2===0?'var(--color-cta)':'#fff',color:i%2===0?'var(--ink)':'var(--color-primary)'}}>{p.num}</div>
                <div className="pr-step-title" style={{color:'#fff'}}>{p.title}</div>
                <div className="pr-step-desc" style={{color:'rgba(255,255,255,.8)'}}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="test-section">
        <div className="sv-inner" style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:48}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}><span className="pill-dot" />Success Stories</div>
            <h2 style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontWeight:900,fontSize:'clamp(28px,3.5vw,42px)',color:'var(--ink)',marginBottom:14}}>
              What Our <span style={{color:'var(--color-primary)'}}>Workers Say</span>
            </h2>
            <p style={{color:'var(--ink-light)',fontSize:15,maxWidth:520,margin:'0 auto',lineHeight:1.7}}>Real stories from real people we've helped place in jobs abroad.</p>
          </div>
          <div className="test-grid">
            {site.testimonials.map((t,i)=>(
              <div key={i} className="test-card reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <div className="test-stars">{[...Array(t.stars)].map((_,j)=>(<i key={j} className="fa-solid fa-star"></i>))}</div>
                <div className="test-quote">&ldquo;{t.quote}&rdquo;</div>
                <div className="test-author">
                  <div className="test-avatar">{t.name[0]}</div>
                  <div><div className="test-name">{t.name}</div><div className="test-role">{t.role} — {t.dest}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="sv-inner" style={{maxWidth:1200,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:36}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}><span className="pill-dot" />Office & Travel</div>
            <h2 style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontWeight:900,fontSize:'clamp(24px,3vw,36px)',color:'var(--ink)',marginBottom:8}}>
              Our <span style={{color:'var(--color-primary)'}}>Gallery</span>
            </h2>
          </div>
          <div className="gallery-grid">
            {site.gallery.map((url,i)=>(
              <div key={i} className="gallery-item reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <img src={galleryErrs[i]?FALLBACK:url} alt={`Gallery ${i+1}`} onError={()=>setGalleryErrs(p=>({...p,[i]:true}))} loading="lazy"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}