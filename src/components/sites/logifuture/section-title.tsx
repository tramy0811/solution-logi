export function SectionTitle({ title, sub, light = false, id }: { title: React.ReactNode; sub?: React.ReactNode; light?: boolean; id?: string }) {
  return (
    <div className="mx-auto max-w-[1240px] text-center" data-reveal>
      <h2 id={id} className={`mx-auto text-balance text-[28px] font-semibold leading-[1.3] tracking-[-0.015em] md:text-[38px] ${light ? 'text-white' : 'text-lf-heading'}`}>
        {title}
      </h2>
      <span className="lf-heading-rule mx-auto mt-5 block h-1 w-20 rounded-full" aria-hidden />
      {sub ? <p className={`mx-auto mt-5 max-w-[800px] text-base leading-relaxed md:text-[18px] ${light ? 'text-white/85' : 'text-lf-text'}`}>{sub}</p> : null}
    </div>
  );
}
