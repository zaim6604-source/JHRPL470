import useReveal from '../hooks/useReveal';

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Qadir International Office' },
  { src: '/images/gallery-2.jpg', alt: 'Team at Work' },
  { src: '/images/gallery-3.jpg', alt: 'Client Meeting' },
  { src: '/images/gallery-4.jpg', alt: 'Departure Ceremony' },
];

export default function Gallery() {
  useReveal('.ga-reveal');

  return (
    <section className="py-[clamp(60px,8vw,100px)] px-5" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="ga-reveal reveal text-center mb-12">
          <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(24px,4vw,36px)', color: 'var(--color-ink)', letterSpacing: '-0.8px' }}>
            Our <span style={{ color: 'var(--color-primary)' }}>Gallery</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="ga-reveal reveal rounded-2xl overflow-hidden" style={{ transitionDelay: `${i * 0.1}s`, aspectRatio: '1' }}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover img-zoom" onError={(e) => { e.target.src = '/images/fallback.jpg'; }} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
