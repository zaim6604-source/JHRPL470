import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WA = '923003845414';

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
              <button onClick={() => setOpen(false)} className="bg-none border-none cursor-pointer" style={{ color: '#6B5B3E' }}><FaTimes size={14} /></button>
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
