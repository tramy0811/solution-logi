import Image from 'next/image';
import { ArrowRight, ChevronsRight, Eye, GitBranch, Network, PiggyBank, Workflow, ShieldCheck, FileScan } from './icons';
import type { IconType } from './icons';
import { architecture, IMG, pains, posts, SAMPLE_LABEL, values } from './content';
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
const valueIcons: IconType[] = [Eye, GitBranch, PiggyBank, Network];

export function Values() {
  return (
    <section id="loi-ich" className="lf-section px-5 md:px-6" aria-labelledby="values-h">
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle id="values-h" title={values.title} sub={values.sub} />
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <li key={v.title} {...reveal(i)} className="group text-center">
                <div className="flex justify-center">
                  <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-lf-soft text-lf-blue">
                    <Icon className="size-7" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium leading-snug text-lf-navy">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-lf-text">{v.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Kiến trúc nền tảng: sơ đồ của LogiFuture (D:\\LogiFuture\\solution\\image) ---------- */
export function Architecture() {
  return (
    <section id="he-sinh-thai" className="lf-section px-4 md:px-6" aria-labelledby="arch-h">
      <SectionTitle id="arch-h" title={architecture.title} sub={architecture.sub} />
      <div className="mx-auto mt-8 max-w-[1240px]" data-reveal>
        <Image
          src={`${IMG}/architecture.webp`}
          alt={architecture.imgAlt}
          width={1733}
          height={908}
          sizes="(min-width: 1280px) 1240px, 100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}

const targets = [
  { value: '71', direction: 'Tăng', label: 'Năng suất xử lý', detail: 'Số hồ sơ xử lý trên mỗi nhân sự', Icon: Workflow },
  { value: '25', direction: 'Tăng', label: 'Chất lượng hồ sơ', detail: 'Tỷ lệ hồ sơ đúng ngay lần đầu', Icon: ShieldCheck },
  { value: '83', direction: 'Giảm', label: 'Thao tác lặp lại', detail: 'Thời gian nhập lại và đối chiếu dữ liệu', Icon: FileScan },
  { value: '32', direction: 'Giảm', label: 'Chi phí xử lý', detail: 'Chi phí vận hành trên mỗi lô hàng', Icon: PiggyBank },
];

export function TargetMetrics() {
  return (
    <section id="hieu-qua" className="lf-targets lf-section px-4 text-white md:px-6" aria-labelledby="targets-h">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-sm font-medium tracking-[0.12em] text-lf-aqua">MỤC TIÊU KỲ VỌNG</p>
          <h2 id="targets-h" className="mt-5 text-[32px] font-semibold leading-[1.2] md:text-[42px]">Ít việc thủ công hơn.<br />Thêm thời gian cho khách hàng.</h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/85">Khi dữ liệu được dùng lại giữa các bộ phận, đội ngũ có thể dành nhiều thời gian hơn cho xử lý lô hàng và chăm sóc khách.</p>
          <p className="mt-8 max-w-md border-l-2 border-lf-aqua pl-4 text-sm leading-relaxed text-white/75">Các tỷ lệ bên cạnh là mục tiêu lý tưởng để minh họa, chưa phải kết quả triển khai hay cam kết. Mức cải thiện cần được thống nhất và đo từ hiện trạng từng doanh nghiệp.</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 sm:gap-6">
          {targets.map(({ value, direction, label, detail, Icon }) => (
            <div key={label} className="lf-target-stat relative border border-white/25 px-4 py-6 sm:px-6 sm:py-8">
              <Icon className="mb-5 size-6 text-lf-aqua" aria-hidden />
              <dt className="font-medium text-white sm:text-lg">{label}</dt>
              <dd className="mt-3">
                <span className="block text-xs font-medium uppercase tracking-widest text-lf-aqua">{direction}</span>
                <span className="mt-1 block text-[48px] font-semibold leading-none tracking-tight sm:text-[68px]">{value}<span className="ml-1 text-2xl text-lf-aqua">%</span></span>
                <span className="mt-4 block text-sm leading-relaxed text-white/75">{detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- Các bài toán giải quyết ---------- */
export function Pains() {
  return (
    <section id="bai-toan" className="lf-section px-4 md:px-6" aria-labelledby="pains-h">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lf-blue">Bài toán vận hành</p>
          <h2 id="pains-h" className="mt-4 text-[30px] font-semibold leading-[1.25] text-lf-navy md:text-[38px]">{pains.title}</h2>
          <p className="mt-5 leading-relaxed text-lf-text">{pains.sub}</p>
          <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden lg:block">
            <Image src={`${IMG}/container-truck.webp`} alt="Xe container trong hoạt động giao nhận hàng hóa" fill sizes="440px" className="object-cover" />
            <p className="absolute inset-x-0 bottom-0 bg-lf-navy/90 px-5 py-4 text-sm leading-relaxed text-white">Từ một yêu cầu báo giá đến một lô hàng được giao và đối soát đầy đủ.</p>
          </div>
        </div>
        <div className="border-t border-lf-line" data-reveal>
          {pains.items.map((p, i) => (
            <details key={p.title} name="logistics-challenges" open={i === 0} className="group border-b border-lf-line">
              <summary className="flex min-h-20 cursor-pointer list-none items-center gap-4 py-5 text-lf-navy transition-colors hover:text-lf-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lf-blue [&::-webkit-details-marker]:hidden">
                <span className="self-start pt-1 text-sm font-medium tabular-nums text-lf-blue">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="flex-1 text-lg font-medium leading-snug md:text-xl">{p.title}</h3>
                <span aria-hidden className="relative grid size-7 shrink-0 place-items-center text-lf-blue"><span className="absolute h-px w-4 bg-current" /><span className="absolute h-4 w-px bg-current transition-transform duration-300 group-open:rotate-90" /></span>
              </summary>
              <div className="pb-6 pl-9 md:pl-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-lf-text">Hiện trạng</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-lf-text">{p.reality.map((line) => <li key={line}>{line}.</li>)}</ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-lf-blue">Cách giải quyết</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-lf-navy">{p.solve.map((line) => <li key={line}>{line}.</li>)}</ul>
                  </div>
                </div>
                <p className="mt-5 flex items-start gap-2 border-l-2 border-lf-blue bg-lf-soft px-4 py-3 text-sm font-medium leading-relaxed text-lf-navy"><ArrowRight className="mt-1 size-4 shrink-0 text-lf-blue" aria-hidden /><span>{p.result}.</span></p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Kiến thức chuyên sâu ---------- */
export function Knowledge() {
  const [lead, ...rest] = posts.items;
  return (
    <section className="px-4 py-10 md:px-6 md:py-12" aria-labelledby="posts-h">
      <SectionTitle id="posts-h" title={posts.title} />
      <SampleBadge />
      <div className="mx-auto mt-6 grid max-w-[1240px] gap-6 lg:grid-cols-2">
        <article data-reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src={`${IMG}/${lead.img}`} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
          <h3 className="mt-4 text-xl font-medium leading-snug text-lf-navy md:text-2xl">{lead.title}</h3>
          <p className="mt-2 text-sm text-lf-text">
            {lead.date}, {lead.cat}
          </p>
          <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-lf-bright">
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
                <h3 className="font-medium leading-snug text-lf-navy">{p.title}</h3>
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
