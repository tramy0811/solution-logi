import Image from 'next/image';
import {
  ArrowRight,
  Barcode,
  BrainCircuit,
  Check,
  Cloud,
  FileScan,
  Globe2,
  KeyRound,
  Layers,
  MapPin,
  Network,
  Plus,
  Repeat2,
  Workflow,
  type IconType,
} from './icons';
import { btnClass } from './btn';
import { ConsultButton } from './consult';
import { ai, band, connect, ecosystem, faq, footer, IMG, modules, offices, SAMPLE_LABEL, tech, why } from './content';
import { SectionTitle } from './section-title';
import { Logo } from './site-header';
import { userPhotos } from './user-images';

const reveal = (i = 0) => ({ 'data-reveal': '', style: { '--i': i } as React.CSSProperties });

/* ---------- Dải logo hãng tàu, hãng bay: chạy ngang như CMS, xám khi nghỉ, hover ô trắng + màu gốc ---------- */
function PartnerTrack({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="lf-partner-track" aria-hidden={hidden || undefined}>
      {connect.partners.map((p) => (
        <li key={p.file} className="lf-partner">
          {/* SVG tĩnh, không cần tối ưu ảnh của next/image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/partners/${p.file}`} alt={hidden ? '' : p.name} className={p.tall ? 'lf-partner-logo lf-partner-logo--tall' : 'lf-partner-logo'} loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );
}

export function Connect() {
  return (
    <section className="border-b border-lf-line py-10 md:py-12" aria-labelledby="connect-h">
      <h2 id="connect-h" className="px-4 text-center text-base font-medium text-lf-text md:text-lg" data-reveal>
        {connect.title}
      </h2>
      <div className="lf-partner-viewport mt-6">
        <div className="lf-partner-rail">
          <PartnerTrack />
          <PartnerTrack hidden />
        </div>
      </div>
    </section>
  );
}

/* ---------- Nền tảng: lợi ích + sơ đồ hệ sinh thái ---------- */

export function Ecosystem() {
  return (
    <section id="he-sinh-thai" className="px-4 py-10 md:px-6 md:py-12" aria-labelledby="eco-h">
      <SectionTitle id="eco-h" title={ecosystem.title} sub={ecosystem.sub} />
      <div className="mx-auto mt-6 grid max-w-[1240px] gap-4 rounded-3xl bg-lf-soft p-4 md:p-5 lg:grid-cols-[1fr_1.6fr_1fr]" {...reveal(1)}>
        <div className="rounded-2xl bg-white p-5">
          <p className="font-bold text-lf-navy">{ecosystem.channelsTitle}</p>
          <ul className="mt-4 grid gap-3">
            {ecosystem.channels.map((c) => (
              <li key={c.name} className="border-l-2 border-lf-bright pl-3">
                <span className="block font-bold text-lf-heading">{c.name}</span>
                <span className="text-sm text-lf-text">{c.who}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-4 rounded-2xl bg-white p-5">
          <p className="font-bold text-lf-navy">{ecosystem.flowTitle}</p>
          <ol className="grid gap-2 sm:grid-cols-4">
            {ecosystem.flow.map((f, i) => (
              <li key={f.step} className="relative rounded-xl bg-lf-navy p-4 text-white">
                <span className="text-xs text-white/70">Bước {i + 1}</span>
                <span className="mt-0.5 block text-lg font-bold">{f.step}</span>
                <span className="mt-1 block text-xs font-bold text-lf-aqua">{f.mods}</span>
                <span className="mt-2 block text-sm leading-snug text-white/85">{f.items}</span>
              </li>
            ))}
          </ol>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { t: ecosystem.baseTitle, items: ecosystem.base },
              { t: ecosystem.dataTitle, items: ecosystem.data },
            ].map((g) => (
              <div key={g.t} className="rounded-xl border border-lf-line p-4">
                <p className="text-sm font-bold text-lf-navy">{g.t}</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {g.items.map((b) => (
                    <li key={b} className="rounded-md bg-lf-soft px-2 py-1 text-xs font-medium text-lf-heading">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5">
          <p className="font-bold text-lf-navy">{ecosystem.modulesTitle}</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
            {modules.map((m) => (
              <li key={m.code}>
                <span className="block font-bold text-lf-bright">Logi.{m.code}</span>
                <span className="text-xs leading-snug text-lf-text">{m.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Công nghệ ---------- */
const techIcons: IconType[] = [BrainCircuit, FileScan, Repeat2, Workflow, Cloud, KeyRound, Barcode, MapPin];

export function Tech() {
  return (
    <section className="bg-lf-soft px-4 py-10 md:px-6 md:py-12" aria-labelledby="tech-h">
      <SectionTitle id="tech-h" title={tech.title} />
      <ul className="mx-auto mt-6 grid max-w-[1100px] grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
        {tech.items.map((t, i) => {
          const Icon = techIcons[i];
          return (
            <li key={t} {...reveal(i)} className="group grid justify-items-center gap-3 text-center">
              <span className="grid size-[72px] place-items-center rounded-2xl border border-lf-line bg-white text-lf-bright transition-[transform,background-color,color] duration-300 group-hover:-translate-y-1 group-hover:bg-lf-bright group-hover:text-white">
                <Icon className="size-8" strokeWidth={1.5} aria-hidden />
              </span>
              <span className="text-sm font-medium text-lf-text">{t}</span>
            </li>
          );
        })}
      </ul>
      <div className="mt-10 text-center" data-reveal>
        <ConsultButton>{tech.cta}</ConsultButton>
      </div>
    </section>
  );
}

/* ---------- Trợ lý AI ---------- */
export function AiSection() {
  const [a, b, c, d] = ai.cards;
  const card = (x: typeof a, i: number) => (
    <div {...reveal(i)} className="relative rounded-2xl border border-lf-line bg-white p-6 transition-colors hover:border-lf-bright/50">
      <p className="flex items-center gap-2.5 font-bold text-lf-navy">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-lf-bright text-white">
          <Check className="size-3.5" aria-hidden />
        </span>
        {x.title}
      </p>
      <p className="mt-2 leading-relaxed text-lf-text">{x.body}</p>
    </div>
  );
  return (
    <section className="px-4 py-10 md:px-6 md:py-12" aria-labelledby="ai-h">
      <SectionTitle id="ai-h" title={ai.title} sub={ai.sub} />
      <div className="mx-auto mt-6 grid max-w-[1100px] items-center gap-4 lg:grid-cols-[1fr_220px_1fr] lg:gap-8">
        <div className="grid gap-4">
          {card(a, 0)}
          {card(c, 2)}
        </div>
        <div className="order-first mx-auto grid size-44 place-items-center rounded-full bg-lf-navy text-center text-white ring-[12px] ring-lf-soft lg:order-none lg:size-52" data-reveal>
          <span>
            <BrainCircuit className="mx-auto size-12 text-lf-aqua" strokeWidth={1.5} aria-hidden />
            <span className="mt-2 block text-2xl font-bold">{ai.center}</span>
          </span>
        </div>
        <div className="grid gap-4">
          {card(b, 1)}
          {card(d, 3)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tại sao chọn ---------- */
const whyIcons: IconType[] = [Layers, Repeat2, Network, Globe2];

export function Why() {
  const [photo] = userPhotos([`${IMG}/container-ship.webp`]);
  return (
    <section className="bg-lf-soft px-4 py-10 md:px-6 md:py-12" aria-labelledby="why-h">
      <SectionTitle id="why-h" title={why.title} />
      <div className="mx-auto mt-6 grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[4/3.2] w-full max-w-[500px] overflow-hidden rounded-2xl" data-reveal>
          <Image src={photo} alt={why.imgAlt} fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover object-[30%_60%]" />
        </div>
        <div {...reveal(1)}>
          <p className="leading-[1.85] text-lf-text">{why.body}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {why.features.map((f, i) => {
              const Icon = whyIcons[i];
              return (
                <li key={f} className="flex items-start gap-3 font-medium text-lf-navy">
                  <Icon className="size-6 shrink-0 text-lf-bright" strokeWidth={1.75} aria-hidden />
                  {f}
                </li>
              );
            })}
          </ul>
          <a href="#lo-trinh" className={`${btnClass('outline')} mt-8`}>
            {why.cta}
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
      <dl className="mx-auto mt-6 grid max-w-[1100px] grid-cols-2 gap-px overflow-hidden rounded-2xl bg-lf-line lg:grid-cols-4" data-reveal>
        {why.stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse bg-white px-6 py-6">
            <dt className="mt-1 text-sm leading-snug text-lf-text">{s.label}</dt>
            <dd className="text-4xl font-bold tabular-nums text-lf-navy md:text-5xl" data-count={s.value}>
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ---------- Dải kêu gọi ---------- */
export function Band() {
  const [photo] = userPhotos([`${IMG}/containers-stacked.webp`]);
  return (
    <section className="px-4 py-6 md:px-6 md:py-10" aria-labelledby="band-h">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 overflow-hidden rounded-3xl bg-lf-navy p-6 text-white md:p-10 lg:grid-cols-2 lg:gap-12" data-reveal>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image src={photo} alt="Container xếp chồng trên toa tàu chờ xuất phát" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 id="band-h" className="text-[28px] font-bold leading-tight md:text-[38px]">
            {band.line1} <span className="text-lf-aqua">{band.line2}</span>
          </h2>
          <p className="mt-4 leading-[1.85] text-white/85">{band.body}</p>
          <ConsultButton variant="white" className="mt-8">
            {band.cta}
          </ConsultButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  return (
    <section id="hoi-dap" className="px-4 py-10 md:px-6 md:py-12" aria-labelledby="faq-h">
      <SectionTitle id="faq-h" title={faq.title} />
      <div className="mx-auto mt-8 max-w-[960px]" data-reveal>
        <div className="divide-y divide-lf-line border-y border-lf-line">
          {faq.items.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-bold text-lf-navy transition-colors hover:text-lf-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue md:text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-5 shrink-0 text-lf-bright transition-transform duration-300 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-lf-text">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-lf-soft p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-[32rem] text-lg font-bold leading-snug text-lf-navy md:text-xl">{faq.ctaText}</p>
          <ConsultButton>{faq.cta}</ConsultButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function SiteFooter() {
  return (
    <footer className="bg-lf-footer text-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-white/75">{footer.about}</p>
          <ConsultButton variant="white" className="mt-6 !min-h-11 !px-5 !text-[15px]">
            {footer.consult}
          </ConsultButton>
        </div>
        {footer.cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <p className="font-bold text-white">{c.title}</p>
            <ul className="mt-4 grid gap-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1240px] gap-6 px-4 py-8 md:grid-cols-2 md:px-6">
          {offices.items.map((o) => (
            <div key={o.name}>
              <p className="flex items-center gap-2 font-bold text-lf-cyan">
                <MapPin className="size-4" aria-hidden />
                {o.name}
              </p>
              <p className="mt-2 text-sm text-white/75">
                {offices.hotlineLabel}: <span className="text-lf-cyan">{o.hotline}</span>
              </p>
              <p className="mt-1 text-sm text-white/75">{o.address}</p>
            </div>
          ))}
          <p className="text-xs text-amber-300 md:col-span-2">{SAMPLE_LABEL}: cập nhật hotline, địa chỉ và tên pháp lý trong content.ts</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-white/60 md:px-6">
          <p>
            {footer.legal}. {offices.company}
          </p>
          <a href="#top" className="underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-white">
            {offices.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
