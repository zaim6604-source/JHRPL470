const statChips = [
  { icon: 'fa-certificate', text: 'Overseas Agent' },
  { icon: 'fa-users', text: 'Trusted in Buner' },
  { icon: 'fa-globe', text: 'Gulf & Europe' },
  { icon: 'fa-map-marker-alt', text: 'Cheena Kalay' },
];

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-sunburst relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      <div className="blob blob-amber" style={{ width: 220, height: 220, top: '-5%', left: '20%' }} />
      <div className="blob blob-pink" style={{ width: 200, height: 200, bottom: '-10%', right: '-5%' }} />
      <div className="blob blob-blue" style={{ width: 180, height: 180, top: '50%', left: '-8%' }} />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div className="py-16">
            <div className="flex flex-wrap gap-3 mb-8">
              {statChips.map((p, i) => (
                <span key={i}
                  className={`glass-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[0.7rem] font-semibold tracking-wide shadow-lg floating-${i + 1}`}
                >
                  <i className={`fas ${p.icon}`} />
                  {p.text}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-5">
              Your Local Connection to<br />
              <span style={{ color: 'var(--color-cta)' }}>Jobs Across the Gulf</span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 max-w-[560px] leading-relaxed mb-10">
              Zahid Buneri helps Buner's workers reach trusted overseas employers — honest, personal guidance from first call to departure.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://wa.me/923345577225"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 btn-amber"
                style={{ background: 'var(--color-cta)', color: 'var(--color-ink)' }}>
                <i className="fab fa-whatsapp text-lg" /> Chat on WhatsApp
              </a>
              <a href="#contact" onClick={e => scrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 btn-outline-amber">
                <i className="fas fa-play-circle" /> Enquire Now
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {[
                { num: '350+', label: 'Placed Abroad' },
                { num: '8+',   label: 'Countries' },
                { num: '5+',   label: 'Years Experience' },
              ].map((s, i) => (
                <div key={i} className="glass-pill rounded-2xl px-5 py-3 text-center backdrop-blur-lg" style={{ minWidth: 130 }}>
                  <span className="block text-2xl font-black text-white leading-none" style={{ color: 'var(--color-cta)' }}>{s.num}</span>
                  <span className="block text-[0.65rem] text-white/70 uppercase tracking-wider mt-0.5 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20"
                style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop"
                  alt="Zahid Buneri"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80'; }}
                />
              </div>
              <div className="floating-2 absolute -bottom-3 -left-4 bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--color-cta)' }}>
                  <i className="fas fa-handshake text-sm" style={{ color: 'var(--color-ink)' }} />
                </div>
                <div>
                  <strong className="block text-xs text-[var(--color-ink)]">Personal</strong>
                  <span className="text-[0.6rem] text-gray-500">Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
