import useReveal from '../hooks/useReveal';

const countries = [
  { name: 'Saudi Arabia', img: '/images/saudi.jpg', roles: ['Construction', 'Drivers', 'Hospitality'], color: '#006BA6' },
  { name: 'UAE', img: '/images/uae.jpg', roles: ['Hospitality', 'Retail', 'Technicians'], color: '#0496FF' },
  { name: 'Qatar', img: '/images/qatar.jpg', roles: ['Construction', 'Hospitality'], color: '#FFBC42' },
  { name: 'Oman', img: '/images/oman.jpg', roles: ['Security', 'Drivers', 'Tourism'], color: '#0496FF' },
  { name: 'Kuwait', img: '/images/kuwait.jpg', roles: ['Drivers', 'Labour'], color: '#D81159' },
  { name: 'Germany', img: '/images/saudi.jpg', roles: ['Nurses', 'Trades', 'IT'], color: '#006BA6' },
  { name: 'Poland', img: '/images/poland.jpg', roles: ['Manufacturing', 'Logistics'], color: '#0496FF' },
  { name: 'Greece', img: '/images/greece.jpg', roles: ['Tourism', 'Hospitality', 'Agriculture'], color: '#FFBC42' },
  { name: 'South Korea', img: '/images/south-korea.jpg', roles: ['Factory', 'Manufacturing'], color: '#D81159' },
];

export default function Countries() {
  useReveal('.co-reveal');

  return (
    <section id="countries" className="py-[clamp(80px,10vw,120px)] px-5 relative overflow-hidden" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="co-reveal reveal text-center mb-14">
          <span className="section-pill"><i className="fas fa-globe" style={{ fontSize: 10 }} /> DESTINATIONS</span>
          <h2 className="font-display font-extrabold mt-4 mb-4" style={{ fontSize: 'clamp(28px,5vw,44px)', color: 'var(--color-ink)', letterSpacing: '-0.8px' }}>
            Country <span style={{ color: 'var(--color-primary)' }}>Guide</span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
            Gulf and European destinations for Dera Ghazi Khan's workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countries.map((c, i) => (
            <div key={c.name}
              className="co-reveal reveal rounded-2xl overflow-hidden bg-white transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(0,107,166,0.08)', transitionDelay: `${i * 0.06}s` }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,107,166,0.14)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}>
              <div className="overflow-hidden h-[180px]">
                <img src={c.img} alt={c.name} className="w-full h-[180px] object-cover img-zoom" onError={(e) => { e.target.src = '/images/fallback.jpg'; }} loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ fontSize: 18 }}><i className="fas fa-location-dot" style={{ color: c.color }} /></span>
                  <h3 className="font-display font-bold text-[17px]" style={{ color: 'var(--color-ink)' }}>{c.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.roles.map((r) => (
                    <span key={r} className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25`, fontFamily: 'Inter, sans-serif' }}>{r}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="co-reveal reveal text-center">
          <p className="text-sm font-semibold mb-4" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>All Destination Countries</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {countries.map((c) => (
              <span key={c.name} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background: c.color, color: '#fff', fontFamily: 'Inter, sans-serif' }}>{c.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
