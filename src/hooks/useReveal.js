import { useEffect } from 'react';

export default function useReveal(selector, threshold = 0.12) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);
}