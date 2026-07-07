import { useEffect, useState, useRef } from 'react';
import { FaCalendarAlt, FaUsers, FaBuilding, FaMapMarkedAlt } from 'react-icons/fa';

const STATS = [
  { icon: FaCalendarAlt, label: 'Since', value: 1997, suffix: '' },
  { icon: FaUsers, label: 'Placements', value: 10000, suffix: '+' },
  { icon: FaBuilding, label: 'Client Companies', value: 200, suffix: '+' },
  { icon: FaMapMarkedAlt, label: 'Coverage', value: 'Nationwide', suffix: '', isText: true },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <div className="py-12 px-5" style={{ background: '#C2185B' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {STATS.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="text-center">
              <Icon size={28} className="mx-auto mb-3" style={{ color: '#FFD23F' }} />
              <div className="font-display font-extrabold text-2xl md:text-3xl mb-1" style={{ color: '#fff' }}>
                {s.isText ? s.value : <Counter target={s.value} suffix={s.suffix} />}
              </div>
              <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
