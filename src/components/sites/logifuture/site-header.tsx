'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ConsultButton } from './consult';
import { IMG, modules, nav } from './content';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-[22px] font-bold tracking-tight', light ? 'text-white' : 'text-lf-blue')}>
      <Image src={`${IMG}/mark.png`} alt="" width={30} height={30} priority />
      <span>
        Logi<span className={light ? 'text-lf-aqua' : 'text-lf-cyan'}>Future</span>
      </span>
    </span>
  );
}

// Menu kiểu "overlay": một nút Menu mở bảng toàn màn hình, dùng chung cho desktop và mobile.
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    document.documentElement.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'Tab' && panelRef.current) {
        const f = [...panelRef.current.querySelectorAll<HTMLElement>('a, button')];
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      toggle?.focus();
    };
  }, [open]);

  return (
    <header className={cn('sticky top-0 z-40 bg-white transition-shadow', scrolled && 'shadow-[0_6px_20px_-12px_rgb(1_16_54/0.35)]')}>
      <div className="mx-auto flex h-16 max-w-[1320px] items-center gap-4 px-4 md:px-6">
        <a href="#top" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lf-blue">
          <Logo />
        </a>
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <ConsultButton className="hidden !min-h-11 !px-5 !text-[15px] sm:inline-flex">{nav.cta}</ConsultButton>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="lf-menu"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-4 text-[15px] font-bold text-lf-heading transition-colors hover:border-lf-blue hover:text-lf-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue"
          >
            <Menu className="size-5" aria-hidden />
            {nav.menu}
          </button>
        </div>
      </div>

      <div
        id="lf-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={nav.menu}
        hidden={!open}
        className="fixed inset-0 z-50 overflow-y-auto bg-lf-night text-white"
      >
        <div className="lf-hero-bg lf-grid-lines min-h-full">
          <div className="mx-auto flex h-16 max-w-[1320px] items-center px-4 md:px-6">
            <Logo light />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 px-4 text-[15px] font-bold transition-colors hover:bg-white hover:text-lf-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-aqua"
            >
              <X className="size-5" aria-hidden />
              {nav.close}
            </button>
          </div>

          <div className="mx-auto grid max-w-[1320px] gap-10 px-4 pb-12 pt-8 md:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-14">
            <nav aria-label={nav.menu}>
              <ol className="grid">
                {nav.links.map((l, i) => (
                  <li key={l.href} className="border-b border-white/15">
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 py-4 text-[28px] font-bold leading-tight transition-colors hover:text-lf-aqua focus-visible:text-lf-aqua focus-visible:outline-none md:text-[40px]"
                    >
                      <span className="w-8 text-base font-medium text-white/50 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      {l.label}
                      <ArrowUpRight className="ml-auto size-6 self-center opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid content-start gap-8">
              <div>
                <p className="text-sm font-medium text-white/70">{nav.modulesTitle}</p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {modules.map((m) => (
                    <li key={m.code} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3">
                      <span className="block font-bold text-lf-aqua">Logi.{m.code}</span>
                      <span className="text-sm text-white/80">{m.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-6 text-lf-ink">
                <p className="text-xl font-bold text-lf-heading">{nav.contactTitle}</p>
                <p className="mt-2 text-lf-text">{nav.contactBody}</p>
                <span onClickCapture={() => setOpen(false)} className="mt-5 inline-block">
                  <ConsultButton>{nav.cta}</ConsultButton>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
