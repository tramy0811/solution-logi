'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Plane,
  ShieldCheck,
  Ship,
  Truck,
  Warehouse,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ConsultButton } from './consult';
import { capabilities, cases, IMG, modelExtras, models, rollout, SAMPLE_LABEL, whyHub } from './content';
import { SectionTitle } from './section-title';

function useTabs(count: number) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = (i: number, focus = false) => {
    const n = (i + count) % count;
    setActive(n);
    if (focus) refs.current[n]?.focus();
  };
  const onKey = (e: KeyboardEvent, vertical = false) => {
    const next = vertical ? 'ArrowDown' : 'ArrowRight';
    const prev = vertical ? 'ArrowUp' : 'ArrowLeft';
    if (e.key === next) go(active + 1, true);
    else if (e.key === prev) go(active - 1, true);
    else if (e.key === 'Home') go(0, true);
    else if (e.key === 'End') go(count - 1, true);
    else return;
    e.preventDefault();
  };
  return { active, go, refs, onKey };
}

const arrowBtn =
  'grid size-11 shrink-0 place-items-center rounded-full border border-lf-line bg-white text-lf-navy transition-colors hover:border-lf-bright hover:text-lf-bright focus-visible:outline-2 focus-visible:outline-lf-blue disabled:cursor-not-allowed disabled:opacity-40';

const tabBtn = (on: boolean) =>
  cn(
    'rounded-xl border text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue',
    on ? 'border-lf-navy bg-lf-navy text-white' : 'border-lf-line bg-white text-lf-navy hover:border-lf-bright hover:text-lf-bright',
  );

