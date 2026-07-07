import { useEffect } from 'react';
import {
  MapPin,
  Phone,
  Navigation2,
  ExternalLink,
  Clock,
} from 'lucide-react';

const FacebookIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const contactItems = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Flat No. 11, 2nd Floor, Akram Complex, Model Town Link Road, Lahore, Punjab',
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    link: null,
  },
  {
    icon: Phone,
    label: 'Phone Numbers',
    value: '042-5178464\n0300-9472963',
    accent: '#fbbf24',
    bg: 'rgba(251,191,36,0.08)',
    link: 'tel:+924251784640',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook Page',
    value: 'barlex.agencies',
    accent: '#0284c7',
    bg: 'rgba(2,132,199,0.08)',
    link: 'https://www.facebook.com/barlex.agencies/',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Sat: 9:00 AM – 6:00 PM',
    accent: '#0369a1',
    bg: 'rgba(3,105,161,0.08)',
    link: null,
  },
];

export default function Contact() {
  useEffect(() => {
    const els = document.querySelectorAll('.ct-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px,10vw,130px) 24px',
        background: '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* BG decoration */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          left: -200,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.05), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          right: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.05), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {/* Header */}
        <div
          className="ct-reveal reveal"
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span className="chip">Get In Touch</span>
          <h2
            style={{
              fontFamily: 'Plus Jakarta Sans,sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px,5vw,46px)',
              color: '#0f172a',
              marginTop: 16,
              marginBottom: 16,
              letterSpacing: '-0.8px',
            }}
          >
            Find <span className="grad-text">Us</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#64748b',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.7,
              fontFamily: 'DM Sans,sans-serif',
            }}
          >
            Visit our office in Lahore or reach out via phone or social media. Our team
            is ready to guide your overseas career journey.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,460px),1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* Left – contact details */}
          <div className="ct-reveal reveal-l">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginBottom: 32,
              }}
            >
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div
                    key={item.label}
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(14,165,233,0.1)',
                      borderRadius: 18,
                      padding: '20px 22px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                      boxShadow: '0 4px 20px rgba(14,165,233,0.06)',
                      transition: 'transform 0.25s, box-shadow 0.25s',
                      cursor: item.link ? 'pointer' : 'default',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 36px rgba(14,165,233,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.06)';
                    }}
                  >
                    <div
                      style={{
                        minWidth: 46,
                        height: 46,
                        borderRadius: 13,
                        background: item.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color={item.accent} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontFamily: 'DM Sans,sans-serif',
                          fontWeight: 600,
                          color: '#94a3b8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: 'DM Sans,sans-serif',
                          fontWeight: 600,
                          fontSize: 14.5,
                          color: item.link ? item.accent : '#1e293b',
                          lineHeight: 1.5,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {item.value}
                        {item.link && (
                          <ExternalLink
                            size={12}
                            style={{ marginLeft: 5, display: 'inline', verticalAlign: 'middle' }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Direction button */}
            <a
              href="https://www.google.com/maps?q=31.4655,74.3151"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
            >
              <Navigation2 size={16} />
              Get Directions on Google Maps
            </a>
          </div>

          {/* Right – map */}
          <div
            className="ct-reveal reveal-r"
            style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(14,165,233,0.12)',
              border: '1px solid rgba(14,165,233,0.1)',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg,#0ea5e9,#38bdf8)',
                padding: '16px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <MapPin size={16} color="rgba(255,255,255,0.8)" />
              <span
                style={{
                  fontFamily: 'DM Sans,sans-serif',
                  fontWeight: 600,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.9)',
                }}
              >
                Barlex Agencies — Akram Complex, Model Town Link Road, Lahore
              </span>
            </div>
            <iframe
              title="Barlex Agencies Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.4!2d74.3151!3d31.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI3JzU1LjgiTiA3NMKwMTgnNTQuNCJF!5e0!3m2!1sen!2spk!4v1"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom coordinates strip */}
        <div
          className="ct-reveal reveal"
          style={{
            marginTop: 40,
            background: '#fff',
            border: '1px solid rgba(14,165,233,0.1)',
            borderRadius: 16,
            padding: '16px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            boxShadow: '0 4px 20px rgba(14,165,233,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Navigation2 size={15} color="#0ea5e9" />
            <span
              style={{
                fontSize: 13,
                fontFamily: 'DM Sans,sans-serif',
                color: '#64748b',
                fontWeight: 500,
              }}
            >
              GPS Coordinates:
            </span>
            <span
              style={{
                fontSize: 13,
                fontFamily: 'DM Sans,sans-serif',
                fontWeight: 700,
                color: '#0f172a',
              }}
            >
              31.4655° N, 74.3151° E
            </span>
          </div>
          <a
            href="https://www.facebook.com/barlex.agencies/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 13,
              fontFamily: 'DM Sans,sans-serif',
              fontWeight: 700,
              color: '#0284c7',
              textDecoration: 'none',
              padding: '7px 14px',
              borderRadius: 8,
              background: 'rgba(2,132,199,0.06)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(2,132,199,0.12)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgba(2,132,199,0.06)')
            }
          >
            <FacebookIcon size={14} color="currentColor" />
            Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
