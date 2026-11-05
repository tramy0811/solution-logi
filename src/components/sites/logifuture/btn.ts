export function btnClass(variant: 'gradient' | 'outline' | 'white' | 'ghost-light' = 'gradient') {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-base font-semibold transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3 cursor-pointer md:min-h-[54px] md:px-8';
  if (variant === 'outline') return `${base} border border-lf-blue/40 bg-white text-lf-blue hover:border-lf-blue hover:bg-lf-soft focus-visible:outline-lf-blue`;
  if (variant === 'ghost-light') return `${base} border border-white/50 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white`;
  if (variant === 'white') return `${base} bg-white text-lf-navy hover:bg-lf-sky focus-visible:outline-white`;
  return `${base} lf-cta text-white hover:brightness-110 focus-visible:outline-lf-navy`;
}
