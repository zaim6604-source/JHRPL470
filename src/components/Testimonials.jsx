import useReveal from '../hooks/useReveal';

const testimonials = [
  {
    name: 'Ahmed Raza',
    dest: 'Saudi Arabia',
    role: 'Construction Supervisor',
    quote: 'Qadir International made my dream of working in Saudi Arabia a reality. From document processing to departure, they guided me at every step. Highly recommended.',
    rating: 5,
    img: '/images/testimonial-1.jpg',
  },
  {
    name: 'Fatima Bibi',
    dest: 'UAE',
    role: 'Hospitality Staff',
    quote: 'I was nervous about finding a legitimate agency, but Qadir International\'s professionalism and transparency won my trust. They found me a great position in Dubai.',
    rating: 5,
    img: '/images/testimonial-2.jpg',
  },
  {
    name: 'Usman Khan',
    dest: 'Qatar',
    role: 'Driver',
    quote: 'Thanks to Qadir International, I now have a well-paying job in Doha. Their team was always available to answer my questions and the orientation really helped.',
    rating: 5,
    img: '/images/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  useReveal('.te-reveal');

  return (
    <section id="testimonials" className="py-[clamp(80px,10vw,120px)] px-5 relative" style={{ background: '#fff' }}>
      <div className="max-w-5xl mx-auto">
        <div className="te-reveal reveal text-center mb-14">
          <span className="section-pill"><i className="fas fa-star" style={{ fontSize: 10 }} /> SUCCESS STORIES</span>
          <h2 className="font-display font-extrabold mt-4" style={{ fontSize: 'clamp(28px,5vw,44px)', color: 'var(--color-ink)', letterSpacing: '-0.8px' }}>
            Hear from <span style={{ color: 'var(--color-primary)' }}>Our Workers</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Quote-mark column */}
          <div className="te-reveal reveal-l md:w-1/3" style={{ textAlign: 'center', padding: '40px 24px', background: 'var(--color-background)', borderRadius: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 64, color: 'var(--color-primary)', opacity: 0.3, lineHeight: 1, marginBottom: 8 }}>
              <i className="fas fa-quote-right" />
            </div>
            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--color-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Real Stories</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#6B7280', marginTop: 8, lineHeight: 1.7 }}>
              Every number represents a life changed. Here are just a few of the thousands of workers we've placed.
            </p>
          </div>

          {/* Stacked mini cards */}
          <div className="flex-1 flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <div key={t.name}
                className="te-reveal reveal"
                style={{ transitionDelay: `${i * 0.12}s`, background: '#fff', borderRadius: 18, padding: '22px 24px', border: '1px solid rgba(0,107,166,0.08)', boxShadow: '0 4px 20px rgba(0,107,166,0.05)' }}>
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <i key={j} className="fas fa-star" style={{ color: '#FFBC42', fontSize: 13 }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic mb-4" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" onError={(e) => { e.target.src = '/images/fallback.jpg'; }} loading="lazy" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm" style={{ color: 'var(--color-ink)' }}>{t.name}</div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--color-primary)', fontFamily: 'Inter, sans-serif' }}>{t.dest} &mdash; {t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
