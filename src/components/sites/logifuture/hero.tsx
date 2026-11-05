import Image from 'next/image';
import { MoveRight } from './icons';
import { btnClass } from './btn';
import { ConsultButton } from './consult';
import { hero, IMG } from './content';

// Hero dạng banner: ảnh nền phủ xanh, tiêu đề hai màu, hai dòng lợi ích, hai nút.
export function Hero({ photo = `${IMG}/hero.webp` }: { photo?: string }) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-lf-night text-white">
      <Image src={photo} alt={hero.imgAlt} fill priority sizes="100vw" className="lf-hero-photo -z-20 object-cover object-[70%_50%]" />
      <div className="lf-hero-overlay absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto flex min-h-[560px] max-w-[1240px] items-center px-4 py-16 md:min-h-[620px] md:px-6 lg:min-h-[calc(100svh-64px)] lg:max-h-[760px] lg:py-20">
        <div className="max-w-[820px]">
          <h1 className="lf-rise text-[32px] font-bold leading-[1.18] sm:text-[44px] xl:text-[56px]">
            <span className="block text-lf-aqua">{hero.line1}</span>
            <span className="block">{hero.line2}</span>
          </h1>
          <p className="mt-6 max-w-[42rem] text-base leading-relaxed text-white/90 md:text-lg lf-rise" style={{ '--i': 1 } as React.CSSProperties}>
            {hero.sub}
          </p>
          <div className="lf-rise mt-6 flex gap-4" style={{ '--i': 2 } as React.CSSProperties}>
            <MoveRight className="mt-1 size-8 shrink-0 text-lf-aqua" strokeWidth={2.25} aria-hidden />
            <ul className="grid gap-1.5 text-base text-lf-aqua md:text-lg">
              {hero.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="lf-rise mt-9 flex flex-wrap gap-3" style={{ '--i': 3 } as React.CSSProperties}>
            <ConsultButton variant="white">{hero.cta}</ConsultButton>
            <a href="#bai-toan" className={btnClass('ghost-light')}>
              {hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
