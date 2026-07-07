import { useState, useEffect } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      const y = window.scrollY + 100;
      sections.forEach(sec => {
        if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight)
          setActive(sec.id);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-[1180px] mx-auto px-6 h-full flex items-center justify-between">
        <a href="#home" onClick={e => scrollTo(e, '#home')} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
            style={{ background: 'var(--color-primary)' }}>
            <i className="fas fa-briefcase text-base" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-[1.05rem] leading-tight ${scrolled ? 'text-[var(--color-ink)]' : 'text-white'}`}>
              Zahid Buneri
            </span>
            <span className={`text-[0.6rem] font-medium uppercase tracking-wider ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
              Overseas Recruiting Agent
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)}
              className={`px-3.5 py-2 text-sm font-medium transition-all relative ${
                active === l.href.replace('#','')
                  ? 'text-[var(--color-primary)]'
                  : scrolled
                    ? 'text-gray-600 hover:text-[var(--color-primary)]'
                    : 'text-white/80 hover:text-white'
              }`}>
              {l.label}
              {active === l.href.replace('#','') && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ background: 'var(--color-cta)' }} />
              )}
            </a>
          ))}
          <a
            href="https://wa.me/923345577225"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg"
            style={{ background: 'var(--color-cta)', color: 'var(--color-ink)' }}>
            <i className="fab fa-whatsapp mr-1.5" /> WhatsApp
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg" aria-label="Menu">
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 ${scrolled ? 'bg-[var(--color-ink)]' : 'bg-white'} ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 ${scrolled ? 'bg-[var(--color-ink)]' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 ${scrolled ? 'bg-[var(--color-ink)]' : 'bg-white'} ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl px-6 py-5 transition-all duration-300 ${
        open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}>
        <ul className="flex flex-col gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => scrollTo(e, l.href)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === l.href.replace('#','') ? 'text-[var(--color-primary)] bg-[var(--color-background)]' : 'text-gray-700 hover:bg-gray-50'
                }`}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/923345577225"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center"
              style={{ background: 'var(--color-cta)', color: 'var(--color-ink)' }}>
              <i className="fab fa-whatsapp mr-1.5" /> WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
