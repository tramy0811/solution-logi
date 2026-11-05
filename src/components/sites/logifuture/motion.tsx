'use client';

import { useEffect } from 'react';

// Hiện dần các khối [data-reveal] và đếm số [data-count] khi chúng vào màn hình.
// Kiểm tra theo vị trí mỗi lần cuộn (không chỉ IntersectionObserver), nên khối bị lướt qua nhanh
// hoặc được nhảy tới bằng menu vẫn hiện. HTML gốc luôn có nội dung cuối, nên trang đúng cả khi tắt JS.
export function Motion() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.92;
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in), [data-count]:not([data-counted])').forEach((el) => {
        if (el.getBoundingClientRect().top > limit) return;
        el.classList.add('is-in');
        if (el.hasAttribute('data-count')) countUp(el, reduce);
        el.querySelectorAll<HTMLElement>('[data-count]').forEach((n) => countUp(n, reduce));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
    };
  }, []);
  return null;
}

function countUp(el: HTMLElement, reduce: boolean) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const target = Number(el.dataset.count);
  if (reduce || !Number.isFinite(target) || target < 2) return;
  const start = performance.now();
  const dur = 1100;
  const tick = (t: number) => {
    const p = Math.min(1, (t - start) / dur);
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
