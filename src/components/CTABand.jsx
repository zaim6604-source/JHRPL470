import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export default function CTABand() {
  return (
    <div className="py-[clamp(50px,8vw,80px)] px-5 text-center" style={{ background: 'linear-gradient(135deg, #C2185B 0%, #E91E8C 100%)' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-extrabold mb-4" style={{ fontSize: 'clamp(24px,4vw,36px)', color: '#fff' }}>
          Looking for the Right People?<br />
          We've Been Finding Them Since 1997.
        </h2>
        <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Partner with Juniper HR for trusted, professional recruitment solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/923003845414"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp size={18} />
            Hire Talent
          </a>
          <a
            href="https://wa.me/923003845414"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaWhatsapp size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
