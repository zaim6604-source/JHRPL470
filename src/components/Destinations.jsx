import { useScrollAnimation } from '../hooks/useScrollAnimation';

const countries = [
  { name: 'Saudi Arabia', city: 'Riyadh', jobs: 'Construction, Drivers', img: 'saudi' },
  { name: 'UAE', city: 'Dubai', jobs: 'Hospitality', img: 'uae' },
  { name: 'Qatar', city: 'Doha', jobs: 'Construction', img: 'qatar' },
  { name: 'Oman', city: 'Muscat', jobs: 'Security', img: 'kuwait' },
  { name: 'Germany', city: 'Berlin', jobs: 'Nurses, Trades', img: 'germany' },
  { name: 'Italy', city: 'Rome', jobs: 'Agriculture', img: 'italy' },
  { name: 'Poland', city: 'Warsaw', jobs: 'Welders', img: 'poland' },
  { name: 'Greece', city: 'Athens', jobs: 'Tourism', img: 'greece' },
  { name: 'Malaysia', city: 'KL', jobs: 'Electronics', img: 'fallback' },
];

export default function Destinations() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="destinations" className="section-pad bg-misrial-background overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-misrial-primary/15 text-misrial-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-globe-americas" />
            Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1400] font-heading">
            Where We Send Workers
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Trusted recruitment partnerships across the Gulf, Europe, and Asia.
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {countries.map((c, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`/src/assets/images/gold-street/${c.img}.jpg`}
                  alt={c.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = '/src/assets/images/gold-street/fallback.jpg'; }}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1400]/90 via-[#2B1400]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-bold font-heading text-lg">{c.name}</h3>
                  <span className="text-misrial-cta text-xs font-medium bg-[#2B1400]/40 px-2 py-0.5 rounded-full">{c.city}</span>
                </div>
                <p className="text-white/70 text-xs">{c.jobs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}