import useReveal from '../hooks/useReveal';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const TESTIMONIALS = [
  {
    name: 'Ahmed Raza',
    role: 'HR Director, TechVista Solutions',
    quote: 'Juniper HR has been our exclusive recruitment partner for over five years. Their ability to source top-tier talent consistently sets them apart in the industry.',
    rating: 5,
    img: '/images/testimonial-1.jpg',
  },
  {
    name: 'Fatima Khan',
    role: 'CEO, Crescent Group',
    quote: 'The team at Juniper understood our culture and hiring needs from day one. They delivered qualified candidates who have become integral to our growth.',
    rating: 5,
    img: '/images/testimonial-2.jpg',
  },
  {
    name: 'Omar Hassan',
    role: 'Operations Manager, Gulf Construct',
    quote: 'We needed 200+ skilled workers on a tight timeline. Juniper HR not only met the deadline but exceeded our quality expectations. Highly recommended.',
    rating: 5,
    img: '/images/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  useReveal('.tst-reveal');

  return (
    <section id="testimonials" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF0F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 tst-reveal reveal">
          <span className="section-pill">CLIENT SUCCESS</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#3A0A22' }}>
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Trusted by leading organizations across Pakistan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="tst-reveal reveal rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: '#fff', border: '1px solid rgba(194, 24, 91, 0.08)' }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} size={14} style={{ color: '#FFD23F' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B5B3E' }}>"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <div className="font-display font-bold text-sm" style={{ color: '#3A0A22' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#C2185B' }}>{t.role}</div>
                </div>
                <FaQuoteRight size={20} className="ml-auto opacity-20" style={{ color: '#C2185B' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
