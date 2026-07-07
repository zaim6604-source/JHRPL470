import { site } from '../data/beaconData';

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const quickLinks = [
  { l: 'Home',        id: 'home'         },
  { l: 'About',       id: 'about'        },
  { l: 'Services',    id: 'services'     },
  { l: 'Destinations',id: 'countries'    },
  { l: 'Testimonials',id: 'testimonials' },
  { l: 'Contact',     id: 'contact'      },
];

const serviceLinks = [
  'Overseas Job Placement',
  'HR Consultancy & Manpower',
  'Visa Processing',
  'Document Attestation',
];

export default function Footer() {
  return (
    <>
      <style>{`
        .ft { background:var(--color-highlight, #0077CC); }
        .ft-top { background:linear-gradient(135deg,var(--color-primary, #0496FF),var(--color-secondary, #5FB8FF)); }
        .ft-top-inner { max-width:1200px;margin:0 auto;padding:48px 24px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:24px; }
        @media(max-width:640px){ .ft-top-inner{grid-template-columns:1fr;text-align:center} }
        .ft-top-title { font-weight:900;font-size:clamp(20px,2.5vw,26px);color:#fff;margin-bottom:6px;font-family:'Poppins',sans-serif; }
        .ft-top-sub { font-size:14px;color:rgba(255,255,255,.7);font-weight:500; }
        .ft-top-btn { display:inline-flex;align-items:center;gap:8px;background:var(--ink, #062A45);color:#fff;font-weight:800;font-size:14px;padding:13px 26px;border-radius:12px;border:none;cursor:pointer;white-space:nowrap;transition:transform .2s,box-shadow .2s;font-family:'Inter',sans-serif; }
        .ft-top-btn:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(6,42,69,.3); }
        .ft-body { max-width:1200px;margin:0 auto;padding:56px 24px;display:grid;grid-template-columns:1.6fr 1fr 1fr 1.3fr;gap:40px; }
        @media(max-width:900px){ .ft-body{grid-template-columns:1fr 1fr;gap:32px} }
        @media(max-width:560px){ .ft-body{grid-template-columns:1fr} }
        .ft-col-title { font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:20px;display:flex;align-items:center;gap:8px;font-family:'Inter',sans-serif; }
        .ft-col-title::before { content:'';width:20px;height:2px;border-radius:99px;background:var(--color-secondary, #5FB8FF); }
        .ft-link { display:block;color:rgba(255,255,255,.65);font-size:14px;margin-bottom:10px;cursor:pointer;background:none;border:none;text-align:left;padding:0;transition:color .2s;font-family:'Inter',sans-serif; }
        .ft-link:hover { color:#fff; }
        .ft-phone-link { display:block;color:rgba(255,255,255,.65);font-size:13px;margin-bottom:7px;text-decoration:none;transition:color .2s; }
        .ft-phone-link:hover { color:#fff; }
        .ft-addr { font-size:13px;line-height:1.8;color:rgba(255,255,255,.65); }
        .ft-logo { display:flex;align-items:center;gap:12px;margin-bottom:20px; }
        .ft-logo-icon { width:44px;height:44px;border-radius:12px;background:var(--color-primary, #0496FF);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 14px rgba(4,150,255,.25);color:#fff;font-size:18px; }
        .ft-logo-name { font-weight:900;font-size:16px;color:#fff;line-height:1.2;font-family:'Poppins',sans-serif; }
        .ft-logo-sub  { font-size:11px;font-weight:600;color:var(--color-secondary, #5FB8FF);letter-spacing:.06em; }
        .ft-tagline { font-size:14px;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:16px;font-family:'Inter',sans-serif; }
        .ft-badge { display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:10px 14px;margin-bottom:20px; }
        .ft-soc { display:flex;gap:10px; }
        .ft-soc-btn { width:38px;height:38px;border-radius:10px;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all .2s;background:rgba(255,255,255,.06);color:rgba(255,255,255,.7);font-size:16px; }
        .ft-soc-btn:hover { border-color:var(--color-secondary, #5FB8FF);transform:translateY(-2px);box-shadow:0 4px 12px rgba(4,150,255,.12);background:rgba(255,255,255,.1);color:#fff; }
        .ft-bottom { border-top:1px solid rgba(255,255,255,.1);padding:20px 24px; }
        .ft-bottom-inner { max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px; }
        .ft-bottom-copy { font-size:13px;color:rgba(255,255,255,.45); }
      `}</style>

      <footer className="ft">

        {/* CTA strip */}
        <div className="ft-top">
          <div className="ft-top-inner">
            <div>
              <div className="ft-top-title">Ready to Work Abroad?</div>
              <div className="ft-top-sub">Contact Beacon Bright today &mdash; your global career starts here.</div>
            </div>
            <button className="ft-top-btn" onClick={() => go('contact')}>
              Get In Touch
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Main body */}
        <div className="ft-body">

          {/* Brand */}
          <div>
            <div className="ft-logo">
              <div className="ft-logo-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div>
                <div className="ft-logo-name">Beacon Bright</div>
                <div className="ft-logo-sub">Govt. Licensed OEP</div>
              </div>
            </div>
            <p className="ft-tagline">
              {site.footer.description}
            </p>
            <div className="ft-badge">
              <span style={{fontSize:15}}>
                <i className="fa-solid fa-certificate" style={{color:'var(--color-accent, #FFBE0B)'}}></i>
              </span>
              <span style={{fontSize:13,fontWeight:600,color:'rgba(255,255,255,.8)'}}>Govt. Licensed &middot; License No. [Add License]</span>
            </div>
            <div className="ft-soc">
              <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="ft-soc-btn" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href={`tel:${site.phone.replace(/-/g,'')}`} className="ft-soc-btn" aria-label="Phone">
                <i className="fa-solid fa-phone"></i>
              </a>
              <a href={`mailto:${site.emailDummy}`} className="ft-soc-btn" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
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

          {/* Destinations */}
          <div>
            <div className="ft-col-title">Destinations</div>
            {site.footer.destinations.map(d => (
              <button key={d} className="ft-link" onClick={() => go('countries')}>{d}</button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="ft-col-title">Contact Info</div>
            <p className="ft-addr" style={{marginBottom:18}}>
              {site.address.split(', ').map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}
            </p>
            <div style={{marginBottom:6,fontSize:12,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'rgba(255,255,255,.5)'}}>Phone</div>
            <a href={`tel:${site.phone.replace(/-/g,'')}`} className="ft-phone-link">{site.phone}</a>
            <div style={{marginTop:14,marginBottom:6,fontSize:12,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'rgba(255,255,255,.5)'}}>WhatsApp</div>
            <a href={site.whatsappLink} target="_blank" rel="noopener noreferrer" className="ft-phone-link">{site.whatsapp}</a>
            <div style={{marginTop:14,fontSize:13,color:'rgba(255,255,255,.65)'}}>
              <div>{site.emailDummy}</div>
              <div style={{marginTop:8,fontSize:12,color:'rgba(255,255,255,.45)'}}>Mon&ndash;Sat: 9:00 AM &ndash; 6:00 PM</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="ft-bottom-inner">
            <span className="ft-bottom-copy">
              &copy; {new Date().getFullYear()} Beacon Bright Overseas Employment Promoters. All rights reserved.
            </span>
            <span className="ft-bottom-copy">Mardan, KPK, Pakistan</span>
          </div>
        </div>
      </footer>
    </>
  );
}