import { useState } from 'react';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';

const services = [
  { icon: 'fa-briefcase', title: 'Overseas Job Placement', color: '#E0115F' },
  { icon: 'fa-passport', title: 'Visa Processing', color: '#FF5C8A' },
  { icon: 'fa-file-signature', title: 'Document Attestation', color: '#FFD700' },
  { icon: 'fa-stethoscope', title: 'Medical & Trade Test', color: '#7B2D8E' },
  { icon: 'fa-chalkboard-user', title: 'Pre-Departure Orientation', color: '#B8004F' },
  { icon: 'fa-plane', title: 'Air Ticketing & Travel', color: '#E0115F' },
  { icon: 'fa-shield-halved', title: 'Employer Verification', color: '#FF5C8A' },
  { icon: 'fa-users', title: 'Skilled & Unskilled Supply', color: '#7B2D8E' },
];

const descriptions = {
  'Overseas Job Placement': 'We match qualified candidates from Peshawar with verified employers across the Gulf and Europe, ensuring the right fit for both sides.',
  'Visa Processing': 'Our experts handle the complete visa application process, from document collection to submission, making your journey hassle-free.',
  'Document Attestation': 'We manage all document attestation and verification requirements with relevant government authorities and embassies.',
  'Medical & Trade Test': 'Coordination of medical examinations and trade tests at authorized centers to meet international employer standards.',
  'Pre-Departure Orientation': 'Comprehensive orientation sessions covering cultural awareness, workplace expectations, and travel tips for your destination country.',
  'Air Ticketing & Travel': 'We arrange competitive airfare and provide travel support to ensure a smooth journey from Peshawar to your destination.',
  'Employer Verification': 'We thoroughly vet all employers to ensure they are reputable, licensed, and offer fair working conditions and compensation.',
  'Skilled & Unskilled Supply': 'We recruit both skilled professionals (nurses, welders, technicians) and unskilled workers for various industries abroad.',
};

export default function Services() {
  const ref = useInView();
  const [active, setActive] = useState(services[0].title);

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff 0%, var(--color-background) 50%, #fff 100%)' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="Our Services" title="What We Offer"
            sub="Comprehensive overseas employment services from Peshawar to the world." />
        </div>

        {/* Honeycomb hexagon tiles */}
        <div className="reveal flex flex-wrap justify-center gap-3 md:gap-4 mb-12 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(s.title)}
              className={`hex-wrap w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                active === s.title ? 'ring-2 ring-[var(--color-accent)] ring-offset-2' : ''
              }`}
              style={{ background: s.color }}
            >
              <i className={`fas ${s.icon} text-white text-lg sm:text-xl`} />
              <span className="text-white text-[0.55rem] sm:text-[0.6rem] font-semibold text-center leading-tight px-1">
                {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Description panel */}
        <div className="reveal max-w-2xl mx-auto text-center bg-white rounded-2xl p-8 shadow-lg"
          style={{ border: '1px solid rgba(224,17,95,.1)' }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl mx-auto mb-4"
            style={{ background: 'var(--color-background)', color: 'var(--color-primary)' }}>
            <i className={`fas ${services.find(s => s.title === active)?.icon}`} />
          </div>
          <h3 className="text-xl font-bold text-[#2E0A1C] mb-3">{active}</h3>
          <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
            {descriptions[active]}
          </p>
        </div>
      </div>
    </section>
  );
}