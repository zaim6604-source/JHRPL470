import { useState } from 'react';
import SectionHeader from './SectionHeader';
import useInView from '../hooks/useInView';

const countryOptions = [
  'Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait', 'Bahrain',
  'Germany', 'Italy', 'Poland', 'Greece', 'Croatia', 'Other',
];

const contactInfo = [
  { icon: 'fas fa-phone-alt', label: 'Phone', lines: ['091-2590012'] },
  { icon: 'fab fa-whatsapp', label: 'WhatsApp', lines: ['0305-9900345'] },
  { icon: 'fas fa-map-marker-alt', label: 'Office Address', lines: ['Flat 1, Red Crescent Building,', 'Dabgari Garden, Peshawar, KPK'] },
  { icon: 'fas fa-envelope', label: 'Email', lines: ['info@gilgetoverseas.pk'] },
];

export default function Contact() {
  const ref = useInView();
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', country: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email.';
    if (!form.country) e.country = 'Please select a country.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const text = `Hello Gilget Overseas Enterprises,
My name is ${form.fullName}.
Phone: ${form.phone}
Email: ${form.email}
Desired Country: ${form.country}
Message: ${form.message || 'N/A'}`;
    window.open(`https://wa.me/923059900345?text=${encodeURIComponent(text)}`, '_blank');
  };

  const set = (key) => (e) => {
    setForm(p => ({ ...p, [key]: e.target.value }));
    setErrors(p => ({ ...p, [key]: '' }));
  };

  const inputCls = (id) =>
    `w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none bg-white placeholder-gray-400 transition-all input-focus ${
      errors[id] ? 'border-red-400' : 'border-gray-200'}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--color-background) 0%, #fff 40%)' }} ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="reveal">
          <SectionHeader tag="Get In Touch" title="Apply Now"
            sub="Fill out the form and your details will be sent directly to us via WhatsApp." />
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Info panel */}
          <div className="reveal rounded-[1.5rem] p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-cta))' }}>
            <h3 className="text-xl font-bold mb-8 relative z-10">Contact Information</h3>
            {contactInfo.map(item => (
              <div key={item.label} className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,.12)' }}>
                  <i className={item.icon} />
                </div>
                <div>
                  <strong className="block text-xs text-white/60 uppercase tracking-wider mb-1">{item.label}</strong>
                  {item.lines.map(l => <span key={l} className="block text-sm text-white/90">{l}</span>)}
                </div>
              </div>
            ))}
            <div className="flex gap-3 mt-6 relative z-10">
              <a href="https://wa.me/923059900345" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors" style={{ background: 'rgba(255,255,255,.1)' }}>
                <i className="fab fa-whatsapp" />
              </a>
              <a href="mailto:info@gilgetoverseas.pk" aria-label="Email"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors" style={{ background: 'rgba(255,255,255,.1)' }}>
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal bg-white rounded-[1.5rem] p-10 shadow-xl" style={{ border: '1px solid rgba(224,17,95,.1)' }}>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-sm font-semibold text-[#2E0A1C]">
                  Full Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                </label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                  <input id="fullName" type="text" placeholder="Enter your full name"
                    value={form.fullName} onChange={set('fullName')} className={inputCls('fullName')} />
                </div>
                {errors.fullName && <span className="text-xs text-red-500">{errors.fullName}</span>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#2E0A1C]">
                    Phone Number <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                    <input id="phone" type="tel" placeholder="+92 300 0000000"
                      value={form.phone} onChange={set('phone')} className={inputCls('phone')} />
                  </div>
                  {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[#2E0A1C]">
                    Email Address <span style={{ color: 'var(--color-primary)' }}>*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                    <input id="email" type="email" placeholder="your@email.com"
                      value={form.email} onChange={set('email')} className={inputCls('email')} />
                  </div>
                  {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="country" className="text-sm font-semibold text-[#2E0A1C]">
                  Desired Country <span style={{ color: 'var(--color-primary)' }}>*</span>
                </label>
                <div className="relative">
                  <i className="fas fa-globe absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none z-10" />
                  <select id="country" value={form.country} onChange={set('country')}
                    className={`${inputCls('country')} appearance-none`}>
                    <option value="" disabled>Select your desired country</option>
                    {countryOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <i className="fas fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
                </div>
                {errors.country && <span className="text-xs text-red-500">{errors.country}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-[#2E0A1C]">Message / Job Interest</label>
                <div className="relative">
                  <i className="fas fa-comment-dots absolute left-3.5 top-3.5 text-gray-400 text-sm pointer-events-none" />
                  <textarea id="message" rows={4}
                    placeholder="Tell us about your skills, experience, or job interest..."
                    value={form.message} onChange={set('message')}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm bg-white placeholder-gray-400 resize-y min-h-[110px] outline-none transition-all input-focus" />
                </div>
              </div>

              <button type="submit"
                className="btn-whatsapp w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-base transition-all duration-200">
                <i className="fab fa-whatsapp text-xl" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="reveal mt-12 rounded-[1.5rem] overflow-hidden shadow-xl"
          style={{ border: '1px solid rgba(224,17,95,.1)' }}>
          <iframe
            src="https://www.google.com/maps?q=Red+Crescent+Building+Dabgari+Garden+Peshawar&hl=en&z=16&output=embed"
            width="100%" height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gilget Overseas Enterprises Office Location"
          />
        </div>
      </div>
    </section>
  );
}