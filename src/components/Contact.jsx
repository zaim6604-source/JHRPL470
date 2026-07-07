import { useState, useEffect, useRef } from 'react';
import { site } from '../data/aleshahData';

const WA = '923061073179';
const categories = ['General Inquiry', 'Job Placement', 'Visa Processing', 'Document Attestation', 'Partnership', 'Other'];

const buildMsg = (d) => encodeURIComponent(
  `🌟 *New Enquiry — Al Eshah International*\n` +
  `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
  `👤 *Name:*         ${d.name}\n` +
  `📞 *Phone:*        ${d.phone}\n` +
  `📧 *Email:*        ${d.email || 'Not provided'}\n` +
  `💼 *Category:*     ${d.category}\n\n` +
  `📝 *Message:*\n${d.msg}\n\n` +
  `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
  `_Sent from Al Eshah International website_`
);

export default function Contact() {
  const ref = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', msg: '' });
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.phone.trim()) errors.phone = 'Phone is required';
    if (Object.keys(errors).length) { setErr(errors); return; }
    setErr({});
    const text = buildMsg(form);
    setSubmitted(true);
    window.open(`https://wa.me/${WA}?text=${text}`, '_blank');
  };

  const ch = (k) => (e) => { setForm(p => ({...p, [k]: e.target.value})); if (err[k]) setErr(p => ({...p, [k]: ''})); };

  return (
    <div ref={ref}>
      <style>{`
        .ct-section { background:var(--white);padding:80px 24px; }
        .ct-layout { display:grid;grid-template-columns:1fr 1.2fr;gap:48px;align-items:start;max-width:1200px;margin:0 auto; }
        @media(max-width:900px){ .ct-layout{grid-template-columns:1fr} }
        .ct-info-grid { display:flex;flex-direction:column;gap:12px;margin-bottom:24px; }
        .ct-info-card { display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:14px;border:1px solid rgba(255,32,110,.1);transition:transform .2s; }
        .ct-info-card:hover { transform:translateY(-2px);border-color:var(--color-primary); }
        .ct-info-icon { width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0; }
        .ct-info-label { font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-light);margin-bottom:2px; }
        .ct-info-value { font-size:14px;font-weight:600;color:var(--ink); }
        .ct-info-value a { color:inherit;text-decoration:none; }
        .ct-info-value a:hover { color:var(--color-primary); }
        .ct-map { border-radius:16px;overflow:hidden;border:1px solid rgba(255,32,110,.1); }
        .ct-map iframe { width:100%;height:220px;display:block;border:none; }
        .form-card { background:var(--color-background);border-radius:20px;padding:32px;border:1px solid rgba(255,32,110,.08); }
        .faq-section { background:var(--color-background);padding:80px 24px; }
        .faq-inner { max-width:800px;margin:0 auto; }
        .faq-item { background:var(--white);border:1px solid rgba(255,32,110,.08);border-radius:16px;margin-bottom:10px;overflow:hidden;transition:box-shadow .2s; }
        .faq-item:hover { box-shadow:0 4px 16px rgba(255,32,110,.06); }
        .faq-q { display:flex;align-items:center;justify-content:space-between;width:100%;padding:18px 22px;background:none;border:none;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:15px;color:var(--ink);text-align:left;transition:color .2s;gap:16px; }
        .faq-q:hover { color:var(--color-primary); }
        .faq-q i { transition:transform .3s;flex-shrink:0;font-size:12px;color:var(--color-primary); }
        .faq-q.open i { transform:rotate(180deg); }
        .faq-a { padding:0 22px 18px;font-size:14px;line-height:1.7;color:var(--ink-light); }
        .gf-error { font-size:12px;color:#ef4444;margin-top:5px;display:flex;align-items:center;gap:4px; }
      `}</style>

      {/* Contact */}
      <section id="contact" className="ct-section">
        <div style={{textAlign:'center',marginBottom:48}} className="reveal">
          <div className="section-pill" style={{margin:'0 auto 18px'}}>
            <span className="pill-dot" />{site.contact.badge}
          </div>
          <h2 style={{fontWeight:900,fontSize:'clamp(28px,3.5vw,42px)',color:'var(--ink)',marginBottom:14}}>
            Contact <span style={{color:'var(--color-primary)'}}>Al Eshah International</span>
          </h2>
          <p style={{color:'var(--ink-light)',fontSize:15,maxWidth:540,margin:'0 auto',lineHeight:1.7}}>
            Visit our Sialkot office or reach out by phone, WhatsApp, or email. Our team is ready to guide you through every step.
          </p>
        </div>

        <div className="ct-layout">
          {/* Left: Info + Map */}
          <div className="reveal-l">
            <div className="ct-info-grid">
              {/* Phone */}
              <div className="ct-info-card">
                <div className="ct-info-icon" style={{background:'rgba(255,32,110,.1)',color:'var(--color-primary)'}}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <div className="ct-info-label">Phone</div>
                  <div className="ct-info-value">
                    {site.contact.phones.map((p, i) => (
                      <span key={i}><a href={`tel:${p.replace(/-/g,'')}`}>{p}</a>{i < site.contact.phones.length - 1 ? ', ' : ''}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="ct-info-card">
                <div className="ct-info-icon" style={{background:'rgba(65,234,212,.1)',color:'var(--color-accent)'}}>
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <div className="ct-info-label">WhatsApp</div>
                  <div className="ct-info-value">
                    <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer">{site.whatsapp}</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="ct-info-card">
                <div className="ct-info-icon" style={{background:'rgba(251,255,18,.2)',color:'var(--ink)'}}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="ct-info-label">Email</div>
                  <div className="ct-info-value">
                    <a href={`mailto:${site.emailDummy}`}>{site.emailDummy}</a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="ct-info-card">
                <div className="ct-info-icon" style={{background:'rgba(212,0,90,.1)',color:'var(--color-highlight)'}}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="ct-info-label">Address</div>
                  <div className="ct-info-value">{site.address}</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="ct-map">
              <iframe
                title="Al Eshah International location"
                src={`https://www.google.com/maps?q=${site.contact.mapQuery}&hl=en&z=16&output=embed`}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-r">
            <div className="form-card">
              <div style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontWeight:800,fontSize:18,color:'var(--ink)',marginBottom:6}}>Send Us a Message</div>
              <p style={{fontSize:13,color:'var(--ink-light)',marginBottom:24,lineHeight:1.6}}>
                Fill in the form and we'll reply instantly on WhatsApp.
              </p>

              {submitted ? (
                <div style={{textAlign:'center',padding:'30px 0'}}>
                  <div style={{fontSize:40,marginBottom:12,color:'var(--color-accent)'}}><i className="fa-brands fa-whatsapp"></i></div>
                  <div style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontWeight:800,fontSize:17,color:'var(--ink)',marginBottom:8}}>Thank You!</div>
                  <p style={{fontSize:14,color:'var(--ink-light)',marginBottom:16}}>You're being redirected to WhatsApp to complete your application.</p>
                  <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{fontSize:13,padding:'12px 24px'}}>
                    <i className="fa-brands fa-whatsapp"></i> Chat with Us
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{marginBottom:16}}>
                    <label style={{display:'block',fontSize:12,fontWeight:700,marginBottom:6,color:'var(--ink)',letterSpacing:'.04em'}}>Full Name *</label>
                    <input className={`field${err.name?' err':''}`} type="text" value={form.name} onChange={ch('name')} placeholder="e.g. Muhammad Ali" />
                    {err.name && <div className="gf-error">⚠ {err.name}</div>}
                  </div>
                  <div style={{marginBottom:16}}>
                    <label style={{display:'block',fontSize:12,fontWeight:700,marginBottom:6,color:'var(--ink)',letterSpacing:'.04em'}}>Phone Number *</label>
                    <input className={`field${err.phone?' err':''}`} type="tel" value={form.phone} onChange={ch('phone')} placeholder="e.g. 0300-1234567" />
                    {err.phone && <div className="gf-error">⚠ {err.phone}</div>}
                  </div>
                  <div style={{marginBottom:16}}>
                    <label style={{display:'block',fontSize:12,fontWeight:700,marginBottom:6,color:'var(--ink)',letterSpacing:'.04em'}}>Email Address</label>
                    <input className="field" type="email" value={form.email} onChange={ch('email')} placeholder="you@example.com" />
                  </div>
                  <div style={{marginBottom:16}}>
                    <label style={{display:'block',fontSize:12,fontWeight:700,marginBottom:6,color:'var(--ink)',letterSpacing:'.04em'}}>Category</label>
                    <select className="field" value={form.category} onChange={ch('category')} style={{cursor:'pointer'}}>
                      <option value="">Select a category</option>
                      {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div style={{marginBottom:20}}>
                    <label style={{display:'block',fontSize:12,fontWeight:700,marginBottom:6,color:'var(--ink)',letterSpacing:'.04em'}}>Your Message</label>
                    <textarea className="field" rows={4} style={{resize:'vertical'}} value={form.msg} onChange={ch('msg')} placeholder="Tell us about your skills and preferred destination..." />
                  </div>
                  <button type="submit" className="btn-wa" style={{justifyContent:'center'}}>
                    <i className="fa-brands fa-whatsapp"></i> Submit via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="faq-section">
        <div className="faq-inner reveal">
          <div style={{textAlign:'center',marginBottom:40}}>
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />FAQs
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(26px,3vw,38px)',color:'var(--ink)'}}>
              Frequently Asked <span style={{color:'var(--color-primary)'}}>Questions</span>
            </h2>
          </div>

          {site.faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className={`faq-q ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div style={{maxHeight: openFaq === i ? 200 : 0, overflow: 'hidden', transition: 'max-height .35s ease'}}>
                <div className="faq-a">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}