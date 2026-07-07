import { site } from '../data/aleshahData';

export default function Marquee() {
  return (
    <>
      <style>{`
        .mq-wrap { background:var(--color-primary);padding:10px 0;overflow:hidden;margin-top:76px; }
        .mq-track { display:flex;gap:0;animation:marquee 28s linear infinite;width:max-content; }
        .mq-track:hover { animation-play-state:paused; }
        .mq-item { display:inline-flex;align-items:center;gap:10px;padding:0 24px;white-space:nowrap;font-size:13px;font-weight:700;color:#fff;letter-spacing:.03em;font-family:'Inter',sans-serif; }
        .mq-dot { width:5px;height:5px;border-radius:50%;background:var(--color-secondary);flex-shrink:0; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
      <div className="mq-wrap">
        <div className="mq-track">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} style={{display:'flex'}}>
              {site.marquee.map((item, i) => (
                <span key={i} className="mq-item">
                  <span className="mq-dot" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}