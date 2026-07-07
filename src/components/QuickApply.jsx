import { useState } from 'react';

const WA = '923003845414';

const FaWhatsapp = ({ size = 16 }) => (
  <svg viewBox="0 0 448 512" width={size} height={size} fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.3-63.3-28.3-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const FaTimes = ({ size = 16 }) => (
  <svg viewBox="0 0 352 512" width={size} height={size} fill="currentColor">
    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
  </svg>
);

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', need: 'Hiring' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Juniper HR Enquiry*\nName: ${form.name}\nPhone: ${form.phone}\nNeed: ${form.need}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
  };

  return (
    <>
      {/* Widget */}
      <div className="fixed bottom-5 right-5 z-40">
        {open && (
          <div className="mb-3 rounded-2xl p-5 shadow-2xl w-72" style={{ background: '#fff', border: '1px solid rgba(194,24,91,0.1)' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-display font-bold text-sm" style={{ color: '#3A0A22' }}>Quick Enquiry</span>
              <button onClick={() => setOpen(false)} className="bg-none border-none cursor-pointer" style={{ color: '#6B5B3E' }}>
                <FaTimes size={14} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-transparent"
                style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#3A0A22' }} />
              <input placeholder="Phone Number" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-transparent"
                style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#3A0A22' }} />
              <select value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none bg-transparent"
                style={{ borderColor: 'rgba(194,24,91,0.15)', color: '#6B5B3E' }}>
                <option>Hiring</option>
                <option>Job Seeking</option>
              </select>
              <button type="submit" className="w-full py-2.5 rounded-xl text-sm font-bold border-none cursor-pointer flex items-center justify-center gap-2"
                style={{ background: '#FFD23F', color: '#3A0A22' }}>
                <FaWhatsapp size={15} /> Send
              </button>
            </form>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full shadow-xl border-none cursor-pointer flex items-center justify-center transition-transform hover:scale-105"
          style={{ background: '#FFD23F', color: '#3A0A22' }}
        >
          <FaWhatsapp size={26} />
        </button>
      </div>
    </>
  );
}
