import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaFacebook } from 'react-icons/fa';

const WA = '923003845414';
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3320.1!2d73.07645114232855!3d33.73013790299611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQzJzQ4LjUiTiA3M8KwMDQnMzUuMiJF!5e0!3m2!1sen!2spk!4v1';

export default function ContactMap() {
  useReveal('.ct-reveal');
  const [formType, setFormType] = useState('hiring');
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const typeLabel = formType === 'hiring' ? 'I\'m Hiring' : 'I\'m a Job Seeker';
    const extra = formType === 'hiring' ? `Company: ${form.company}` : 'Job Category: General';
    const text = `*Juniper HR Enquiry*\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n${extra}\nType: ${typeLabel}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF0F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 ct-reveal reveal">
          <span className="section-pill">GET IN TOUCH</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#3A0A22' }}>
            Contact Us
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Ready to hire or looking for opportunities? Reach out to us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="ct-reveal reveal-l">
            <div className="rounded-2xl p-6 md:p-8" style={{ background: '#fff', border: '1px solid rgba(194, 24, 91, 0.08)' }}>
              {/* Toggle */}
              <div className="flex gap-2 mb-6 p-1 rounded-xl" style={{ background: '#FFF0F5' }}>
                {['hiring', 'seeking'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setFormType(t)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold border-none cursor-pointer transition-all ${
                      formType === t ? 'text-white' : 'text-[#6B5B3E]'
                    }`}
                    style={{ background: formType === t ? '#C2185B' : 'transparent' }}
                  >
                    {t === 'hiring' ? "I'm Hiring" : "I'm a Job Seeker"}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" placeholder="Full Name" required value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                    style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#3A0A22' }} />
                  <input name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                    style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#3A0A22' }} />
                </div>
                <input name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                  style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#3A0A22' }} />
                {formType === 'hiring' ? (
                  <input name="company" placeholder="Company Name" value={form.company} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                    style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#3A0A22' }} />
                ) : (
                  <select name="jobCategory" className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent"
                    style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#6B5B3E' }}>
                    <option>Select Job Category</option>
                    <option>IT & Software</option>
                    <option>Banking & Finance</option>
                    <option>Construction</option>
                    <option>Healthcare</option>
                    <option>Hospitality</option>
                    <option>Engineering</option>
                    <option>Other</option>
                  </select>
                )}
                <textarea name="message" placeholder="Your Message" rows={3} value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm border outline-none bg-transparent resize-none"
                  style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#3A0A22' }} />
                <button type="submit" className="btn-primary w-full justify-center">
                  <FaPaperPlane size={14} /> Send via WhatsApp
                </button>
              </form>
              <div className="mt-4 text-center">
                <a href={`mailto:info@juniperhr.pk`} className="text-xs" style={{ color: '#6B5B3E' }}>or email info@juniperhr.pk</a>
              </div>
            </div>
          </div>

          {/* Info + Map */}
          <div className="ct-reveal reveal-r space-y-5">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid rgba(194, 24, 91, 0.1)' }}>
              <div className="p-3 flex items-center gap-2" style={{ background: '#C2185B' }}>
                <FaMapMarkerAlt size={14} color="rgba(255,255,255,0.8)" />
                <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>Juniper Tower, F-6 Markaz, Islamabad</span>
              </div>
              <iframe title="Juniper HR Location" src={MAP_EMBED} width="100%" height="300" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: FaPhone, label: 'Phone', value: '051-8895008', href: 'tel:+92518895008' },
                { icon: FaWhatsapp, label: 'WhatsApp', value: '0300-3845414', href: `https://wa.me/${WA}` },
                { icon: FaMapMarkerAlt, label: 'Address', value: '4th Floor, Juniper Tower, F-6 Markaz, Islamabad, 44220' },
                { icon: FaFacebook, label: 'Facebook', value: 'juniperhumanresources', href: 'https://www.facebook.com/juniperhumanresources/' },
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: '#fff', border: '1px solid rgba(194, 24, 91, 0.08)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(194,24,91,0.08)' }}>
                      <Icon size={16} style={{ color: '#C2185B' }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#C2185B' }}>{item.label}</div>
                      <div className="text-sm font-medium" style={{ color: '#3A0A22' }}>{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="no-underline">{content}</a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
