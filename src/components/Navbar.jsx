import { useState, useEffect } from 'react';

const links = [
  { label: 'Home',        id: 'home'         },
  { label: 'About',       id: 'about'        },
  { label: 'Services',    id: 'services'     },
  { label: 'Destinations',id: 'countries'    },
  { label: 'Testimonials',id: 'testimonials' },
  { label: 'Contact',     id: 'contact'      },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open,  setOpen]  = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const fn = () => {
      setSolid(window.scrollY > 50);
      const ids = ['home','about','services','countries','testimonials','contact'];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 180) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <style>{`
        .nb-wrap { position:fixed;top:0;left:0;right:0;z-index:9999;transition:background .35s,box-shadow .35s,backdrop-filter .35s,height .3s;padding:0 24px; }
        .nb-wrap.solid { background:rgba(255,255,255,.95);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:0 1px 0 rgba(4,150,255,.12),0 4px 24px rgba(4,150,255,.08); }
        .nb-inner { max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between; }
        .nb-logo { display:flex;align-items:center;gap:11px;background:none;border:none;cursor:pointer; }
        .nb-logo-icon { width:42px;height:42px;border-radius:12px;background:var(--color-primary, #0496FF);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(4,150,255,.4);flex-shrink:0;color:#fff;font-size:18px; }
        .nb-logo-name { font-weight:800;font-size:17px;line-height:1.1;color:var(--ink, #062A45);font-family:'Poppins',sans-serif; }
        .nb-logo-sub { font-size:10px;font-weight:600;letter-spacing:.07em;margin-top:2px;color:var(--color-primary, #0496FF); }
        .nb-links { display:flex;align-items:center;gap:2px; }
        .nb-pill { background:none;border:none;cursor:pointer;font-weight:600;font-size:13px;padding:7px 14px;border-radius:999px;transition:all .25s;font-family:'Inter',sans-serif;white-space:nowrap; }
        .nb-pill.on { background:var(--color-primary, #0496FF);color:#fff !important;box-shadow:0 2px 10px rgba(4,150,255,.3); }
        .nb-cta { display:inline-flex;align-items:center;gap:8px;background:var(--color-cta, #FB5607);color:#fff;font-weight:800;font-size:13px;padding:10px 22px;border-radius:999px;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(251,86,7,.35);transition:transform .25s,box-shadow .25s;margin-left:8px;font-family:'Inter',sans-serif; }
        .nb-cta:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(251,86,7,.5); }
        .hbg { background:none;border:none;cursor:pointer;padding:8px;display:none; }
        .hbg-bar { display:block;height:2px;border-radius:2px;transition:all .25s; }
        .mob-menu { background:#fff;overflow:hidden;transition:max-height .35s ease,box-shadow .35s;border-bottom:1px solid rgba(4,150,255,.15); }
        @media(max-width:900px){
          .nb-links{display:none!important}
          .hbg{display:block!important}
        }
      `}</style>

      <nav className={`nb-wrap${solid ? ' solid' : ''}`} style={{ height: solid ? 64 : 80 }}>
        <div className="nb-inner" style={{ height: '100%' }}>
          {/* Logo */}
          <button className="nb-logo" onClick={() => go('home')}>
            <div className="nb-logo-icon">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <div style={{textAlign:'left'}}>
              <div className="nb-logo-name">Beacon Bright</div>
              <div className="nb-logo-sub">Govt. Licensed OEP</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="nb-links">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`nb-pill ${active===l.id?'on':''}`}
                style={{
                  color: active===l.id ? '#fff' : (solid ? 'var(--ink-light, #4A5E7A)' : 'rgba(255,255,255,.85)'),
                  background: active===l.id ? '' : (solid && active===l.id ? 'var(--color-primary)' : 'transparent'),
                }}
              >
                {l.label}
              </button>
            ))}
            <a href="https://wa.me/923339862425" target="_blank" rel="noopener noreferrer" className="nb-cta">
              <i className="fa-brands fa-whatsapp"></i> Apply
            </a>
          </div>

          {/* Hamburger */}
          <button className="hbg" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="hbg-bar" style={{width:24,background:solid?'#062A45':'#fff',transform:open?'rotate(45deg) translate(5px,5px)':'none'}}/>
            <span className="hbg-bar" style={{width:open?0:18,background:'#0496FF',margin:'5px 0',opacity:open?0:1}}/>
            <span className="hbg-bar" style={{width:24,background:solid?'#062A45':'#fff',transform:open?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className="mob-menu" style={{maxHeight:open?500:0,boxShadow:open?'0 8px 30px rgba(0,0,0,.08)':'none',borderTop:open?'1px solid rgba(4,150,255,.15)':'none'}}>
          <div style={{padding:'12px 20px 20px',display:'flex',flexDirection:'column',gap:4}}>
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} style={{
                background:active===l.id?'rgba(4,150,255,.1)':'none',border:'none',cursor:'pointer',
                textAlign:'left',padding:'12px 16px',borderRadius:10,
                fontWeight:600,fontSize:15,
                color:active===l.id?'#0496FF':'#4A5E7A',transition:'background .2s',
              }}>{l.label}</button>
            ))}
            <a href="https://wa.me/923339862425" target="_blank" rel="noopener noreferrer" style={{
              display:'flex',alignItems:'center',gap:8,justifyContent:'center',marginTop:8,
              background:'#FB5607',color:'#fff',fontWeight:800,fontSize:15,padding:'12px 22px',
              borderRadius:999,border:'none',cursor:'pointer',textDecoration:'none',
            }}>
              <i className="fa-brands fa-whatsapp"></i> Apply on WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}