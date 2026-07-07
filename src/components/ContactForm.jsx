import { useState, useRef, useEffect } from 'react';

const WA = '923333664912';
const jobs = [
  'Construction & Civil Work', 'Electrical & Mechanical', 'Hospitality & Hotel Staff',
  'Security & Guard Services', 'Drivers & Transportation', 'IT & Software Professionals',
  'Healthcare & Medical', 'Domestic & Housekeeping', 'Oil & Gas Industry',
  'Teaching & Education', 'Accounting & Finance', 'Other / General Enquiry',
];

const buildMsg = (d) =>
  encodeURIComponent(
    `🌟 *New Enquiry — Al-Amal Company*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `👤 *Name:*         ${d.name}\n` +
    `📞 *Phone:*        ${d.phone}\n` +
    `📧 *Email:*        ${d.email || 'Not provided'}\n` +
    `💼 *Job Interest:* ${d.job}\n\n` +
    `📝 *Message:*\n${d.msg}\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `_Sent from Al-Amal Company website_`
  );

export default function ContactForm() {
  const ref = useRef(null);
  const [f, setF] = useState({ name:'', phone:'', email:'', job:'', msg:'' });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if(en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const ch = (k) => (e) => { setF(p=>({...p,[k]:e.target.value})); if(err[k]) setErr(p=>({...p,[k]:''})); };

  const validate = () => {
    const e = {};
    if(!f.name.trim()||f.name.trim().length<3) e.name='Please enter your full name.';
    if(!f.phone.trim()||!/^[0-9+\-\s]{7,15}$/.test(f.phone.trim())) e.phone='Enter a valid phone number.';
    if(f.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email='Enter a valid email address.';
    if(!f.job) e.job='Please select your area of interest.';
    if(!f.msg.trim()||f.msg.trim().length<20) e.msg='Message must be at least 20 characters.';
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if(Object.keys(errs).length){ setErr(errs); return; }
    window.open(`https://wa.me/${WA}?text=${buildMsg({name:f.name,phone:f.phone,email:f.email,job:f.job,msg:f.msg})}`, '_blank');
    setDone(true);
    setTimeout(()=>{ setDone(false); setF({name:'',phone:'',email:'',job:'',msg:''}); }, 4500);
  };

  return (
    <>
      <style>{`
        .gf-section { background:#fff; padding:96px 24px; }
        .gf-inner { max-width:1160px; margin:0 auto; }
        .gf-chip { display:inline-flex;align-items:center;gap:8px;background:rgba(5,150,105,.1);border:1px solid rgba(5,150,105,.2);color:#059669;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:6px 16px;border-radius:999px;margin-bottom:18px; }
        .gf-title { font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(30px,4vw,46px);color:#0f172a;margin-bottom:16px; }
        .gf-layout { display:grid;grid-template-columns:2fr 3fr;gap:40px;align-items:start; }
        @media(max-width:900px){ .gf-layout{grid-template-columns:1fr} }
        .gf-left { display:flex;flex-direction:column;gap:16px; }
        .gf-why-card { background:linear-gradient(135deg,#0f172a,#1e1b4b);border-radius:20px;padding:32px;color:#fff; }
        .gf-why-title { font-family:'Syne',sans-serif;font-weight:800;font-size:20px;margin-bottom:24px;background:linear-gradient(135deg,#a78bfa,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text; }
        .gf-why-item { display:flex;gap:14px;margin-bottom:18px;last-of-type{margin-bottom:0} }
        .gf-why-icon { width:40px;height:40px;border-radius:10px;background:rgba(99,102,241,.2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0; }
        .gf-why-name { font-size:14px;font-weight:700;color:#fff;margin-bottom:3px; }
        .gf-why-desc { font-size:13px;color:rgba(255,255,255,.55);line-height:1.5; }
        .gf-wa-direct { display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#16a34a,#15803d);border-radius:16px;padding:20px;color:#fff;text-decoration:none;transition:transform .25s,box-shadow .25s; }
        .gf-wa-direct:hover { transform:translateY(-3px);box-shadow:0 12px 32px rgba(22,163,74,.4); }
        .gf-wa-icon { width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0; }
        .gf-wa-text { font-weight:700;font-size:15px;color:#fff; }
        .gf-wa-sub  { font-size:12px;color:rgba(255,255,255,.7);margin-top:2px; }
        .gf-form-card { background:#fff;border:1px solid #e2e8f0;border-radius:24px;padding:40px;box-shadow:0 4px 32px rgba(15,23,42,.07); }
        @media(max-width:600px){ .gf-form-card{padding:24px} }
        .gf-row { display:grid;grid-template-columns:1fr 1fr;gap:16px; }
        @media(max-width:600px){ .gf-row{grid-template-columns:1fr} }
        .gf-label { display:block;font-size:13px;font-weight:700;color:#374151;margin-bottom:7px; }
        .gf-req { color:#ef4444; }
        .gf-error { font-size:12px;color:#ef4444;margin-top:5px;display:flex;align-items:center;gap:4px; }
        .gf-char { font-size:11px;color:#94a3b8;text-align:right;margin-top:4px; }
        .gf-note { font-size:12px;color:#94a3b8;text-align:center;margin-top:12px; }
        .gf-success { display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;text-align:center; }
        .gf-suc-circle { width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#16a34a,#15803d);display:flex;align-items:center;justify-content:center;margin-bottom:20px;box-shadow:0 8px 32px rgba(22,163,74,.3); }
      `}</style>

      <section id="getintouch" className="gf-section" ref={ref}>
        <div className="gf-inner">

          {/* Header */}
          <div style={{textAlign:'center',marginBottom:56}} className="reveal">
            <div className="gf-chip">
              <span style={{width:6,height:6,borderRadius:'50%',background:'#059669',display:'inline-block'}}/>
              Get In Touch
            </div>
            <h2 className="gf-title">
              Start Your{' '}
              <span className="grad-text">Journey Today</span>
            </h2>
            <p style={{color:'#64748b',fontSize:16,maxWidth:520,margin:'0 auto',lineHeight:1.7}}>
              Fill out the form and we'll reply via WhatsApp. Your global career is just one message away.
            </p>
          </div>

          <div className="gf-layout">

            {/* Left */}
            <div className="gf-left reveal-l">
              <div className="gf-why-card">
                <div className="gf-why-title">Why Contact Us?</div>
                {[
                  { e:'🚀', t:'Fast Response',      d:'We reply within 2 hours during office hours.' },
                  { e:'🔒', t:'100% Confidential',  d:'Your information is kept strictly private.' },
                  { e:'💬', t:'Free Consultation',  d:'Initial guidance and advice is completely free.' },
                  { e:'📋', t:'Document Guidance',  d:'We assist with all paperwork, start to finish.' },
                ].map((b,i)=>(
                  <div key={i} className="gf-why-item">
                    <div className="gf-why-icon">{b.e}</div>
                    <div>
                      <div className="gf-why-name">{b.t}</div>
                      <div className="gf-why-desc">{b.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="gf-wa-direct">
                <div className="gf-wa-icon">
                  <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <div>
                  <div className="gf-wa-text">Chat on WhatsApp Now</div>
                  <div className="gf-wa-sub">Direct chat — no form needed</div>
                </div>
                <svg style={{marginLeft:'auto',opacity:.7}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            {/* Right: form */}
            <div className="reveal-r" style={{transitionDelay:'.15s'}}>
              <div className="gf-form-card">
                {done ? (
                  <div className="gf-success">
                    <div className="gf-suc-circle">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:24,color:'#0f172a',marginBottom:8}}>
                      Message Sent!
                    </h3>
                    <p style={{color:'#64748b',fontSize:15,maxWidth:280}}>
                      Your enquiry was sent via WhatsApp. We'll respond shortly. Thank you!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:22,color:'#0f172a',marginBottom:6}}>Send Us a Message</h3>
                    <p style={{fontSize:14,color:'#64748b',marginBottom:28}}>Fields marked <span style={{color:'#ef4444'}}>*</span> are required.</p>

                    <div style={{display:'flex',flexDirection:'column',gap:18}}>

                      {/* Row 1 */}
                      <div className="gf-row">
                        <div>
                          <label className="gf-label">Full Name <span className="gf-req">*</span></label>
                          <input className={`field${err.name?' err':''}`} type="text" placeholder="Muhammad Ali" value={f.name} onChange={ch('name')}/>
                          {err.name && <div className="gf-error">⚠ {err.name}</div>}
                        </div>
                        <div>
                          <label className="gf-label">Phone Number <span className="gf-req">*</span></label>
                          <input className={`field${err.phone?' err':''}`} type="tel" placeholder="0333-1234567" value={f.phone} onChange={ch('phone')}/>
                          {err.phone && <div className="gf-error">⚠ {err.phone}</div>}
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="gf-row">
                        <div>
                          <label className="gf-label">Email <span style={{color:'#94a3b8',fontWeight:400}}>(optional)</span></label>
                          <input className={`field${err.email?' err':''}`} type="email" placeholder="you@example.com" value={f.email} onChange={ch('email')}/>
                          {err.email && <div className="gf-error">⚠ {err.email}</div>}
                        </div>
                        <div>
                          <label className="gf-label">Job Interest <span className="gf-req">*</span></label>
                          <select className={`field${err.job?' err':''}`} value={f.job} onChange={ch('job')} style={{cursor:'pointer'}}>
                            <option value="">Select category…</option>
                            {jobs.map(j=><option key={j} value={j}>{j}</option>)}
                          </select>
                          {err.job && <div className="gf-error">⚠ {err.job}</div>}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="gf-label">Message <span className="gf-req">*</span></label>
                        <textarea
                          className={`field${err.msg?' err':''}`}
                          rows={5} style={{resize:'none'}}
                          placeholder="Tell us about yourself, your experience, which country you're targeting, or any questions…"
                          value={f.msg} onChange={ch('msg')}
                        />
                        {err.msg && <div className="gf-error">⚠ {err.msg}</div>}
                        <div className="gf-char">{f.msg.length} / 500 characters</div>
                      </div>

                      {/* Submit */}
                      <button type="submit" className="btn-wa">
                        <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Send via WhatsApp
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </button>

                      <p className="gf-note">WhatsApp will open with your info pre-filled. 100% free & confidential.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
