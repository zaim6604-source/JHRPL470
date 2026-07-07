import useReveal from '../hooks/useReveal';
import { FaSearch, FaUserTie, FaClipboardList, FaHandshake, FaRocket } from 'react-icons/fa';

const STEPS = [
  { icon: FaSearch, title: 'Requirement Analysis', desc: 'Understand your staffing needs and role requirements.' },
  { icon: FaUserTie, title: 'Sourcing & Screening', desc: 'Identify and pre-screen candidates from our extensive talent pool.' },
  { icon: FaClipboardList, title: 'Shortlisting & Interviews', desc: 'Present top candidates and coordinate interviews.' },
  { icon: FaHandshake, title: 'Selection & Offer', desc: 'Finalize selection, negotiate offers, and close placements.' },
  { icon: FaRocket, title: 'Onboarding & Follow-up', desc: 'Ensure smooth onboarding with post-placement support.' },
];

const COLORS = ['#C2185B', '#E91E8C', '#7B68EE', '#FFD23F', '#AD1457'];

export default function Process() {
  useReveal('.prc-reveal');

  return (
    <section id="process" className="py-[clamp(60px,10vw,100px)] px-5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #C2185B 0%, #7B68EE 100%)' }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 prc-reveal reveal">
          <span className="section-pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>HOW IT WORKS</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#fff' }}>
            Our Process
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            A streamlined recruitment journey from requirement to onboarding.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {STEPS.map((s, i) => (
            <div key={i} className="prc-reveal reveal text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ background: COLORS[i] }}
              >
                <s.icon size={24} color={COLORS[i] === '#FFD23F' ? '#3A0A22' : '#fff'} />
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#FFD23F' }}
              >
                {i + 1}
              </div>
              <h3 className="font-display font-bold text-sm mb-1.5" style={{ color: '#fff' }}>{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
