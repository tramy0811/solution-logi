# LogiFuture — trạng thái dự án

Cập nhật: 06/11/2026.

## Lượt rà soát UI mới nhất

- Xem `docs/UI_AUDIT_2026-11-06.md` cho phát hiện, cách sửa và kiểm tra.
- Logo autoplay liên tục, có nút dừng/tiếp tục, ẩn scrollbar; reduced motion chạy chậm.
- Lợi ích chuyển sang bảng đối chiếu; công nghệ phân ba lớp chức năng.
- AI giữ nguyên nội dung, đổi thành sơ đồ luồng dữ liệu riêng của LogiFuture.
- Đệm section mới 36px mobile / 48px desktop; giảm khoảng trắng cộng dồn.

## Cập nhật hero, điều hướng và bố cục theo yêu cầu mới

- Hero dùng hai dòng: Nền tảng quản trị logistics toàn diện / thông minh tích hợp AI; mô tả giữ cấu trúc nội dung VTI và đổi sang nghiệp vụ logistics.
- Dùng sơ đồ người dùng cung cấp: `hero-platform-user.webp`, giữ nội dung hình gốc, phối cùng ảnh cảng và nền xanh. Bản PNG gốc lưu cùng thư mục assets; Vercel chỉ cần WebP.
- Chuyển section Nâng cao hiệu quả quản trị và vận hành logistics xuống sau kiến trúc.
- Thách thức: danh sách mở rộng có đánh số, hiện trạng/giải pháp và ảnh nghiệp vụ. Triển khai: timeline dọc năm bước.
- Mega menu chia ba cột, chọn sản phẩm mở đúng tab qua `lf:select-module`.
- Footer mới có CTA, giới thiệu, nhóm điều hướng, năng lực và mô hình doanh nghiệp.
- Nền trong logo AI đổi trắng. Tiêu đề section dùng đủ chiều rộng, paragraph text-wrap pretty để hạn chế từ lẻ.
- Thêm animation xuất hiện sơ đồ, mở accordion và scroll reveal; tắt theo prefers-reduced-motion.
- Code đã push GitHub nhánh `main`: https://github.com/tramy0811/solution-logi — commit giao diện `16eaa94`.
- Cập nhật production thành công: https://logifuture-livid.vercel.app — deployment `dpl_J9Z9j2dVEhJWzDTRmE1dD3QPghfo`, READY.
- Lint, TypeScript, build và diff check đạt; kiểm tra 375/768/1024/1440px không tràn ngang, không anchor hỏng. Menu chọn đúng tab WMS; accordion tự đóng mục cũ; dòng hero thứ hai ở 375px hiển thị trên một dòng.

## Bản giải pháp logistics và Vercel

- Dải hãng tàu/hãng bay đặt ngay sau hero bằng component Connect.
- Nội dung giới thiệu theo dạng trang giải pháp doanh nghiệp; phân hệ FMS/TMS/WMS ưu tiên đầu danh sách.
- Tiêu đề chính xác: Giải pháp nổi bật.
- Sơ đồ AI: LogiFuture ở trung tâm, bốn khối xanh có đường nối, gồm OCR chứng từ, lập kế hoạch vận tải, phân tích chi phí/dự báo và trợ lý nghiệp vụ logistics. Mobile xếp dọc.
- Bỏ đoạn ghi chú dài dưới các chỉ số; giữ nhãn mục tiêu hiệu quả kỳ vọng.
- Build local đạt lint, TypeScript và production. Kiểm tra browser: không tràn ngang trên 375/1440px; không ảnh lỗi; đủ bốn nhánh và FMS mặc định.
- Đã liên kết Vercel project `tramy0811s-projects/logifuture`; `.vercel` và `.env.local` không đưa vào Git.
- Production đã deploy: https://logifuture-livid.vercel.app (READY).
- Deployment ID: `dpl_CSc3fxCjMg9EtH2oeDhu8Xp2oFGu`; Node 24.x.
- Kiểm tra công khai HTTP 200; có Giải pháp nổi bật, dải đối tác và sơ đồ AI; không còn ghi chú cũ dưới hero. Desktop/mobile không tràn ngang.
- Lần deploy đầu chờ do Vercel công bố sự cố chậm build/Dashboard. Bản production sau đã build và deploy thành công từ Vercel.

