import { site } from '../data/aleshahData';

const serviceLinks = [
  'Overseas Job Placement', 'Visa Processing', 'Document Attestation', 'Employer Verification',
];

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const quickLinks = [
  { l: 'Home', id: 'home' },
  { l: 'Process', id: 'process' },
  { l: 'About', id: 'about' },
  { l: 'Services', id: 'services' },
  { l: 'Destinations', id: 'countries' },
  { l: 'Contact', id: 'contact' },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .ft { background:var(--color-highlight); }
        .ft-top { background:linear-gradient(135deg,var(--color-primary) 0%,var(--color-accent) 100%); }
        .ft-top-inner { max-width:1200px;margin:0 auto;padding:48px 24px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:24px; }
        @media(max-width:640px){ .ft-top-inner{grid-template-columns:1fr;text-align:center} }
        .ft-top-title { font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:clamp(20px,2.5vw,26px);color:#fff;margin-bottom:6px; }
        .ft-top-sub { font-size:14px;color:rgba(255,255,255,.7);font-weight:500; }
        .ft-top-btn { display:inline-flex;align-items:center;gap:8px;background:var(--ink);color:var(--color-cta);font-weight:800;font-size:14px;padding:13px 26px;border-radius:12px;border:none;cursor:pointer;white-space:nowrap;transition:transform .2s,box-shadow .2s;font-family:'Inter',sans-serif; }
        .ft-top-btn:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.2); }
        .ft-body { max-width:1200px;margin:0 auto;padding:56px 24px;display:grid;grid-template-columns:1.6fr 1fr 1fr 1.3fr;gap:40px; }
        @media(max-width:900px){ .ft-body{grid-template-columns:1fr 1fr;gap:32px} }
        @media(max-width:560px){ .ft-body{grid-template-columns:1fr} }
        .ft-col-title { font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:20px;display:flex;align-items:center;gap:8px;font-family:'Plus Jakarta Sans',sans-serif; }
        .ft-col-title::before { content:'';width:20px;height:2px;border-radius:99px;background:var(--color-accent); }
        .ft-link { display:block;color:rgba(255,255,255,.65);font-size:14px;margin-bottom:10px;cursor:pointer;background:none;border:none;text-align:left;padding:0;transition:color .2s;font-family:'Inter',sans-serif; }
        .ft-link:hover { color:var(--color-accent); }
        .ft-phone-link { display:block;color:rgba(255,255,255,.65);font-size:13px;margin-bottom:7px;text-decoration:none;transition:color .2s; }
        .ft-phone-link:hover { color:var(--color-accent); }
        .ft-addr { font-size:13px;line-height:1.8;color:rgba(255,255,255,.65); }
        .ft-logo { display:flex;align-items:center;gap:12px;margin-bottom:20px; }
        .ft-logo-icon { width:44px;height:44px;border-radius:12px;background:var(--color-primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 14px rgba(255,32,110,.35); }
        .ft-logo-name { font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:16px;color:#fff;line-height:1.2; }
        .ft-logo-sub { font-size:11px;font-weight:600;color:var(--color-accent);letter-spacing:.06em; }
        .ft-tagline { font-size:14px;color:rgba(255,255,255,.65);line-height:1.8;margin-bottom:16px; }
        .ft-badge { display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:10px 14px;margin-bottom:20px; }
        .ft-soc { display:flex;gap:10px; }
        .ft-soc-btn { width:38px;height:38px;border-radius:10px;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all .2s;background:rgba(255,255,255,.08);color:#fff; }
        .ft-soc-btn:hover { border-color:var(--color-accent);transform:translateY(-2px);background:rgba(65,234,212,.1); }
        .ft-bottom { border-top:1px solid rgba(255,255,255,.1);padding:20px 24px; }
        .ft-bottom-inner { max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px; }
        .ft-bottom-copy { font-size:13px;color:rgba(255,255,255,.5); }
      `}</style>

      <footer className="ft">
        {/* CTA strip */}
        <div className="ft-top">
          <div className="ft-top-inner">
            <div>
              <div className="ft-top-title">Ready to Work Abroad?</div>
              <div className="ft-top-sub">Contact Al Eshah International today — your global career starts here.</div>
            </div>
            <button className="ft-top-btn" onClick={() => window.open(site.whatsappLink, '_blank')}>
              <i className="fa-brands fa-whatsapp"></i> Quick Apply
            </button>
          </div>
        </div>

        {/* Main body */}
        <div className="ft-body">
          {/* Brand */}
          <div>
            <div className="ft-logo">
              <div className="ft-logo-icon">
                <i className="fa-solid fa-earth-asia" style={{color:'#fff',fontSize:18}}></i>
              </div>
              <div>
                <div className="ft-logo-name">Al Eshah International</div>
                <div className="ft-logo-sub">License 2197 / SKT</div>
              </div>
            </div>
            <p className="ft-tagline">{site.footer.description}</p>
            <div className="ft-badge">
              <i className="fa-solid fa-certificate" style={{fontSize:13,color:'var(--color-accent)'}}></i>
              <span style={{fontSize:13,fontWeight:600,color:'rgba(255,255,255,.85)'}}>{site.licenseDisplay}</span>
            </div>
            <div className="ft-soc">
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="ft-soc-btn" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp" style={{fontSize:16}}></i>
              </a>
              <a href={`tel:${site.phone.replace(/-/g,'')}`} className="ft-soc-btn" aria-label="Phone">
                <i className="fa-solid fa-phone" style={{fontSize:14}}></i>
              </a>
              <a href={`mailto:${site.emailDummy}`} className="ft-soc-btn" aria-label="Email">
                <i className="fa-solid fa-envelope" style={{fontSize:14}}></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="ft-col-title">Quick Links</div>
            {quickLinks.map(({ l, id }) => (
              <button key={id} className="ft-link" onClick={() => go(id)}>{l}</button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="ft-col-title">Our Services</div>
            {serviceLinks.map(s => (
              <button key={s} className="ft-link" onClick={() => go('services')}>{s}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="ft-col-title">Contact Info</div>
            <p className="ft-addr" style={{marginBottom:18}}>
              {site.address.split(',').map((line, i) => <span key={i}>{line.trim()}<br/></span>)}
            </p>
            <div style={{marginBottom:6,fontSize:12,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'rgba(255,255,255,.5)'}}>Phone</div>
            <a href={`tel:${site.phone.replace(/-/g,'')}`} className="ft-phone-link">{site.phone}</a>
            <div style={{marginTop:14,marginBottom:6,fontSize:12,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'rgba(255,255,255,.5)'}}>WhatsApp</div>
            <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="ft-phone-link" style={{display:'flex',alignItems:'center',gap:6}}>
              <i className="fa-brands fa-whatsapp" style={{fontSize:13}}></i> {site.whatsapp}
            </a>
            <div style={{marginTop:14,fontSize:12,color:'rgba(255,255,255,.5)'}}>
              Mon–Sat: 9:00 AM – 6:00 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="ft-bottom-inner">
            <span className="ft-bottom-copy">
              © {new Date().getFullYear()} Al Eshah International. All rights reserved. {site.licenseDisplay}
            </span>
            <span className="ft-bottom-copy">Commissioner Road, Sialkot, Punjab</span>
          </div>
        </div>
      </footer>
    </>
  );
}