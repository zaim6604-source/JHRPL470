import { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';

export default function MapSection() {
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
      <div className="blob blob-blue hidden lg:block" style={{ width: 250, height: 250, top: '-10%', right: '-5%', opacity: 0.1 }} />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="FIND ME" title="My Location"
            sub="Cheena Kalay, Buner, KPK, Pakistan" />
        </div>
        <div className="reveal rounded-[1.5rem] overflow-hidden shadow-xl"
          style={{ border: '1px solid rgba(196,69,105,0.1)', boxShadow: '0 20px 60px rgba(196,69,105,0.08)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d72.49204104232857!3d34.45193193471581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI3JzA3LjAiTiA3MsKwMjknMzEuMyJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%" height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zahid Buneri Location - Cheena Kalay, Buner"
          />
        </div>
      </div>
    </section>
  );
}