/* ---------- Năng lực vận hành cốt lõi: danh sách trái, chi tiết phải ---------- */
export function Capabilities() {
  const items = capabilities.items;
  const { active, go, refs, onKey } = useTabs(items.length);
  const c = items[active];
  return (
    <section id="giai-phap" className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="cap-h">
      <SectionTitle id="cap-h" title={capabilities.title} />
      <div className="mx-auto mt-8 grid max-w-[1240px] gap-5 rounded-3xl bg-lf-soft p-4 md:p-6 lg:grid-cols-[0.85fr_1.15fr]" data-reveal>
        <div role="tablist" aria-orientation="vertical" aria-label={capabilities.title} onKeyDown={(e) => onKey(e, true)} className="lf-no-scrollbar flex gap-2 overflow-x-auto lg:grid lg:content-start lg:overflow-visible">
          {items.map((it, i) => (
            <button
              key={it.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`cap-tab-${it.id}`}
              aria-selected={i === active}
              aria-controls="cap-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => go(i)}
              className={cn(tabBtn(i === active), 'min-h-12 shrink-0 px-4 py-3 text-[15px] font-bold leading-snug lg:w-full')}
            >
              {it.name}
            </button>
          ))}
        </div>
        <div id="cap-panel" key={c.id} role="tabpanel" aria-labelledby={`cap-tab-${c.id}`} className="lf-tab-panel rounded-2xl bg-white p-6 md:p-8">
          <h3 className="text-xl font-bold leading-snug text-lf-navy md:text-2xl">{c.name}</h3>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {c.features.map((f) => (
              <li key={f} className="flex gap-2.5 leading-relaxed text-lf-text">
                <ArrowRight className="mt-1 size-4 shrink-0 rounded-full bg-lf-bright p-0.5 text-white" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex gap-2 leading-relaxed text-lf-text">
            <CircleCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />
            <span>
              <b className="text-lf-navy">{capabilities.result}:</b> {c.result}
            </span>
          </p>
          <ConsultButton className="mt-7">{capabilities.cta}</ConsultButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Theo mô hình doanh nghiệp ---------- */
const modelIcons: LucideIcon[] = [Ship, Plane, Truck, Warehouse, Boxes, ShieldCheck];

function MiniScreen({ title, rows, className }: { title: string; rows: string[][]; className?: string }) {
  return (
    <div className={cn('w-[190px] overflow-hidden rounded-xl border border-lf-line bg-white text-[11px] shadow-[0_18px_36px_-18px_rgb(11_29_66/0.55)]', className)} aria-hidden>
      <p className="bg-lf-navy px-3 py-1.5 font-bold text-white">{title}</p>
      <ul className="px-3 py-1">
        {rows.map((r) => (
          <li key={r[0]} className="flex justify-between gap-2 border-b border-lf-line py-1.5 last:border-0">
            <b className="text-lf-navy">{r[0]}</b>
            <span className="text-lf-bright">{r[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ModelsTabs({ photos = [], logos = [] }: { photos?: string[]; logos?: { src: string; name: string }[] }) {
  const items = models.items;
  const { active, go, refs, onKey } = useTabs(items.length);
  const m = items[active];
  return (
    <section id="mo-hinh" className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="models-h">
      <SectionTitle
        id="models-h"
        title={models.title}
        sub={
          <>
            {models.subA} <b className="text-lf-blue">{models.subB}</b>
            {models.subC}
          </>
        }
      />
      <div className="mx-auto mt-8 flex max-w-[1100px] items-center gap-3">
        <button type="button" onClick={() => go(active - 1)} aria-label="Mô hình trước" className={cn(arrowBtn, 'hidden sm:grid')}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div role="tablist" aria-label={models.title} onKeyDown={(e) => onKey(e)} className="lf-no-scrollbar flex flex-1 gap-2 overflow-x-auto pb-1">
          {items.map((it, i) => {
            const Icon = modelIcons[i];
            return (
              <button
                key={it.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                id={`model-tab-${it.id}`}
                aria-selected={i === active}
                aria-controls="model-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => go(i)}
                className={cn(tabBtn(i === active), 'flex min-h-14 shrink-0 items-center gap-2.5 px-4 text-[15px] font-medium leading-tight')}
              >
                <Icon className="size-6 shrink-0" strokeWidth={1.5} aria-hidden />
                {it.tab}
              </button>
            );
          })}
        </div>
        <button type="button" onClick={() => go(active + 1)} aria-label="Mô hình tiếp theo" className={cn(arrowBtn, 'hidden sm:grid')}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>

      <div id="model-panel" key={m.id} role="tabpanel" aria-labelledby={`model-tab-${m.id}`} className="lf-tab-panel mx-auto mt-8 grid max-w-[1040px] items-center gap-10 md:grid-cols-2">
        <div className="relative px-6 pb-8 sm:px-10">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-2xl">
            <Image src={photos[active] ?? `${IMG}/${m.img}`} alt={m.alt} fill sizes="(min-width: 768px) 460px, 100vw" className="object-cover" />
          </div>
          <MiniScreen title={modelExtras.screenA.title} rows={modelExtras.screenA.rows} className="absolute -left-1 top-6 hidden sm:block" />
          <MiniScreen title={modelExtras.screenB.title} rows={modelExtras.screenB.rows} className="absolute -right-1 bottom-0" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-lf-navy">{m.tab}</h3>
          <ul className="mt-4 grid gap-4 rounded-2xl border border-lf-bright/40 p-5">
            {m.points.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed text-lf-text">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lf-bright text-white">
                  <Check className="size-3.5" aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-lf-text">
            {models.using}: <b className="text-lf-blue">{m.mods}</b>
          </p>
          <p className="mt-5 text-sm font-medium text-lf-navy">{modelExtras.clientsLabel}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {logos.length
              ? logos.slice(0, 5).map((l) => (
                  <li key={l.src} className="lf-logo-item grid h-10 w-24 place-items-center rounded-lg border border-lf-line bg-white px-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt={l.name} className="lf-logo max-h-6 max-w-full object-contain" loading="lazy" />
                  </li>
                ))
              : [0, 1, 2].map((i) => (
                  <li key={i} className="grid h-10 w-24 place-items-center rounded-lg border border-dashed border-amber-500 text-[11px] text-amber-700">
                    Logo khách hàng
                  </li>
                ))}
          </ul>
          <a href="#case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-lf-bright underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-lf-blue">
            {modelExtras.story}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
      <div className="mt-10 text-center">
        <ConsultButton>{models.cta}</ConsultButton>
      </div>
    </section>
  );
}

/* ---------- Case studies ---------- */
export function CaseStudies({ photos = [] }: { photos?: string[] }) {
  const [i, setI] = useState(0);
  const n = cases.items.length;
  const c = cases.items[i];
  const L = cases.labels;
  const block = (title: string, list: string[], ok = false) => (
    <div>
      <p className="flex items-center gap-1.5 font-bold text-lf-navy">
        {ok ? <CircleCheck className="size-4 text-emerald-600" aria-hidden /> : null}
        {title}
      </p>
      <ul className="mt-2 grid gap-1.5">
        {list.map((x) => (
          <li key={x} className="flex gap-2 text-[15px] leading-relaxed text-lf-text">
            <span className="mt-2 size-2 shrink-0 rounded-[2px] bg-lf-bright" aria-hidden />
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <section id="case-studies" className="bg-[linear-gradient(180deg,#ffffff,#f1f6ff)] px-4 py-12 md:px-6 md:py-16" aria-labelledby="cases-h">
      <SectionTitle id="cases-h" title={cases.title} />
      <p className="mx-auto mt-3 w-fit rounded-full border border-dashed border-amber-500 px-3 py-1 text-xs font-medium text-amber-700">{SAMPLE_LABEL}: thay bằng dự án thật trong content.ts</p>
      <article key={i} className="lf-tab-panel mx-auto mt-8 grid max-w-[1100px] overflow-hidden rounded-3xl border border-lf-line bg-white lg:grid-cols-[1fr_1fr_0.85fr]" aria-live="polite">
        <div className="grid content-start gap-5 p-6 md:p-8">
          <h3 className="text-xl font-bold leading-snug text-lf-blue">{c.title}</h3>
          {block(L.context, c.context)}
          {block(L.problem, c.problem)}
          {block(L.solution, c.solution)}
        </div>
        <div className="grid content-start gap-5 bg-lf-soft p-6 md:p-8">
          {block(L.change, c.change)}
          {block(L.outcome, c.outcome)}
          {block(L.result, c.result, true)}
        </div>
        <div className="relative min-h-[260px]">
          <Image src={photos[i] ?? `${IMG}/${c.img}`} alt="" fill sizes="(min-width: 1024px) 360px, 100vw" className="object-cover" />
        </div>
      </article>
      <div className="mx-auto mt-6 flex max-w-[1100px] items-center gap-4">
        <button type="button" onClick={() => setI((i - 1 + n) % n)} aria-label={cases.prev} className={arrowBtn}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button type="button" onClick={() => setI((i + 1) % n)} aria-label={cases.next} className={arrowBtn}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
        <span className="relative h-0.5 flex-1 overflow-hidden rounded bg-lf-line" aria-hidden>
          <span className="absolute inset-y-0 left-0 w-full origin-left bg-lf-bright transition-transform duration-500" style={{ transform: `scaleX(${(i + 1) / n})` }} />
        </span>
        <span className="text-sm tabular-nums text-lf-text">
          {i + 1} / {n}
        </span>
      </div>
    </section>
  );
}

/* ---------- Tại sao chọn: sơ đồ trung tâm + thẻ trượt ---------- */

export function WhyHub() {
  const [start, setStart] = useState(0);
  const cards = whyHub.cards;
  const visible = [0, 1, 2].map((k) => cards[(start + k) % cards.length]);
  return (
    <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="hub-h">
      <SectionTitle id="hub-h" title={whyHub.title} />
      <div className="mx-auto mt-8 w-full max-w-[900px]" data-reveal>
        <Image src={`${IMG}/platform-hub.webp`} alt={whyHub.imgAlt} width={1536} height={1024} sizes="(min-width: 960px) 900px, 100vw" className="h-auto w-full" />
      </div>
      <div className="mx-auto mt-10 flex max-w-[1240px] items-center gap-3">
        <button type="button" onClick={() => setStart((start - 1 + cards.length) % cards.length)} aria-label={whyHub.prev} className={cn(arrowBtn, 'hidden md:grid')}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <ul className="grid flex-1 gap-4 md:grid-cols-3" aria-live="polite">
          {visible.map((c, k) => (
            <li key={c.title} className={cn('lf-tab-panel rounded-2xl bg-lf-navy p-6 text-white', k === 1 && 'md:-translate-y-2')}>
              <p className="flex items-start gap-2.5 font-bold text-lf-aqua">
                <Check className="mt-0.5 size-5 shrink-0 rounded-full bg-lf-bright p-0.5 text-white" aria-hidden />
                {c.title}
              </p>
              <p className="mt-3 leading-relaxed text-white/85">{c.body}</p>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => setStart((start + 1) % cards.length)} aria-label={whyHub.next} className={cn(arrowBtn, 'hidden md:grid')}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </section>
  );
}

/* ---------- Lộ trình (carousel) ---------- */
export function RolloutCarousel({ photos = [] }: { photos?: string[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const step = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('li');
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 300) + 20), behavior: 'smooth' });
  };
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setPage(max <= 0 ? 0 : Math.round((el.scrollLeft / max) * (rollout.items.length - 1)));
  };
  return (
    <section id="lo-trinh" className="bg-lf-soft px-4 py-12 md:px-6 md:py-16" aria-labelledby="roll-h">
      <SectionTitle
        id="roll-h"
        title={rollout.title}
        sub={
          <>
            <b className="text-lf-blue">{rollout.subA}</b>
            {rollout.subB}
          </>
        }
      />
      <div className="relative mx-auto mt-8 max-w-[1100px]">
        <ul ref={track} onScroll={onScroll} tabIndex={0} aria-label={rollout.title} className="lf-no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lf-blue">
          {rollout.items.map((r, i) => (
            <li key={r.phase} className="w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-lf-navy sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]">
              <div className="relative aspect-[16/10]">
                <Image src={photos[i] ?? `${IMG}/${r.img}`} alt="" fill sizes="(min-width: 1024px) 360px, 85vw" className="object-cover" />
              </div>
              <div className="grid gap-2 p-5 text-white">
                <p className="text-sm font-bold text-lf-aqua">{r.phase}</p>
                <h3 className="text-lg font-bold leading-snug text-white">{r.title}</h3>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button type="button" onClick={() => step(-1)} aria-label={rollout.prev} className={arrowBtn}>
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <span className="flex gap-2" aria-hidden>
            {rollout.items.map((r, i) => (
              <span key={r.phase} className={cn('size-2 rounded-full transition-colors', i === page ? 'bg-lf-navy' : 'bg-slate-300')} />
            ))}
          </span>
          <button type="button" onClick={() => step(1)} aria-label={rollout.next} className={arrowBtn}>
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-lf-text">{rollout.note}</p>
      </div>
    </section>
  );
}
