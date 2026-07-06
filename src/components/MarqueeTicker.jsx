const items = [
  'Saudi Arabia',
  'UAE',
  'Qatar',
  'Oman',
  'Germany',
  'Italy',
  'Poland',
  'Greece',
  'Croatia',
  'License 2192/PWR',
  'Dabgari Garden, Peshawar',
  'Gulf & Europe Jobs',
  'Government Licensed',
];

export default function MarqueeTicker() {
  return (
    <div className="relative z-40" style={{ background: 'var(--color-primary)' }}>
      <div className="overflow-hidden py-2.5 fade-edges">
        <div className="marquee-track">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-3 mx-6 text-white text-sm font-medium whitespace-nowrap">
              <i className="fas fa-circle text-[0.35rem] opacity-60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}