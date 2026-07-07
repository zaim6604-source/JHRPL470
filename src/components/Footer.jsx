const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Process', href: '#process' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  { label: 'Overseas Job Placement', href: '#services' },
  { label: 'Visa Processing', href: '#services' },
  { label: 'Document Attestation', href: '#services' },
  { label: 'Medical & Trade Test', href: '#services' },
  { label: 'Pre-Departure Orientation', href: '#services' },
  { label: 'Air Ticketing & Travel', href: '#services' },
];

const destinations = [
  { label: 'Saudi Arabia', href: '#destinations' },
  { label: 'UAE', href: '#destinations' },
  { label: 'Qatar', href: '#destinations' },
  { label: 'Oman', href: '#destinations' },
  { label: 'Germany', href: '#destinations' },
  { label: 'Italy', href: '#destinations' },
  { label: 'Poland', href: '#destinations' },
  { label: 'Greece', href: '#destinations' },
  { label: 'Malaysia', href: '#destinations' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-misrial-highlight text-white">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 51.3C120 43 240 26 360 22.7C480 19 600 29 720 34.3C840 40 960 40 1080 34.3C1200 29 1320 17 1380 11.3L1440 6V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z"
            fill="#FFF2EA"
          />
        </svg>
      </div>

      <div className="container-pad py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-5 group">
              <div className="w-9 h-9 rounded-lg bg-misrial-primary flex items-center justify-center">
                <i className="fas fa-briefcase text-white text-sm" />
              </div>
              <div>
                <p className="font-bold text-sm text-white leading-tight">Misrial Enterprises</p>
                <p className="text-misrial-cta text-xs font-semibold">MANPOWER RECRUITMENT</p>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Rawalpindi's trusted overseas manpower recruitment agency — licensed,
              honest, and complete. License 2203/RWP.
            </p>

            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <i className="fas fa-location-dot text-misrial-cta mt-1 flex-shrink-0" />
                <span>Office No. 5-D/384, Lane No. 7, Chaurharpal, Misrial Road, Rawalpindi</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-misrial-cta flex-shrink-0" />
                <a href="tel:0515462519" className="hover:text-white transition-colors">051-5462519</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-misrial-cta flex-shrink-0" />
                <a href="mailto:info@misrial.pk" className="hover:text-white transition-colors">
                  info@misrial.pk
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 font-heading">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-misrial-cta text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 font-heading">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-white/60 hover:text-misrial-cta text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations & WhatsApp */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 font-heading">Destinations</h4>
            <ul className="space-y-2.5 mb-7">
              {destinations.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    className="text-white/60 hover:text-misrial-cta text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-white text-sm mb-3 font-heading">Apply Now</h4>
            <a
              href="https://wa.me/923215667136"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-misrial-cta hover:bg-misrial-cta/90 text-white font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <i className="fab fa-whatsapp" />
              Quick Apply
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>
            &copy; {year} Misrial Enterprises. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            License <strong className="text-misrial-cta">2203/RWP</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}