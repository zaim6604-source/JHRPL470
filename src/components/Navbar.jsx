import { useState, useEffect } from 'react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'countries', label: 'Destinations' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          transition: 'background 0.3s, box-shadow 0.3s',
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 1px 30px rgba(0,107,166,0.08)',
          borderBottom: '1px solid rgba(0,107,166,0.06)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => scrollTo('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #006BA6, #0496FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,107,166,0.35)' }}>
              <i className="fas fa-globe-asia" style={{ color: '#fff', fontSize: 18 }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 17, color: '#06283D', letterSpacing: '-0.3px', lineHeight: 1.1, transition: 'color 0.3s' }}>
                Qadir International
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, borderRadius: 6, padding: '1px 7px', marginTop: 2 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#006BA6' , letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
                  2199/DGK
                </span>
              </div>
            </div>
          </button>

          <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className={`nav-link${active === l.id ? ' active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 13, color: active === l.id ? '#006BA6' : '#4B5563', padding: '4px 0', transition: 'color 0.3s' }}>
                {l.label}
              </button>
            ))}
            <button
              onClick={() => window.open('https://wa.me/923334857777?text=Hello%20Qadir%20International%2C%20I%20want%20to%20apply%20for%20a%20job.', '_blank')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 20px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', cursor: 'pointer', border: 'none', background: '#D81159', boxShadow: '0 4px 16px rgba(216,17,89,0.35)', transition: 'transform 0.25s, box-shadow 0.25s' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(216,17,89,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(216,17,89,0.35)'; }}
            >
              <i className="fas fa-paper-plane" style={{ fontSize: 12 }} /> Apply
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#06283D', display: 'none', padding: 4, fontSize: 22 }}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>

      <div style={{ position: 'fixed', top: 70, left: 0, right: 0, zIndex: 999, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(0,107,166,0.1)', padding: menuOpen ? '20px 24px 24px' : '0 24px', maxHeight: menuOpen ? 360 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease, padding 0.35s ease', boxShadow: '0 8px 30px rgba(0,107,166,0.08)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              style={{ background: active === l.id ? 'rgba(0,107,166,0.07)' : 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 15, color: active === l.id ? '#006BA6' : '#374151', padding: '12px 16px', borderRadius: 10, textAlign: 'left' }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => window.open('https://wa.me/923334857777?text=Hello%20Qadir%20International%2C%20I%20want%20to%20apply.', '_blank')}
            style={{ marginTop: 8, justifyContent: 'center', width: '100%', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', cursor: 'pointer', border: 'none', background: '#D81159', boxShadow: '0 4px 16px rgba(216,17,89,0.35)' }}>
            <i className="fas fa-paper-plane" /> Apply Now
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
