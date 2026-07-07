import { useState, useEffect } from 'react';
import { site } from '../data/aleshahData';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Process', id: 'process' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Destinations', id: 'countries' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const fn = () => {
      setSolid(window.scrollY > 50);
      const ids = links.map(l => l.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <style>{`
        .nb-wrap { position:fixed;top:0;left:0;right:0;z-index:9999;transition:background .35s,box-shadow .35s,backdrop-filter .35s; }
        .nb-wrap.solid { background:rgba(255,255,255,.92);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 1px 0 rgba(255,32,110,.1),0 4px 24px rgba(255,32,110,.06); }
        .nb-inner { max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;transition:height .3s; }
        .nb-links { display:flex;align-items:center;gap:2px; }
        .nb-btn { background:none;border:none;cursor:pointer;font-weight:600;font-size:14px;padding:8px 14px;border-radius:10px;transition:all .2s;position:relative;font-family:'Inter',sans-serif; }
        .nb-btn::after { content:'';position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:0;height:2px;border-radius:99px;background:var(--color-primary);transition:width .25s; }
        .nb-btn.on::after { width:calc(100% - 20px); }
        .nb-cta { display:inline-flex;align-items:center;gap:8px;background:var(--color-cta);color:var(--ink);font-weight:800;font-size:14px;padding:10px 22px;border-radius:10px;border:none;cursor:pointer;transition:transform .25s,box-shadow .25s;margin-left:6px;font-family:'Inter',sans-serif; }
        .nb-cta.outline { background:transparent;border:2px solid rgba(65,234,212,.5);color:var(--color-cta); }
        .nb-cta:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(65,234,212,.4); }
        .nb-cta.outline:hover { background:rgba(65,234,212,.1);border-color:var(--color-cta); }
        .hbg { background:none;border:none;cursor:pointer;padding:8px;display:none; }
        .hbg-bar { display:block;height:2px;border-radius:2px;transition:all .25s; }
        .mob-menu { background:#fff;overflow:hidden;transition:max-height .35s ease,box-shadow .35s;border-bottom:1px solid rgba(255,32,110,.1); }
        @media(max-width:768px){
          .nb-links,.nb-cta-nomob{display:none!important}
          .hbg{display:block!important}
        }
      `}</style>

      <nav className={`nb-wrap${solid ? ' solid' : ''}`}>
        <div className="nb-inner" style={{ height: solid ? 64 : 76 }}>
          <button onClick={() => go('home')} style={{display:'flex',alignItems:'center',gap:11,background:'none',border:'none',cursor:'pointer'}}>
            <div style={{width:42,height:42,borderRadius:12,background:'var(--color-primary)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 14px rgba(255,32,110,.35)',flexShrink:0}}>
              <i className="fa-solid fa-earth-asia" style={{color:'#fff',fontSize:18}}></i>
            </div>
            <div style={{textAlign:'left'}}>
              <div style={{fontWeight:800,fontSize:16,lineHeight:1.1,color:'var(--ink)',fontFamily:'Plus Jakarta Sans,sans-serif'}}>Al Eshah</div>
              <div style={{fontSize:10,fontWeight:600,letterSpacing:'.07em',color:'var(--color-primary)',marginTop:1}}>License 2197 / SKT</div>
            </div>
          </button>

          <div className="nb-links">
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                className={`nb-btn ${active===l.id?'on':''}`}
                style={{color: active===l.id ? 'var(--color-primary)' : 'var(--ink-light)', background: active===l.id ? 'rgba(255,32,110,.06)' : 'transparent'}}
              >
                {l.label}
              </button>
            ))}
            <button className="nb-cta nb-cta-nomob" onClick={() => window.open(site.whatsappLink, '_blank')}>
              <i className="fa-brands fa-whatsapp"></i> Apply Now
            </button>
          </div>

          <button className="hbg" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="hbg-bar" style={{width:24,background:'var(--ink)',transform:open?'rotate(45deg) translate(5px,5px)':'none'}}/>
            <span className="hbg-bar" style={{width:open?0:18,background:'var(--color-primary)',margin:'5px 0',opacity:open?0:1}}/>
            <span className="hbg-bar" style={{width:24,background:'var(--ink)',transform:open?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
          </button>
        </div>

        <div className="mob-menu" style={{maxHeight:open?400:0,boxShadow:open?'0 8px 30px rgba(0,0,0,.08)':'none',borderTop:open?'1px solid rgba(255,32,110,.1)':'none'}}>
          <div style={{padding:'12px 20px 20px',display:'flex',flexDirection:'column',gap:4}}>
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background:active===l.id?'rgba(255,32,110,.08)':'none',border:'none',cursor:'pointer',
                textAlign:'left',padding:'12px 16px',borderRadius:10,
                fontWeight:600,fontSize:15,color:active===l.id?'var(--color-primary)':'var(--ink-light)',
              }}>{l.label}</button>
            ))}
            <button onClick={() => window.open(site.whatsappLink, '_blank')} className="nb-cta" style={{marginTop:8,justifyContent:'center',borderRadius:10,fontSize:15}}>
              <i className="fa-brands fa-whatsapp"></i> Apply Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}