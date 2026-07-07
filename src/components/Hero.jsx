import useReveal from '../hooks/useReveal';
import { FaWhatsapp, FaArrowRight, FaStar } from 'react-icons/fa';

export default function Hero() {
  useReveal('.hero-reveal');

  return (
    <section id="home" className="min-h-screen flex items-center pt-[70px] px-5 relative overflow-hidden" style={{ background: '#FFF0F5' }}>
      {/* Geometric motif */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border-2" style={{ borderColor: '#7B68EE' }} />
        <div className="absolute top-32 right-32 w-48 h-48 rounded-full border-2" style={{ borderColor: '#C2185B' }} />
        <div className="absolute top-44 right-44 w-24 h-24 rounded-full border-2" style={{ borderColor: '#FFD23F' }} />
      </div>
      {/* Slate-purple accent line */}
      <div className="absolute left-0 top-0 w-1 h-full" style={{ background: 'linear-gradient(180deg, #7B68EE, #C2185B)' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="hero-reveal reveal">
            <span className="section-pill mb-5 inline-flex">Trusted Since 1997</span>
            <h1 className="font-display font-extrabold leading-[1.05] mb-5" style={{ fontSize: 'clamp(34px,6vw,56px)', color: '#3A0A22' }}>
              Elite Recruitment,<br />
              <span style={{ color: '#C2185B' }}>Trusted Since 1997</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#6B5B3E' }}>
              Juniper Human Resources connects Pakistan's employers with the right talent — and job seekers with the right roles — through decades of proven manpower expertise.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/923003845414"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !gap-2"
              >
                <FaWhatsapp size={18} />
                Hire Talent
              </a>
              <a
                href="https://wa.me/923003845414"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !text-[#3A0A22] !border-[#C2185B] !border-2 hover:!bg-[#C2185B] hover:!text-white"
              >
                <FaWhatsapp size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right - image */}
          <div className="hero-reveal reveal-r relative">
            <div className="relative rounded-3xl overflow-hidden group shadow-2xl" style={{ border: '4px solid rgba(194, 24, 91, 0.15)' }}>
              <img
                src="/images/corporate-office.jpg"
                alt="Juniper HR Office"
                className="w-full h-[400px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(194,24,91,0.15) 100%)' }} />
            </div>
            {/* Floating stat chips */}
            <div className="absolute -top-3 -right-3 bg-white rounded-xl px-4 py-3 shadow-lg float" style={{ border: '1px solid rgba(194,24,91,0.1)' }}>
              <div className="font-display font-extrabold text-lg" style={{ color: '#C2185B' }}>25+</div>
              <div className="text-[10px] font-semibold" style={{ color: '#6B5B3E' }}>Years</div>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-white rounded-xl px-4 py-3 shadow-lg float" style={{ border: '1px solid rgba(194,24,91,0.1)' }}>
              <div className="font-display font-extrabold text-lg" style={{ color: '#7B68EE' }}>Nationwide</div>
              <div className="text-[10px] font-semibold" style={{ color: '#6B5B3E' }}>Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
