'use client';

import { useState } from 'react';
import { connect, IMG } from './content';

export function PartnerMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="border-b border-lf-line py-6 md:py-7" aria-labelledby="connect-h">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 md:px-6">
        <h2 id="connect-h" className="text-sm font-medium text-lf-text md:text-base">{connect.title}</h2>
        <button type="button" aria-controls="partner-rail" aria-pressed={paused} onClick={() => setPaused((value) => !value)} className="min-h-11 shrink-0 rounded-md px-3 text-xs font-medium text-lf-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-lf-blue" aria-label={paused ? 'Cho dải logo tiếp tục chạy' : 'Tạm dừng dải logo'}>{paused ? 'Tiếp tục' : 'Tạm dừng'}</button>
      </div>
      <div className="lf-partner-viewport mt-2">
        <div id="partner-rail" className="lf-partner-rail" style={{ animationPlayState: paused ? 'paused' : 'running' }}>
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} className="lf-partner-track" aria-hidden={duplicate || undefined}>
              {connect.partners.map((partner) => (
                <li key={partner.file} className="lf-partner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/partners/${partner.file}`} alt={duplicate ? '' : partner.name} className={partner.tall ? 'lf-partner-logo lf-partner-logo--tall' : 'lf-partner-logo'} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
