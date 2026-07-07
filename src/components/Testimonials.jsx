import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'Sohail Khan',
    location: 'Saudi Arabia',
    role: 'Heavy Driver',
    text: 'Zahid helped me get a driving job in Dammam. From paperwork to the flight booking, he handled everything. I am now earning well and supporting my family back in Buner. Highly recommend!',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Rashid Ahmad',
    location: 'UAE',
    role: 'Construction Worker',
    text: 'I was unsure about going abroad but Zahid guided me through the entire process. The employer was verified and the job was exactly what was promised. Great service!',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    name: 'Naveed Ali',
    location: 'Qatar',
    role: 'Sales Assistant',
    text: 'Thanks to Zahid, I found a job in Doha within weeks. Everything was transparent and he kept me updated at every step. A trustworthy agent from our own area.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="blob blob-mulberry hidden lg:block" style={{ width: 300, height: 300, top: '5%', left: '-5%', opacity: 0.08 }} />
      <div className="blob blob-blue hidden lg:block" style={{ width: 250, height: 250, bottom: '5%', right: '-5%', opacity: 0.08 }} />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="SUCCESS STORIES" title="What People Say" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i}
              className="reveal bg-white rounded-2xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ borderColor: 'rgba(196,69,105,0.1)', transitionDelay: `${i * 0.1}s` }}>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <i key={si} className={`fas fa-star text-sm ${si < t.rating ? '' : 'text-gray-200'}`}
                    style={{ color: si < t.rating ? 'var(--color-cta)' : undefined }} />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#555' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Avatar overlap */}
              <div className="flex items-center gap-4">
                <div className="avatar-overlap">
                  <div className="avatar-item">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                </div>
                <div>
                  <strong className="block text-sm text-[var(--color-ink)]">{t.name}</strong>
                  <span className="text-xs" style={{ color: 'var(--color-primary)' }}>
                    {t.role} &middot; {t.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