## Bố cục theo VTI Solutions — lượt mới nhất

- Xem `docs/research/vti-solutions/REFRESH_2026-11-06.md` cho bản đồ source → local, ảnh tạo mới, prompt và kiểm tra.
- Bốn chỉ số chuyển vào hero. Bốn ưu điểm nằm ngay dưới hero, trước kiến trúc.
- Tiêu đề section căn giữa, gạch nhấn teal; CTA bo tròn theo bố cục tham chiếu và màu LogiFuture.
- Giải pháp dùng tab ngang và panel ảnh/nội dung hai cột. Bổ sung các khối công nghệ và CTA cuối.
- Nút lên đầu trang hiện sau 500px, hỗ trợ bàn phím và giảm chuyển động.
- Bản xem mới: http://localhost:3001.

## Rà soát giao diện và nội dung theo phản hồi mới

- Skill: ui-ux-pro-max; hướng thiết kế tối giản cho website logistics, giữ màu xanh và Google Sans đang dùng.
- Đưa kiến trúc lên ngay sau hero; thêm anchor `#he-sinh-thai` cho điều hướng.
- Viết lại hero, tiêu đề, nghiệp vụ, trợ lý AI, FAQ và lời mời tư vấn theo công việc thực tế.
- Thêm khối mục tiêu kỳ vọng: tăng 71% năng suất xử lý, tăng 25% chất lượng hồ sơ, giảm 83% thao tác lặp lại, giảm 32% chi phí xử lý. Ghi rõ là mục tiêu minh họa, chưa phải kết quả hay cam kết.
- Tinh gọn trang: bỏ các khối lặp, case study và bài viết mẫu khỏi trang chủ; ẩn địa chỉ, hotline và tên pháp lý chưa có dữ liệu. Bỏ link chính sách bảo mật chưa có trang đích.
- Giảm thẻ lồng nhau, bo góc và CTA lặp; tiêu đề căn trái, khoảng cách section thống nhất.
- Bỏ màn hình giả trang trí và ô logo trống; lộ trình thành năm bước hiển thị cùng lúc.
- Kiểm tra trình duyệt ở 375, 768, 1024, 1440px: không tràn ngang, không anchor hỏng, không nút thiếu tên.
- Kiểm tra 8 tab nghiệp vụ và 6 tab mô hình: selected state và panel tương ứng đúng; FAQ, modal tư vấn và validation form hoạt động.
- Không phát hiện ảnh tải lỗi; kiểm tra hiển thị với reduced motion.
- Xem bản mới tại http://localhost:3001; server cũ ở 3000 có thể vẫn giữ bản trước.

## Lượt hoàn thiện giao diện

- Giữ các thay đổi hiện có về font, menu và các section.
- Chuyển menu mobile ra ngoài header bằng portal để không bị giới hạn chiều cao bởi backdrop-filter.
- Bổ sung nút đóng trong menu, giữ focus bàn phím, Escape và khôi phục cuộn trang.
- Menu desktop dùng button, hỗ trợ ArrowDown, Escape và đóng khi bấm bên ngoài.
- Đóng menu khi chuyển breakpoint desktop/mobile; dọn timer và event listener khi unmount.
- Tăng lớp phủ banner trên màn hình nhỏ để chữ dễ đọc trên ảnh nền.

## Kiểm tra

- `npm run check`: lint, TypeScript, production build.
- Trình duyệt: menu mobile cao từ dưới header đến đáy viewport; Shift+Tab giữ focus trong menu; Escape đóng và trả focus.
- Desktop: ArrowDown mở và focus giải pháp đầu tiên; Escape đóng và trả focus về nút mở.
- Không tràn ngang ở viewport 500px và 1440px.

## Phần cần dữ liệu thật

- Case studies, bài viết, logo khách hàng, hotline, địa chỉ và tên pháp lý đang có nội dung mẫu.
- Form tư vấn cần `NEXT_PUBLIC_CONSULT_ENDPOINT` trước khi nhận yêu cầu thực tế.
- Build còn cảnh báo Next.js không có thông số fallback cho Google Sans; build vẫn thành công.

## Chạy dự án

- Phát triển: `npm run dev`.
- Kiểm tra: `npm run check`.
- Xem production: `npm run start -- --port 3001` sau khi build.
