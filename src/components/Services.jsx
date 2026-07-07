import useReveal from '../hooks/useReveal';
import { FaSearch, FaUsers, FaUserCheck, FaHandshake, FaClipboardCheck, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const SERVICES = [
  { icon: FaSearch, title: 'Manpower Recruitment & Supply', desc: 'End-to-end recruitment solutions for organizations of all sizes.', color: '#C2185B' },
  { icon: FaUsers, title: 'Executive Search & Headhunting', desc: 'Targeted headhunting for senior and specialist roles.', color: '#E91E8C' },
  { icon: FaUserCheck, title: 'Permanent Placement', desc: 'Full-time placement services with rigorous candidate vetting.', color: '#7B68EE' },
  { icon: FaHandshake, title: 'Temporary & Contract Staffing', desc: 'Flexible staffing solutions for project-based needs.', color: '#FFD23F' },
  { icon: FaClipboardCheck, title: 'Payroll & Benefits Management', desc: 'Comprehensive payroll and benefits administration.', color: '#AD1457' },
  { icon: FaCogs, title: 'HR Consulting & Outsourcing', desc: 'Strategic HR consulting and process outsourcing.', color: '#C2185B' },
  { icon: FaChartLine, title: 'Candidate Screening & Assessment', desc: 'In-depth psychometric and skills-based assessments.', color: '#E91E8C' },
  { icon: FaShieldAlt, title: 'Onboarding & Compliance', desc: 'Seamless onboarding aligned with regulatory compliance.', color: '#7B68EE' },
];

export default function Services() {
  useReveal('.svc-reveal');

  return (
    <section id="services" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF0F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 svc-reveal reveal">
          <span className="section-pill">OUR SERVICES</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#3A0A22' }}>
            What We Offer
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Comprehensive HR and recruitment solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((s, i) => {
            const textColor = s.color === '#FFD23F' ? '#3A0A22' : '#fff';
            return (
              <div
                key={i}
                className="svc-reveal reveal rounded-2xl p-6 md:p-7 transition-all duration-300 hover:scale-[1.03]"
                style={{ background: s.color, color: textColor }}
              >
                <s.icon size={26} className="mb-4 opacity-90" />
                <h3 className="font-display font-bold text-base mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
