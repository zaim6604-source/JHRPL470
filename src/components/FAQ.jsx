import { useState } from 'react';
import useReveal from '../hooks/useReveal';

const faqs = [
  { q: "What is Qadir International's license number?", a: "We are a Government Licensed OEP under License No. 2199/DGK, regulated by the Pakistan Bureau of Emigration & Overseas Employment." },
  { q: 'Which countries do you recruit for?', a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Kuwait, Germany, Poland, Greece, South Korea, and more.' },
  { q: 'Where is your office located?', a: '6-B, Saeed Commercial Centre, Ghazi Road, Dera Ghazi Khan, Punjab, Pakistan.' },
  { q: 'What documents do I need to apply?', a: "You'll need your CNIC, passport, educational certificates, experience letters, and passport-sized photographs." },
  { q: 'How long does the processing take?', a: 'Processing typically takes 4–8 weeks depending on the destination country and visa type.' },
  { q: 'What are your service fees?', a: 'Our fees are transparent and competitive. Contact us for a detailed breakdown based on your desired destination and role.' },
  { q: 'Do you help with travel arrangements?', a: 'Yes, we coordinate flight bookings, pre-departure orientation, and airport pickup at your destination.' },
];

export default function FAQ() {
  useReveal('.fq-reveal');
  const [open, setOpen] = useState(null);

  return (
    <section id="faqs" className="py-[clamp(80px,10vw,120px)] px-5 relative" style={{ background: '#fff' }}>
      <div className="max-w-3xl mx-auto">
        <div className="fq-reveal reveal text-center mb-14">
          <span className="section-pill"><i className="fas fa-circle-question" style={{ fontSize: 10 }} /> FAQS</span>
          <h2 className="font-display font-extrabold mt-4" style={{ fontSize: 'clamp(28px,5vw,44px)', color: 'var(--color-ink)', letterSpacing: '-0.8px' }}>
            Frequently Asked <span style={{ color: 'var(--color-primary)' }}>Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="fq-reveal reveal rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: '#fff', boxShadow: '0 2px 12px rgba(0,107,166,0.06)', border: '1px solid rgba(0,107,166,0.08)', transitionDelay: `${i * 0.06}s` }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-none border-none cursor-pointer">
                <span className="font-display font-bold text-sm" style={{ color: 'var(--color-ink)', flex: 1, paddingRight: 16 }}>{faq.q}</span>
                <i className="fas fa-chevron-down" style={{ color: '#006BA6', fontSize: 14, transition: 'transform 0.3s', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }} />
              </button>
              <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
