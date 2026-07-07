import { useEffect, useRef } from 'react';
import { site } from '../data/aleshahData';

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
        .cta-band { background:linear-gradient(135deg,var(--color-primary) 0%,var(--color-accent) 100%);padding:56px 24px;text-align:center; }
        .cta-inner { max-width:800px;margin:0 auto; }
        .cta-headline { font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:clamp(24px,3vw,36px);color:#fff;margin-bottom:20px; }
        .cta-btn { display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:30px;font-weight:800;font-size:14px;border:none;cursor:pointer;text-decoration:none;transition:all .25s;font-family:'Inter',sans-serif; }
        .cta-btn.solid { background:var(--ink);color:#fff; }
        .cta-btn.solid:hover { transform:translateY(-2px);box-shadow:0 8px 24px rgba(26,20,35,.3); }
      `}</style>

      <div className="cta-band" ref={ref}>
        <div className="cta-inner reveal">
          <div className="cta-headline">{site.cta.headline}</div>
          <a href={site.cta.ctaLink} target="_blank" rel="noopener noreferrer" className="cta-btn solid">
            <i className="fa-brands fa-whatsapp"></i> {site.cta.cta}
          </a>
        </div>
      </div>
    </>
  );
}