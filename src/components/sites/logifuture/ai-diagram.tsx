import Image from 'next/image';
import { ai, IMG } from './content';
import { ArrowRight, BrainCircuit, FileScan, PiggyBank, Truck } from './icons';
import { SectionTitle } from './section-title';

const icons = [FileScan, Truck, PiggyBank, BrainCircuit];

export function AiDiagram() {
  return (
    <section id="logi-ai" className="lf-section px-4 md:px-6" aria-labelledby="ai-h">
      <SectionTitle id="ai-h" title={ai.title} sub={ai.sub} />
      <div className="lf-ai-flow mx-auto mt-8 max-w-[1240px] overflow-hidden rounded-2xl border border-lf-line" data-reveal>
        <div className="grid items-center gap-6 bg-lf-navy px-6 py-7 text-white md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/60">Dữ liệu vận hành</p>
            <div className="mt-3 flex flex-wrap gap-2">{['Chứng từ', 'Lô hàng', 'Vận tải', 'Tài chính'].map((item) => <span key={item} className="rounded border border-white/20 px-3 py-1.5 text-sm text-white/90">{item}</span>)}</div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <ArrowRight className="hidden size-4 text-lf-aqua md:block" aria-hidden />
            <div className="flex min-h-20 items-center gap-3 rounded-xl bg-white px-6 py-3 text-lf-navy">
              <Image src={`${IMG}/mark.png`} alt="" width={44} height={44} />
              <div><span className="block text-xl font-semibold">Logi.AI</span><span className="text-xs text-lf-text">LogiFuture Platform</span></div>
            </div>
            <ArrowRight className="hidden size-4 text-lf-aqua md:block" aria-hidden />
          </div>
          <div className="md:pl-3">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/60">Phục vụ nghiệp vụ</p>
            <p className="mt-3 text-base leading-relaxed text-white/90">Kinh doanh · Giao nhận · Điều phối · Kho · Kế toán</p>
          </div>
        </div>
        <div className="relative bg-lf-soft p-5 md:p-7">
          <svg className="mx-auto -mt-1 mb-4 hidden h-8 w-full lg:block" viewBox="0 0 1120 36" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M560 0V12M140 36V12H980V36M420 12V36M700 12V36" stroke="#0050ae" strokeWidth="1.5" /><circle cx="560" cy="12" r="4" fill="#0050ae" /></svg>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ai.cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <li key={card.title} className="rounded-lg border border-lf-line bg-white p-5">
                  <div className="flex items-center justify-between gap-4"><Icon className="size-6 text-lf-blue" aria-hidden /><span className="text-xs tabular-nums text-lf-text/70">0{i + 1}</span></div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-lf-navy">{card.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-lf-text">{card.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
