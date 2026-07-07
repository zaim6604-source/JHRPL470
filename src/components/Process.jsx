import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '1',
    title: 'Register & Consult',
    desc: 'Visit our Misrial Road office or contact us to register. We assess your skills and discuss preferred destinations.',
  },
  {
    number: '2',
    title: 'Documents & Visa',
    desc: 'We guide you through document preparation, attestation, and visa application — ensuring everything is in order.',
  },
  {
    number: '3',
    title: 'Medical & Trade Test',
    desc: 'We coordinate your medical examination and any required trade skill tests for overseas employment.',
  },
  {
    number: '4',
    title: 'Employer Confirmation',
    desc: 'Once matched with a verified employer, we finalize your job offer, contract, and work permit processing.',
  },
  {
    number: '5',
    title: 'Ticketing & Departure',
    desc: 'We arrange your flight, provide pre-departure orientation, and ensure you travel with confidence.',
  },
];

export default function Process() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28">
      {/* Diagonal gradient background — orange to purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-misrial-primary via-misrial-primary to-misrial-accent" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 container-pad">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-white font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-list-ol" />
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Your Journey in 5 Simple Steps
          </h2>
          <p className="text-white/70 text-lg mt-3 max-w-2xl mx-auto">
            From registration to departure — we make overseas recruitment simple and transparent.
          </p>
        </div>

        {/* Ascending Staircase */}
        <div ref={ref} className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex items-center mb-10 last:mb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-misrial-cta text-white flex items-center justify-center font-heading font-extrabold text-xl shadow-lg border-4 border-white/30">
                {step.number}
              </div>

              {/* Staircase connector line */}
              <div className="hidden md:block absolute left-7 top-14 w-0.5 h-16 bg-gradient-to-b from-misrial-cta/60 to-transparent" />

              {/* Content card */}
              <div className="ml-6 flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <h3 className="font-bold text-white text-lg font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}