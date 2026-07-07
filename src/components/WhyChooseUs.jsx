import useReveal from '../hooks/useReveal';
import { FaCalendarAlt, FaUsers, FaShieldAlt, FaUserTie } from 'react-icons/fa';

const FEATURES = [
  { icon: FaCalendarAlt, title: '25+ Years of Experience', desc: 'Decades of proven expertise in the recruitment industry.', color: '#C2185B' },
  { icon: FaUsers, title: 'Extensive Talent Pool', desc: 'Access to a vast network of pre-vetted professionals across industries.', color: '#7B68EE' },
  { icon: FaShieldAlt, title: 'Rigorous Vetting', desc: 'Multi-stage screening ensures only the best candidates are presented.', color: '#E91E8C' },
  { icon: FaUserTie, title: 'Dedicated Account Manager', desc: 'A single point of contact for a seamless, personalized experience.', color: '#FFD23F' },
];

export default function WhyChooseUs() {
  useReveal('.why-reveal');

  return (
    <section className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 why-reveal reveal">
          <span className="section-pill">WHY JUNIPER</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#3A0A22' }}>
            Why Choose Us
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            What sets Juniper Human Resources apart as your recruitment partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="why-reveal reveal rounded-2xl p-6 md:p-7 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#FFF0F5', border: '1px solid rgba(194, 24, 91, 0.08)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: f.color }}
              >
                <f.icon size={24} color={f.color === '#FFD23F' ? '#3A0A22' : '#fff'} />
              </div>
              <h3 className="font-display font-bold text-base mb-2" style={{ color: '#3A0A22' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B5B3E' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
