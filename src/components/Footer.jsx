import { useEffect, useRef } from 'react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#9C2A52' }} ref={ref}>
      <div className="blob blob-amber" style={{ width: 400, height: 400, top: '-30%', right: '-10%', opacity: 0.06 }} />

      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-0 relative z-10">
        <div className="reveal grid sm:grid-cols-2 gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                style={{ background: 'var(--color-cta)' }}>
                <i className="fas fa-briefcase text-base" style={{ color: 'var(--color-ink)' }} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[1.05rem] text-white">Zahid Buneri</span>
                <span className="text-[0.6rem] text-white/50 font-medium uppercase tracking-wider">Overseas Recruiting Agent</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-[1.75]">
              Your local connection to jobs across the Gulf. Based in Cheena Kalay, Buner — honest, personal guidance from first call to departure.
            </p>
          </div>

          {/* Quick links + Contact */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map(l => (
                  <li key={l.href}>
                    <a href={l.href} onClick={e => scrollTo(e, l.href)}
                      className="flex items-center gap-2 text-sm text-white/45 hover:text-white hover:pl-1 transition-all">
                      <i className="fas fa-chevron-right text-[0.55rem]" style={{ color: 'var(--color-cta)' }} /> {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact</h4>
              <div className="flex flex-col gap-4">
                <a href="https://wa.me/923345577225" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-white transition-all">
                  <i className="fab fa-whatsapp" style={{ color: 'var(--color-cta)' }} />
                  0334-5577225
                </a>
                <a href="mailto:info@zahidburneri.pk"
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-white transition-all">
                  <i className="fas fa-envelope" style={{ color: 'var(--color-cta)' }} />
                  info@zahidburneri.pk
                </a>
                <div className="flex items-start gap-3 text-sm text-white/45">
                  <i className="fas fa-map-marker-alt mt-0.5" style={{ color: 'var(--color-cta)' }} />
                  Cheena Kalay, Buner, KPK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1180px] mx-auto px-6 py-5 text-center">
          <p className="text-xs text-white/30">&copy; 2026 Zahid Buneri. All rights reserved. | Overseas Recruiting Agent, Cheena Kalay, Buner.</p>
        </div>
      </div>
    </footer>
  );
}
