import { useState } from 'react';

const jobCategories = [
  'Construction Worker',
  'Driver',
  'Hospitality Staff',
  'Healthcare Worker',
  'Technician',
  'Factory Worker',
  'Security Guard',
  'Agriculture Worker',
  'Skilled Trades',
  'Other',
];

export default function QuickApply() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [jobCategory, setJobCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const msg = encodeURIComponent(
      `Hello Misrial Enterprises! I want to apply for overseas employment.%0A%0AName: ${name}%0APhone: ${phone}%0AJob Category: ${jobCategory}`
    );
    window.open(`https://wa.me/923215667136?text=${msg}`, '_blank');
    setOpen(false);
    setName('');
    setPhone('');
    setJobCategory('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          open ? 'bg-gray-700 rotate-45' : 'bg-misrial-cta'
        }`}
        aria-label="Quick Apply"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bolt'} text-xl`} />
      </button>

      <div
        className={`absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-r from-misrial-cta to-misrial-primary p-4">
          <h3 className="text-white font-bold font-heading text-sm">Quick Apply</h3>
          <p className="text-white/80 text-xs">Apply in 30 seconds</p>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-misrial-cta focus:ring-2 focus:ring-misrial-cta/20"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-misrial-cta focus:ring-2 focus:ring-misrial-cta/20"
          />
          <select
            value={jobCategory}
            onChange={(e) => setJobCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-misrial-cta focus:ring-2 focus:ring-misrial-cta/20 appearance-none"
          >
            <option value="">Job Category&hellip;</option>
            {jobCategories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp" />
            Apply via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}