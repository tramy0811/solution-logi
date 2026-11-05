import Image from 'next/image';
import { ai, IMG } from './content';
import { Check } from './icons';
import { SectionTitle } from './section-title';

const positions = [
  'lg:col-start-1 lg:row-start-1',
  'lg:col-start-1 lg:row-start-2',
  'lg:col-start-3 lg:row-start-1',
  'lg:col-start-3 lg:row-start-2',
];

export function AiDiagram() {
  return (
    <section id="logi-ai" className="lf-section px-4 md:px-6" aria-labelledby="ai-h">
      <SectionTitle id="ai-h" title={ai.title} sub={ai.sub} />
      <div className="lf-ai-diagram relative mx-auto mt-10 grid max-w-[1240px] items-stretch gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-[1fr_240px_1fr] lg:gap-x-16 lg:gap-y-14">
        <svg className="pointer-events-none absolute inset-0 hidden size-full overflow-visible lg:block" viewBox="0 0 1240 560" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <g stroke="#2bd3b7" strokeWidth="2">
            <path d="M436 126H460Q480 126 480 146V260Q480 280 500 280H510" />
            <path d="M436 434H460Q480 434 480 414V300Q480 280 500 280H510" />
            <path d="M804 126H780Q760 126 760 146V260Q760 280 740 280H730" />
            <path d="M804 434H780Q760 434 760 414V300Q760 280 740 280H730" />
          </g>
          <g fill="#2bd3b7">
            <circle cx="436" cy="126" r="5" /><circle cx="436" cy="434" r="5" />
            <circle cx="804" cy="126" r="5" /><circle cx="804" cy="434" r="5" />
            <circle cx="510" cy="280" r="5" /><circle cx="730" cy="280" r="5" />
          </g>
        </svg>
        <div className="relative z-10 flex justify-center self-center py-3 md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2" aria-label="LogiFuture — nền tảng AI cho logistics">
          <div className="lf-ai-hub grid size-48 place-items-center rounded-full border border-lf-blue/50 p-4 lg:size-60">
            <div className="grid size-full content-center justify-items-center gap-2 rounded-full border border-lf-line bg-white text-lf-navy">
              <Image src={`${IMG}/mark.png`} alt="" width={72} height={72} className="rounded-xl" />
              <span className="text-2xl font-semibold">LogiFuture</span>
              <span className="text-sm font-medium text-lf-blue">Logi.AI</span>
            </div>
          </div>
        </div>
        {ai.cards.map((card, i) => (
          <article key={card.title} className={`lf-ai-card relative z-10 rounded-xl p-5 text-white md:p-6 lg:min-h-[235px] ${positions[i]}`}>
            <h3 className="flex items-start gap-2.5 rounded-full border border-lf-aqua/70 px-3 py-2 text-[17px] font-semibold leading-snug text-lf-aqua md:text-lg">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lf-bright text-white"><Check className="size-3.5" aria-hidden /></span>
              {card.title}
            </h3>
            <p className="mt-4 text-base leading-[1.8] text-white/95 md:text-[17px]">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
