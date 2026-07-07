import { FaPlane, FaSuitcase, FaPassport, FaUserTie } from 'react-icons/fa';

const ITEMS = [
  'Manpower Recruitment', 'Executive Search', 'Staffing', 'Payroll', 'HR Solutions',
  'Manpower Recruitment', 'Executive Search', 'Staffing', 'Payroll', 'HR Solutions',
];

export default function Marquee() {
  return (
    <div className="mt-[70px] overflow-hidden whitespace-nowrap py-2.5" style={{ background: '#C2185B' }}>
      <div className="inline-flex items-center gap-10 animate-marquee" style={{ animation: 'marquee 28s linear infinite' }}>
        {ITEMS.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            <span style={{ color: '#FFD23F' }}>✦</span>
            {item}
          </span>
        ))}
        <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#FFD23F' }}>
          ✦ Serving Pakistan Since 1997 ✦ F-6 Markaz, Islamabad
        </span>
      </div>
    </div>
  );
}
