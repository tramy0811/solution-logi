'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Boxes, CircleHelp, Layers, Lightbulb, Route, Workflow, type IconType } from './icons';
import { cn } from '@/lib/utils';
import { ConsultButton } from './consult';
import { IMG, modules, nav } from './content';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-[22px] font-bold', light ? 'text-white' : 'text-lf-navy')}>
      <Image src={`${IMG}/mark.png`} alt="" width={30} height={30} priority />
      <span>
        Logi<span className={light ? 'text-lf-aqua' : 'text-lf-bright'}>Future</span>
      </span>
    </span>
  );
}

const linkIcons: IconType[] = [Lightbulb, Layers, Boxes, Workflow, Route, CircleHelp];

function Burger({ open }: { open: boolean }) {
  const bar = 'absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300';
  return (
    <span className="relative block size-5" aria-hidden>
      <span className={cn(bar, 'top-[5px]', open && 'translate-y-[4px] rotate-45')} />
      <span className={cn(bar, 'top-[13px]', open && '-translate-y-[4px] -rotate-45')} />
    </span>
  );
}

// Menu: một nút mở bảng thả xuống dưới header (desktop) hoặc ngăn kéo từ phải (mobile).
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
    <header className={cn('sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-colors', scrolled || open ? 'border-lf-line' : 'border-transparent')}>
      <div className="relative z-50 mx-auto flex h-16 max-w-[1240px] items-center gap-4 bg-white/0 px-4 md:px-6">
        <a href="#top" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lf-blue">
          <Logo />
        </a>
        <div className="ml-auto flex items-center gap-2">
          <ConsultButton className="hidden !min-h-11 !px-5 !text-[15px] sm:inline-flex">{nav.cta}</ConsultButton>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="lf-menu"
            onClick={() => setOpen((o) => !o)}
            className={cn(
              'inline-flex min-h-11 items-center gap-2.5 rounded-xl px-4 text-[15px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue',
              open ? 'bg-lf-navy text-white' : 'bg-lf-soft text-lf-navy hover:bg-lf-sky',
            )}
          >
            <Burger open={open} />
            {open ? nav.close : nav.menu}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button type="button" aria-label={nav.close} tabIndex={-1} onClick={() => setOpen(false)} className="lf-scrim fixed inset-0 top-16 z-30 cursor-default bg-lf-night/40" />
          <div
            id="lf-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={nav.menu}
            className="lf-panel fixed bottom-0 right-0 top-16 z-40 w-[min(420px,100%)] overflow-y-auto border-l border-lf-line bg-white lg:absolute lg:bottom-auto lg:left-0 lg:w-full lg:border-l-0 lg:border-b lg:shadow-[0_24px_48px_-24px_rgb(11_29_66/0.35)]"
          >
            <div className="mx-auto grid max-w-[1240px] gap-6 p-4 md:p-6 lg:grid-cols-[1.5fr_1fr] lg:gap-10 lg:py-8">
              <nav aria-label={nav.menu}>
                <ul className="grid gap-1 lg:grid-cols-2 lg:gap-2">
                  {nav.links.map((l, i) => {
                    const Icon = linkIcons[i];
                    return (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-lf-soft focus-visible:bg-lf-soft focus-visible:outline-2 focus-visible:outline-lf-blue"
                        >
                          <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-lf-line bg-white text-lf-bright transition-colors group-hover:border-lf-bright group-hover:bg-lf-bright group-hover:text-white">
                            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                          </span>
                          <span className="grid gap-0.5">
                            <span className="font-bold text-lf-navy">{l.label}</span>
                            <span className="text-sm leading-snug text-lf-text">{l.desc}</span>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="grid content-start gap-5 rounded-2xl bg-lf-navy p-6 text-white">
                <div>
                  <p className="text-lg font-bold">{nav.contactTitle}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">{nav.contactBody}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5" aria-label={nav.modulesTitle}>
                  {modules.map((m) => (
                    <li key={m.code} className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-white/90">
                      Logi.{m.code}
                    </li>
                  ))}
                </ul>
                <span onClickCapture={() => setOpen(false)}>
                  <ConsultButton variant="white" className="w-full">
                    {nav.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </ConsultButton>
                </span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
