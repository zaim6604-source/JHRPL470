import useReveal from '../hooks/useReveal';
import { FaLaptopCode, FaUniversity, FaOilCan, FaHardHat, FaHeartbeat, FaIndustry, FaShoppingCart, FaBroadcastTower, FaHotel, FaGraduationCap, FaTruck, FaCogs } from 'react-icons/fa';

const SECTORS = [
  { icon: FaLaptopCode, label: 'IT & Software' },
  { icon: FaUniversity, label: 'Banking & Finance' },
  { icon: FaOilCan, label: 'Oil & Gas' },
  { icon: FaHardHat, label: 'Construction' },
  { icon: FaHeartbeat, label: 'Healthcare' },
  { icon: FaIndustry, label: 'Manufacturing' },
  { icon: FaShoppingCart, label: 'Retail & FMCG' },
  { icon: FaBroadcastTower, label: 'Telecom' },
  { icon: FaHotel, label: 'Hospitality' },
  { icon: FaGraduationCap, label: 'Education' },
  { icon: FaTruck, label: 'Logistics' },
  { icon: FaCogs, label: 'Engineering' },
];

const COLORS = ['#C2185B', '#E91E8C', '#7B68EE', '#FFD23F', '#AD1457', '#C2185B', '#E91E8C', '#7B68EE', '#FFD23F', '#AD1457', '#C2185B', '#E91E8C'];

export default function Sectors() {
  useReveal('.sec-reveal');

  return (
    <section id="sectors" className="py-[clamp(60px,10vw,100px)] px-5" style={{ background: '#FFF0F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sec-reveal reveal">
          <span className="section-pill">SECTORS</span>
          <h2 className="font-display font-extrabold mt-4 mb-3" style={{ fontSize: 'clamp(28px,5vw,42px)', color: '#3A0A22' }}>
            Sectors We Serve
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B5B3E' }}>
            Industry expertise across a wide range of sectors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {SECTORS.map((s, i) => (
            <div
              key={i}
              className="sec-reveal reveal inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{ background: COLORS[i], color: COLORS[i] === '#FFD23F' ? '#3A0A22' : '#fff' }}
            >
              <s.icon size={14} />
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
