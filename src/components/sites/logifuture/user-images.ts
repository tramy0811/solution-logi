import { existsSync, readdirSync } from 'node:fs';
import { join, parse } from 'node:path';

// Ảnh và logo của LogiFuture, chép từ D:\LogiFuture\solution\image bằng `npm run sync-images`
// (tự chạy trước dev và build). Đọc lúc build, nên trang vẫn là HTML tĩnh.
const ROOT = join(process.cwd(), 'public', 'sites', 'logifuture', 'user');
const OK = /\.(png|jpe?g|webp|avif|svg)$/i;

function list(sub: string) {
  const dir = join(ROOT, sub);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => OK.test(f))
    .sort((a, b) => a.localeCompare(b, 'vi', { numeric: true }))
    .map((f) => ({ src: `/sites/logifuture/user/${sub}/${encodeURIComponent(f)}`, name: parse(f).name.replace(/[-_]+/g, ' ').trim() }));
}

export function userLogos() {
  return list('logos');
}

/** Ảnh của người dùng theo thứ tự tên tệp; thiếu ảnh nào thì giữ ảnh dự phòng ở vị trí đó. */
export function userPhotos(fallback: string[]) {
  const mine = list('photos').map((p) => p.src);
  return fallback.map((f, i) => mine[i] ?? f);
}
