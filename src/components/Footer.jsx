import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaArrowUp, FaHeart, FaFacebook } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  'Manpower Recruitment', 'Executive Search', 'Permanent Placement',
  'Contract Staffing', 'Payroll Management', 'HR Consulting',
];

const SECTORS_LIST = [
  'IT & Software', 'Banking & Finance', 'Oil & Gas',
  'Construction', 'Healthcare', 'Manufacturing',
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden" style={{ background: '#AD1457' }}>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 bg-white -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 py-[clamp(48px,8vw,72px)]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C2185B, #E91E8C)' }}>
                <span className="font-display font-extrabold text-white text-sm">JH</span>
              </div>
              <div>
                <div className="font-display font-extrabold text-base text-white">Juniper HR</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,210,63,0.7)' }}>Est. 1997 &bull; Islamabad</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Pakistan's trusted manpower recruitment agency, connecting employers with top talent since 1997.
            </p>
            <a
              href="https://wa.me/923003845414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg px-4 py-2 no-underline transition-colors"
              style={{ color: '#FFD23F', background: 'rgba(255,210,63,0.1)' }}
            >
              <FaWhatsapp size={16} /> 0300-3845414
            </a>
            <a
              href="https://www.facebook.com/juniperhumanresources/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg px-4 py-2 no-underline transition-colors ml-2"
              style={{ color: '#FFD23F', background: 'rgba(255,210,63,0.1)' }}
            >
              <FaFacebook size={16} /> Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5" style={{ color: '#FFD23F' }}>Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <button key={l.label} onClick={() => scrollTo(l.href)}
                  className="bg-none border-none cursor-pointer text-left text-sm transition-colors p-0"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD23F'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5" style={{ color: '#FFD23F' }}>Services</h4>
            <div className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <span key={s} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Sectors + Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5" style={{ color: '#FFD23F' }}>Sectors</h4>
            <div className="flex flex-col gap-2.5 mb-6">
              {SECTORS_LIST.map((s) => (
                <span key={s} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s}</span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <FaPhone size={12} /> 051-8895008
              </div>
              <div className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <FaMapMarkerAlt size={12} className="mt-0.5" />
                <span>4th Floor, Juniper Tower, F-6 Markaz, Islamabad, 44220</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            &copy; {new Date().getFullYear()} Juniper Human Resource Provider (Pvt) Ltd &mdash; All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Made with <FaHeart size={10} className="text-red-400" /> in Islamabad
            </span>
            <button onClick={scrollToTop}
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <FaArrowUp size={13} style={{ color: 'rgba(255,255,255,0.5)' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
