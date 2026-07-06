import useInView from '../hooks/useInView';

export default function CtaBand() {
  const ref = useInView();

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(135deg, #E0115F 0%, #7B2D8E 100%)' }}>
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--color-accent)' }} />

      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.05) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Ready to Start Your Journey Abroad?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Take the first step toward a life-changing career. Apply now or reach out on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/923059900345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[#2E0A1C] font-bold text-[0.95rem] transition-all duration-200 shadow-lg hover:scale-105"
              style={{ background: 'var(--color-accent)' }}>
              <i className="fab fa-whatsapp text-lg" /> Apply Now
            </a>
            <a
              href="https://wa.me/923059900345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-[0.95rem] hover:bg-white/10 hover:border-white/70 transition-all duration-200">
              <i className="fab fa-whatsapp" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}