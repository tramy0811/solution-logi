'use client';

import { useState, type FormEvent } from 'react';
import { CircleCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { btnClass } from './btn';
import { assess, consult, modules } from './content';

// Cùng endpoint với form tư vấn. Để trống thì chỉ báo "chưa gửi được", không giả vờ thành công.
const ENDPOINT = process.env.NEXT_PUBLIC_CONSULT_ENDPOINT ?? '';

export function AssessSection({ logos = [] }: { logos?: { src: string; name: string }[] }) {
  const f = assess.form;
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const required = [...form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[required]')];
    required.forEach((el) => el.toggleAttribute('aria-invalid', !el.checkValidity()));
    const bad = required.find((el) => !el.checkValidity());
    if (bad) {
      setMsg(consult.invalid);
      bad.focus();
      return;
    }
    if (!ENDPOINT) {
      setMsg(consult.notConnected);
      return;
    }
    setBusy(true);
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', body: new FormData(form) });
      setMsg(r.ok ? consult.sent : consult.failed);
    } catch {
      setMsg(consult.failed);
    } finally {
      setBusy(false);
    }
  }

  const label = 'grid gap-1.5 text-sm font-medium text-white';
  const req = <span className="text-lf-aqua"> *</span>;
  const input =
    'min-h-12 w-full rounded-xl border border-white/25 bg-white/10 px-4 text-base text-white placeholder:text-white/55 outline-2 outline-transparent transition-[border-color] hover:border-white/50 focus-visible:outline-lf-aqua aria-invalid:border-red-400 [&>option]:text-lf-ink';

  return (
    <section id="danh-gia" className="lf-hero-bg px-4 py-14 text-white md:px-6 md:py-20" aria-labelledby="assess-h">
      <div className="mx-auto grid max-w-[1240px] items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <h2 id="assess-h" className="text-[28px] font-bold leading-tight tracking-tight md:text-[38px]">
            {assess.title}
          </h2>
          <p className="mt-4 leading-relaxed text-white/85">{assess.sub}</p>
          <ul className="mt-6 grid gap-3">
            {assess.checks.map((c) => (
              <li key={c} className="flex gap-2.5">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-lf-aqua" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-white/20 pt-6 text-white/85">{assess.clients}</p>
          {logos.length ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {logos.slice(0, 6).map((l) => (
                <li key={l.src} className="grid h-10 w-24 place-items-center rounded-lg bg-white px-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={l.name} className="max-h-6 max-w-full object-contain" loading="lazy" />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-3xl border border-white/20 bg-white/5 p-5 md:p-8" data-reveal style={{ '--i': 1 } as React.CSSProperties}>
          <label className={label}>
            <span>
              {f.name}
              {req}
            </span>
            <input name="name" required autoComplete="name" placeholder={f.namePh} className={input} aria-describedby="assess-help" />
          </label>
          <label className={label}>
            <span>
              {f.company}
              {req}
            </span>
            <input name="company" required autoComplete="organization" placeholder={f.companyPh} className={input} />
          </label>
          <label className={label}>
            <span>
              {f.role}
              {req}
            </span>
            <select name="role" required defaultValue="" className={input}>
              <option value="" disabled>
                {f.rolePh}
              </option>
              {f.roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={label}>
              <span>
                {f.email}
                {req}
              </span>
              <input name="email" type="email" required autoComplete="email" placeholder={f.emailPh} className={input} />
            </label>
            <label className={label}>
              <span>
                {f.phone}
                {req}
              </span>
              <input name="phone" type="tel" required pattern="[0-9+ ]{9,15}" autoComplete="tel" placeholder={f.phonePh} className={input} />
            </label>
          </div>
          <label className={label}>
            <span>
              {f.topic}
              {req}
            </span>
            <select name="topic" required defaultValue="" className={input}>
              <option value="" disabled>
                {f.topicPh}
              </option>
              {modules.map((m) => (
                <option key={m.code} value={m.code}>
                  Logi.{m.code}: {m.name}
                </option>
              ))}
            </select>
          </label>
          <label className={label}>
            {f.need}
            <textarea name="need" rows={3} placeholder={f.needPh} className={cn(input, 'py-3')} />
          </label>
          <button type="submit" disabled={busy} aria-busy={busy || undefined} className={cn(btnClass('white'), 'w-full disabled:opacity-60')}>
            {f.submit}
          </button>
          <p id="assess-help" aria-live="polite" className="min-h-6 text-sm text-white">
            {msg}
          </p>
        </form>
      </div>
    </section>
  );
}
