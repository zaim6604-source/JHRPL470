import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';

const steps = [
  { num: 1, icon: 'fa-pen-to-square', title: 'Register & Consult', desc: 'Fill out our application form. Our counselors review your profile and discuss the best opportunities tailored to your skills.' },
  { num: 2, icon: 'fa-file-contract', title: 'Documents & Visa', desc: 'We assist with compiling all required documents, attestation, and the complete visa application process.' },
  { num: 3, icon: 'fa-stethoscope', title: 'Medical & Trade Test', desc: 'Coordination of medical examinations and trade tests at authorized centers to meet employer standards.' },
  { num: 4, icon: 'fa-circle-check', title: 'Employer Confirmation', desc: 'We connect you with verified employers, arrange interviews, and help you secure your job offer.' },
  { num: 5, icon: 'fa-plane-departure', title: 'Ticketing & Departure', desc: 'Pre-departure briefing, travel arrangements, and support to ensure a smooth transition to your new job.' },
];

export default function Process() {
  const ref = useInView();

  return (
    <section id="process" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Diagonal band background */}
      <div className="absolute inset-0 diagonal-band" style={{ background: 'linear-gradient(135deg, #E0115F 0%, #7B2D8E 100%)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.05) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }} />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <div className="reveal">
          <SectionHeader tag="How It Works" title="Your Journey With Us"
            sub="A simple, step-by-step process from registration to a successful overseas career." light />
        </div>

        {/* Winding path */}
        <div className="relative">
          {/* Curvy SVG line */}
          <svg className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M300 0 C350 60, 200 120, 300 180 C400 240, 200 300, 300 360 C400 420, 200 480, 300 540 C400 600, 200 660, 300 720 L300 800"
              stroke="rgba(255,255,255,.2)" strokeWidth="3" fill="none" strokeDasharray="8 6" />
          </svg>

          <div className="flex flex-col gap-8 md:gap-12 relative">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={s.num}
                  className={`reveal relative flex items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}>

                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-white/10 ${isLeft ? 'md:mr-0' : 'md:ml-0'}`}>
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <i className={`fas ${s.icon} text-[var(--color-accent)] text-sm`} />
                        <h3 className="text-lg font-bold text-white">{s.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">{s.desc}</p>
                    </div>
                  </div>

                  {/* Number node */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg"
                      style={{ background: 'var(--color-accent)', color: '#2E0A1C' }}>
                      {s.num}
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}