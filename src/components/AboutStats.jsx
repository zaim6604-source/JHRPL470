import { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useInView();

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, visible]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <span ref={ref} className="text-3xl font-black text-white">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { end: 3500, suffix: '+', label: 'Placed Abroad' },
  { end: 12, suffix: '+', label: 'Countries' },
  { end: 15, suffix: '+', label: 'Years Experience' },
  { end: 1, suffix: '', label: 'License 2192/PWR' },
];

export default function AboutStats() {
  const ref = useInView();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="Who We Are" title="About Gilget Overseas Enterprises" />
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-center">
          {/* Framed photo */}
          <div className="reveal">
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-xl">
                <img
                  src="/images/about.jpg"
                  alt="Gilget Overseas Enterprises team"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'; }}
                />
              </div>
              {/* Floating badge */}
              <div className="floating-3 absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-2xl"
                style={{ boxShadow: '0 20px 60px rgba(224,17,95,.15)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white" style={{ background: 'var(--color-primary)' }}>
                  <i className="fas fa-award" />
                </div>
                <div>
                  <strong className="block text-sm text-[#2E0A1C]">Licensed Agency</strong>
                  <span className="text-xs" style={{ color: 'var(--color-cta)' }}>2192/PWR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal">
            <p className="text-base leading-[1.85] mb-4" style={{ color: '#444' }}>
              <strong>Gilget Overseas Enterprises</strong> is a government-licensed overseas employment agency based in <strong>Dabgari Garden, Peshawar, KPK</strong>.
              With License <strong>2192/PWR</strong>, we are dedicated to connecting local workers with trusted employers across the Gulf and Europe.
            </p>
            <p className="text-sm leading-[1.8] mb-7" style={{ color: '#777' }}>
              We provide complete, honest recruitment services — from documentation and visa processing to medical coordination and
              pre-departure orientation. Our team ensures every candidate is fully prepared for their journey abroad.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                'Government Licensed',
                'Ethical Recruitment',
                'No Hidden Fees',
                'End-to-End Support',
                'Pre-Departure Training',
              ].map((t, i) => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? 'var(--color-background)' : 'rgba(123,45,142,.08)',
                    color: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-cta)',
                  }}>
                  <i className="fas fa-check-circle" />
                  {t}
                </span>
              ))}
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 rounded-xl p-5" style={{ background: 'var(--color-background)', border: '1px solid rgba(224,17,95,.1)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: 'var(--color-primary)' }}>
                <i className="fas fa-map-marker-alt text-sm" />
              </div>
              <div>
                <strong className="block text-sm text-[#2E0A1C] mb-0.5">Office Address</strong>
                <span className="text-sm" style={{ color: '#666' }}>Flat 1, Red Crescent Building, Dabgari Garden, Peshawar, KPK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats band - inline */}
        <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl p-8"
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-cta))' }}>
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <Counter end={s.end} suffix={s.suffix} />
              <span className="block text-white/80 text-sm font-medium mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}