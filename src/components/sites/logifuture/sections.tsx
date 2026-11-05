import Image from 'next/image';
import {
  ArrowRight,
  Barcode,
  BrainCircuit,
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
import { band, connect, ecosystem, faq, footer, IMG, modules, tech, why } from './content';
import { AiDiagram } from './ai-diagram';
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
          <p className="font-semibold text-lf-navy">{ecosystem.channelsTitle}</p>
          <ul className="mt-4 grid gap-3">
            {ecosystem.channels.map((c) => (
              <li key={c.name} className="border-l-2 border-lf-bright pl-3">
                <span className="block font-semibold text-lf-heading">{c.name}</span>
                <span className="text-sm text-lf-text">{c.who}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-4 rounded-2xl bg-white p-5">
          <p className="font-semibold text-lf-navy">{ecosystem.flowTitle}</p>
          <ol className="grid gap-2 sm:grid-cols-4">
            {ecosystem.flow.map((f, i) => (
              <li key={f.step} className="relative rounded-xl bg-lf-navy p-4 text-white">
                <span className="text-xs text-white/70">Bước {i + 1}</span>
                <span className="mt-0.5 block text-lg font-semibold">{f.step}</span>
                <span className="mt-1 block text-xs font-semibold text-lf-aqua">{f.mods}</span>
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
                <p className="text-sm font-semibold text-lf-navy">{g.t}</p>
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
          <p className="font-semibold text-lf-navy">{ecosystem.modulesTitle}</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
            {modules.map((m) => (
              <li key={m.code}>
                <span className="block font-semibold text-lf-bright">Logi.{m.code}</span>
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
  return <AiDiagram />;
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
            <dd className="text-4xl font-semibold tabular-nums text-lf-navy md:text-5xl" data-count={s.value}>
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
          <h2 id="band-h" className="text-[28px] font-semibold leading-tight md:text-[38px]">
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
    <section id="hoi-dap" className="lf-section px-4 md:px-6" aria-labelledby="faq-h">
      <SectionTitle id="faq-h" title={faq.title} />
      <div className="mx-auto mt-8 max-w-[1240px] rounded-2xl bg-lf-mist px-5 py-3 md:px-12 md:py-6" data-reveal>
        <div className="divide-y divide-lf-blue/20">
          {faq.items.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-semibold text-lf-navy transition-colors hover:text-lf-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lf-blue md:text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-5 shrink-0 text-lf-bright transition-transform duration-300 group-open:rotate-45" aria-hidden />
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-lf-text">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function SiteFooter() {
  return (
    <footer className="bg-lf-footer text-white">
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-4 py-10 md:px-6 lg:flex-row lg:items-center lg:py-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-lf-aqua">ĐỒNG HÀNH CÙNG DOANH NGHIỆP LOGISTICS</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug md:text-3xl">Kết nối vận hành.<br className="sm:hidden" /> Chủ động quản trị.</h2>
          </div>
          <a href="#danh-gia" className="inline-flex min-h-12 shrink-0 items-center gap-6 rounded-md bg-white px-6 py-3 font-semibold text-lf-navy transition-colors hover:bg-lf-sky focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Trao đổi về giải pháp <ArrowRight className="size-5" aria-hidden /></a>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1240px] gap-x-10 gap-y-10 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">Nền tảng quản trị dành cho doanh nghiệp giao nhận, vận tải và kho bãi. Kết nối dữ liệu từ hiện trường đến hệ thống quản trị.</p>
          <a href="#he-sinh-thai" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-lf-aqua hover:text-white focus-visible:outline-2 focus-visible:outline-white">Tìm hiểu Logi Platform <ArrowRight className="size-4" aria-hidden /></a>
        </div>
        {footer.cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <p className="text-sm font-semibold tracking-wide text-white">{c.title}</p>
            <ul className="mt-5 grid gap-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="inline-block py-0.5 text-sm leading-6 text-white/65 transition-colors hover:text-lf-aqua focus-visible:outline-2 focus-visible:outline-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto grid max-w-[1240px] gap-6 border-t border-white/10 px-4 py-8 md:grid-cols-[1fr_1.4fr] md:px-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] text-white/45">NĂNG LỰC NỀN TẢNG</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/65">
            {['FMS', 'TMS', 'WMS', 'CRM', 'Customs', 'Finance', 'DMS', 'Data & AI'].map((label) => <a key={label} href="#giai-phap" className="py-1 hover:text-lf-aqua focus-visible:outline-2 focus-visible:outline-white">{label}</a>)}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] text-white/45">MÔ HÌNH DOANH NGHIỆP</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
            {['Giao nhận đường biển', 'Giao nhận hàng không', 'Vận tải nội địa', 'Kho bãi & 3PL', 'Đại lý hải quan'].map((label) => <a key={label} href="#mo-hinh" className="py-1 hover:text-lf-aqua focus-visible:outline-2 focus-visible:outline-white">{label}</a>)}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-white/60 md:px-6">
            <p>{footer.legal}. Bảo lưu mọi quyền.</p>
          <a href="#top" className="underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-white">
            Về đầu trang
          </a>
        </div>
      </div>
    </footer>
  );
}
