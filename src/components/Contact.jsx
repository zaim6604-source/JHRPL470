import { useEffect, useState } from 'react';

const WA = '923334857777';

const buildMsg = (d) =>
  encodeURIComponent(
    `*New Enquiry — Qadir International*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `*Name:*         ${d.name}\n` +
    `*Phone:*        ${d.phone}\n` +
    `*Email:*        ${d.email || 'Not provided'}\n` +
    `*Interest:*     ${d.interest || 'Not specified'}\n\n` +
    `*Message:*\n${d.msg}\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `_Sent from Qadir International website_`
  );

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', email: '', interest: '', msg: '' });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.ct-reveal');
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); } }); },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ch = (k) => (e) => { setF(p => ({ ...p, [k]: e.target.value })); if (err[k]) setErr(p => ({ ...p, [k]: '' })); };

  const validate = () => {
    const e = {};
    if (!f.name.trim() || f.name.trim().length < 3) e.name = 'Please enter your full name.';
    if (!f.phone.trim() || !/^[0-9+\-\s]{7,15}$/.test(f.phone.trim())) e.phone = 'Enter a valid phone number.';
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address.';
    if (!f.msg.trim() || f.msg.trim().length < 20) e.msg = 'Message must be at least 20 characters.';
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErr(errs); return; }
    window.open(`https://wa.me/${WA}?text=${buildMsg(f)}`, '_blank');
    setDone(true);
    setTimeout(() => { setDone(false); setF({ name: '', phone: '', email: '', interest: '', msg: '' }); }, 4500);
  };

  return (
    <section id="contact" style={{ padding: 'clamp(80px,10vw,130px) 24px', background: 'var(--color-background)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -200, left: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,107,166,0.05), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="ct-reveal reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-pill"><i className="fas fa-address-card" style={{ fontSize: 10 }} /> GET IN TOUCH</span>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(28px,5vw,46px)', color: 'var(--color-ink)', marginTop: 16, marginBottom: 16, letterSpacing: '-0.8px' }}>
            Contact <span style={{ color: 'var(--color-primary)' }}>Us</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,460px),1fr))', gap: 40, alignItems: 'start' }}>
          {/* Left – Contact info + form */}
          <div className="ct-reveal reveal-l">
            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
              {[
                { icon: 'fa-location-dot', label: 'Office Address', value: '6-B, Saeed Commercial Centre\nGhazi Road, Dera Ghazi Khan, Punjab', color: '#006BA6' },
                { icon: 'fa-phone', label: 'Phone', value: '064-2430231', color: '#0496FF', href: 'tel:92642430231' },
                { icon: 'fa-whatsapp', label: 'WhatsApp', value: '0333-4857777', color: '#25D366', href: 'https://wa.me/923334857777' },
                { icon: 'fa-envelope', label: 'Email', value: 'info@qadirintl.pk', color: '#FFBC42', href: 'mailto:info@qadirintl.pk' },
              ].map((item) => (
                <div key={item.label}
                  style={{ background: '#fff', border: '1px solid rgba(0,107,166,0.1)', borderRadius: 18, padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: 14, boxShadow: '0 4px 20px rgba(0,107,166,0.06)', transition: 'transform 0.25s', cursor: item.href ? 'pointer' : 'default', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ minWidth: 44, height: 44, borderRadius: 12, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`fab ${item.icon === 'fa-whatsapp' ? 'fa-whatsapp' : item.icon.startsWith('fa-') ? item.icon : 'fa-' + item.icon}`} style={{ color: item.color, fontSize: 18 }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 11, fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: item.href ? item.color : '#1F2937', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp direct CTA */}
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'linear-gradient(135deg, #25D366, #128C7E)', borderRadius: 16, padding: 18, color: '#fff', textDecoration: 'none', transition: 'transform 0.25s, box-shadow 0.25s', boxShadow: '0 6px 24px rgba(37,211,102,0.25)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,211,102,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.25)'; }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fab fa-whatsapp" style={{ color: '#fff', fontSize: 22 }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff' }}>Chat on WhatsApp Now</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>0333-4857777 · Direct chat</div>
              </div>
              <i className="fas fa-arrow-right" style={{ marginLeft: 'auto', opacity: 0.7, color: '#fff', fontSize: 16 }} />
            </a>
          </div>

          {/* Right – Form + Map */}
          <div className="ct-reveal reveal-r" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Form */}
            <div style={{ background: '#fff', border: '1px solid rgba(0,107,166,0.12)', borderRadius: 24, padding: '32px', boxShadow: '0 8px 40px rgba(0,107,166,0.09)' }}>
              {done ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #006BA6, #0496FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, boxShadow: '0 8px 32px rgba(0,107,166,0.3)' }}>
                    <i className="fas fa-check" style={{ color: '#fff', fontSize: 32 }} />
                  </div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 24, color: '#006BA6', marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: '#6B7280', fontSize: 15, maxWidth: 280 }}>Your enquiry was sent via WhatsApp. We'll respond shortly. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 22, color: '#006BA6', marginBottom: 6 }}>Send Us a Message</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#6B7280', marginBottom: 24 }}>Fields marked <span style={{ color: '#EF4444' }}>*</span> are required.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, '@media (max-width:600px)': { gridTemplateColumns: '1fr' } }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>Full Name <span style={{ color: '#EF4444' }}>*</span></label>
                        <input type="text" placeholder="Muhammad Ali" value={f.name} onChange={ch('name')}
                          style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${err.name ? '#EF4444' : '#DBEAFE'}`, borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#06283D', outline: 'none', boxSizing: 'border-box' }} />
                        {err.name && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#EF4444', marginTop: 4 }}>{err.name}</div>}
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>Phone Number <span style={{ color: '#EF4444' }}>*</span></label>
                        <input type="tel" placeholder="0333-4857777" value={f.phone} onChange={ch('phone')}
                          style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${err.phone ? '#EF4444' : '#DBEAFE'}`, borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#06283D', outline: 'none', boxSizing: 'border-box' }} />
                        {err.phone && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#EF4444', marginTop: 4 }}>{err.phone}</div>}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, '@media (max-width:600px)': { gridTemplateColumns: '1fr' } }}>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>Email <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(optional)</span></label>
                        <input type="email" placeholder="you@example.com" value={f.email} onChange={ch('email')}
                          style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${err.email ? '#EF4444' : '#DBEAFE'}`, borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#06283D', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>Area of Interest</label>
                        <select value={f.interest} onChange={ch('interest')}
                          style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DBEAFE', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#06283D', outline: 'none', boxSizing: 'border-box', cursor: 'pointer' }}>
                          <option value="">Select category...</option>
                          <option value="Construction">Construction</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Drivers">Drivers</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Factory">Factory / Manufacturing</option>
                          <option value="IT">IT / Technology</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>Message <span style={{ color: '#EF4444' }}>*</span></label>
                      <textarea rows={4} placeholder="Tell us about yourself, your experience, which country you're targeting..." value={f.msg} onChange={ch('msg')}
                        style={{ width: '100%', padding: '11px 14px', border: `1.5px solid ${err.msg ? '#EF4444' : '#DBEAFE'}`, borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#06283D', outline: 'none', boxSizing: 'border-box', resize: 'none' }} />
                      {err.msg && <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#EF4444', marginTop: 4 }}>{err.msg}</div>}
                    </div>
                    <button type="submit"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', padding: 14, background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 700, border: 'none', borderRadius: 14, cursor: 'pointer', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', transition: 'transform 0.25s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
                      <i className="fab fa-whatsapp" style={{ fontSize: 18 }} /> Send via WhatsApp
                    </button>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#9CA3AF', textAlign: 'center', marginTop: 8 }}>WhatsApp will open with your info pre-filled. 100% free &amp; confidential.</p>
                  </div>
                </form>
              )}
            </div>

            {/* Map */}
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,107,166,0.12)', border: '1px solid rgba(0,107,166,0.1)' }}>
              <div style={{ background: 'linear-gradient(135deg, #006BA6, #0496FF)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <i className="fas fa-location-dot" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.9)' }}>
                  Qadir International — Saeed Commercial Centre, Ghazi Road, D.G. Khan
                </span>
              </div>
              <iframe
                title="Qadir International Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.0!2d70.0!3d29.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDMwJzAwLjAiTiA3MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
                width="100%" height="340" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
