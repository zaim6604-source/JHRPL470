import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaChevronDown } from 'react-icons/fa';

const FAQS = [
  { q: 'What services does Juniper HR offer?', a: 'We offer manpower recruitment, executive search, permanent and contract staffing, payroll management, HR consulting, candidate assessment, and onboarding compliance services.' },
  { q: 'Which sectors do you recruit for?', a: 'We serve IT & Software, Banking & Finance, Oil & Gas, Construction, Healthcare, Manufacturing, Retail & FMCG, Telecom, Hospitality, Education, Logistics, and Engineering sectors.' },
  { q: 'How does the hiring process work?', a: 'It starts with understanding your requirements, sourcing and screening candidates, shortlisting and interviews, selection and offer, followed by onboarding and post-placement support.' },
  { q: 'What is the typical timeline for placements?', a: 'Timelines vary by role complexity. Standard placements typically take 2–4 weeks, while executive searches may take 4–8 weeks for the right candidate.' },
  { q: 'How can I register as a job seeker?', a: 'Contact us via WhatsApp at 0300-3845414 or fill out our contact form. Our team will guide you through the registration and matching process.' },
  { q: 'Do you charge consultation fees?', a: 'We offer free initial consultations for employers. Job seekers do not pay any registration or placement fees to Juniper HR.' },
];

export default function FAQ() {
  useReveal('.faq-reveal');
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faqs" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#fff' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 faq-reveal reveal">
          <span className="section-pill">FAQS</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#3A0A22' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="faq-reveal reveal rounded-xl overflow-hidden transition-all duration-300"
              style={{ background: '#FFF0F5', border: '1px solid rgba(194, 24, 91, 0.08)' }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left border-none cursor-pointer bg-transparent"
              >
                <span className="font-display font-bold text-sm md:text-base pr-4" style={{ color: '#3A0A22' }}>{faq.q}</span>
                <FaChevronDown
                  size={14}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ color: '#C2185B', transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>
              {openIdx === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#6B5B3E' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
