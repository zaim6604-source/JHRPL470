import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    q: 'Is Misrial Enterprises a government-licensed agency?',
    a: 'Yes, we are a fully Government Licensed Overseas Employment Promoter with License No. 2203/RWP. We operate under the rules and regulations of the Government of Pakistan.',
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We recruit for Saudi Arabia, UAE, Qatar, Oman, Germany, Italy, Poland, Greece, Malaysia, and more. Our network of verified employers spans the Gulf region, Europe, and Asia.',
  },
  {
    q: 'Where is your office located?',
    a: 'Our office is at Office No. 5-D/384, Lane No. 7, Chaurharpal, Misrial Road, Rawalpindi, Punjab. We are conveniently located on Misrial Road and serve clients from across the Rawalpindi region.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'You typically need your CNIC, passport-sized photographs, educational certificates, and professional experience letters. Our team will guide you through the complete document checklist.',
  },
  {
    q: 'How long does the recruitment process take?',
    a: 'The processing time varies by country and position, but typically ranges from 2 to 8 weeks. We strive to make the process as efficient as possible while ensuring all documentation is correct.',
  },
  {
    q: 'What are your service charges?',
    a: 'Our service charges are transparent and competitive. We believe in honest pricing with no hidden fees. Contact us for a detailed breakdown based on your desired position and destination.',
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className={`border rounded-2xl mb-3 overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-misrial-primary/30 bg-misrial-primary/[0.02]' : 'border-gray-200 hover:border-misrial-primary/20 bg-white'
    }`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-5 text-base font-semibold text-left cursor-pointer transition-colors hover:text-misrial-primary"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{faq.q}</span>
        <i className={`fas fa-chevron-down text-sm text-gray-400 transition-transform duration-300 shrink-0 ${
          isOpen ? 'rotate-180 text-misrial-primary' : ''
        }`} />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '300px' : '0', padding: isOpen ? '0 24px 20px' : '0 24px' }}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="faqs" className="section-pad bg-misrial-background overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-misrial-primary/15 text-misrial-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-question-circle" />
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1400] font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div
          ref={ref}
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}