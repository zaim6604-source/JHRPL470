import { useState } from 'react';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';

const faqs = [
  {
    q: 'What is License 2192/PWR and why does it matter?',
    a: 'License 2192/PWR is the official government registration issued to Gilget Overseas Enterprises by the Bureau of Immigration & Overseas Employment, Pakistan. It certifies that we are legally authorized to recruit and deploy workers for overseas employment, ensuring you are dealing with a legitimate agency.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Italy, Poland, Greece, Croatia, and other countries across the Gulf and Europe. Contact us for the latest job openings.',
  },
  {
    q: 'Where is your office located in Peshawar?',
    a: 'Our office is at Flat 1, Red Crescent Building, Dabgari Garden, Peshawar, KPK. You can visit us during working hours or contact us via phone or WhatsApp.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'You typically need your CNIC, passport (valid), educational certificates, experience letters, and passport-sized photographs. Our team will guide you through the exact requirements for your desired country and position.',
  },
  {
    q: 'How long does the processing take?',
    a: 'Processing time varies by country and position, but typically ranges from 2 to 8 weeks. We strive to make the process as efficient as possible while ensuring all requirements are properly met.',
  },
  {
    q: 'What are your fees?',
    a: 'Our fees are transparent and communicated upfront. We believe in no hidden charges. Contact us for a detailed breakdown based on your desired country and job role.',
  },
];

export default function Faqs() {
  const ref = useInView();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden bg-white" ref={ref}>
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="FAQs" title="Frequently Asked Questions" />
        </div>

        <div className="reveal flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}
                className="rounded-xl overflow-hidden transition-all"
                style={{ border: `1px solid ${isOpen ? 'var(--color-primary)' : 'rgba(224,17,95,.1)'}` }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold transition-all"
                  style={{ color: isOpen ? 'var(--color-primary)' : '#2E0A1C' }}>
                  <span className="pr-4">{faq.q}</span>
                  <i className={`fas fa-chevron-down text-xs transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--color-primary)' }} />
                </button>
                <div className={`px-6 transition-all duration-300 overflow-hidden ${isOpen ? 'pb-5 max-h-96' : 'max-h-0 pb-0'}`}>
                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}