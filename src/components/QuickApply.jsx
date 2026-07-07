export default function QuickApply() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/923345577225"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-apply-pulse flex items-center gap-3 px-5 py-3.5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105"
        style={{ background: 'var(--color-cta)', color: 'var(--color-ink)' }}
      >
        <i className="fab fa-whatsapp text-xl" />
        <span className="text-sm font-bold whitespace-nowrap">Quick Apply</span>
      </a>
    </div>
  );
}
