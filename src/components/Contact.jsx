import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactDetails = [
  {
    icon: 'fa-location-dot',
    label: 'Office Address',
    value: 'Office No. 5-D/384, Lane No. 7, Chaurharpal, Misrial Road, Rawalpindi, Punjab',
    color: 'bg-misrial-primary',
  },
  {
    icon: 'fa-phone',
    label: 'Phone Numbers',
    value: '051-5462519 / 051-5476194',
    href: 'tel:0515462519',
    color: 'bg-misrial-accent',
  },
  {
    icon: 'fa-envelope',
    label: 'Email Address',
    value: 'info@misrial.pk',
    href: 'mailto:info@misrial.pk',
    color: 'bg-misrial-cta',
  },
  {
    icon: 'fa-clock',
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    color: 'bg-misrial-highlight',
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 bg-misrial-primary/15 text-misrial-primary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            <i className="fas fa-address-card" />
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1400] font-heading">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Visit our office, give us a call, or send a message on WhatsApp.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Cards + Form */}
          <div className={`space-y-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-bold text-[#2B1400] font-heading mb-6">
              Misrial Enterprises
            </h3>

            {contactDetails.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-misrial-primary/20 hover:shadow-md transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fas ${item.icon} text-white text-lg`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#2B1400] font-semibold hover:text-misrial-primary transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#2B1400] font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA — Primary */}
            <a
              href="https://wa.me/923215667136"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <i className="fab fa-whatsapp text-3xl" />
              <div>
                <p className="text-sm opacity-90">Chat on WhatsApp (Primary)</p>
                <p className="text-base">+92 321-5667136</p>
              </div>
            </a>

            {/* WhatsApp CTA — Secondary */}
            <a
              href="https://wa.me/923335471932"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-green-500/80 to-green-600/80 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <i className="fab fa-whatsapp text-3xl" />
              <div>
                <p className="text-sm opacity-90">Chat on WhatsApp (Secondary)</p>
                <p className="text-base">+92 333-5471932</p>
              </div>
            </a>

            {/* Quick Form */}
            <div className="bg-misrial-background rounded-2xl p-6 border border-misrial-secondary/30">
              <h4 className="font-bold text-[#2B1400] text-sm mb-4 font-heading">Quick Message</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = form.name.value;
                  const phone = form.phone.value;
                  const msg = encodeURIComponent(
                    `Hello Misrial Enterprises!%0A%0AName: ${name}%0APhone: ${phone}%0AI am interested in overseas employment.`
                  );
                  window.open(`https://wa.me/923215667136?text=${msg}`, '_blank');
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-misrial-primary focus:ring-2 focus:ring-misrial-primary/20"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-misrial-primary focus:ring-2 focus:ring-misrial-primary/20"
                />
                <button
                  type="submit"
                  className="w-full bg-misrial-cta hover:bg-misrial-cta/90 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Right: Map */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80 lg:h-full min-h-[400px]">
              <iframe
                title="Misrial Enterprises Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106374.24973817044!2d72.9819634200117!3d33.56964899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9499adc03e77%3A0x1d3b1e0e3a5f0b0b!2sMisrial%20Rd%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-sm text-gray-400 mt-3 flex items-center justify-center gap-1">
              <i className="fas fa-location-dot text-misrial-cta" />
              Misrial Road, Chaurharpal, Rawalpindi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}