import { useEffect, useRef } from 'react';
import { site } from '../data/aleshahData';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll('.h-reveal').forEach((el, i) => {
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .h-reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
        .bento-grid { display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;max-width:1200px;margin:0 auto; }
        @media(max-width:900px){ .bento-grid{grid-template-columns:1fr 1fr} }
        @media(max-width:560px){ .bento-grid{grid-template-columns:1fr} }
        .bento-tile { border-radius:20px;overflow:hidden;position:relative;transition:transform .3s,box-shadow .3s; }
        .bento-tile:hover { transform:translateY(-4px);box-shadow:0 12px 40px rgba(255,32,110,.1); }
        .bento-photo { width:100%;height:100%;object-fit:cover;display:block; }
        .bento-photo-wrap { overflow:hidden; }
        .bento-photo-wrap img { transition:transform .6s; }
        .bento-photo-wrap:hover img { transform:scale(1.06); }
      `}</style>

      <section id="home" ref={ref} style={{padding:'40px 24px 60px',position:'relative',overflow:'hidden',marginTop:76}}>
        <div className="bento-grid">
          {/* Headline tile - spans 2 cols */}
          <div className="bento-tile h-reveal" style={{gridColumn:'span 2',background:'var(--white)',border:'1px solid var(--card-border)',padding:'36px 32px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div className="section-pill" style={{marginBottom:18}}>
              <span className="pill-dot" />
              Al Eshah International · License 2197/SKT
            </div>
            <h1 style={{fontWeight:900,fontSize:'clamp(32px,5vw,56px)',color:'var(--ink)',lineHeight:1.08,marginBottom:16}}>
              {site.headline}
            </h1>
            <p style={{fontSize:'clamp(14px,1.6vw,17px)',color:'var(--ink-light)',lineHeight:1.7,maxWidth:560}}>
              {site.subheadline}
            </p>
          </div>

          {/* Photo tile 1 */}
          <div className="bento-tile bento-photo-wrap h-reveal" style={{transitionDelay:'.1s',minHeight:240}}>
            <img src="/images/about.jpg" alt="Office" className="bento-photo" style={{height:'100%'}} />
          </div>

          {/* Stat tile */}
          <div className="bento-tile h-reveal" style={{transitionDelay:'.2s',background:'var(--color-primary)',padding:'28px 24px',display:'flex',flexDirection:'column',justifyContent:'center',gap:24}}>
            {site.stats.slice(0,3).map((s, i) => (
              <div key={i} style={{textAlign:'center'}}>
                <div style={{fontWeight:900,fontSize:'clamp(22px,2.5vw,28px)',color:'var(--color-secondary)',lineHeight:1,fontFamily:'Plus Jakarta Sans,sans-serif'}}>{s.n}</div>
                <div style={{fontSize:12,fontWeight:600,color:'rgba(255,255,255,.8)',marginTop:4}}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Photo tile 2 */}
          <div className="bento-tile bento-photo-wrap h-reveal" style={{transitionDelay:'.15s',minHeight:200}}>
            <img src="/images/gallery-1.jpg" alt="Team" className="bento-photo" style={{height:'100%'}} />
          </div>

          {/* CTA tile - Apply */}
          <div className="bento-tile h-reveal" style={{transitionDelay:'.25s',background:'var(--color-cta)',padding:'24px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12}}>
            <button onClick={() => window.open(site.whatsappLink, '_blank')} style={{
              display:'inline-flex',alignItems:'center',gap:10,background:'var(--ink)',color:'#fff',
              fontWeight:800,fontSize:15,padding:'14px 28px',borderRadius:12,border:'none',cursor:'pointer',
              transition:'transform .25s',fontFamily:'Inter,sans-serif',
            }} onMouseEnter={e=>e.currentTarget.style.transform='translateY(-2px)'}
               onMouseLeave={e=>e.currentTarget.style.transform='none'}
            >
              <i className="fa-brands fa-whatsapp"></i> Apply Now
            </button>
            <button onClick={() => window.open(site.whatsappLink, '_blank')} style={{
              display:'inline-flex',alignItems:'center',gap:8,background:'transparent',color:'var(--ink)',
              fontWeight:600,fontSize:13,border:'2px solid rgba(26,20,35,.2)',padding:'10px 22px',borderRadius:12,cursor:'pointer',
              transition:'all .25s',fontFamily:'Inter,sans-serif',
            }} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--ink)';e.currentTarget.style.background='rgba(26,20,35,.05)'}}
               onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(26,20,35,.2)';e.currentTarget.style.background='transparent'}}
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </button>
          </div>

          {/* Badge tile */}
          <div className="bento-tile h-reveal" style={{transitionDelay:'.3s',background:'var(--color-secondary)',padding:'20px',display:'flex',alignItems:'center',justifyContent:'center',gap:10}}>
            <i className="fa-solid fa-certificate" style={{color:'var(--ink)',fontSize:20}}></i>
            <div style={{fontWeight:800,fontSize:14,color:'var(--ink)',fontFamily:'Plus Jakarta Sans,sans-serif'}}>{site.license}</div>
          </div>
        </div>
      </section>
    </>
  );
}