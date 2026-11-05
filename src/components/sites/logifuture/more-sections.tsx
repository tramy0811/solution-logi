import Image from 'next/image';
import { ArrowUpRight, Award, ChevronsRight, CircleCheck, Eye, GitBranch, Lightbulb, Network, PiggyBank, Plus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { architecture, awards, IMG, pains, posts, press, SAMPLE_LABEL, values } from './content';
import { SectionTitle } from './section-title';

const reveal = (i = 0) => ({ 'data-reveal': '', style: { '--i': i } as React.CSSProperties });

export function SampleBadge({ light = false }: { light?: boolean }) {
  return (
    <p className={`mx-auto mt-3 w-fit rounded-full border border-dashed px-3 py-1 text-xs font-medium ${light ? 'border-white/50 text-white/80' : 'border-amber-500 text-amber-700'}`}>
      {SAMPLE_LABEL}: thay bằng dữ liệu thật trong content.ts
    </p>
  );
}

/* ---------- Kiểm soát & tối ưu vận hành: 4 thẻ giá trị ---------- */
const valueIcons: LucideIcon[] = [Eye, GitBranch, PiggyBank, Network];

export function Values() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff,#f1f6ff)] px-4 py-12 md:px-6 md:py-16" aria-labelledby="values-h">
      <SectionTitle id="values-h" title={values.title} sub={values.sub} />
      <ul className="mx-auto mt-12 grid max-w-[1240px] gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {values.items.map((v, i) => {
          const Icon = valueIcons[i];
          return (
            <li key={v.title} {...reveal(i)} className="relative rounded-2xl border border-lf-line bg-white px-5 pb-6 pt-10 text-center transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-lf-bright/50">
              <span className="absolute -top-7 left-1/2 grid size-14 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-lf-navy text-white shadow-[0_8px_20px_-10px_rgb(11_29_66/0.6)]">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="text-lg font-bold leading-snug text-lf-navy">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-lf-text">{v.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------- Kiến trúc nền tảng: sơ đồ của LogiFuture (D:\\LogiFuture\\solution\\image) ---------- */
export function Architecture() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="arch-h">
      <SectionTitle id="arch-h" title={architecture.title} sub={architecture.sub} />
      <div className="mx-auto mt-8 max-w-[1240px]" data-reveal>
        <Image
          src={`${IMG}/architecture.webp`}
          alt={architecture.imgAlt}
          width={1733}
          height={908}
          sizes="(min-width: 1280px) 1240px, 100vw"
          className="h-auto w-full rounded-2xl"
        />
      </div>
    </section>
  );
}

