export default function MarqueeTicker() {
  const items = [
    { icon: 'fa-plane', text: 'Saudi Arabia' },
    { icon: 'fa-plane', text: 'UAE' },
    { icon: 'fa-plane', text: 'Qatar' },
    { icon: 'fa-plane', text: 'Oman' },
    { icon: 'fa-plane', text: 'Germany' },
    { icon: 'fa-plane', text: 'Italy' },
    { icon: 'fa-plane', text: 'Poland' },
    { icon: 'fa-plane', text: 'Greece' },
    { icon: 'fa-plane', text: 'Malaysia' },
    { icon: 'fa-certificate', text: 'License 2203/RWP' },
    { icon: 'fa-location-dot', text: 'Misrial Road, Rawalpindi' },
    { icon: 'fa-star', text: '15+ Years Trusted' },
  ];

  return (
    <div className="bg-misrial-primary mt-20 text-white py-3 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            {items.map((item, i) => (
              <span key={`${idx}-${i}`} className="inline-flex items-center gap-2 text-sm font-medium">
                <i className={`fas ${item.icon} text-white/70 text-xs`} />
                {item.text}
                <span className="text-white/30 mx-2">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}