'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from './icons';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 500);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      aria-label="Về đầu trang"
      title="Về đầu trang"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        document.querySelector<HTMLElement>('#top h1')?.focus({ preventScroll: true });
      }}
      className="fixed bottom-[max(24px,env(safe-area-inset-bottom))] right-5 z-30 grid size-12 place-items-center rounded-full border border-lf-blue bg-white text-lf-blue shadow-md transition-colors hover:bg-lf-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lf-blue"
    >
      <ArrowRight className="size-4 -rotate-90" aria-hidden />
    </button>
  );
}
