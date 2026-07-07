import { useState, useEffect } from 'react';

const services = [
  {
    id: 1, title: 'Overseas Recruitment',
    desc: 'We source, screen, and place qualified candidates in roles across the Gulf, Europe, and Asia — matching skills to employer needs.',
    features: ['CV screening & shortlisting', 'Employer-candidate matching', 'Pre-departure briefing', 'Post-placement follow-up'],
    img: '/images/saudi.jpg',
    color: '#006BA6',
  },
  {
    id: 2, title: 'Visa & Documentation',
    desc: 'Our team guides applicants through every visa category — work permits, employment visas, and attestation — minimising delays.',
    features: ['Document checklist & guidance', 'Work permit applications', 'Degree attestation support', 'Embassy appointment help'],
    img: '/images/uae.jpg',
    color: '#0496FF',
  },
  {
    id: 3, title: 'Career Counseling',
    desc: 'One-on-one sessions help candidates identify the right destination, role, and growth path for their unique skills and aspirations.',
    features: ['Skills assessment sessions', 'Industry & market insights', 'Interview preparation', 'Salary benchmarking'],
    img: '/images/qatar.jpg',
    color: '#FFBC42',
  },
  {
    id: 4, title: 'Medical & Travel Coordination',
    desc: 'We coordinate medical exams, travel bookings, and pre-departure orientation so you arrive ready to work.',
    features: ['Medical appointment scheduling', 'Flight booking assistance', 'Pre-departure orientation', 'Airport pickup coordination'],
    img: '/images/oman.jpg',
    color: '#D81159',
  },
  {
    id: 5, title: 'Employer Liaison',
    desc: 'We work directly with vetted employers to ensure job offers, contracts, and conditions meet all legal and ethical standards.',
    features: ['Contract verification', 'Employer background checks', 'Salary negotiation support', 'Ongoing employer relations'],
    img: '/images/kuwait.jpg',
    color: '#006BA6',
  },
  {
    id: 6, title: 'Skills Training Referral',
    desc: 'Candidates needing upskilling are referred to certified training partners for trade tests and certification programs.',
    features: ['Training partner referrals', 'Trade test coordination', 'Certification assistance', 'Skill gap assessment'],
    img: '/images/poland.jpg',
    color: '#0496FF',
  },
  {
    id: 7, title: 'Post-Placement Support',
    desc: 'Our support doesn\'t end at departure. We stay in touch to ensure smooth settlement and address any workplace concerns.',
    features: ['Follow-up check-ins', 'Emergency contact access', 'Workplace issue mediation', 'Repatriation assistance'],
    img: '/images/greece.jpg',
    color: '#FFBC42',
  },
  {
    id: 8, title: 'Gulf & European Specialist',
    desc: 'Deep expertise in Saudi Arabia, UAE, Qatar, Kuwait, Oman, Germany, Poland, Greece, and South Korea placement.',
    features: ['Market-specific guidance', 'Language prep resources', 'Cultural orientation', 'Destination country experts'],
    img: '/images/south-korea.jpg',
    color: '#D81159',
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0]);

  useEffect(() => {
    const els = document.querySelectorAll('.sv-reveal');
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); } }); },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: 'clamp(80px,10vw,130px) 24px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="sv-reveal reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-pill"><i className="fas fa-briefcase" style={{ fontSize: 10 }} /> OUR SERVICES</span>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(28px,5vw,46px)', color: 'var(--color-ink)', marginTop: 16, marginBottom: 16, letterSpacing: '-0.8px' }}>
            What <span style={{ color: 'var(--color-primary)' }}>We Offer</span>
          </h2>
        </div>

        {/* Image-preview showcase layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 340px) 1fr', gap: 32, alignItems: 'start' }}>
          {/* Left menu */}
          <div className="sv-reveal reveal-l" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {services.map((s) => (
              <button key={s.id} onClick={() => setActive(s)}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 14, cursor: 'pointer', border: active.id === s.id ? `2px solid ${s.color}` : '1px solid rgba(0,107,166,0.1)', background: active.id === s.id ? `${s.color}08` : '#fff', textAlign: 'left', transition: 'all 0.25s', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="fas fa-circle" style={{ color: s.color, fontSize: 8 }} />
                </div>
                <span style={{ fontWeight: active.id === s.id ? 700 : 500, fontSize: 13.5, color: active.id === s.id ? s.color : '#4B5563' }}>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Right preview */}
          <div className="sv-reveal reveal-r" style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,107,166,0.12)', border: '1px solid rgba(0,107,166,0.08)', background: '#fff' }}>
            <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
              <img src={active.img} alt={active.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 30%, ${active.color}cc 100%)` }} />
              <div style={{ position: 'absolute', bottom: 20, left: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: active.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-bolt" style={{ color: '#fff', fontSize: 18 }} />
                </div>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff' }}>{active.title}</h3>
              </div>
            </div>
            <div style={{ padding: '28px 28px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14.5, color: '#4B5563', lineHeight: 1.75, marginBottom: 24 }}>{active.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {active.features.map((f) => (
                  <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 99, fontSize: 12, fontWeight: 600, background: `${active.color}10`, color: active.color, border: `1px solid ${active.color}25`, fontFamily: 'Inter, sans-serif' }}>
                    <i className="fas fa-check-circle" style={{ fontSize: 11 }} /> {f}
                  </span>
                ))}
              </div>
              <a href={`https://wa.me/923334857777?text=Hello%20Qadir%20International%2C%20I%20am%20interested%20in%20${encodeURIComponent(active.title)}.`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', textDecoration: 'none', background: active.color, transition: 'transform 0.25s', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <i className="fab fa-whatsapp" /> Enquire About This Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
