import Image from 'next/image';
import {
  ArrowUpRight,
  Barcode,
  BrainCircuit,
  Building2,
  Check,
  Cloud,
  FileScan,
  Globe2,
  KeyRound,
  Landmark,
  Layers,
  Mail,
  MapPin,
  Network,
  Plane,
  Receipt,
  Repeat2,
  Ship,
  Truck,
  Warehouse,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { btnClass } from './btn';
import { ConsultButton } from './consult';
import { ai, band, connect, ecosystem, faq, footer, IMG, modules, photoCredits, tech, why } from './content';
import { Logo } from './site-header';
import { SectionTitle } from './section-title';

/* ---------- Kết nối (thay dải logo khách hàng) ---------- */
const connectIcons: LucideIcon[] = [Ship, Plane, Landmark, Building2, Receipt, Truck, Repeat2, Network, Mail, MapPin, Barcode, Warehouse];

function Chip({ label, Icon }: { label: string; Icon: LucideIcon }) {
  return (
    <li className="flex h-[72px] w-[220px] shrink-0 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-[17px] font-bold text-lf-heading md:h-20 md:w-[200px]">
      <Icon className="size-6 text-lf-blue" aria-hidden />
      {label}
    </li>
  );
}

function MarqueeRow({ items, offset, reverse }: { items: string[]; offset: number; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="lf-marquee-wrap overflow-hidden">
      <ul className={`lf-marquee flex w-max gap-4 pr-4 ${reverse ? 'lf-marquee--rev' : ''}`}>
        {doubled.map((c, i) => (
          <Chip key={`${c}-${i}`} label={c} Icon={connectIcons[(offset + (i % items.length)) % connectIcons.length]} />
        ))}
      </ul>
    </div>
  );
}

export function Connect() {
  return (
    <section aria-labelledby="connect-h">
      <div className="px-4 py-14 md:py-16">
        <SectionTitle
          id="connect-h"
          title={
            <>
              {connect.title1}
              <br className="hidden md:block" /> {connect.title2}
            </>
          }
        />
      </div>
      <div className="grid gap-4 bg-lf-mist py-6 md:py-8">
        <MarqueeRow items={connect.row1} offset={0} />
        <MarqueeRow items={connect.row2} offset={6} reverse />
      </div>
    </section>
  );
}

/* ---------- Hệ sinh thái ---------- */
export function Ecosystem() {
  return (
    <section id="he-sinh-thai" className="px-4 py-16 md:px-6 md:py-24" aria-labelledby="eco-h">
      <SectionTitle id="eco-h" title={ecosystem.title} sub={ecosystem.sub} />
      <div className="mx-auto mt-10 grid max-w-[1320px] gap-4 rounded-3xl bg-[linear-gradient(180deg,#f3f8ff,#e4efff)] p-4 md:p-6 lg:grid-cols-[1fr_1.6fr_1fr]">
        <div className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-20px_rgb(0_80_174/0.5)]">
          <p className="inline-block rounded-md bg-lf-blue px-3 py-1 text-sm font-bold text-white">{ecosystem.channelsTitle}</p>
          <ul className="mt-4 grid gap-3">
            {ecosystem.channels.map((c) => (
              <li key={c.name} className="border-l-2 border-lf-cyan pl-3">
                <span className="block font-bold text-lf-heading">{c.name}</span>
                <span className="text-sm text-lf-text">{c.who}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_30px_-20px_rgb(0_80_174/0.5)]">
          <p className="text-center text-sm font-bold text-lf-blue">{ecosystem.flowTitle}</p>
          <ol className="grid gap-3 sm:grid-cols-4">
            {ecosystem.flow.map((f, i) => (
              <li key={f.step} className="relative rounded-xl bg-[linear-gradient(160deg,#2bd3b7,#13a98f)] p-4 text-white">
                <span className="text-xs font-medium text-white/85">Bước {i + 1}</span>
                <span className="mt-1 block text-lg font-bold">{f.step}</span>
                <span className="mt-1 block text-xs font-bold text-[#04443a]">{f.mods}</span>
                <span className="mt-2 block text-sm leading-snug">{f.items}</span>
              </li>
            ))}
          </ol>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-lf-sky p-4">
              <p className="text-sm font-bold text-lf-blue">{ecosystem.baseTitle}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {ecosystem.base.map((b) => (
                  <li key={b} className="rounded-md bg-lf-sky px-2 py-1 text-xs font-medium text-lf-heading">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-lf-sky p-4">
              <p className="text-sm font-bold text-lf-blue">{ecosystem.dataTitle}</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {ecosystem.data.map((b) => (
                  <li key={b} className="rounded-md bg-lf-sky px-2 py-1 text-xs font-medium text-lf-heading">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-20px_rgb(0_80_174/0.5)]">
          <p className="inline-block rounded-md bg-lf-blue px-3 py-1 text-sm font-bold text-white">{ecosystem.modulesTitle}</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
            {modules.map((m) => (
              <li key={m.code}>
                <span className="block font-bold italic tracking-tight text-lf-blue">
                  Logi.<span className="text-lf-cyan">{m.code}</span>
                </span>
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
const techIcons: LucideIcon[] = [BrainCircuit, FileScan, Repeat2, Workflow, Cloud, KeyRound, Barcode, MapPin];

export function Tech() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff,#dcecff)] px-4 py-16 md:px-6 md:py-20" aria-labelledby="tech-h">
      <SectionTitle id="tech-h" title={tech.title} />
      <ul className="mx-auto mt-12 grid max-w-[1100px] grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
        {tech.items.map((t, i) => {
          const Icon = techIcons[i];
          return (
            <li key={t} className="grid justify-items-center gap-3 text-center">
              <span className="grid size-[84px] place-items-center rounded-2xl border-4 border-white bg-[#f1f7ff] text-lf-blue shadow-[0_8px_20px_-10px_rgb(0_80_174/0.45)]">
                <Icon className="size-9" strokeWidth={1.5} aria-hidden />
              </span>
              <span className="text-sm text-lf-text">{t}</span>
            </li>
          );
        })}
      </ul>
      <div className="mt-12 text-center">
        <ConsultButton>{tech.cta}</ConsultButton>
      </div>
    </section>
  );
}

/* ---------- Trợ lý AI ---------- */
export function AiSection() {
  const [a, b, c, d] = ai.cards;
  const card = (x: typeof a, side: 'l' | 'r') => (
    <div className="lf-card-blue relative rounded-xl p-5 text-white shadow-[0_18px_40px_-20px_rgb(0_58_158/0.8)]">
      <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 py-1.5 pl-1.5 pr-4 text-[15px] font-bold text-lf-aqua">
        <span className="grid size-6 place-items-center rounded-full bg-lf-cyan text-white">
          <Check className="size-4" aria-hidden />
        </span>
        {x.title}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed">{x.body}</p>
      <span className={`absolute top-1/2 hidden h-px w-10 bg-lf-aqua lg:block ${side === 'l' ? '-right-10' : '-left-10'}`} aria-hidden />
    </div>
  );
  return (
    <section className="px-4 py-16 md:px-6 md:py-24" aria-labelledby="ai-h">
      <SectionTitle id="ai-h" title={ai.title} sub={ai.sub} />
      <div className="mx-auto mt-12 grid max-w-[1100px] items-center gap-6 lg:grid-cols-[1fr_240px_1fr] lg:gap-10">
        <div className="grid gap-6">
          {card(a, 'l')}
          {card(c, 'l')}
        </div>
        <div className="order-first mx-auto grid size-48 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#1b7bff,#0042b8_70%)] text-center text-white shadow-[0_0_0_14px_rgb(220_236_255),0_0_0_15px_rgb(43_211_183/0.5),0_30px_60px_-20px_rgb(0_66_184/0.7)] lg:order-none lg:size-60">
          <span>
            <BrainCircuit className="mx-auto size-14 text-lf-aqua" strokeWidth={1.5} aria-hidden />
            <span className="mt-2 block text-2xl font-bold">{ai.center}</span>
          </span>
        </div>
        <div className="grid gap-6">
          {card(b, 'r')}
          {card(d, 'r')}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tại sao chọn ---------- */
const whyIcons: LucideIcon[] = [Layers, Repeat2, Network, Globe2];

export function Why() {
  return (
    <section className="lf-sky-bg relative px-4 pt-16 md:px-6 md:pt-24" aria-labelledby="why-h">
      <SectionTitle id="why-h" title={why.title} />
      <div className="mx-auto mt-12 grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[4/3.4] w-full max-w-[460px] overflow-hidden rounded-2xl shadow-[0_24px_50px_-24px_rgb(1_16_54/0.6)]">
          <Image src={`${IMG}/container-ship.webp`} alt={why.imgAlt} fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover object-[30%_60%]" />
        </div>
        <div>
          <p className="text-justify leading-[1.9] text-lf-text">{why.body}</p>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {why.features.map((f, i) => {
              const Icon = whyIcons[i];
              return (
                <li key={f} className="flex items-start gap-3 text-lf-text">
                  <Icon className="size-8 shrink-0 text-lf-blue" strokeWidth={1.5} aria-hidden />
                  {f}
                </li>
              );
            })}
          </ul>
          <a href="#lo-trinh" className={`${btnClass('gradient')} mt-8`}>
            {why.cta}
          </a>
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-[1100px] translate-y-12 overflow-hidden rounded-xl bg-[linear-gradient(120deg,#0a6cf0,#0045c0_55%,#062e94)] px-6 py-8 text-white shadow-[0_24px_50px_-20px_rgb(0_58_158/0.7)] md:px-10">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {why.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm leading-snug text-white/90">{s.label}</dt>
              <dd className="text-4xl font-bold tabular-nums md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Dải kêu gọi ---------- */
export function Band() {
  return (
    <section className="bg-[linear-gradient(120deg,#0a6cf0,#0044bd_50%,#011a66)] px-4 py-14 text-white md:px-6 md:py-16" aria-labelledby="band-h">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[460px] overflow-hidden rounded-2xl ring-1 ring-white/30">
          <Image src={`${IMG}/containers-stacked.webp`} alt="Container xếp chồng trên toa tàu chờ xuất phát" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
        </div>
        <div>
          <h2 id="band-h" className="text-[28px] font-bold leading-[1.5] md:text-[40px]">
            {band.line1}
            <br />
            {band.line2}
          </h2>
          <p className="mt-4 leading-[1.9] text-white/90">{band.body}</p>
          <ConsultButton className="mt-8">{band.cta}</ConsultButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  return (
    <section id="hoi-dap" className="px-4 py-16 md:px-6 md:py-20" aria-labelledby="faq-h">
      <SectionTitle id="faq-h" title={faq.title} />
      <div className="mx-auto mt-10 max-w-[1100px] overflow-hidden rounded-2xl bg-[#eef0f5]">
        <div className="px-5 py-4 md:px-16 md:py-6">
          {faq.items.map((f) => (
            <details key={f.q} className="group border-b border-lf-blue/40 last:border-b-0">
              <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-bold text-lf-heading marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue md:text-xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <ArrowUpRight className="size-6 shrink-0 text-lf-cyan transition-transform group-open:rotate-90" aria-hidden />
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-lf-text">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="flex flex-col items-start gap-5 bg-[linear-gradient(110deg,#0a6cf0,#0039a8_60%,#00217a)] px-5 py-8 text-white md:flex-row md:items-center md:justify-between md:px-16">
          <p className="max-w-[30rem] text-lg font-bold leading-snug md:text-[22px]">{faq.ctaText}</p>
          <ConsultButton className="!min-h-12 !px-10 !text-base">{faq.cta}</ConsultButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function SiteFooter() {
  return (
    <footer className="bg-lf-footer text-white">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-white/75">{footer.about}</p>
          <ConsultButton variant="white" className="mt-6 !min-h-11 !px-6 !text-[15px]">
            {footer.consult}
          </ConsultButton>
        </div>
        {footer.cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <p className="text-lg font-bold text-lf-cyan">{c.title}</p>
            <ul className="mt-4 grid gap-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/90 hover:text-lf-aqua hover:underline focus-visible:outline-2 focus-visible:outline-lf-aqua">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1320px] gap-2 px-4 py-5 text-sm text-white/70 md:px-6">
          <p>{footer.legal}</p>
          <p>
            {footer.photos}:{' '}
            {photoCredits.map((c, i) => (
              <span key={c.href}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  {c.author}
                </a>{' '}
                ({c.license}){i < photoCredits.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
