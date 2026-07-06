import useInView from '../hooks/useInView';

const photos = ['/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-3.jpg', '/images/gallery-4.jpg'];

export default function Gallery() {
  const ref = useInView();

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-background)' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-12">
          <span className="section-tag inline-block text-[0.7rem] font-bold uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-3">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight text-[#2E0A1C]">
            Our Office &amp; Team
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'var(--color-accent)' }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((src, i) => (
            <div key={i} className="reveal rounded-2xl overflow-hidden shadow-md" style={{ transitionDelay: `${i * 0.1}s` }}>
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-56 object-cover card-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}