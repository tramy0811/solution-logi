'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  FileScan,
  Network,
  PiggyBank,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
  Workflow,
  X,
  type IconType,
} from './icons';
import { cn } from '@/lib/utils';
import { ConsultButton } from './consult';
import { IMG, modules, nav } from './content';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-[22px] font-semibold', light ? 'text-white' : 'text-lf-navy')}>
      <Image src={`${IMG}/mark.png`} alt="" width={30} height={30} priority />
      <span>
        Logi<span className={light ? 'text-lf-aqua' : 'text-lf-bright'}>Future</span>
      </span>
    </span>
  );
}

const moduleIcons: Record<string, IconType> = {
  CRM: Network,
  FMS: Ship,
  TMS: Truck,
  WMS: Warehouse,
  Customs: ShieldCheck,
  Finance: PiggyBank,
  DMS: FileScan,
  Data: Workflow,
  AI: BrainCircuit,
};

// Mục "Giải pháp" mở bảng thả xuống khi rê chuột hoặc focus; các mục còn lại là link thẳng.
const plainLinks = nav.links.filter((l) => l.href !== '#giai-phap');

function SolutionsPanel({ onPick }: { onPick: () => void }) {
  const groups = [
    { title: 'GIẢI PHÁP CỐT LÕI', codes: ['FMS', 'TMS', 'WMS'] },
    { title: 'NGHIỆP VỤ & DỮ LIỆU', codes: ['CRM', 'Customs', 'Finance', 'DMS', 'Data', 'AI'] },
  ];
  return (
    <div className="mx-auto grid max-w-[1240px] gap-7 p-6 lg:grid-cols-[0.8fr_1fr_1.6fr] lg:gap-9 lg:px-8 lg:py-9">
      <div className="flex flex-col items-start border-b border-lf-line pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
        <span className="text-xs font-semibold tracking-[0.15em] text-lf-blue">LOGI PLATFORM</span>
        <p className="mt-3 text-2xl font-semibold leading-tight text-lf-navy">Một nền tảng.<br />Toàn bộ nghiệp vụ.</p>
        <p className="mt-4 text-sm leading-6 text-lf-text">Kết nối giao nhận, vận tải, kho và tài chính theo từng hồ sơ lô hàng.</p>
        <a href="#he-sinh-thai" onClick={onPick} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lf-blue hover:underline focus-visible:outline-2 focus-visible:outline-lf-blue">Khám phá nền tảng <ArrowRight className="size-4" aria-hidden /></a>
        <span onClickCapture={onPick} className="mt-3"><ConsultButton className="!min-h-11 !px-5 !text-sm">{nav.cta}</ConsultButton></span>
      </div>
      {groups.map((group) => <div key={group.title}>
      <p className="mb-4 text-[11px] font-semibold tracking-[0.13em] text-lf-text">{group.title}</p>
      <ul className={cn('grid gap-1', group.codes.length > 3 && 'sm:grid-cols-2')}>
        {group.codes.map((code) => {
          const m = modules.find((item) => item.code === code)!;
          const Icon = moduleIcons[m.code] ?? Workflow;
          return (
            <li key={m.code}>
              <a
                href="#giai-phap"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('lf:select-module', { detail: { id: ['Data', 'AI'].includes(m.code) ? 'ai' : m.code.toLowerCase() } }));
                  onPick();
                }}
                className="group -ml-2 flex min-h-20 items-start gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-lf-soft focus-visible:bg-lf-soft focus-visible:outline-2 focus-visible:outline-lf-blue"
              >
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center text-lf-blue transition-transform group-hover:-translate-y-0.5">
                  <Icon className="size-6" aria-hidden />
                </span>
                <span className="grid gap-0.5">
                  <span className="flex items-center gap-2 font-semibold text-lf-navy">Logi.{m.code}<ChevronRight className="size-3 text-lf-blue opacity-0 transition-opacity group-hover:opacity-100" aria-hidden /></span>
                  <span className="text-[13px] leading-5 text-lf-text">{m.name}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      </div>)}
    </div>
  );
}

export function SiteHeader() {
  const [panel, setPanel] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const solutionsRef = useRef<HTMLLIElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (solutionsRef.current?.contains(document.activeElement)) solutionsButtonRef.current?.focus();
        setPanel(false);
        setDrawer(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!drawer) return;
    const burger = burgerRef.current;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || document.querySelector('dialog[open]')) return;
      const controls = drawerRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!drawerRef.current?.contains(document.activeElement) || (e.shiftKey && document.activeElement === first)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', trapFocus);
    drawerRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener('keydown', trapFocus);
      burger?.focus();
    };
  }, [drawer]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => {
      setDrawer(false);
      setPanel(false);
    };
    const onOutside = (e: PointerEvent) => {
      if (!solutionsRef.current?.contains(e.target as Node)) setPanel(false);
    };
    desktop.addEventListener('change', onResize);
    document.addEventListener('pointerdown', onOutside);
    return () => {
      desktop.removeEventListener('change', onResize);
      document.removeEventListener('pointerdown', onOutside);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  // Rê chuột: mở ngay, đóng sau một nhịp ngắn để kịp di chuột từ mục xuống bảng
  const openPanel = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPanel(true);
  };
  const closePanel = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(false), 140);
  };

  const linkCls =
    'inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-[15px] text-lf-ink transition-colors hover:text-lf-bright focus-visible:outline-2 focus-visible:outline-lf-blue';

  return (
    <header className={cn('sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-colors', scrolled || panel ? 'border-lf-line' : 'border-transparent')}>
      <div className="relative z-50 mx-auto flex h-16 max-w-[1240px] items-center gap-4 px-4 md:px-6">
        <a href="#top" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lf-blue">
          <Logo />
        </a>

        <nav aria-label="LogiFuture" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            <li
              ref={solutionsRef}
              onMouseEnter={openPanel}
              onMouseLeave={closePanel}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) closePanel();
              }}
            >
              <button ref={solutionsButtonRef} type="button" onClick={() => setPanel((open) => !open)} onKeyDown={(e) => {
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  openPanel();
                  window.requestAnimationFrame(() => solutionsRef.current?.querySelector<HTMLElement>('#lf-solutions a')?.focus());
                }
              }} aria-expanded={panel} aria-controls="lf-solutions" className={cn(linkCls, panel && 'text-lf-bright')}>
                Giải pháp
                <ChevronRight className={cn('size-3 transition-transform duration-200', panel ? '-rotate-90' : 'rotate-90')} aria-hidden />
              </button>
              {panel ? (
                <div id="lf-solutions" className="lf-panel absolute inset-x-0 top-16 border-b border-lf-line bg-white shadow-[0_24px_48px_-24px_rgb(11_29_66/0.35)]">
                  <SolutionsPanel onPick={() => setPanel(false)} />
                </div>
              ) : null}
            </li>
            {plainLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkCls}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <ConsultButton className="hidden !min-h-11 !px-5 !text-[15px] sm:inline-flex">{nav.cta}</ConsultButton>
          <button
            ref={burgerRef}
            type="button"
            aria-expanded={drawer}
            aria-controls="lf-drawer"
            onClick={() => setDrawer((o) => !o)}
            className={cn(
              'inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue lg:hidden',
              drawer ? 'bg-lf-navy text-white' : 'bg-lf-soft text-lf-navy hover:bg-lf-sky',
            )}
          >
            {drawer ? nav.close : nav.menu}
          </button>
        </div>
      </div>

      {drawer ? createPortal(
        <>
          <button type="button" aria-label={nav.close} tabIndex={-1} onClick={() => setDrawer(false)} className="lf-scrim fixed inset-0 top-16 z-40 cursor-default bg-lf-night/40 lg:hidden" />
          <div id="lf-drawer" ref={drawerRef} role="dialog" aria-modal="true" aria-label={nav.menu} className="lf-panel fixed bottom-0 right-0 top-16 z-50 w-[min(420px,100%)] overflow-y-auto border-l border-lf-line bg-white lg:hidden">
            <div className="flex items-center justify-between border-b border-lf-line px-6 py-4">
              <p className="font-semibold text-lf-navy">Khám phá LogiFuture</p>
              <button type="button" onClick={() => setDrawer(false)} aria-label={nav.close} className="grid size-11 place-items-center rounded-full bg-lf-soft text-lf-navy hover:bg-lf-sky focus-visible:outline-2 focus-visible:outline-lf-blue">
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <nav aria-label={nav.menu} className="p-4">
              <ul className="grid">
                {nav.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setDrawer(false)} className="grid gap-0.5 rounded-xl px-3 py-3 hover:bg-lf-soft focus-visible:outline-2 focus-visible:outline-lf-blue">
                      <span className="font-medium text-lf-navy">{l.label}</span>
                      <span className="text-sm text-lf-text">{l.desc}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <SolutionsPanel onPick={() => setDrawer(false)} />
          </div>
        </>,
        document.body,
      ) : null}
    </header>
  );
}
