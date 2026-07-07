import { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';

const tabs = [
  {
    key: 'candidates',
    label: 'For Candidates',
    content: 'We connect skilled workers from Dera Ghazi Khan and surrounding regions with verified employers in the Gulf, Europe, and Asia. Our team handles screening, documentation, and pre-departure briefing so you can focus on your future.'
  },
  {
    key: 'employers',
    label: 'For Employers',
    content: 'Qadir International provides end-to-end recruitment solutions — from sourcing and vetting qualified candidates to managing contracts and travel logistics. We ensure every placement meets your workforce requirements.'
  },
  {
    key: 'whyus',
    label: 'Why Us',
    content: 'With License 2199/DGK and a decade of experience operating from Ghazi Road, D.G. Khan, we bring local insight and global reach. Our team is licensed, transparent, and committed to fair recruitment practices.'
  }
];

const chips = [
  { label: 'License 2199/DGK', icon: 'certificate' },
  { label: '6-B, Saeed Commercial Centre', icon: 'location-dot' },
  { label: 'Ghazi Road, D.G. Khan', icon: 'map-pin' },
  { label: 'Punjab, Pakistan', icon: 'flag' },
];

export default function About() {
  useReveal('.ab-reveal');
  const [activeTab, setActiveTab] = useState('candidates');

  return (
    <section id="about" style={{ padding: 'clamp(80px,10vw,130px) 24px', background: 'var(--color-background)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,107,166,0.05), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div className="ab-reveal reveal" style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-pill"><i className="fas fa-building" style={{ fontSize: 10 }} /> WHO WE ARE</span>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 'clamp(28px,5vw,46px)', color: 'var(--color-ink)', marginTop: 16, marginBottom: 16, letterSpacing: '-0.8px' }}>
            About <span style={{ color: 'var(--color-primary)' }}>Qadir International</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,480px), 1fr))', gap: 48, alignItems: 'start' }}>
          {/* Left – image with chips */}
          <div className="ab-reveal reveal-l" style={{ position: 'relative' }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,107,166,0.15)' }}>
              <img src="/images/about-office.jpg" alt="Qadir International Office" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,85,128,0.6) 100%)' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {chips.map((c) => (
                <span key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 99, fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', background: 'rgba(0,107,166,0.08)', color: 'var(--color-primary)', border: '1px solid rgba(0,107,166,0.2)', fontFamily: 'Inter, sans-serif' }}>
                  <i className={`fas fa-${c.icon}`} style={{ fontSize: 10 }} /> {c.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right – tabbed content */}
          <div className="ab-reveal reveal-r">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#4B5563', lineHeight: 1.75, marginBottom: 24 }}>
              Based at <strong>6-B, Saeed Commercial Centre, Ghazi Road, Dera Ghazi Khan, Punjab</strong>, Qadir International (License <strong>2199/DGK</strong>) is a government-licensed overseas employment promoter serving workers across southern Punjab.
            </p>

            {/* Tab buttons */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
              {tabs.map((tab) => (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                  style={{ padding: '10px 18px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700, cursor: 'pointer', border: activeTab === tab.key ? 'none' : '1px solid rgba(0,107,166,0.2)', background: activeTab === tab.key ? 'var(--color-primary)' : 'transparent', color: activeTab === tab.key ? '#fff' : 'var(--color-primary)', transition: 'all 0.25s' }}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div style={{ background: '#fff', borderRadius: 18, padding: '24px 28px', boxShadow: '0 4px 20px rgba(0,107,166,0.06)', border: '1px solid rgba(0,107,166,0.08)', minHeight: 120 }}>
              {tabs.map((tab) => (
                <div key={tab.key} style={{ display: activeTab === tab.key ? 'block' : 'none' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14.5, color: '#4B5563', lineHeight: 1.8 }}>{tab.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
