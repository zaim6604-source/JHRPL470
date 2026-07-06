export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const fallbackImg = (e) => { e.target.src = 'https://images.unsplash.com/photo-1488085061387-422e01b2a2ad?w=1600&q=80'; };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-[80px]">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          onError={fallbackImg}
        />
        {/* Ruby→plum gradient overlay */}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      {/* Floating stat chips */}
      <div className="floating-1 hidden lg:block absolute top-[20%] right-[6%] z-20">
        <div className="glass-pill rounded-2xl px-5 py-3 text-center shadow-2xl">
          <span className="block text-2xl font-black text-white leading-none">3500+</span>
          <span className="block text-[0.6rem] text-white/70 uppercase tracking-wider mt-1 font-medium">Placed Abroad</span>
        </div>
      </div>
      <div className="floating-3 hidden lg:block absolute top-[45%] left-[4%] z-20">
        <div className="glass-pill rounded-2xl px-5 py-3 text-center shadow-2xl">
          <span className="block text-2xl font-black text-white leading-none">12+</span>
          <span className="block text-[0.6rem] text-white/70 uppercase tracking-wider mt-1 font-medium">Countries</span>
        </div>
      </div>
      <div className="floating-2 hidden lg:block absolute bottom-[18%] right-[10%] z-20">
        <div className="glass-pill rounded-2xl px-5 py-3 text-center shadow-2xl">
          <span className="block text-2xl font-black text-white leading-none">15+</span>
          <span className="block text-[0.6rem] text-white/70 uppercase tracking-wider mt-1 font-medium">Years Exp</span>
        </div>
      </div>

      <div className="relative pb-16 z-10 max-w-[960px] mx-auto px-6 py-16 text-center w-full">
        {/* Pill badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-[0.7rem] font-bold tracking-wide"
            style={{ background: 'rgba(255,215,0,.2)', border: '1px solid rgba(255,215,0,.3)' }}>
            <i className="fas fa-certificate text-[var(--color-accent)]" />
            Govt. Licensed · 2192/PWR
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-5">
          Peshawar&apos;s Steady Path to a<br />
          <span style={{ color: 'var(--color-accent)' }}>Life-Changing Job Abroad</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-white/80 max-w-[680px] mx-auto leading-relaxed mb-10">
          Gilget Overseas Enterprises connects local workers to trusted employers across the Gulf and Europe — licensed, honest, complete.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a href="https://wa.me/923059900345" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold text-[0.95rem] transition-all duration-200 shadow-lg"
            style={{ background: 'var(--color-cta)' }}>
            <i className="fab fa-whatsapp text-lg" /> Apply Now
          </a>
          <a href="https://wa.me/923059900345" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-[0.95rem] hover:bg-white/10 hover:border-white/70 transition-all duration-200">
            <i className="fab fa-whatsapp" /> WhatsApp Us
          </a>
        </div>

        {/* 2192/PWR badge */}
        <div className="flex justify-center gap-3 text-sm text-white/60">
          <span className="inline-flex items-center gap-1.5">
            <i className="fas fa-check-circle text-[var(--color-accent)]" />
            License 2192/PWR
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="fas fa-check-circle text-[var(--color-accent)]" />
            Dabgari Garden, Peshawar
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <span className="block w-6 h-10 border-2 border-white/30 rounded-xl relative">
          <span className="scroll-dot absolute left-1/2 -translate-x-1/2 w-1.5 h-2.5 bg-white/60 rounded-full" style={{ top: '6px' }} />
        </span>
      </div>
    </section>
  );
}