import { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255, 240, 245, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(194, 24, 91, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C2185B, #E91E8C)' }}>
            <span className="text-white font-display font-extrabold text-xs">JH</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-display font-extrabold text-base" style={{ color: '#3A0A22' }}>Juniper Human Resources</div>
            <div className="chip text-[8px] mt-0.5" style={{ padding: '1px 8px' }}>Est. 1997 &bull; Islamabad</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors border-none cursor-pointer bg-transparent"
              style={{ color: '#6B5B3E' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(194,24,91,0.08)'; e.currentTarget.style.color = '#C2185B'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B5B3E'; }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/juniperhumanresources/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center transition-colors"
            style={{ background: 'rgba(194,24,91,0.08)', color: '#C2185B' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#C2185B'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(194,24,91,0.08)'; e.currentTarget.style.color = '#C2185B'; }}
          >
            <FaFacebook size={16} />
          </a>
          <a
            href="https://wa.me/923003845414"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-4 !text-sm !gap-2"
          >
            <FaWhatsapp size={15} />
            <span className="hidden sm:inline">Hire Talent</span>
          </a>
          <button
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center border-none cursor-pointer bg-transparent"
            style={{ color: '#3A0A22' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-5 pb-5" style={{ background: 'rgba(255, 240, 245, 0.98)', backdropFilter: 'blur(14px)' }}>
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium border-none cursor-pointer transition-colors bg-transparent"
                style={{ color: '#3A0A22' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(194,24,91,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://www.facebook.com/juniperhumanresources/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
              style={{ color: '#C2185B' }}
            >
              <FaFacebook size={15} /> Facebook
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
