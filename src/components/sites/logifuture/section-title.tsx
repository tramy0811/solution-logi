export function SectionTitle({ title, sub, light = false, id }: { title: React.ReactNode; sub?: React.ReactNode; light?: boolean; id?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center" data-reveal>
      <h2 id={id} className={`text-[28px] font-bold leading-tight tracking-tight md:text-[38px] ${light ? 'text-white' : 'text-lf-heading'}`}>
        {title}
      </h2>
      {sub ? <p className={`mx-auto mt-3 max-w-2xl text-base leading-relaxed md:text-[17px] ${light ? 'text-white/85' : 'text-lf-text'}`}>{sub}</p> : null}
    </div>
  );
}
