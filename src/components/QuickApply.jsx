import { useState } from 'react';

const WA = '923334857777';

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Quick Apply\nName: ${name}\nPhone: ${phone}\nJob Category: ${category}`);
    window.open(`https://wa.me/${WA}?text=${text}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setCategory('');
  };

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-none cursor-pointer"
        style={{ background: '#D81159', boxShadow: '0 4px 24px rgba(216,17,89,0.5)' }}>
        <i className="fab fa-whatsapp" style={{ color: '#fff', fontSize: 26 }} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[60]" style={{ background: 'rgba(0,0,0,0.4)' }} onClick={() => setOpen(false)} />
          <div className="fixed bottom-24 right-6 z-[70] w-[320px] rounded-2xl shadow-2xl overflow-hidden" style={{ background: '#fff' }}>
            <div className="flex items-center justify-between p-4" style={{ background: '#D81159' }}>
              <span className="font-display font-bold text-sm text-white"><i className="fab fa-whatsapp" style={{ marginRight: 8 }} />Quick Apply</span>
              <button onClick={() => setOpen(false)} className="bg-none border-none cursor-pointer p-0" style={{ color: '#fff', fontSize: 18 }}><i className="fas fa-times" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <input type="text" placeholder="Your Name *" required value={name} onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border-none outline-none" style={{ background: '#E6F3FB', fontFamily: 'Inter, sans-serif', color: '#06283D' }} />
              <input type="tel" placeholder="Phone Number *" required value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border-none outline-none" style={{ background: '#E6F3FB', fontFamily: 'Inter, sans-serif', color: '#06283D' }} />
              <select value={category} onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border-none outline-none" style={{ background: '#E6F3FB', fontFamily: 'Inter, sans-serif', color: '#6B7280' }}>
                <option value="">Job Category</option>
                <option value="Construction">Construction</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Drivers">Drivers</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Factory">Factory / Manufacturing</option>
                <option value="Other">Other</option>
              </select>
              <button type="submit"
                className="w-full py-2.5 rounded-lg text-sm font-bold border-none cursor-pointer text-white flex items-center justify-center gap-2"
                style={{ background: '#D81159', fontFamily: 'Inter, sans-serif' }}>
                <i className="fab fa-whatsapp" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
