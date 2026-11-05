import Image from 'next/image';
import { ArrowRight } from './icons';
import { ConsultButton } from './consult';
import { hero, IMG } from './content';

const metrics = [
  { value: '71', label: 'Năng suất xử lý', up: true },
  { value: '25', label: 'Chất lượng hồ sơ', up: true },
  { value: '83', label: 'Thao tác lặp lại', up: false },
  { value: '32', label: 'Chi phí xử lý', up: false },
];

export function Hero() {
  return (
    <section id="top" className="lf-solution-hero relative isolate overflow-hidden text-white">
      <Image src={`${IMG}/hero-port-v3.webp`} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-20" />
      <div className="relative mx-auto max-w-[1320px] px-5 py-12 md:px-8 lg:py-14">
        <h1 tabIndex={-1} className="lf-rise text-[35px] font-semibold leading-[1.18] tracking-[-0.025em] outline-none sm:text-[46px] xl:text-[56px]">
          <span className="block">{hero.line1}</span>
          <span className="block text-[clamp(25px,8vw,35px)] text-lf-aqua sm:text-[46px] xl:text-[56px]">{hero.line2}</span>
        </h1>
        <div className="mt-7 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
          <div>
            <p className="lf-rise max-w-[560px] text-base leading-[1.9] text-white/95 md:text-[18px]" style={{ '--i': 1 } as React.CSSProperties}>{hero.sub}</p>
            <div className="lf-rise mt-8 max-w-[500px]" style={{ '--i': 2 } as React.CSSProperties}>
              <p className="mb-3 text-xs font-medium tracking-[0.1em] text-white/75">MỤC TIÊU HIỆU QUẢ KỲ VỌNG</p>
              <dl className="grid grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-5">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-lf-aqua/55 bg-lf-blue/25 px-3 py-4 text-center sm:py-5">
                    <dt className="text-sm font-medium text-lf-aqua sm:text-base">{m.label}</dt>
                    <dd className="mt-2 flex items-center justify-center gap-2"><span className="text-[42px] font-semibold leading-none sm:text-[58px]">{m.value}<span className="text-xl">%</span></span><ArrowRight className={`size-5 text-lf-aqua ${m.up ? '-rotate-90' : 'rotate-90'}`} aria-hidden /><span className="sr-only">{m.up ? 'tăng' : 'giảm'}</span></dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lf-rise mt-8" style={{ '--i': 3 } as React.CSSProperties}><ConsultButton>{hero.cta}<ArrowRight className="size-4" aria-hidden /></ConsultButton></div>
          </div>
          <div className="lf-hero-graphic relative mx-auto w-full max-w-[790px] lg:w-[112%] lg:max-w-none lg:justify-self-end">
            <Image src={`${IMG}/hero-platform-user.webp`} alt="Sơ đồ LogiFuture Platform kết nối toàn bộ chuỗi logistics do doanh nghiệp cung cấp" width={1536} height={1024} priority sizes="(min-width: 1024px) 760px, 100vw" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
