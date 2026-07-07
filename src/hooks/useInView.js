import { useEffect, useRef } from 'react';

export default function useInView(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    el.querySelectorAll('.reveal').forEach(child => obs.observe(child));
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}