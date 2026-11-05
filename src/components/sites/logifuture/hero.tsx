import { ConsultButton } from './consult';
import { hero } from './content';

const layers = [
  { cy: 392, w: 230 },
  { cy: 304, w: 196 },
  { cy: 220, w: 160 },
  { cy: 142, w: 122 },
];
const T = 26;

function slab(cx: number, cy: number, w: number) {
  const h = w * 0.5;
  return {
    top: `${cx},${cy - h} ${cx + w},${cy} ${cx},${cy + h} ${cx - w},${cy}`,
    left: `${cx - w},${cy} ${cx},${cy + h} ${cx},${cy + h + T} ${cx - w},${cy + T}`,
    right: `${cx},${cy + h} ${cx + w},${cy} ${cx + w},${cy + T} ${cx},${cy + h + T}`,
  };
}

// Sơ đồ bốn tầng của Logi Platform (kênh người dùng, ứng dụng nghiệp vụ, hệ thống nền, hạ tầng & dữ liệu).
function PlatformStack() {
  const cx = 320;
  const left = [
    { y: 168, to: layers[3] },
    { y: 262, to: layers[2] },
    { y: 352, to: layers[1] },
  ];
  const right = [
    { y: 120, to: layers[3] },
    { y: 214, to: layers[2] },
    { y: 314, to: layers[1] },
  ];
  return (
    <svg viewBox="0 0 640 560" className="h-auto w-full" role="img" aria-label="Sơ đồ bốn tầng của Logi Platform">
      <defs>
        <linearGradient id="lf-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d8bff" />
          <stop offset="1" stopColor="#3550e0" />
        </linearGradient>
        <linearGradient id="lf-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b3fc4" />
          <stop offset="1" stopColor="#1d2c99" />
        </linearGradient>
        <linearGradient id="lf-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3f5cf0" />
          <stop offset="1" stopColor="#2a40c8" />
        </linearGradient>
        <radialGradient id="lf-glow">
          <stop offset="0" stopColor="#2bd3b7" stopOpacity="0.35" />
          <stop offset="1" stopColor="#2bd3b7" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx={cx} cy={470} rx={290} ry={70} fill="url(#lf-glow)" />
      <ellipse cx={cx} cy={470} rx={260} ry={58} fill="none" stroke="#7fe8d6" strokeOpacity="0.35" />
      {layers.map((l, i) => {
        const s = slab(cx, l.cy, l.w);
        return (
          <g key={i}>
            <polygon points={s.left} fill="url(#lf-left)" />
            <polygon points={s.right} fill="url(#lf-right)" />
            <polygon points={s.top} fill="url(#lf-top)" stroke="#a9bbff" strokeOpacity="0.6" />
            <text x={cx} y={i === 3 ? l.cy + 6 : l.cy + l.w * 0.5 - 34} textAnchor="middle" fill="#fff" fontSize={i === 3 ? 15 : 14} fontWeight={700}>
              {hero.stack.layers[i]}
            </text>
          </g>
        );
      })}
      {left.map((b, i) => (
        <g key={`l${i}`}>
          <line x1={176} y1={b.y} x2={cx - b.to.w + 10} y2={b.to.cy} stroke="#7fe8d6" strokeWidth="1.5" />
          <circle cx={cx - b.to.w + 10} cy={b.to.cy} r="5" fill="#fff" stroke="#2bd3b7" strokeWidth="3" />
          <rect x={8} y={b.y - 21} width={168} height={42} rx={6} fill="#2bd3b7" fillOpacity="0.9" stroke="#a6f3e6" />
          <text x={92} y={b.y + 6} textAnchor="middle" fill="#03304a" fontSize="15" fontWeight={700}>
            {hero.stack.left[i]}
          </text>
        </g>
      ))}
      {right.map((b, i) => (
        <g key={`r${i}`}>
          <line x1={464} y1={b.y} x2={cx + b.to.w - 10} y2={b.to.cy} stroke="#7fe8d6" strokeWidth="1.5" />
          <circle cx={cx + b.to.w - 10} cy={b.to.cy} r="5" fill="#fff" stroke="#2bd3b7" strokeWidth="3" />
          <rect x={464} y={b.y - 21} width={168} height={42} rx={6} fill="#2bd3b7" fillOpacity="0.9" stroke="#a6f3e6" />
          <text x={548} y={b.y + 6} textAnchor="middle" fill="#03304a" fontSize="15" fontWeight={700}>
            {hero.stack.right[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="lf-hero-bg relative overflow-hidden text-white">
      <div className="lf-grid-lines absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:py-14">
        <div>
          <h1 className="text-[34px] font-bold leading-[1.15] tracking-tight sm:text-[44px] xl:text-[56px]">
            <span className="block [text-shadow:0_4px_18px_rgb(0_0_0/0.25)]">{hero.line1}</span>
            <span className="block text-lf-aqua [text-shadow:0_4px_18px_rgb(0_0_0/0.25)]">{hero.line2}</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-base leading-[2] text-white/90 md:text-lg">{hero.sub}</p>
          <dl className="mt-8 grid max-w-[34rem] grid-cols-2 gap-3 sm:gap-5">
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse rounded-2xl border border-[#0b7ff0] bg-white/5 px-4 py-3 text-center backdrop-blur-[2px] sm:py-4">
                <dt className="text-sm font-medium text-lf-aqua sm:text-[17px]">{s.label}</dt>
                <dd className="text-[40px] font-bold leading-none tabular-nums sm:text-[56px]">{s.value}</dd>
              </div>
            ))}
          </dl>
          <ConsultButton className="mt-10">{hero.cta}</ConsultButton>
        </div>
        <div className="mx-auto w-full max-w-[640px]">
          <PlatformStack />
        </div>
      </div>
    </section>
  );
}
