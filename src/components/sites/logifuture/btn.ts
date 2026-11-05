export function btnClass(variant: 'gradient' | 'outline' | 'white' | 'ghost-light' = 'gradient') {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 text-base font-bold transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3 cursor-pointer md:min-h-[52px] md:px-7';
  if (variant === 'outline') return `${base} border border-lf-blue/40 bg-white text-lf-blue hover:border-lf-blue hover:bg-lf-soft focus-visible:outline-lf-blue`;
  if (variant === 'ghost-light') return `${base} border border-white/50 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white`;
  if (variant === 'white') return `${base} bg-white text-lf-navy hover:bg-lf-sky focus-visible:outline-white`;
  return `${base} bg-lf-bright text-white hover:bg-lf-hover focus-visible:outline-lf-navy`;
}
