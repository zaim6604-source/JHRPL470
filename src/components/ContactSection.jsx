import { useState, useEffect, useRef } from 'react';
import { site } from '../data/balochData';

export default function ContactSection() {
  const ref = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', msg: '' });
  const [submitted, setSubmitted] = useState(false);

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
    if (!form.name || !form.phone) return;
    const text = encodeURIComponent(
      `Hi Akwam International! I'm ${form.name}.${form.phone ? ` Phone: ${form.phone}.` : ''}${form.email ? ` Email: ${form.email}.` : ''}${form.category ? ` Category: ${form.category}.` : ''}${form.msg ? ` Message: ${form.msg}` : ''}`
    );
    setSubmitted(true);
    window.open(`https://wa.me/923085167025?text=${text}`, '_blank');
  };

  const categories = ['General Inquiry', 'Job Placement', 'Visa Processing', 'Document Attestation', 'Partnership', 'Other'];

  return (
    <div ref={ref}>
      <style>{`
        .cta-band { background:linear-gradient(135deg,var(--color-primary) 0%,var(--color-accent) 100%);padding:56px 24px;text-align:center; }
        .cta-inner { max-width:800px;margin:0 auto; }
        .cta-headline { font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:clamp(24px,3vw,36px);color:#fff;margin-bottom:20px; }
        .cta-btns { display:flex;gap:14px;justify-content:center;flex-wrap:wrap; }
        .cta-btn { display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:30px;font-weight:800;font-size:14px;border:none;cursor:pointer;text-decoration:none;transition:all .25s; }
        .cta-btn.solid { background:var(--ink);color:#fff; }
        .cta-btn.solid:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(26,20,35,.3); }
        .cta-btn.outline { background:transparent;border:2px solid #fff;color:#fff; }
        .cta-btn.outline:hover { background:rgba(255,255,255,.1);transform:translateY(-2px); }
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
        .field { margin-bottom:16px; }
        .field label { display:block;font-size:12px;font-weight:700;margin-bottom:6px;color:var(--ink);letter-spacing:.04em; }
        .field input,.field select,.field textarea { width:100%;padding:12px 14px;border-radius:12px;border:1.5px solid rgba(255,32,110,.12);background:var(--white);font-family:'Inter',sans-serif;font-size:14px;color:var(--ink);outline:none;transition:border-color .2s; }
        .field input:focus,.field select:focus,.field textarea:focus { border-color:var(--color-primary);box-shadow:0 0 0 3px rgba(255,32,110,.1); }
        .field textarea { resize:vertical;min-height:90px; }
        .faq-section { background:var(--color-background);padding:80px 24px; }
        .faq-inner { max-width:800px;margin:0 auto; }
        .faq-item { background:var(--white);border:1px solid rgba(255,32,110,.08);border-radius:16px;margin-bottom:10px;overflow:hidden;transition:box-shadow .2s; }
        .faq-item:hover { box-shadow:0 4px 16px rgba(255,32,110,.06); }
        .faq-q { display:flex;align-items:center;justify-content:space-between;width:100%;padding:18px 22px;background:none;border:none;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:15px;color:var(--ink);text-align:left;transition:color .2s;gap:16px; }
        .faq-q:hover { color:var(--color-primary); }
        .faq-q i { transition:transform .3s;flex-shrink:0;font-size:12px;color:var(--color-primary); }
        .faq-q.open i { transform:rotate(180deg); }
        .faq-a { padding:0 22px 18px;font-size:14px;line-height:1.7;color:var(--ink-light); }
      `}</style>

      {/* CTA Band */}
      <div className="cta-band">
        <div className="cta-inner reveal">
          <div className="cta-headline">{site.cta.headline}</div>
          <div className="cta-btns">
            <a href={site.cta.ctaLink} target="_blank" rel="noopener noreferrer" className="cta-btn solid">
              <i className="fa-brands fa-whatsapp" /> {site.cta.cta}
            </a>
            <a href={site.cta.cta2Link} target="_blank" rel="noopener noreferrer" className="cta-btn outline">
              <i className="fa-brands fa-whatsapp" /> {site.cta.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Contact */}
      <section id="contact" className="ct-section">
        <div className="ct-layout">
          {/* Left: Info + Map */}
          <div className="reveal-l">
            <div className="section-pill" style={{marginBottom:18}}><span className="pill-dot" />{site.contact.badge}</div>
            <h2 style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontWeight:900,fontSize:'clamp(24px,3vw,36px)',color:'var(--ink)',marginBottom:24}}>
              Let's <span style={{color:'var(--color-primary)'}}>Connect</span>
            </h2>

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
                    <a href={site.contact.whatsappLink} target="_blank" rel="noopener noreferrer">{site.contact.whatsapp}</a>
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
                    <a href={`mailto:${site.contact.emailDummy}`}>{site.contact.emailDummy}</a>
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
                  <div className="ct-info-value">{site.contact.address}</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="ct-map">
              <iframe
                title="Akwam International location"
                src={`https://www.google.com/maps?q=${site.contact.mapLat},${site.contact.mapLng}&hl=en&z=16&output=embed`}
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
                  <a href={site.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{fontSize:13,padding:'12px 24px',borderRadius:30}}>
                    <i className="fa-brands fa-whatsapp" /> Chat with Us
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label>Full Name *</label>
                    <input type="text" value={form.name} onChange={e => setForm(p=>({...p,name:e.target.value}))} placeholder="e.g. Muhammad Ali" required />
                  </div>
                  <div className="field">
                    <label>Phone Number *</label>
                    <input type="tel" value={form.phone} onChange={e => setForm(p=>({...p,phone:e.target.value}))} placeholder="e.g. 0300-1234567" required />
                  </div>
                  <div className="field">
                    <label>Email Address</label>
                    <input type="email" value={form.email} onChange={e => setForm(p=>({...p,email:e.target.value}))} placeholder="you@example.com" />
                  </div>
                  <div className="field">
                    <label>Job Category</label>
                    <select value={form.category} onChange={e => setForm(p=>({...p,category:e.target.value}))}>
                      <option value="">Select a category</option>
                      {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label>Your Message</label>
                    <textarea value={form.msg} onChange={e => setForm(p=>({...p,msg:e.target.value}))} placeholder="Tell us about your skills and preferred destination..." />
                  </div>
                  <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center',borderRadius:30,fontSize:14,padding:'14px 24px'}}>
                    <i className="fa-brands fa-whatsapp" /> Submit via WhatsApp
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
            <div className="section-pill" style={{margin:'0 auto 18px'}}><span className="pill-dot" />FAQs</div>
            <h2 style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontWeight:900,fontSize:'clamp(26px,3vw,38px)',color:'var(--ink)'}}>
              Frequently Asked <span style={{color:'var(--color-primary)'}}>Questions</span>
            </h2>
          </div>

          {site.faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className={`faq-q ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div style={{
                maxHeight: openFaq === i ? 200 : 0,
                overflow: 'hidden',
                transition: 'max-height .35s ease',
              }}>
                <div className="faq-a">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}