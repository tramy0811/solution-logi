export function btnClass(variant: 'gradient' | 'outline' | 'white' = 'gradient') {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-[filter,background-color,color,transform] duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lf-aqua cursor-pointer min-h-12 px-7 text-base md:min-h-16 md:px-10 md:text-xl';
  if (variant === 'outline') return `${base} border border-lf-blue/70 bg-[rgba(208,213,221,0.2)] text-lf-blue hover:bg-lf-blue hover:text-white`;
  if (variant === 'white') return `${base} bg-white text-lf-blue hover:bg-lf-sky`;
  return `${base} lf-gradient-btn text-white hover:brightness-110`;
}
