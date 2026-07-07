import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    title: 'Overseas Job Placement',
    desc: 'We match skilled workers with verified employers in Gulf and European countries across multiple industries.',
    icon: 'fa-briefcase',
    bg: 'bg-misrial-primary',
  },
  {
    title: 'Visa Processing',
    desc: 'Complete visa application support — from document preparation to embassy submission and follow-up.',
    icon: 'fa-passport',
    bg: 'bg-misrial-accent',
  },
  {
    title: 'Document Attestation',
    desc: 'Educational certificate attestation, legalization, and translation services for overseas employment.',
    icon: 'fa-file-signature',
    bg: 'bg-[#FF8C42]',
  },
  {
    title: 'Medical & Trade Test',
    desc: 'Coordination of medical examinations and trade skill tests required by overseas employers.',
    icon: 'fa-stethoscope',
    bg: 'bg-misrial-cta',
  },
  {
    title: 'Pre-Departure Orientation',
    desc: 'Cultural awareness, language basics, and practical guidance for a smooth transition abroad.',
    icon: 'fa-graduation-cap',
    bg: 'bg-misrial-highlight',
  },
  {
    title: 'Air Ticketing & Travel',
    desc: 'Flight bookings, travel insurance, and airport assistance for departing workers.',
    icon: 'fa-ticket-alt',
    bg: 'bg-misrial-primary',
  },
  {
    title: 'Employer Verification',
    desc: 'We vet every employer to ensure legitimate contracts, fair wages, and safe working conditions.',
    icon: 'fa-shield-halved',
    bg: 'bg-misrial-accent',
  },
  {
    title: 'Manpower Supply',
    desc: 'Bulk skilled and unskilled manpower supply for large-scale projects across industries.',
    icon: 'fa-users-gear',
    bg: 'bg-[#FF8C42]',
  },
];

export default function Services() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="relative overflow-hidden bg-misrial-background pb-16 md:pb-20">
      {/* Wave SVG Top */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path
            d="M0,50 C360,100 1080,0 1440,50 L1440,0 L0,0 Z"
            fill="#FFF2EA"
          />
        </svg>
      </div>

      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-misrial-primary/15 text-misrial-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-concierge-bell" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1400] font-heading">
            Complete Recruitment Services
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            End-to-end overseas employment solutions under one roof.
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((s, i) => (
            <div
              key={i}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Curved top */}
              <div className={`${s.bg} text-white pt-8 pb-6 px-6 relative`}>
                <svg viewBox="0 0 200 60" className="absolute -top-1 left-0 w-full h-8" preserveAspectRatio="none">
                  <path d="M0,30 C50,60 150,0 200,30 L200,0 L0,0 Z" fill="rgba(255,255,255,0.08)" />
                </svg>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${s.icon} text-xl`} />
                </div>
                <h3 className="font-bold text-lg font-heading mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {s.desc}
                </p>
              </div>
              {/* Bottom white bar */}
              <div className="h-1 bg-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}