/* ---------- Các bài toán giải quyết ---------- */
export function Pains() {
  return (
    <section id="bai-toan" className="bg-[linear-gradient(180deg,#f1f6ff,#ffffff)] px-4 py-12 md:px-6 md:py-16" aria-labelledby="pains-h">
      <SectionTitle id="pains-h" title={pains.title} sub={pains.sub} />
      <ul className="mx-auto mt-8 grid max-w-[1240px] gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pains.items.map((p, i) => (
          <li key={p.title} {...reveal(i % 3)} className="flex flex-col rounded-2xl border border-lf-line bg-white p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-lf-bright/40 hover:shadow-[0_20px_40px_-28px_rgb(11_29_66/0.5)]">
            <span className="grid size-12 place-items-center rounded-full bg-lf-soft text-lf-bright">
              <Lightbulb className="size-6" strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-bold leading-snug text-lf-navy">{p.title}</h3>
            <p className="mt-4 flex items-center gap-1.5 text-sm font-bold text-lf-navy">
              <ChevronsRight className="size-4 text-lf-bright" aria-hidden />
              {pains.reality}
            </p>
            <ul className="mt-1.5 grid gap-1 text-sm text-lf-text">
              {p.reality.map((r) => (
                <li key={r} className="flex gap-2">
                  <Plus className="mt-1 size-3 shrink-0 text-lf-text/70" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-1.5 text-sm font-bold text-lf-navy">
              <ArrowUpRight className="size-4 rotate-45 text-lf-bright" aria-hidden />
              {pains.solve}
            </p>
            <ul className="mt-1.5 grid gap-1 text-sm text-lf-text">
              {p.solve.map((r) => (
                <li key={r} className="flex gap-2">
                  <Plus className="mt-1 size-3 shrink-0 text-lf-bright" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-bold text-lf-navy">
              <CircleCheck className="size-4 text-emerald-600" aria-hidden />
              {pains.result}
            </p>
            <p className="mt-1 text-sm text-lf-text">{p.result}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Giải thưởng ---------- */
export function Awards() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="awards-h">
      <SectionTitle id="awards-h" title={awards.title} />
      <SampleBadge />
      <ul className="mx-auto mt-8 grid max-w-[1100px] gap-6 sm:grid-cols-3">
        {awards.items.map((a, i) => (
          <li key={i} {...reveal(i)} className="relative pb-10">
            <div className="grid aspect-[16/10] place-items-center rounded-2xl border border-dashed border-lf-line bg-lf-soft text-lf-text">
              <span className="grid justify-items-center gap-2 text-sm">
                <Award className="size-10 text-lf-bright" strokeWidth={1.5} aria-hidden />
                Ảnh lễ trao giải
              </span>
            </div>
            <div className="absolute inset-x-8 bottom-0 rounded-xl bg-lf-navy px-4 py-3 text-center text-white shadow-[0_12px_24px_-12px_rgb(11_29_66/0.7)]">
              <p className="text-xs text-lf-aqua">{a.org}</p>
              <p className="text-sm font-bold">{a.name}</p>
              <p className="text-xs text-white/70">{a.year}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Báo chí ---------- */
export function Press() {
  const [lead, ...rest] = press.items;
  return (
    <section className="bg-lf-soft px-4 py-12 md:px-6 md:py-16" aria-labelledby="press-h">
      <SectionTitle id="press-h" title={press.title} />
      <SampleBadge />
      <div className="mx-auto mt-8 grid max-w-[1100px] gap-5 md:grid-cols-[1.4fr_1fr_1fr]">
        <article className="relative overflow-hidden rounded-2xl bg-lf-navy" data-reveal>
          <div className="relative aspect-[16/10]">
            <Image src={`${IMG}/${lead.img}`} alt="" fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover opacity-80" />
          </div>
          <div className="p-5 text-white">
            <h3 className="text-xl font-bold leading-snug">{lead.title}</h3>
            <p className="mt-2 text-sm text-lf-aqua">{lead.source}</p>
          </div>
        </article>
        {rest.map((p, i) => (
          <article key={i} {...reveal(i + 1)} className="overflow-hidden rounded-2xl border border-lf-line bg-white">
            <div className="relative aspect-[16/10]">
              <Image src={`${IMG}/${p.img}`} alt="" fill sizes="(min-width: 768px) 300px, 100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold leading-snug text-lf-navy">{p.title}</h3>
              <p className="mt-3 flex items-center gap-1 text-sm text-lf-bright">
                {p.source}
                <ArrowUpRight className="size-4" aria-hidden />
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Kiến thức chuyên sâu ---------- */
export function Knowledge() {
  const [lead, ...rest] = posts.items;
  return (
    <section className="px-4 py-12 md:px-6 md:py-16" aria-labelledby="posts-h">
      <SectionTitle id="posts-h" title={posts.title} />
      <SampleBadge />
      <div className="mx-auto mt-8 grid max-w-[1240px] gap-6 lg:grid-cols-2">
        <article data-reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={`${IMG}/${lead.img}`} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
          <h3 className="mt-4 text-xl font-bold leading-snug text-lf-navy md:text-2xl">{lead.title}</h3>
          <p className="mt-2 text-sm text-lf-text">
            {lead.date}, {lead.cat}
          </p>
          <p className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-lf-bright">
            {posts.more}
            <ChevronsRight className="size-4" aria-hidden />
          </p>
        </article>
        <ul className="grid content-start gap-4">
          {rest.map((p, i) => (
            <li key={p.title} {...reveal(i)} className="grid grid-cols-[150px_1fr] items-center gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image src={`${IMG}/${p.img}`} alt="" fill sizes="150px" className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold leading-snug text-lf-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-lf-text">
                  {p.date}, {p.cat}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
