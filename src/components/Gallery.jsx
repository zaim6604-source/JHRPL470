const fallbackImg = '/src/assets/images/gold-street/fallback.jpg';

const images = [
  { src: '/src/assets/images/gallery-1.jpg', alt: 'Office front' },
  { src: '/src/assets/images/gallery-2.jpg', alt: 'Team meeting' },
  { src: '/src/assets/images/gallery-3.jpg', alt: 'Client consultation' },
  { src: '/src/assets/images/gallery-4.jpg', alt: 'Document processing' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-misrial-primary/15 text-misrial-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-camera" />
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1400] font-heading">
            A Glimpse of Our Office
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = fallbackImg; }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}