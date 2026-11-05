// Đồng bộ ảnh của LogiFuture từ D:\LogiFuture\solution\image vào public/sites/logifuture/user.
//   image/logos/*   -> logo đối tác/khách hàng cho dải logo (đen trắng, hover hiện màu)
//   image/photos/*  -> ảnh chụp thay lần lượt cho ảnh dự phòng (hero, mô hình, case study, lộ trình)
// Ảnh đặt thẳng trong image/ (sơ đồ, banner) không tự gắn vào trang: chèn từng ảnh vào đúng chỗ trong code.
// Đổi nguồn bằng biến LOGIFUTURE_IMAGE_DIR.
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const SRC = process.env.LOGIFUTURE_IMAGE_DIR ?? 'D:/LogiFuture/solution/image';
const DEST = join(process.cwd(), 'public', 'sites', 'logifuture', 'user');
const OK = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg']);

rmSync(DEST, { recursive: true, force: true });
mkdirSync(join(DEST, 'logos'), { recursive: true });
mkdirSync(join(DEST, 'photos'), { recursive: true });

let logos = 0;
let photos = 0;
if (existsSync(SRC)) {
  for (const name of readdirSync(SRC)) {
    const p = join(SRC, name);
    if (!statSync(p).isDirectory()) continue;
    const kind = name.toLowerCase();
    if (kind !== 'logos' && kind !== 'photos') continue;
    for (const f of readdirSync(p)) {
      if (!OK.has(extname(f).toLowerCase())) continue;
      cpSync(join(p, f), join(DEST, kind, f));
      if (kind === 'logos') logos++;
      else photos++;
    }
  }
}
console.log(`sync-images: ${logos} logo, ${photos} ảnh từ ${SRC}`);
