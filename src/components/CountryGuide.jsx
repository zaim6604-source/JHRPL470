import SectionHeader from './SectionHeader';
import { useEffect, useRef } from 'react';

const countries = [
  { name: 'Saudi Arabia', capital: 'Riyadh', sectors: 'Construction, Drivers, Oil & Gas', flag: 'sa' },
  { name: 'UAE', capital: 'Abu Dhabi', sectors: 'Hospitality, Construction, Retail', flag: 'ae' },
  { name: 'Qatar', capital: 'Doha', sectors: 'Construction, Oil & Gas, Services', flag: 'qa' },
  { name: 'Oman', capital: 'Muscat', sectors: 'Transport, Hospitality, Logistics', flag: 'om' },
  { name: 'Kuwait', capital: 'Kuwait City', sectors: 'Construction, Oil & Gas', flag: 'kw' },
  { name: 'Malaysia', capital: 'Kuala Lumpur', sectors: 'Manufacturing, Electronics', flag: 'my' },
  { name: 'Germany', capital: 'Berlin', sectors: 'Nursing, IT, Trades', flag: 'de' },
  { name: 'Romania', capital: 'Bucharest', sectors: 'Construction, Manufacturing', flag: 'ro' },
  { name: 'Greece', capital: 'Athens', sectors: 'Tourism, Hospitality, Shipping', flag: 'gr' },
];

const allTags = countries.map(c => c.name);

const flagGradients = {
  sa: 'linear-gradient(135deg, #1b5e20, #388e3c)',
  ae: 'linear-gradient(135deg, #c62828, #ef5350)',
  qa: 'linear-gradient(135deg, #6a1b9a, #9c27b0)',
  om: 'linear-gradient(135deg, #b71c1c, #e53935)',
  kw: 'linear-gradient(135deg, #1b5e20, #43a047)',
  my: 'linear-gradient(135deg, #0d47a1, #1976d2)',
  de: 'linear-gradient(135deg, #212121, #616161)',
  ro: 'linear-gradient(135deg, #b71c1c, #fbc02d)',
  gr: 'linear-gradient(135deg, #0d47a1, #42a5f5)',
};

export default function CountryGuide() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="destinations" className="py-24 relative overflow-hidden" style={{ background: 'var(--color-background)' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="DESTINATIONS" title="Countries I Work With"
            sub="Connecting Buner's workers to trusted employers across the Gulf and Europe." />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countries.slice(0, 6).map((c, i) => (
            <div key={c.name}
              className="reveal group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="h-36 relative overflow-hidden flex items-center justify-center"
                style={{ background: flagGradients[c.flag] }}>
                <img
                  src={`https://flagcdn.com/w640/${c.flag}.png`}
                  alt={`${c.name} flag`}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-sm font-bold drop-shadow-lg">{c.capital}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">{c.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.sectors.split(', ').map(s => (
                    <span key={s} className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'var(--color-background)', color: 'var(--color-primary)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Country chip grid */}
        <div className="reveal">
          <p className="text-center text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">All Destinations</p>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((name, i) => (
              <span key={name}
                className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
                style={{ background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)' }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
