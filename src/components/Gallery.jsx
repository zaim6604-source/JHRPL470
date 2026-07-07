import { useState } from 'react';
import useReveal from '../hooks/useReveal';

const IMAGES = [
  { src: '/images/corporate-office.jpg', alt: 'Corporate Office' },
  { src: '/images/team-meeting.jpg', alt: 'Team Meeting' },
  { src: '/images/interview.jpg', alt: 'Interview Session' },
  { src: '/images/professionals.jpg', alt: 'Our Professionals' },
];

export default function Gallery() {
  useReveal('.gll-reveal');
  const [errors, setErrors] = useState({});

  return (
    <section className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 gll-reveal reveal">
          <span className="section-pill">GALLERY</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#3A0A22' }}>
            Our Office &amp; Team
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            A glimpse into our workspace and team culture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="gll-reveal reveal rounded-2xl overflow-hidden group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {!errors[i] ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => setErrors((p) => ({ ...p, [i]: true }))}
                />
              ) : (
                <div className="w-full h-64 md:h-72 flex items-center justify-center rounded-2xl" style={{ background: '#FFF0F5' }}>
                  <span className="text-sm font-medium" style={{ color: '#C2185B' }}>{img.alt}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
