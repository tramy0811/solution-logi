'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import {
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
  type IconType,
} from './icons';
import { cn } from '@/lib/utils';
import { ConsultButton } from './consult';
import { capabilities, cases, IMG, models, rollout, SAMPLE_LABEL, whyHub } from './content';
import { SectionTitle } from './section-title';

function useTabs(count: number) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = useCallback((i: number, focus = false) => {
    const n = (i + count) % count;
    setActive(n);
    if (focus) refs.current[n]?.focus({ preventScroll: true });
    refs.current[n]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  }, [count]);
  const onKey = (e: KeyboardEvent, vertical = false) => {
    const isVertical = vertical && window.matchMedia('(min-width: 1024px)').matches;
    const next = isVertical ? 'ArrowDown' : 'ArrowRight';
    const prev = isVertical ? 'ArrowUp' : 'ArrowLeft';
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
    'rounded-md border text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue',
    on ? 'border-lf-navy bg-lf-navy text-white' : 'border-lf-line bg-white text-lf-navy hover:border-lf-bright hover:text-lf-bright',
  );

/* ---------- Năng lực vận hành cốt lõi: danh sách trái, chi tiết phải ---------- */
export function Capabilities() {
  const items = capabilities.items;
  const { active, go, refs, onKey } = useTabs(items.length);
  useEffect(() => {
    const selectModule = (event: Event) => {
      const id = (event as CustomEvent<{ id: string }>).detail?.id;
      const index = items.findIndex((item) => item.id === id);
      if (index >= 0) go(index);
    };
    window.addEventListener('lf:select-module', selectModule);
    return () => window.removeEventListener('lf:select-module', selectModule);
  }, [go, items]);
  const c = items[active];
  const photos: Record<string, { file: string; alt: string }> = {
    crm: { file: 'container-ship.webp', alt: 'Tàu container tại cảng biển' },
    fms: { file: 'container-ship.webp', alt: 'Hoạt động giao nhận container tại cảng' },
    tms: { file: 'container-truck.webp', alt: 'Xe đầu kéo vận chuyển container' },
    wms: { file: 'automated-warehouse.webp', alt: 'Hệ thống lưu trữ và vận hành kho hàng' },
    customs: { file: 'customs-inspection.webp', alt: 'Kiểm tra hàng hóa tại khu vực hải quan' },
    finance: { file: 'singapore-harbour.webp', alt: 'Tàu hàng và hoạt động vận tải tại cảng' },
    dms: { file: 'containers-stacked.webp', alt: 'Container hàng hóa tại bãi cảng' },
    ai: { file: 'architecture.webp', alt: 'Kiến trúc kết nối dữ liệu LogiFuture' },
  };
  const photo = photos[c.id];
  const code = c.id === 'ai' ? 'AI' : c.name.split(' / ')[0];
  return (
    <section id="giai-phap" className="lf-section bg-lf-soft px-4 md:px-6" aria-labelledby="cap-h">
      <SectionTitle id="cap-h" title={capabilities.title} />
      <div className="mx-auto mt-8 max-w-[1240px]" data-reveal>
        <div role="tablist" aria-orientation="horizontal" aria-label={capabilities.title} onKeyDown={(e) => onKey(e)} className="lf-no-scrollbar flex gap-2 overflow-x-auto pb-4 lg:justify-center">
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
              className={cn(tabBtn(i === active), 'min-h-12 shrink-0 px-5 py-3 text-[15px] font-semibold leading-snug')}
            >
              {it.id === 'ai' ? 'Data & AI' : it.name.split(' / ')[0]}
            </button>
          ))}
        </div>
        <div id="cap-panel" key={c.id} role="tabpanel" aria-labelledby={`cap-tab-${c.id}`} className="lf-tab-panel mt-3 grid overflow-hidden rounded-2xl bg-white lg:grid-cols-2">
          <div className="p-6 md:p-10 lg:p-12">
          <h3 className="text-xl font-semibold leading-snug text-lf-navy md:text-2xl">{c.name}</h3>
          <ul className="mt-6 grid gap-4">
            {c.features.map((f) => (
              <li key={f} className="flex gap-2.5 leading-relaxed text-lf-text">
                <Check className="mt-1 size-4 shrink-0 text-lf-blue" aria-hidden />
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
          <div className="relative min-h-[280px] bg-lf-soft lg:min-h-[470px]">
            <Image src={`${IMG}/${photo.file}`} alt={photo.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={cn('object-cover', c.id === 'ai' && 'object-contain p-6')} />
            <span className="absolute bottom-5 left-5 rounded-md bg-white/95 px-4 py-2 text-sm font-semibold text-lf-navy">Logi.{code}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Theo mô hình doanh nghiệp ---------- */
const modelIcons: IconType[] = [Ship, Plane, Truck, Warehouse, Boxes, ShieldCheck];

export function ModelsTabs({ photos = [], logos = [] }: { photos?: string[]; logos?: { src: string; name: string }[] }) {
  const items = models.items;
  const { active, go, refs, onKey } = useTabs(items.length);
  const m = items[active];
  return (
    <section id="mo-hinh" className="lf-section px-4 md:px-6" aria-labelledby="models-h">
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
        <div className="relative">
          <div className="relative aspect-[4/3.4] overflow-hidden rounded-lg">
            <Image src={photos[active] ?? `${IMG}/${m.img}`} alt={m.alt} fill sizes="(min-width: 768px) 460px, 100vw" className="object-cover" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium text-lf-navy">{m.tab}</h3>
          <ul className="mt-6 grid gap-4">
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
          {logos.length ? (
            <ul className="mt-6 flex flex-wrap gap-3">
              {logos.slice(0, 5).map((l) => (
                <li key={l.src} className="grid h-10 w-24 place-items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={l.name} className="max-h-6 max-w-full object-contain" loading="lazy" />
                </li>
              ))}
            </ul>
          ) : null}
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
      <p className="flex items-center gap-1.5 font-semibold text-lf-navy">
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
    <section id="case-studies" className="bg-[linear-gradient(180deg,#ffffff,#f1f6ff)] px-4 py-10 md:px-6 md:py-12" aria-labelledby="cases-h">
      <SectionTitle id="cases-h" title={cases.title} />
      <p className="mx-auto mt-3 w-fit rounded-full border border-dashed border-amber-500 px-3 py-1 text-xs font-medium text-amber-700">{SAMPLE_LABEL}: thay bằng dự án thật trong content.ts</p>
      <article key={i} className="lf-tab-panel mx-auto mt-8 grid max-w-[1100px] overflow-hidden rounded-3xl border border-lf-line bg-white lg:grid-cols-[1fr_1fr_0.85fr]" aria-live="polite">
        <div className="grid content-start gap-5 p-6 md:p-8">
          <h3 className="text-xl font-medium leading-snug text-lf-blue">{c.title}</h3>
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
    <section className="px-4 py-10 md:px-6 md:py-12" aria-labelledby="hub-h">
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
              <p className="flex items-start gap-2.5 font-semibold text-lf-aqua">
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
export function RolloutCarousel() {
  const details = [
    'Làm việc cùng các bộ phận để xác định nghiệp vụ ưu tiên, hệ thống cần kết nối và dữ liệu cần chuyển đổi.',
    'Thiết lập quy trình xử lý lô hàng, biểu mẫu và quyền truy cập theo vai trò của từng nhóm.',
    'Kiểm tra quy trình từ đầu đến cuối trên các lô hàng thực tế; ghi nhận và xử lý vướng mắc trước khi bàn giao.',
    'Đào tạo theo công việc của từng bộ phận và hỗ trợ trực tiếp trong giai đoạn đưa hệ thống vào sử dụng.',
    'Rà soát dữ liệu vận hành, tiếp nhận phản hồi và thống nhất phạm vi mở rộng tiếp theo.',
  ];
  return (
    <section id="lo-trinh" className="lf-section bg-lf-soft px-4 md:px-6" aria-labelledby="roll-h">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lf-blue">Đồng hành triển khai</p>
          <h2 id="roll-h" className="mt-4 text-[30px] font-semibold leading-[1.25] text-lf-navy md:text-[38px]">{rollout.title}</h2>
          <p className="mt-5 leading-relaxed text-lf-text">{rollout.subA}{rollout.subB}</p>
          <p className="mt-6 text-sm leading-relaxed text-lf-text">{rollout.note}</p>
          <ConsultButton className="mt-8">Trao đổi về lộ trình triển khai</ConsultButton>
        </div>
        <ol className="relative">
          {rollout.items.map((r, i) => (
            <li key={r.phase} className="relative grid grid-cols-[44px_1fr] gap-4 pb-8 last:pb-0 md:grid-cols-[56px_1fr] md:gap-6" data-reveal style={{ '--i': i } as React.CSSProperties}>
              {i < rollout.items.length - 1 && <span aria-hidden className="absolute bottom-0 left-[21px] top-11 w-px bg-lf-blue/20 md:left-[27px] md:top-14" />}
              <span className="relative z-10 grid size-11 place-items-center rounded-full border border-lf-blue/20 bg-white text-sm font-semibold tabular-nums text-lf-blue md:size-14">{String(i + 1).padStart(2, '0')}</span>
              <div className="pt-1 md:pt-2">
                <p className="text-sm font-semibold text-lf-blue">{r.phase.split(' / ')[1]}</p>
                <h3 className="mt-2 text-lg font-medium leading-snug text-lf-navy md:text-xl">{r.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-lf-text">{details[i]}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
