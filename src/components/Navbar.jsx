import { useState, useEffect } from 'react';

const leftLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Countries', href: '#countries' },
  { label: 'About', href: '#about' },
];
const rightLinks = [
  { label: 'Services', href: '#services' },
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
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const linkClass = (href) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
      active === href.replace('#', '')
        ? 'text-[#E0115F] bg-[#FFF0F4]'
        : scrolled
          ? 'text-gray-600 hover:text-[#E0115F] hover:bg-[#FFF0F4]'
          : 'text-gray-600 hover:text-[#E0115F] hover:bg-[#FFF0F4]'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-white/90 backdrop-blur-xl shadow-lg'
    }`}>
      <div className="max-w-[1180px] mx-auto px-6 h-full flex items-center justify-between">

        {/* Mobile hamburger - left */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg" aria-label="Menu">
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-slate-800 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-slate-800 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-slate-800 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>

        {/* Left links - desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {leftLinks.map(l => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)} className={linkClass(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Centered logo */}
        <a href="#home" onClick={e => scrollTo(e, '#home')} className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg" style={{ background: 'var(--color-primary)' }}>
            <i className="fas fa-globe-asia text-base" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-[1rem] leading-tight text-[#2E0A1C]`}>
              Gilget Overseas
            </span>
            <span className="flex items-center gap-1">
              <span className={`text-[0.55rem] font-medium uppercase tracking-wider text-gray-400`}>
                License
              </span>
              <span className="text-[0.55rem] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'var(--color-primary)', color: '#fff' }}>
                2192/PWR
              </span>
            </span>
          </div>
        </a>

        {/* Right links - desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {rightLinks.map(l => (
            <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)} className={linkClass(l.href)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={e => scrollTo(e, '#contact')}
            className="ml-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all shadow-lg"
            style={{ background: 'var(--color-cta)' }}>
            Apply Now
          </a>
        </nav>

        {/* Mobile placeholder */}
        <div className="md:hidden w-6" />
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-[80px] left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl px-6 py-5 transition-all duration-300 ${
        open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}>
        <ul className="flex flex-col gap-1">
          {[...leftLinks, ...rightLinks].map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => scrollTo(e, l.href)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active === l.href.replace('#','') ? 'text-[#E0115F] bg-[#FFF0F4]' : 'text-gray-700 hover:bg-gray-50'
                }`}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={e => scrollTo(e, '#contact')}
              className="block mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center text-white"
              style={{ background: 'var(--color-cta)' }}>
              Apply Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}