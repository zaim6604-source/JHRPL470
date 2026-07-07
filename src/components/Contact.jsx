import { useEffect, useRef, useState } from 'react';
import { site } from '../data/beaconData';

export default function Contact() {
  const ref = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const info = [
    { icon: 'fa-solid fa-location-dot', color: '#0496FF', bg: 'rgba(4,150,255,.08)', label: 'Office Address', lines: [site.address] },
    { icon: 'fa-solid fa-phone', color: '#5FB8FF', bg: 'rgba(95,184,255,.08)', label: 'Phone', lines: [site.phone], href: `tel:${site.phone.replace(/-/g,'')}` },
    { icon: 'fa-brands fa-whatsapp', color: '#FFBE0B', bg: 'rgba(255,190,11,.08)', label: 'WhatsApp', lines: [site.whatsapp], href: site.whatsappLink },
    { icon: 'fa-solid fa-envelope', color: '#FB5607', bg: 'rgba(251,86,7,.08)', label: 'Email', lines: [site.emailDummy], href: `mailto:${site.emailDummy}` },
  ];

  return (
    <>
      <style>{`
        .ct-section { background:#fff; padding:96px 24px; }
        .ct-inner { max-width:1200px; margin:0 auto; }
        .ct-title { font-weight:900; font-size:clamp(30px,4vw,46px); color:var(--ink, #062A45); margin-bottom:16px;font-family:'Poppins',sans-serif; }
        .ct-layout { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start; }
        @media(max-width:900px){ .ct-layout{grid-template-columns:1fr} }
        .ct-company-card { background:linear-gradient(135deg,var(--color-primary, #0496FF),var(--color-secondary, #5FB8FF)); border-radius:20px; padding:28px; margin-bottom:20px; display:flex; align-items:center; gap:16px; }
        .ct-company-logo { width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,.2);border:2px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-weight:900;font-size:22px;color:#fff;flex-shrink:0; }
        .ct-company-name { font-weight:900; font-size:20px; color:#fff;font-family:'Poppins',sans-serif; }
        .ct-company-sub  { font-size:13px; color:rgba(255,255,255,.7); margin-top:3px; font-weight:600; }
        .ct-info-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:20px; }
        @media(max-width:480px){ .ct-info-grid{grid-template-columns:1fr} }
        .ct-info-card { background:#fff; border:1px solid var(--card-border, #D0E4F5); border-radius:16px; padding:20px; transition:border-color .25s,box-shadow .25s,transform .25s; }
        .ct-info-card:hover { border-color: var(--hc, #0496FF); box-shadow:0 8px 24px rgba(0,0,0,.04); transform:translateY(-2px); }
        .ct-info-icon { width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;flex-shrink:0;font-size:16px; }
        .ct-info-label { font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px; }
        .ct-info-line  { font-size:13px;color:var(--ink-light, #4A5E7A);line-height:1.65; }
        .ct-info-link { font-size:13px;color:var(--color-primary, #0496FF);line-height:1.65;text-decoration:none;font-weight:600;display:block; }
        .ct-info-link:hover { text-decoration:underline; }
        .ct-map { border-radius:20px;overflow:hidden;border:1px solid var(--card-border, #D0E4F5);box-shadow:0 4px 24px rgba(0,0,0,.04);position:relative; }
        .ct-map-badge { position:absolute;top:14px;left:14px;z-index:10;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);padding:8px 14px;border-radius:10px;font-size:13px;font-weight:600;color:var(--ink, #062A45);display:flex;align-items:center;gap:6px;box-shadow:0 2px 12px rgba(0,0,0,.06);border:1px solid rgba(4,150,255,.15); }

        .faq-section { margin-top:72px; }
        .faq-item { border:1px solid var(--card-border, #D0E4F5); border-radius:14px; margin-bottom:12px; overflow:hidden; transition:border-color .25s; }
        .faq-item.open { border-color:var(--color-primary, #0496FF); }
        .faq-q { display:flex;align-items:center;justify-content:space-between;width:100%;padding:18px 24px;background:none;border:none;cursor:pointer;font-weight:600;font-size:15px;color:var(--ink, #062A45);text-align:left;font-family:'Inter',sans-serif;transition:color .25s; }
        .faq-q:hover { color:var(--color-primary, #0496FF); }
        .faq-arrow { transition:transform .3s;color:var(--color-primary, #0496FF);font-size:13px;flex-shrink:0;margin-left:12px; }
        .faq-arrow.open { transform:rotate(180deg); }
        .faq-a { max-height:0;overflow:hidden;transition:max-height .35s ease,padding .35s ease;padding:0 24px; }
        .faq-a.open { max-height:300px;padding:0 24px 18px; }
        .faq-a-inner { font-size:14px;line-height:1.7;color:var(--ink-light, #4A5E7A); }
      `}</style>

      <section id="contact" className="ct-section" ref={ref}>
        <div className="ct-inner">

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />
              GET IN TOUCH
            </div>
            <h2 className="ct-title">
              Contact{' '}
              <span style={{color:'var(--color-primary, #0496FF)'}}>Beacon Bright</span>
            </h2>
            <p style={{ color: 'var(--ink-light, #4A5E7A)', fontSize: 16, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Visit our Mardan office or reach out by phone, WhatsApp, or email. Our team is ready to guide you through
              every step of your overseas employment journey.
            </p>
          </div>

          <div className="ct-layout">

            {/* Left: Info */}
            <div className="reveal-l">
              {/* Company badge */}
              <div className="ct-company-card">
                <div className="ct-company-logo">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div>
                  <div className="ct-company-name">Beacon Bright</div>
                  <div className="ct-company-sub">Govt. Licensed OEP &middot; License No. [Add License]</div>
                </div>
              </div>

              {/* Info grid */}
              <div className="ct-info-grid">
                {info.map(({ icon, color, bg, label, lines, href }, i) => (
                  <div key={i} className="ct-info-card" style={{ '--hc': color }}>
                    <div className="ct-info-icon" style={{ background: bg, color }}>
                      <i className={icon}></i>
                    </div>
                    <div className="ct-info-label" style={{ color }}>{label}</div>
                    {lines.map((l, j) => (
                      href ? (
                        <a key={j} href={href} target={href.startsWith('http') ? '_blank' : ''} rel="noopener noreferrer" className="ct-info-link">
                          {l}
                        </a>
                      ) : (
                        <div key={j} className="ct-info-line">{l}</div>
                      )
                    ))}
                  </div>
                ))}
              </div>

              {/* Quick Apply */}
              <a
                href={site.whatsappLink + '?text=Hello%20Beacon%20Bright%2C%20I%20am%20interested%20in%20overseas%20employment.'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:'inline-flex',alignItems:'center',gap:8,
                  background:'var(--color-cta, #FB5607)',color:'#fff',
                  fontWeight:800,fontSize:14,padding:'12px 24px',
                  borderRadius:12,textDecoration:'none',
                  boxShadow:'0 4px 16px rgba(251,86,7,.3)',
                  transition:'transform .2s,box-shadow .2s',
                  fontFamily:'Inter,sans-serif',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(251,86,7,.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <i className="fa-brands fa-whatsapp"></i> Quick Apply on WhatsApp
              </a>
            </div>

            {/* Right: Map */}
            <div className="reveal-r" style={{ transitionDelay: '.15s' }}>
              <div className="ct-map">
                <div className="ct-map-badge">
                  <i className="fa-solid fa-location-dot" style={{color:'var(--color-primary, #0496FF)',fontSize:14}}></i>
                  Mugam Chowk, Mardan
                </div>
                <iframe
                  title="Beacon Bright Location"
                  src={`https://maps.google.com/maps?q=${site.contact.mapQuery}&z=16&output=embed`}
                  width="100%"
                  height="520"
                  style={{ display: 'block', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="faq-section">
            <div style={{ textAlign: 'center', marginBottom: 40 }} className="reveal">
              <div className="section-pill" style={{margin:'0 auto 18px'}}>
                <span className="pill-dot" />
                FAQs
              </div>
              <h2 style={{fontWeight:900,fontSize:'clamp(24px,3vw,34px)',color:'var(--ink, #062A45)',fontFamily:"'Poppins',sans-serif"}}>
                Frequently Asked <span style={{color:'var(--color-primary, #0496FF)'}}>Questions</span>
              </h2>
            </div>

            <div style={{maxWidth:800,margin:'0 auto'}}>
              {site.faqs.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <span className={`faq-arrow ${openFaq === i ? 'open' : ''}`}>
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </button>
                  <div className={`faq-a ${openFaq === i ? 'open' : ''}`}>
                    <div className="faq-a-inner">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}