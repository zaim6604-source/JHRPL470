import { useEffect, useRef, useState } from 'react';

function Counter({ end, suffix = '', label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !shown) { setShown(true); obs.unobserve(el); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown]);

  useEffect(() => {
    if (!shown) return;
    let start = 0;
    const step = Math.ceil(end / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [shown, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-extrabold" style={{ fontSize: 'clamp(36px,5vw,52px)', color: '#fff' }}>{count.toLocaleString()}{suffix}</div>
      <div className="text-sm font-medium mt-1" style={{ color: '#E6F3FB', fontFamily: 'Inter, sans-serif' }}>{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-14 md:py-16" style={{ background: 'var(--color-primary)' }}>
      <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        <Counter end={3500} suffix="+" label="Workers Placed" />
        <Counter end={10} suffix="+" label="Countries" />
        <Counter end={12} suffix="+" label="Years Serving" />
        <Counter end={100} suffix="%" label="Licensed & Verified" />
      </div>
    </section>
  );
}
