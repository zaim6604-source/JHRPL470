import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const WA = '923002194225';
const WA_TEXT = encodeURIComponent('Hi Neuro International! I am interested in overseas employment. Please provide details.');

export default function ContactMap() {
  useReveal('.cn-reveal');
  const [form, setForm] = useState({ name: '', phone: '', email: '', category: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nJob Category: ${form.category}\nMessage: ${form.message}`);
    window.open(`https://wa.me/${WA}?text=${text}`, '_blank');
  };

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <section id="contact" className="py-[clamp(80px,10vw,120px)] px-5 relative overflow-hidden" style={{ background: '#fff' }}>
      <div className="max-w-5xl mx-auto">
        <div className="cn-reveal reveal text-center mb-14">
          <span className="section-pill">GET IN TOUCH</span>
          <h2 className="font-display font-extrabold mt-4 mb-4" style={{ fontSize: 'clamp(28px,5vw,44px)', color: '#0C2A3E', letterSpacing: '-0.8px' }}>
            Contact <span style={{ color: '#0EA5E9' }}>Neuro International</span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
            Visit our Karachi office or reach out via phone, WhatsApp, or the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="cn-reveal reveal-l">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name *" required value={form.name} onChange={handleChange('name')}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none" style={{ background: '#F0F9FF', fontFamily: 'Inter, sans-serif', color: '#0C2A3E' }} />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={handleChange('phone')}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none" style={{ background: '#F0F9FF', fontFamily: 'Inter, sans-serif', color: '#0C2A3E' }} />
              </div>
              <div>
                <input type="email" placeholder="Email" value={form.email} onChange={handleChange('email')}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none" style={{ background: '#F0F9FF', fontFamily: 'Inter, sans-serif', color: '#0C2A3E' }} />
              </div>
              <div>
                <select value={form.category} onChange={handleChange('category')}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none" style={{ background: '#F0F9FF', fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                  <option value="">Select Job Category</option>
                  <option value="Construction">Construction</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Drivers">Drivers</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Factory">Factory / Manufacturing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <textarea placeholder="Your Message" rows={4} value={form.message} onChange={handleChange('message')}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border-none outline-none resize-none" style={{ background: '#F0F9FF', fontFamily: 'Inter, sans-serif', color: '#0C2A3E' }} />
              </div>
              <button type="submit" className="btn-primary !w-full !justify-center" style={{ background: '#0EA5E9', boxShadow: '0 4px 20px rgba(14,165,233,0.35)' }}>
                <Send size={16} /> Send via WhatsApp
              </button>
              <a href="mailto:info@neurointl.pk" className="block text-center text-xs mt-3" style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
                Or email: info@neurointl.pk
              </a>
            </form>
          </div>

          <div className="cn-reveal reveal-r">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#F0F9FF' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <Phone size={18} color="#fff" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#0EA5E9', fontFamily: 'Inter, sans-serif' }}>Phone / WhatsApp</div>
                  <div className="text-sm font-medium" style={{ color: '#0C2A3E', fontFamily: 'Inter, sans-serif' }}>021-35672565<br />0300-2194225</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#F0F9FF' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <MapPin size={18} color="#fff" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#0EA5E9', fontFamily: 'Inter, sans-serif' }}>Address</div>
                  <div className="text-sm font-medium" style={{ color: '#0C2A3E', fontFamily: 'Inter, sans-serif' }}>
                    M-6, Mehran Estate, Mezzanine Floor,<br />
                    Dr. Dawood Pota Road, Cantt,<br />
                    Karachi South, Sindh
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#F0F9FF' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#0EA5E9' }}>
                  <Mail size={18} color="#fff" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#0EA5E9', fontFamily: 'Inter, sans-serif' }}>Email</div>
                  <div className="text-sm font-medium" style={{ color: '#0C2A3E', fontFamily: 'Inter, sans-serif' }}>info@neurointl.pk</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Neuro International Location"
                src="https://www.google.com/maps?q=Mehran+Estate+Dr+Dawood+Pota+Road+Cantt+Karachi&hl=en&z=16&output=embed"
                width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
