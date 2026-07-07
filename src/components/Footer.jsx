const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'countries', label: 'Destinations' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

const serviceLinks = [
  'Overseas Recruitment',
  'Visa & Documentation',
  'Career Counseling',
  'Medical & Travel',
  'Post-Placement Support',
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--color-highlight)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(56px,8vw,80px) 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 42, height: 42, borderRadius: 11, background: 'linear-gradient(135deg, #006BA6, #0496FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,107,166,0.4)' }}>
                <i className="fas fa-globe-asia" style={{ color: '#fff', fontSize: 20 }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 17, color: '#fff', lineHeight: 1.1 }}>
                  Qadir International
                </div>
                <div style={{ display: 'inline-flex', borderRadius: 5, padding: '1px 7px', marginTop: 2 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: '#FFBC42', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    2199/DGK
                  </span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontFamily: 'Inter, sans-serif', marginBottom: 20 }}>
              Licensed Overseas Employment Promoter based in Dera Ghazi Khan, Punjab. Connecting Pakistani workers with global opportunities since 2012.
            </p>
            <a href="https://wa.me/923334857777" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '10px 16px', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}>
              <i className="fab fa-whatsapp" style={{ color: '#25D366', fontSize: 16 }} />
              <span style={{ fontSize: 12.5, fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#DBEAFE' }}>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Navigation col */}
          <div>
            <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.5)', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFBC42'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {serviceLinks.map((s) => (
                <button key={s} onClick={() => scrollTo('services')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.5)', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFBC42'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div>
            <h4 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Ghazi Road, D.G. Khan, Punjab', icon: 'fa-location-dot' },
                { label: '064-2430231', icon: 'fa-phone' },
                { label: '0333-4857777', icon: 'fa-whatsapp' },
                { label: 'License: 2199/DGK', icon: 'fa-certificate' },
              ].map((c) => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)' }}>
                  <i className={`fas ${c.icon}`} style={{ color: '#FFBC42', fontSize: 11, width: 16 }} /> {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Apply CTA */}
        <div style={{ textAlign: 'center', marginBottom: 32, padding: '20px', background: 'rgba(216,17,89,0.1)', borderRadius: 16, border: '1px solid rgba(216,17,89,0.2)' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>Ready to start your journey?</p>
          <a href="https://wa.me/923334857777?text=Hello%20Qadir%20International%2C%20I%20want%20to%20apply%20for%20a%20job." target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none', background: '#D81159', boxShadow: '0 4px 16px rgba(216,17,89,0.35)', transition: 'transform 0.25s' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
            <i className="fab fa-whatsapp" /> Quick Apply via WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 28 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: 13, fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} Qadir International &middot; License 2199/DGK &middot; All rights reserved
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <p style={{ fontSize: 12, fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: 5 }}>
              Made with <i className="fas fa-heart" style={{ color: '#D81159', fontSize: 11 }} /> in D.G. Khan
            </p>
            <button onClick={scrollToTop}
              style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,107,166,0.3)', border: '1px solid rgba(0,107,166,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#FFBC42', fontSize: 14, transition: 'background 0.2s, transform 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,107,166,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,107,166,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <i className="fas fa-arrow-up" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
