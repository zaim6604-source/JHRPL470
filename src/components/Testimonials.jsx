import { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';

const testimonials = [
  {
    name: 'Ahmed Khan',
    location: 'Saudi Arabia',
    role: 'Construction Supervisor',
    text: 'Gilget Overseas made my dream of working in Saudi Arabia a reality. From documentation to departure, their team guided me at every step. I am now earning a stable income and supporting my family back in Peshawar.',
    rating: 5,
  },
  {
    name: 'Fatima Ali',
    location: 'UAE',
    role: 'Hospitality Staff',
    text: 'I was nervous about finding a job abroad, but Gilget Overseas found me a wonderful position in Dubai. The pre-departure orientation was incredibly helpful. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mohammad Usman',
    location: 'Germany',
    role: 'Skilled Technician',
    text: 'The team at Gilget Overseas helped me with everything from my visa to trade tests. Their employer verification gave me peace of mind. I am now working in Berlin and loving it.',
    rating: 5,
  },
  {
    name: 'Zainab Noor',
    location: 'Qatar',
    role: 'Retail Associate',
    text: 'Thanks to Gilget Overseas, I secured a job in Doha within weeks. Their process was transparent and professional. I appreciate their honest approach and genuine care.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useInView();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="Success Stories" title="What Our Candidates Say" />
        </div>

        <div className="reveal relative">
          {/* Giant quotation mark */}
          <div className="quote-mark text-[12rem] leading-none text-center select-none pointer-events-none"
            style={{ color: 'var(--color-primary)' }}>
            &ldquo;
          </div>

          {/* Quote content */}
          <div className="relative -mt-20 text-center px-4">
            <p className="text-lg sm:text-xl leading-relaxed mb-6" style={{ color: '#444' }}>
              {t.text}
            </p>

            {/* Gold stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <i key={i} className="fas fa-star" style={{ color: 'var(--color-accent)' }} />
              ))}
            </div>

            <div>
              <strong className="block text-base text-[#2E0A1C]">{t.name}</strong>
              <span className="text-sm" style={{ color: 'var(--color-primary)' }}>
                {t.role} &middot; {t.location}
              </span>
            </div>
          </div>

          {/* Dot nav */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8' : ''
                }`}
                style={{
                  background: i === current ? 'var(--color-primary)' : 'rgba(224,17,95,.2)',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}