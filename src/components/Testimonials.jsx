import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Construction Worker',
    location: 'Now in Saudi Arabia',
    text: 'Misrial Enterprises helped me find a great job in Riyadh. The whole process was smooth — from documentation to departure. Highly recommended!',
    rating: 5,
    tilt: '-2deg',
  },
  {
    name: 'Muhammad Usman',
    role: 'Driver',
    location: 'Now in UAE',
    text: 'I was nervous about working abroad, but their team guided me every step. Got my visa in 3 weeks. Fair and honest service.',
    rating: 5,
    tilt: '1.5deg',
  },
  {
    name: 'Bilal Ahmad',
    role: 'Welder',
    location: 'Now in Poland',
    text: 'Professional team with real experience. They connected me with a verified employer in Poland. The pay is good and conditions are excellent.',
    rating: 5,
    tilt: '-1deg',
  },
  {
    name: 'Sajid Mahmood',
    role: 'Security Guard',
    location: 'Now in Oman',
    text: 'I applied through Misrial Enterprises and got placed in Muscat within a month. Everything was transparent — no hidden charges.',
    rating: 4,
    tilt: '2deg',
  },
  {
    name: 'Farhan Ali',
    role: 'Hospitality Staff',
    location: 'Now in Qatar',
    text: 'Thanks to Misrial Enterprises, I have a secure job in Doha. They handled all paperwork and even arranged my flight. Very grateful.',
    rating: 5,
    tilt: '-2.5deg',
  },
  {
    name: 'Khalid Parvez',
    role: 'Agriculture Worker',
    location: 'Now in Italy',
    text: 'Excellent service from start to finish. The team at Misrial Road is professional and caring. They genuinely want the best for you.',
    rating: 5,
    tilt: '1deg',
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="testimonials" className="section-pad bg-misrial-background overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-misrial-primary/15 text-misrial-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-star" />
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1400] font-heading">
            What Our Workers Say
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Real stories from workers we have placed overseas.
          </p>
        </div>

        {/* Polaroid Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`polaroid-card bg-white rounded-2xl p-6 pb-10 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
                '--tilt': t.tilt,
              }}
            >
              {/* Mint Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <i key={j} className="fas fa-star text-misrial-cta text-sm" />
                ))}
                {[...Array(5 - t.rating)].map((_, j) => (
                  <i key={j} className="far fa-star text-gray-300 text-sm" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="pt-3 border-t border-gray-100">
                <p className="font-bold text-[#2B1400] text-sm font-heading">
                  {t.name}
                </p>
                <p className="text-xs text-misrial-primary font-medium">{t.role}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  <i className="fas fa-location-dot text-misrial-cta mr-1" />
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}