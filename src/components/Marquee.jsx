export default function Marquee() {
  const items = [
    'Saudi Arabia', 'UAE', 'Qatar', 'Oman · Muscat', 'Kuwait',
    'Germany', 'Poland', 'Greece', 'South Korea · Seoul',
    'License 2199/DGK',
    'Ghazi Road, D.G. Khan',
  ];

  return (
    <div className="w-full overflow-hidden" style={{ background: 'var(--color-primary)', marginTop: '68px' }}>
      <div className="flex whitespace-nowrap py-2.5" style={{ animation: 'marquee 30s linear infinite' }}>
        {[...items, ...items].map((text, i) => (
          <span key={i} className="inline-block mx-6 text-sm font-semibold tracking-wide" style={{ color: '#E6F3FB', fontFamily: 'Inter, sans-serif', opacity: 0.9 }}>
            {text.includes('·') ? (
              <><i className="fas fa-location-dot" style={{ marginRight: 6, fontSize: 10 }} />{text}</>
            ) : text.includes('License') ? (
              <><i className="fas fa-certificate" style={{ marginRight: 6, fontSize: 10 }} />{text}</>
            ) : (
              <><i className="fas fa-flag" style={{ marginRight: 6, fontSize: 10 }} />{text}</>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
