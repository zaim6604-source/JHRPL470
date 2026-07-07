import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'Where are you located?',
    a: 'I am based in Cheena Kalay, Buner, KPK, Pakistan. You can reach me via WhatsApp or visit the area to connect in person.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'I recruit for Saudi Arabia, UAE, Qatar, Oman (Muscat), Kuwait, Malaysia (KL), Germany, Romania, Greece, and other countries. Contact me for the latest openings.',
  },
  {
    q: 'What documents do I need?',
    a: 'You typically need your CNIC, passport (valid), educational certificates, experience letters, and passport-sized photographs. I will guide you through exact requirements.',
  },
  {
    q: 'How long does the process take?',
    a: 'Processing time varies by country and position, typically 2 to 8 weeks. I strive to make the process as efficient as possible.',
  },
  {
    q: 'Do you charge any fees?',
    a: 'Any applicable fees are communicated upfront. I believe in complete transparency. Contact me for details based on your desired country and job role.',
  },
  {
    q: 'How do I contact you?',
    a: 'The best way is via WhatsApp at 0334-5577225. You can also use the enquiry form on this site and I will get back to you.',
  },
];

export default function Faqs() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-background)' }} ref={ref}>
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="FAQs" title="Frequently Asked Questions" />
        </div>

        <div className="reveal flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}
                className="rounded-xl overflow-hidden bg-white transition-all"
                style={{ border: `1px solid ${isOpen ? 'var(--color-primary)' : 'rgba(196,69,105,0.1)'}` }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold transition-all"
                  style={{ color: isOpen ? 'var(--color-primary)' : 'var(--color-ink)' }}>
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
