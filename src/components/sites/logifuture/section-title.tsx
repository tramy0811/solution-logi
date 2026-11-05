export function SectionTitle({ title, sub, light = false, id }: { title: React.ReactNode; sub?: React.ReactNode; light?: boolean; id?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 id={id} className={`text-[28px] font-bold leading-tight md:text-[40px] ${light ? 'text-white' : 'text-lf-heading'}`}>
        {title}
      </h2>
      <span className="lf-underline" aria-hidden />
      {sub ? <p className={`mt-5 text-base md:text-[17px] ${light ? 'text-white/85' : 'text-lf-text'}`}>{sub}</p> : null}
    </div>
  );
}
