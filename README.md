# LogiFuture — Giải pháp quản trị logistics

Website giới thiệu giải pháp giao nhận, vận tải, kho bãi, chứng từ và tài chính của LogiFuture.

- Production: https://logifuture-livid.vercel.app
- Source: https://github.com/tramy0811/solution-logi
- Next.js 16, React 19, TypeScript, Tailwind CSS 4; Node.js 24.

## Chạy tại máy

```sh
npm ci
npm run dev
```

`npm run check` chạy ESLint, TypeScript và production build.

## Nội dung và giao diện

- Nội dung: `src/components/sites/logifuture/content.ts`.
- Thứ tự section: `src/app/page.tsx`.
- Assets: `public/sites/logifuture/`.
- Tài liệu cập nhật: `docs/PROJECT_STATUS.md`.
- Sơ đồ hero do người dùng cung cấp; ảnh nền tạo riêng cho LogiFuture. Các ảnh nghiệp vụ có thông tin nguồn trong `content.ts`.

## Form và triển khai

Đặt `NEXT_PUBLIC_CONSULT_ENDPOINT` trỏ tới hệ thống tiếp nhận trước khi sử dụng form thực tế. Khi chưa cấu hình, form thông báo chưa gửi, không báo thành công giả.

Project Vercel: `logifuture`. Sau khi liên kết tài khoản, chạy `npx vercel deploy --prod` để cập nhật. Không commit `.env.local` hoặc `.vercel/`.

Khởi tạo từ [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template). Giữ nguyên LICENSE; tài liệu template gốc được lưu tại `docs/TEMPLATE_README.md`.
