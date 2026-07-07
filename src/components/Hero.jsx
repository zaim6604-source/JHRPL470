import { useScrollAnimation } from '../hooks/useScrollAnimation';

const fallbackImg = '/src/assets/images/gold-street/fallback.jpg';

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="hero" className="relative min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Panel — Solid Orange */}
        <div className="w-full md:w-1/2 bg-misrial-primary flex items-center relative z-10">
          <div
            ref={ref}
            className={`container-pad py-24 md:py-0 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="inline-flex items-center gap-1.5 bg-white/15 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <i className="fas fa-certificate" />
              License 2203/RWP — Govt. Registered
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-5">
              Rawalpindi's Reliable Route to<br />
              <span className="text-misrial-cta">Rewarding Work Abroad</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-8">
              Misrial Enterprises places local workers with trusted Gulf and
              European employers — licensed, honest, complete.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/923215667136"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-misrial-cta hover:bg-misrial-cta/90 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 text-base"
              >
                <i className="fas fa-paper-plane" />
                Apply via WhatsApp
              </a>
              <a
                href="https://wa.me/923215667136"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white hover:bg-white hover:text-misrial-primary font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 text-base"
              >
                <i className="fab fa-whatsapp" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { num: '3500+', label: 'Workers Placed' },
                { num: '12+', label: 'Countries' },
                { num: '15+', label: 'Years Trusted' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {s.num}
                  </div>
                  <div className="text-xs text-white/70 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel — Full Height Photo Column */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen overflow-hidden">
          <img
            src="/src/assets/images/hero-bg.jpg"
            alt="Workers abroad"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.src = fallbackImg; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-misrial-primary/40 to-[#2B1400]/50" />

          {/* Wavy inner seam */}
          <div className="absolute left-0 top-0 bottom-0 w-24 hidden md:block pointer-events-none">
            <div
              className="absolute inset-0 bg-misrial-primary"
              style={{
                clipPath: "polygon(100% 0%, 60% 12%, 85% 28%, 50% 48%, 80% 65%, 55% 82%, 100% 100%, 0% 100%, 0% 0%)",
              }}
            />
          </div>

          {/* Right panel content */}
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-6 md:p-12">
            <span className="self-start mb-4 bg-misrial-cta/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <i className="fas fa-shield-halved" />
              2203/RWP — LICENSED
            </span>
            <div className="flex flex-wrap gap-3">
              {['Overseas Recruitment', 'Visa Processing', 'Document Attestation'].map((chip, i) => (
                <span key={i} className="bg-white/15 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-misrial-background to-transparent" />
    </section>
  );
}