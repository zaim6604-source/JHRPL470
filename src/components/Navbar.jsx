import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md`}
    >
      <div className="container-pad">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-misrial-primary flex items-center justify-center">
              <i className="fas fa-briefcase text-white text-sm" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-heading font-bold text-sm md:text-base text-[#2B1400]`}>
                Misrial Enterprises
              </span>
              <span className={`text-[10px] md:text-xs font-medium tracking-wider text-misrial-primary`}>
                MANPOWER RECRUITMENT
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-misrial-cta text-[#2B1400]`}
              >
                {link.label}
              </a>
            ))}
            <span className="inline-flex items-center gap-1.5 bg-misrial-cta/15 text-misrial-cta px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-misrial-cta/30">
              <i className="fas fa-certificate" />
              2203/RWP
            </span>
            <a
              href="https://wa.me/923215667136"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-misrial-cta hover:bg-misrial-cta/90 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <i className="fas fa-paper-plane" />
              Apply Now
            </a>
          </div>

          <button
            className={`md:hidden text-xl text-[#2B1400]`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-pad py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-[#2B1400] hover:text-misrial-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="inline-flex items-center gap-1.5 bg-misrial-cta/15 text-misrial-cta px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-misrial-cta/30">
              <i className="fas fa-certificate" />
              2203/RWP
            </span>
            <a
              href="https://wa.me/923215667136"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-misrial-cta hover:bg-misrial-cta/90 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all"
            >
              <i className="fas fa-paper-plane mr-2" />
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}