'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { X } from './icons';
import { cn } from '@/lib/utils';
import { btnClass } from './btn';
import { consult, modules } from './content';

export { btnClass };

// Endpoint nhận yêu cầu tư vấn. Để trống cho tới khi có hệ thống thật: form chỉ báo "chưa gửi được".
const ENDPOINT = process.env.NEXT_PUBLIC_CONSULT_ENDPOINT ?? '';

const ConsultContext = createContext<() => void>(() => {});

export function ConsultProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => ref.current?.showModal(), []);
  return (
    <ConsultContext.Provider value={open}>
      {children}
      <ConsultDialog dialogRef={ref} />
    </ConsultContext.Provider>
  );
}

export function ConsultButton({ children, variant = 'gradient', className }: { children: ReactNode; variant?: 'gradient' | 'outline' | 'white' | 'ghost-light'; className?: string }) {
  const open = useContext(ConsultContext);
  return (
    <button type="button" onClick={open} className={cn(btnClass(variant), className)}>
      {children}
    </button>
  );
}

function ConsultDialog({ dialogRef }: { dialogRef: React.RefObject<HTMLDialogElement | null> }) {
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => setMsg('');
    const onClick = (e: MouseEvent) => {
      if (e.target === d) d.close();
    };
    d.addEventListener('close', onClose);
    d.addEventListener('click', onClick);
    return () => {
      d.removeEventListener('close', onClose);
      d.removeEventListener('click', onClick);
    };
  }, [dialogRef]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    const phone = form.elements.namedItem('phone') as HTMLInputElement;
    const contactOk = (email.value && email.validity.valid) || /^[0-9+ ]{9,15}$/.test(phone.value.trim());
    name.toggleAttribute('aria-invalid', !name.value.trim());
    if (!name.value.trim() || !contactOk) {
      setMsg(consult.invalid);
      (name.value.trim() ? email : name).focus();
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

  const field = 'grid gap-1.5 text-sm font-medium text-lf-ink';
  const input =
    'min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-lf-ink outline-2 outline-transparent transition-[border-color] hover:border-lf-blue focus-visible:outline-lf-blue aria-invalid:border-red-600';

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="consult-title"
      className="m-auto w-[min(640px,calc(100%-32px))] rounded-3xl p-0 text-lf-text shadow-2xl backdrop:bg-lf-night/70"
    >
      <form onSubmit={onSubmit} noValidate className="grid gap-5 p-6 md:p-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="consult-title" className="text-2xl font-semibold text-lf-heading md:text-3xl">
              {consult.title}
            </h2>
            <p className="mt-2 text-lf-text">{consult.sub}</p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={consult.close}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-slate-100 text-lf-heading hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-lf-blue"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={field}>
            {consult.name}
            <input name="name" autoComplete="name" required className={input} aria-describedby="consult-help" />
          </label>
          <label className={field}>
            {consult.phone}
            <input name="phone" type="tel" autoComplete="tel" className={input} aria-describedby="consult-help" />
          </label>
          <label className={field}>
            {consult.email}
            <input name="email" type="email" autoComplete="email" className={input} aria-describedby="consult-help" />
          </label>
          <label className={field}>
            {consult.company}
            <input name="company" autoComplete="organization" className={input} />
          </label>
          <label className={cn(field, 'sm:col-span-2')}>
            {consult.interest}
            <select name="interest" className={input} defaultValue="">
              <option value="">{consult.interestAll}</option>
              {modules.map((m) => (
                <option key={m.code} value={m.code}>
                  Logi.{m.code}: {m.name}
                </option>
              ))}
            </select>
          </label>
          <label className={cn(field, 'sm:col-span-2')}>
            {consult.note}
            <textarea name="note" rows={3} className={cn(input, 'py-3')} />
          </label>
        </div>
        <button type="submit" disabled={busy} aria-busy={busy || undefined} className={cn(btnClass('gradient'), 'justify-self-start disabled:cursor-not-allowed disabled:opacity-60')}>
          {consult.submit}
        </button>
        <p id="consult-help" aria-live="polite" className="min-h-6 text-sm text-lf-text">
          {msg}
        </p>
      </form>
    </dialog>
  );
}
