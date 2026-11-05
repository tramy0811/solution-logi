'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Plane, Ship, ShieldCheck, Truck, Warehouse, Boxes, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ConsultButton } from './consult';
import { IMG, models, rollout, solutions } from './content';
import { SectionTitle } from './section-title';

function useTabs(count: number) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = (i: number, focus = false) => {
    const n = (i + count) % count;
    setActive(n);
    if (focus) refs.current[n]?.focus();
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(active + 1, true);
    else if (e.key === 'ArrowLeft') go(active - 1, true);
    else if (e.key === 'Home') go(0, true);
    else if (e.key === 'End') go(count - 1, true);
    else return;
    e.preventDefault();
  };
  return { active, go, refs, onKey };
}

const arrowBtn =
  'grid size-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-lf-heading shadow-sm transition-colors hover:border-lf-blue hover:text-lf-blue focus-visible:outline-2 focus-visible:outline-lf-blue';

/* ---------- Giải pháp nổi bật ---------- */
export function SolutionsTabs() {
  const items = solutions.items;
  const { active, go, refs, onKey } = useTabs(items.length);
  const s = items[active];
  return (
    <section id="giai-phap" className="relative overflow-hidden bg-[linear-gradient(180deg,#eef5ff_0%,#ffffff_70%)] px-4 py-16 md:px-6 md:py-24" aria-labelledby="sol-h">
      <SectionTitle id="sol-h" title={solutions.title} />
      <div role="tablist" aria-label={solutions.title} onKeyDown={onKey} className="lf-no-scrollbar mx-auto mt-10 flex max-w-[1100px] gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-6">
        {items.map((it, i) => (
          <button
            key={it.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`sol-tab-${it.id}`}
            aria-selected={i === active}
            aria-controls="sol-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => go(i)}
            className={cn(
              'min-h-14 shrink-0 rounded-lg border bg-white px-5 text-lg font-bold italic tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue md:px-2',
              i === active ? 'border-lf-blue bg-[#eef5ff] text-lf-blue' : 'border-slate-200 text-[#e08a1e] hover:border-lf-blue/50',
            )}
          >
            {it.tab}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-[1240px] items-center gap-4">
        <button type="button" onClick={() => go(active - 1)} aria-label={solutions.prev} className={cn(arrowBtn, 'hidden md:grid')}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div
          id="sol-panel"
          role="tabpanel"
          aria-labelledby={`sol-tab-${s.id}`}
          className="grid flex-1 gap-8 rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgb(1_16_54/0.45)] md:p-10 lg:grid-cols-[1.1fr_1fr]"
        >
          <div>
            <h3 className="text-2xl font-bold text-lf-blue md:text-[30px]">{s.title}</h3>
            <p className="mt-4 leading-[1.9] text-lf-text">{s.desc}</p>
            <ul className="mt-4 grid gap-3">
              {s.points.map((p) => (
                <li key={p.label} className="flex gap-3 leading-[1.8] text-lf-text">
                  <span className="mt-2 size-3 shrink-0 rounded-[3px] bg-lf-blue" aria-hidden />
                  <span>
                    <b className="font-medium text-lf-ink">{p.label}:</b> {p.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ConsultButton>{solutions.detail}</ConsultButton>
              <ConsultButton variant="outline">{solutions.demo}</ConsultButton>
            </div>
          </div>
          <figure className="m-0 self-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_16px_40px_-24px_rgb(1_16_54/0.5)]">
            <div className="flex items-center justify-between bg-lf-blue px-4 py-3 text-white">
              <span className="font-bold">{s.tab}</span>
              <span className="text-xs text-white/80">{solutions.sample}</span>
            </div>
            <div className="grid grid-cols-[96px_1fr]">
              <ul className="grid content-start gap-1 bg-[#0b4fb0] p-2 text-xs text-white/85">
                {['Tổng quan', 'Danh sách', 'Báo cáo', 'Thiết lập'].map((m, i) => (
                  <li key={m} className={cn('rounded px-2 py-1.5', i === 1 && 'bg-white/15 font-bold text-white')}>
                    {m}
                  </li>
                ))}
              </ul>
              <div className="p-4">
                <p className="text-base font-bold text-lf-heading">{s.screen.title}</p>
                <table className="mt-3 w-full text-left text-[13px]">
                  <tbody>
                    {s.screen.rows.map((r) => (
                      <tr key={r[0] + r[1]} className="border-t border-slate-100">
                        <th scope="row" className="py-2 pr-2 font-bold text-lf-ink">
                          {r[0]}
                        </th>
                        <td className="py-2 pr-2 text-lf-text">{r[1]}</td>
                        <td className="py-2 text-right font-medium text-lf-blue">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </figure>
        </div>
        <button type="button" onClick={() => go(active + 1)} aria-label={solutions.next} className={cn(arrowBtn, 'hidden md:grid')}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
      <div className="mt-6 flex justify-center gap-3 md:hidden">
        <button type="button" onClick={() => go(active - 1)} aria-label={solutions.prev} className={arrowBtn}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button type="button" onClick={() => go(active + 1)} aria-label={solutions.next} className={arrowBtn}>
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </section>
  );
}

/* ---------- Theo mô hình doanh nghiệp ---------- */
const modelIcons: LucideIcon[] = [Ship, Plane, Truck, Warehouse, Boxes, ShieldCheck];

export function ModelsTabs() {
  const items = models.items;
  const { active, go, refs, onKey } = useTabs(items.length);
  const m = items[active];
  return (
    <section id="mo-hinh" className="px-4 py-16 md:px-6 md:py-20" aria-labelledby="models-h">
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
      <div className="mx-auto mt-10 flex max-w-[1100px] items-center gap-3">
        <button type="button" onClick={() => go(active - 1)} aria-label="Mô hình trước" className={cn(arrowBtn, 'hidden sm:grid')}>
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div role="tablist" aria-label={models.title} onKeyDown={onKey} className="lf-no-scrollbar flex flex-1 gap-3 overflow-x-auto pb-2">
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
                className={cn(
                  'flex min-h-14 shrink-0 items-center gap-3 rounded-lg border px-4 text-left text-[15px] leading-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue',
                  i === active ? 'border-lf-blue bg-[#eef5ff] text-lf-blue' : 'border-slate-200 bg-white text-lf-ink hover:border-lf-blue/50',
                )}
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

      <div id="model-panel" role="tabpanel" aria-labelledby={`model-tab-${m.id}`} className="mx-auto mt-8 grid max-w-[900px] items-center gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3.3] overflow-hidden rounded-2xl shadow-[0_20px_50px_-24px_rgb(1_16_54/0.55)]">
          <Image src={`${IMG}/${m.img}`} alt={m.alt} fill sizes="(min-width: 768px) 450px, 100vw" className="object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-lf-heading">{m.tab}</h3>
          <ul className="mt-4 grid gap-4 rounded-2xl border border-lf-blue/60 p-5">
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
        </div>
      </div>
      <div className="mt-10 text-center">
        <ConsultButton>{models.cta}</ConsultButton>
      </div>
    </section>
  );
}

/* ---------- Lộ trình (carousel) ---------- */
export function RolloutCarousel() {
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
    <section id="lo-trinh" className="px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36" aria-labelledby="roll-h">
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
      <div className="relative mx-auto mt-10 max-w-[1100px]">
        <ul ref={track} onScroll={onScroll} tabIndex={0} aria-label={rollout.title} className="lf-no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lf-blue">
          {rollout.items.map((r) => (
            <li key={r.phase} className="w-[85%] shrink-0 snap-start overflow-hidden rounded-xl bg-lf-blue sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]">
              <div className="relative aspect-[16/10]">
                <Image src={`${IMG}/${r.img}`} alt="" fill sizes="(min-width: 1024px) 360px, 85vw" className="object-cover" />
              </div>
              <div className="lf-card-blue grid gap-2 p-5 text-white">
                <p className="text-sm font-bold text-lf-aqua">{r.phase}</p>
                <h3 className="text-lg font-bold leading-snug text-white md:text-xl">{r.title}</h3>
                <ArrowRight className="mt-1 size-6 justify-self-end rounded bg-lf-cyan p-1 text-white" aria-hidden />
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
              <span key={r.phase} className={cn('h-2 rounded-full transition-colors', i === page ? 'w-6 bg-lf-heading' : 'w-2 bg-slate-300')} />
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
