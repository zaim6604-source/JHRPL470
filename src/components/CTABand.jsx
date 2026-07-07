import { useEffect, useRef } from 'react';
import { site } from '../data/beaconData';

export default function CTABand() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.3 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .cta-band { background:linear-gradient(135deg,var(--color-primary, #0496FF) 0%,var(--color-cta, #FB5607) 100%);padding:56px 24px;text-align:center; }
        .cta-inner { max-width:800px;margin:0 auto; }
        .cta-headline { font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(24px,3vw,36px);color:#fff;margin-bottom:8px; }
        .cta-sub { font-size:15px;color:rgba(255,255,255,.8);margin-bottom:24px;font-family:'Inter',sans-serif; }
        .cta-btn { display:inline-flex;align-items:center;gap:10px;padding:14px 32px;border-radius:30px;font-weight:800;font-size:15px;border:none;cursor:pointer;text-decoration:none;transition:all .25s;font-family:'Inter',sans-serif; }
        .cta-btn.solid { background:var(--ink, #062A45);color:#fff; }
        .cta-btn.solid:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(6,42,69,.3); }
      `}</style>

      <div className="cta-band" ref={ref}>
        <div className="cta-inner reveal">
          <div className="cta-headline">{site.cta.headline}</div>
          <div className="cta-sub">Apply now and start your journey with Beacon Bright</div>
          <a href={site.cta.ctaLink} target="_blank" rel="noopener noreferrer" className="cta-btn solid">
            <i className="fa-brands fa-whatsapp"></i> {site.cta.cta}
          </a>
        </div>
      </div>
    </>
  );
}