import useReveal from '../hooks/useReveal';
import { FaCalendarAlt, FaMapMarkedAlt, FaUserCheck, FaCheckCircle } from 'react-icons/fa';

const CHIPS = [
  { icon: FaCalendarAlt, label: 'Since 1997' },
  { icon: FaMapMarkedAlt, label: 'Nationwide' },
  { icon: FaUserCheck, label: 'Vetted Talent' },
];

export default function About() {
  useReveal('.abt-reveal');

  return (
    <section id="about" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 abt-reveal reveal">
          <span className="section-pill">WHO WE ARE</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#3A0A22' }}>
            About Juniper HR
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="abt-reveal reveal-l">
            <div className="rounded-3xl overflow-hidden group shadow-xl">
              <img
                src="/images/team-meeting.jpg"
                alt="Juniper HR Team"
                className="w-full h-[350px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          <div className="abt-reveal reveal-r">
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6B5B3E' }}>
              Juniper Human Resource Provider (Pvt) Ltd is one of Pakistan's leading manpower recruitment agencies, supplying talent nationwide and providing elite recruitment and employment services since <strong style={{ color: '#C2185B' }}>1997</strong>.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#6B5B3E' }}>
              Based in <strong>F-6 Markaz, Islamabad</strong>, we specialize in connecting organizations with highly skilled professionals across multiple sectors. Our decades of experience, extensive talent pool, and rigorous vetting process ensure the right match every time.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {CHIPS.map((chip) => (
                <span key={chip.label} className="chip flex items-center gap-1.5">
                  <chip.icon size={11} /> {chip.label}
                </span>
              ))}
            </div>
            <a
              href="https://wa.me/923003845414"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-sm"
            >
              <FaCheckCircle size={15} />
              Start Hiring
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
