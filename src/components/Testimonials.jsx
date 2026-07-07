import { useEffect, useRef, useState } from 'react';
import { site } from '../data/beaconData';

const FALLBACK = 'https://via.placeholder.com/600x400/E8F5FF/0496FF?text=Beacon+Bright';

export default function Testimonials() {
  const ref = useRef(null);
  const [galleryErrs, setGalleryErrs] = useState({});
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) en.target.classList.add('show'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const prev = () => setActiveIdx(i => (i === 0 ? site.testimonials.length - 1 : i - 1));
  const next = () => setActiveIdx(i => (i === site.testimonials.length - 1 ? 0 : i + 1));

  return (
    <div ref={ref}>
      <style>{`
        .test-section { background:var(--alt-section, #F0F8FF);padding:80px 24px;position:relative; }
        .test-inner { max-width:1100px;margin:0 auto; }
        .test-coverflow { position:relative;display:flex;align-items:center;justify-content:center;padding:40px 60px;overflow:hidden; }
        .test-coverflow-track { display:flex;align-items:center;gap:0;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none;padding:20px 0;width:100%;justify-content:center; }
        .test-coverflow-track::-webkit-scrollbar { display:none; }
        .test-cover-card { flex:0 0 340px;scroll-snap-align:center;transition:all .5s ease;opacity:.45;transform:scale(.88) perspective(800px) rotateY(10deg);cursor:pointer;padding:0 8px; }
        .test-cover-card.active { opacity:1;transform:scale(1) perspective(800px) rotateY(0deg); }
        .test-cover-card.prev { opacity:.45;transform:scale(.88) perspective(800px) rotateY(10deg); }
        .test-cover-card.next { opacity:.45;transform:scale(.88) perspective(800px) rotateY(-10deg); }
        .test-card-inner { background:#fff;border-radius:20px;padding:32px 28px;border:1px solid var(--card-border, #D0E4F5);box-shadow:0 8px 32px rgba(0,0,0,.04);text-align:center;min-height:280px;display:flex;flex-direction:column;justify-content:center; }
        .test-nav-btn { position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;background:#fff;border:1px solid var(--card-border, #D0E4F5);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:5;transition:all .25s;box-shadow:0 2px 12px rgba(0,0,0,.06);color:var(--color-primary, #0496FF);font-size:16px; }
        .test-nav-btn:hover { background:var(--color-primary, #0496FF);color:#fff;border-color:var(--color-primary, #0496FF); }
        .test-nav-btn.left { left:0; }
        .test-nav-btn.right { right:0; }
        @media(max-width:768px){
          .test-cover-card { flex:0 0 280px; }
          .test-coverflow { padding:20px 10px; }
          .test-nav-btn { width:36px;height:36px;font-size:13px; }
        }

        .gallery-section { background:var(--white, #fff);padding:60px 24px; }
        .gallery-inner { max-width:1200px;margin:0 auto; }
        .gallery-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:16px; }
        @media(max-width:768px){ .gallery-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:480px){ .gallery-grid{grid-template-columns:1fr} }
        .gallery-item { border-radius:14px;overflow:hidden;position:relative;cursor:pointer; }
        .gallery-item img { width:100%;height:220px;object-fit:cover;display:block;transition:transform .5s; }
        .gallery-item:hover img { transform:scale(1.08); }
      `}</style>

      {/* Testimonials coverflow */}
      <section className="test-section" id="testimonials">
        <div className="test-inner">
          <div style={{textAlign:'center',marginBottom:48}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />SUCCESS STORIES
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(28px,3.5vw,42px)',color:'var(--ink, #062A45)',marginBottom:14,fontFamily:"'Poppins',sans-serif"}}>
              What Our <span style={{color:'var(--color-primary, #0496FF)'}}>Workers Say</span>
            </h2>
            <p style={{color:'var(--ink-light, #4A5E7A)',fontSize:15,maxWidth:520,margin:'0 auto',lineHeight:1.7}}>
              Real stories from real people we&rsquo;ve helped place in jobs abroad.
            </p>
          </div>

          <div className="test-coverflow reveal">
            <button className="test-nav-btn left" onClick={prev} aria-label="Previous">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="test-coverflow-track">
              {site.testimonials.map((t, i) => {
                let cls = 'test-cover-card';
                if (i === activeIdx) cls += ' active';
                else if (i === (activeIdx === 0 ? site.testimonials.length - 1 : activeIdx - 1)) cls += ' prev';
                else if (i === (activeIdx === site.testimonials.length - 1 ? 0 : activeIdx + 1)) cls += ' next';
                return (
                  <div key={i} className={cls} onClick={() => setActiveIdx(i)}>
                    <div className="test-card-inner">
                      <div style={{display:'flex',gap:3,justifyContent:'center',marginBottom:12}}>
                        {[...Array(t.stars)].map((_, j) => (
                          <i key={j} className="fa-solid fa-star" style={{color:'var(--color-accent, #FFBE0B)',fontSize:15}}></i>
                        ))}
                      </div>
                      <div style={{fontSize:'clamp(14px,1.6vw,15px)',lineHeight:1.7,color:'var(--ink-light, #4A5E7A)',marginBottom:16,fontStyle:'italic'}}>
                        &ldquo;{t.quote}&rdquo;
                      </div>
                      <div>
                        <div style={{fontWeight:700,fontSize:15,color:'var(--ink, #062A45)'}}>{t.name}</div>
                        <div style={{fontSize:13,color:'var(--ink-light, #4A5E7A)',opacity:.7}}>{t.role}, {t.dest}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="test-nav-btn right" onClick={next} aria-label="Next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="gallery-inner">
          <div style={{textAlign:'center',marginBottom:36}} className="reveal">
            <div className="section-pill" style={{margin:'0 auto 18px'}}>
              <span className="pill-dot" />OUR GALLERY
            </div>
            <h2 style={{fontWeight:900,fontSize:'clamp(24px,3vw,36px)',color:'var(--ink, #062A45)',marginBottom:8,fontFamily:"'Poppins',sans-serif"}}>
              Office &amp; <span style={{color:'var(--color-primary, #0496FF)'}}>Travel</span>
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