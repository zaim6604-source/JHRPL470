import { useState, useEffect, useRef } from 'react';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

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

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-black text-white">{count}{suffix}</span>
  );
}

const stats = [
  { end: 350, suffix: '+', label: 'Placed Abroad' },
  { end: 8, suffix: '+', label: 'Countries Served' },
  { end: 5, suffix: '+', label: 'Years Experience' },
  { end: 100, suffix: '+', label: 'Happy Families' },
];

export default function StatBand() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-16" ref={ref}
      style={{ background: 'var(--color-primary)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      <div className="relative z-10 max-w-[1180px] mx-auto px-6">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <Counter end={s.end} suffix={s.suffix} />
              <span className="block text-white/80 text-sm font-medium mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'var(--color-cta)' }} />
    </section>
  );
}
