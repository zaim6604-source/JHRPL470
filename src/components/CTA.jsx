import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-misrial-primary via-misrial-primary to-misrial-accent" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 50%, white 0%, transparent 50%)',
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 container-pad text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading mb-4 leading-tight">
          Ready to Work Abroad?{' '}
          <span className="text-misrial-cta">Let's Get Started.</span>
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          Take the first step toward a better future. Contact us today and let us
          help you find the right opportunity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/923215667136"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-misrial-cta hover:bg-misrial-cta/90 text-white font-bold text-base px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2"
          >
            <i className="fas fa-paper-plane" />
            Apply Now
          </a>
          <a
            href="https://wa.me/923215667136"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold text-base px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2 border border-white/40"
          >
            <i className="fab fa-whatsapp" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}