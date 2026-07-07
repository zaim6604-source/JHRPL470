import { useEffect, useRef, useState } from 'react';
import { site } from '../data/aleshahData';

const FALLBACK = 'https://via.placeholder.com/600x400/FFF8E0/FF206E?text=Al+Eshah';

export default function Testimonials() {
  const ref = useRef(null);
  const [galleryErrs, setGalleryErrs] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const chatColors = [
    { bg: 'rgba(255,32,110,.08)', border: 'rgba(255,32,110,.15)' },
    { bg: 'rgba(65,234,212,.08)', border: 'rgba(65,234,212,.15)' },
    { bg: 'rgba(251,255,18,.12)', border: 'rgba(251,255,18,.2)' },
    { bg: 'rgba(255,32,110,.06)', border: 'rgba(255,32,110,.12)' },
    { bg: 'rgba(65,234,212,.06)', border: 'rgba(65,234,212,.12)' },
  ];

  return (
    <div ref={ref}>
      <style>{`
        .test-section { background:var(--color-background);padding:80px 24px;position:relative; }
        .test-inner { max-width:900px;margin:0 auto; }
        .test-chat { display:flex;flex-direction:column;gap:20px; }
        .test-bubble { display:flex;align-items:flex-start;gap:14px;max-width:80%;padding:20px 24px;border-radius:20px;position:relative; }
        .test-bubble.left { align-self:flex-start;border-bottom-left-radius:4px; }
        .test-bubble.right { align-self:flex-end;flex-direction:row-reverse;border-bottom-right-radius:4px; }
        .test-bubble-avatar { width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Plus Jakarta Sans',sans-serif;font-weight:900;font-size:15px;flex-shrink:0; }
        .test-bubble-stars { display:flex;gap:2px;margin-bottom:8px; }
        .test-bubble-stars i { color:var(--color-secondary);font-size:13px;text-shadow:0 0 4px rgba(251,255,18,.3); }
        .test-bubble-quote { font-size:14px;line-height:1.7;color:var(--ink-light);margin-bottom:10px; }
        .test-bubble-author { font-weight:700;font-size:13px;color:var(--ink); }
        .test-bubble-role { font-size:12px;color:var(--ink-light);opacity:.7; }
        @media(max-width:640px){ .test-bubble{max-width:90%;padding:16px 18px} }

        .gallery-section { background:var(--white);padding:60px 24px; }
        .gallery-inner { max-width:1200px;margin:0 auto; }
        .gallery-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:16px; }
        @media(max-width:768px){ .gallery-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:480px){ .gallery-grid{grid-template-columns:1fr} }
        .gallery-item { border-radius:14px;overflow:hidden;position:relative;cursor:pointer; }
        .gallery-item img { width:100%;height:220px;object-fit:cover;display:block;transition:transform .5s; }
        .gallery-item:hover img { transform:scale(1.08); }
      `}</style>

      {/* Testimonials */}
      <section className="test-section">
        <div className="test-inner">
          <div style={{textAlign:'center',marginBottom:48}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />SUCCESS STORIES
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(28px,3.5vw,42px)',color:'var(--ink)',marginBottom:14}}>
              What Our <span style={{color:'var(--color-primary)'}}>Workers Say</span>
            </h2>
            <p style={{color:'var(--ink-light)',fontSize:15,maxWidth:520,margin:'0 auto',lineHeight:1.7}}>
              Real stories from real people we've helped place in jobs abroad.
            </p>
          </div>

          <div className="test-chat">
            {site.testimonials.map((t, i) => (
              <div key={i} className={`test-bubble reveal ${i % 2 === 0 ? 'left' : 'right'}`} style={{
                background: chatColors[i].bg, border: `1px solid ${chatColors[i].border}`, transitionDelay: `${i * 0.1}s`,
              }}>
                <div className="test-bubble-avatar" style={{background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)', color: '#fff'}}>
                  {t.name[0]}
                </div>
                <div style={{flex:1}}>
                  <div className="test-bubble-stars">
                    {[...Array(t.stars)].map((_, j) => (<i key={j} className="fa-solid fa-star"></i>))}
                  </div>
                  <div className="test-bubble-quote">&ldquo;{t.quote}&rdquo;</div>
                  <div>
                    <span className="test-bubble-author">{t.name}</span>
                    <span className="test-bubble-role"> — {t.role}, {t.dest}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="gallery-inner">
          <div style={{textAlign:'center',marginBottom:36}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />Office & Travel
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(24px,3vw,36px)',color:'var(--ink)',marginBottom:8}}>
              Our <span style={{color:'var(--color-primary)'}}>Gallery</span>
            </h2>
          </div>
          <div className="gallery-grid">
            {site.gallery.map((url, i) => (
              <div key={i} className="gallery-item reveal" style={{transitionDelay:`${i*0.1}s`}}>
                <img src={galleryErrs[i] ? FALLBACK : url} alt={`Gallery ${i+1}`} onError={() => setGalleryErrs(p => ({...p, [i]: true}))} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}