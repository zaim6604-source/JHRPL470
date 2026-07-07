import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '3500+', label: 'Workers Placed', icon: 'fa-users' },
  { value: '12+', label: 'Countries', icon: 'fa-globe-asia' },
  { value: '15+', label: 'Years Experience', icon: 'fa-calendar-alt' },
  { value: 'Licensed', label: 'Govt. Approved', icon: 'fa-certificate' },
];

const trustChips = [
  'Govt. Licensed OEP 2203/RWP',
  'Verified Gulf Employers',
  'European Union Partners',
  'Transparent Fee Structure',
  'End-to-End Support',
  'Pre-Departure Training',
];

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [cardRef, cardVisible] = useScrollAnimation();

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Wide Banner */}
      <div className="bg-misrial-primary py-20 md:py-28">
        <div className="container-pad text-center">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-building" />
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading max-w-3xl mx-auto">
            Rawalpindi's Trusted Overseas Recruitment Agency
          </h2>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Registered with the Government of Pakistan, we connect skilled workers
            with verified employers across the Gulf, Europe, and Asia.
          </p>
        </div>
      </div>

      {/* Overlapping Card */}
      <div className="relative -mt-16 z-10" ref={cardRef}>
        <div className="container-pad">
          <div className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto transition-all duration-700 ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/src/assets/images/about-factory.jpg"
                  alt="Misrial Enterprises office"
                  className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-lg"
                  onError={(e) => { e.target.src = '/src/assets/images/gold-street/fallback.jpg'; }}
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2B1400] font-heading mb-4">
                  Licensed. Honest. Complete.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Based at Office No. 5-D/384, Lane No. 7, Chaurharpal, Misrial Road,
                  Rawalpindi, we have been placing local talent with reliable overseas
                  employers for over 15 years. Our team handles everything — from
                  documentation to departure.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We work only with verified employers and ensure every worker receives
                  fair contracts, proper visas, and complete pre-departure support.
                </p>

                {/* Trust Chips */}
                <div className="flex flex-wrap gap-2">
                  {trustChips.map((chip, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-misrial-background text-misrial-primary text-xs font-medium px-3 py-1.5 rounded-full">
                      <i className="fas fa-check-circle text-misrial-cta" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Band */}
      <div className="bg-misrial-secondary py-14 md:py-18 mt-10" ref={sectionRef}>
        <div className="container-pad">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {stats.map((stat, i) => (
              <div key={i} className="text-center group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/40 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/60 transition-all duration-300">
                  <i className={`fas ${stat.icon} text-2xl md:text-3xl text-[#2B1400]`} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-[#2B1400] font-heading mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-[#2B1400]/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}