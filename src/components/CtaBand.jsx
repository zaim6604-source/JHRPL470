export default function CTABand() {
  return (
    <section className="py-16 px-5 relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #006BA6 0%, #005580 50%, #0496FF 100%)' }}>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display font-extrabold mb-4" style={{ fontSize: 'clamp(24px,4vw,38px)', color: '#fff', letterSpacing: '-0.8px' }}>
          Ready to Work Abroad? <span style={{ color: '#FFBC42' }}>Let's Get You There.</span>
        </h2>
        <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif' }}>
          Take the first step toward your international career today. Qadir International is here to guide you.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/923334857777?text=Hello%20Qadir%20International%2C%20I%20want%20to%20apply%20for%20a%20job." target="_blank" rel="noopener noreferrer"
            className="btn-primary no-underline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D81159', boxShadow: '0 4px 20px rgba(216,17,89,0.4)' }}>
            <i className="fas fa-paper-plane" /> Apply Now
          </a>
          <a href="https://wa.me/923334857777" target="_blank" rel="noopener noreferrer"
            className="btn-outline no-underline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <i className="fab fa-whatsapp" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
