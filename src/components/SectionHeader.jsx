export default function SectionHeader({ tag, title, sub, light }) {
  return (
    <div className="text-center mb-14">
      <span className="section-tag inline-block text-[0.7rem] font-bold uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-3">
        {tag}
      </span>
      <h2 className={`text-3xl sm:text-4xl font-black leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: 'var(--color-accent)' }} />
      {sub && (
        <p className={`text-[0.95rem] mt-4 max-w-xl mx-auto leading-relaxed ${light ? 'text-white/60' : 'text-gray-500'}`}>
          {sub}
        </p>
      )}
    </div>
  );
}