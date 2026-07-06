import useInView from '../hooks/useInView';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Countries', href: '#countries' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const ref = useInView();

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#B8004F' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-0 relative z-10">
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg" style={{ background: 'var(--color-primary)' }}>
                <i className="fas fa-globe-asia text-base" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[1.05rem] text-white">Gilget Overseas</span>
                <span className="text-[0.55rem] font-bold px-1.5 py-0.5 rounded-full inline-block mt-0.5"
                  style={{ background: 'var(--color-cta)', color: '#fff' }}>
                  2192/PWR
                </span>
              </div>
            </div>
            <p className="text-sm leading-[1.75]" style={{ color: 'rgba(255,255,255,.55)' }}>
              Your trusted partner for overseas employment from Peshawar. Connecting local workers with trusted employers across the Gulf and Europe.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={e => scrollTo(e, l.href)}
                    className="flex items-center gap-2 text-sm transition-all"
                    style={{ color: 'rgba(255,255,255,.5)' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.5)'}>
                    <i className="fas fa-chevron-right text-[0.55rem]" style={{ color: 'var(--color-accent)' }} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-0.5 flex-shrink-0 text-sm" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm leading-[1.65]" style={{ color: 'rgba(255,255,255,.55)' }}>
                  Flat 1, Red Crescent Building,<br />Dabgari Garden, Peshawar, KPK
                </span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone-alt flex-shrink-0 text-sm" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,.55)' }}>091-2590012</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-whatsapp flex-shrink-0 text-sm" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,.55)' }}>0305-9900345</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope flex-shrink-0 text-sm" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,.55)' }}>info@gilgetoverseas.pk</span>
              </div>
            </div>

            <div className="flex gap-2.5 mt-6">
              <a href="https://wa.me/923059900345" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 text-sm hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,.08)' }}>
                <i className="fab fa-whatsapp" />
              </a>
              <a href="mailto:info@gilgetoverseas.pk" aria-label="Email"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 text-sm hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,.08)' }}>
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
        <div className="max-w-[1180px] mx-auto px-6 py-5 text-center">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,.3)' }}>
            &copy; 2026 Gilget Overseas Enterprises. All rights reserved. | License 2192/PWR | Dabgari Garden, Peshawar
          </p>
        </div>
      </div>
    </footer>
  );
}