import { useEffect, useRef } from 'react';

export default function CtaBand() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--color-cta)' }} />

      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Ready to Work Abroad?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Take the first step. Reach out on WhatsApp and let me help you find the right opportunity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/923345577225"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-[0.95rem] transition-all duration-200 shadow-lg hover:scale-105 btn-amber"
              style={{ background: 'var(--color-cta)', color: 'var(--color-ink)' }}>
              <i className="fab fa-whatsapp text-lg" /> Apply Now
            </a>
            <a
              href="https://wa.me/923345577225"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-[0.95rem] hover:bg-white/10 hover:border-white/70 transition-all duration-200">
              <i className="fab fa-whatsapp" /> WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
