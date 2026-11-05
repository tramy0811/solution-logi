// Nội dung LogiFuture cho bản clone bố cục vti-solutions.vn.
// Số liệu nền tảng lấy từ "Kiến trúc Logi Platform" (D:\LogiFuture\CMS\docs). Màn hình minh họa dùng dữ liệu mẫu.

export const IMG = '/sites/logifuture';

export const nav = {
  menu: 'Menu',
  close: 'Đóng menu',
  cta: 'Đặt lịch demo',
  links: [
    { href: '#bai-toan', label: 'Bài toán', desc: 'Những điểm nghẽn LogiFuture giải quyết' },
    { href: '#he-sinh-thai', label: 'Nền tảng', desc: 'Doanh nghiệp được gì khi dùng Logi Platform' },
    { href: '#giai-phap', label: 'Năng lực', desc: 'CRM, FMS, TMS, WMS, hải quan, tài chính, AI' },
    { href: '#mo-hinh', label: 'Theo mô hình', desc: 'Forwarder, vận tải, kho bãi, 3PL, hải quan' },
    { href: '#lo-trinh', label: 'Lộ trình', desc: 'Năm giai đoạn, bắt đầu từ nền tảng' },
    { href: '#hoi-dap', label: 'Hỏi đáp', desc: 'Những câu doanh nghiệp hay hỏi' },
  ],
  modulesTitle: 'Phân hệ Logi Platform',
  contactTitle: 'Cần tư vấn ngay?',
  contactBody: 'Để lại thông tin, đội LogiFuture liên hệ lại để demo trên đúng quy trình của bạn.',
};

export const modules = [
  { code: 'CRM', name: 'Khách hàng, RFQ, hợp đồng' },
  { code: 'FMS', name: 'Báo giá, booking, job, vận đơn' },
  { code: 'TMS', name: 'Điều phối vận tải, container, POD' },
  { code: 'WMS', name: 'Nhập, xuất, tồn kho, kiểm kê' },
  { code: 'Customs', name: 'Tờ khai, giấy phép, thông quan' },
  { code: 'Finance', name: 'Công nợ, thanh toán, đối soát' },
  { code: 'DMS', name: 'Kho chứng từ, OCR, phân loại' },
  { code: 'Data', name: 'Lakehouse, BI, dự báo' },
  { code: 'AI', name: 'Trợ lý tìm, hỏi đáp, báo cáo' },
];

export const hero = {
  line1: 'LogiFuture – Nền tảng vận hành logistics toàn diện',
  line2: 'cho forwarder, 3PL và doanh nghiệp vận tải',
  sub: 'Kết nối bán hàng, giao nhận, vận tải, kho, hải quan và tài chính trên một dữ liệu chung, từ báo giá đến thu tiền.',
  points: ['Thay thế Excel, email và các phần mềm rời rạc', 'Giảm nhập liệu lặp lại, nắm rõ lô hàng và lãi lỗ theo từng job'],
  cta: 'Nhận tư vấn theo bài toán của bạn',
  secondary: 'Xem các bài toán',
  imgAlt: 'Tàu container rời cảng',
};

export const pains = {
  title: 'Các bài toán LogiFuture giải quyết trong vận hành logistics',
  sub: 'Từ báo giá đến thu tiền, Logi Platform xử lý những điểm nghẽn doanh nghiệp logistics gặp hằng ngày',
  reality: 'Thực tế',
  solve: 'LogiFuture giải quyết',
  result: 'Kết quả',
  items: [
    {
      title: 'Báo giá chậm, giá cước nằm rải rác',
      reality: ['Giá cước lưu trong Excel và email của từng sales', 'Lập báo giá nhiều phương án mất nhiều thời gian', 'Khó theo dõi RFQ nào đã chốt, RFQ nào trượt'],
      solve: ['Bảng giá theo hãng, tuyến, phụ phí và hiệu lực', 'Báo giá nhiều phương án, duyệt nội bộ', 'RFQ từ CRM và Portal chuyển thẳng sang báo giá'],
      result: 'Phản hồi khách nhanh hơn, giá thống nhất trong cả đội sales',
    },
    {
      title: 'Một lô hàng, nhập liệu nhiều lần',
      reality: ['Sales, chứng từ, điều độ, kế toán gõ lại cùng thông tin', 'Số liệu giữa các file lệch nhau', 'Mất thời gian đối chiếu trước khi xuất hóa đơn'],
      solve: ['Job là màn hình trung tâm cho mọi bộ phận', 'Dữ liệu đi tiếp từ booking đến hóa đơn', 'Dữ liệu gốc khách hàng, hãng tàu dùng chung'],
      result: 'Ít thao tác, ít sai sót, mọi bộ phận nhìn cùng một số liệu',
    },
    {
      title: 'Không biết lô hàng và xe đang ở đâu',
      reality: ['Điều độ gọi điện hỏi tài xế từng chuyến', 'POD giấy về văn phòng muộn nhiều ngày', 'Khách liên tục gọi hỏi tình trạng lô hàng'],
      solve: ['Driver App cập nhật chuyến, GPS, EIR', 'POD bằng ảnh và chữ ký điện tử', 'Portal cho khách tự tra cứu và tải chứng từ'],
      result: 'Nắm tình trạng lô hàng theo thời gian thực, giảm cuộc gọi hỏi hàng',
    },
    {
      title: 'Chứng từ thất lạc, khó tra cứu',
      reality: ['B/L, invoice, EIR nằm trên máy cá nhân và email', 'Gom bộ hồ sơ hải quan thủ công', 'Sai số liệu giữa các chứng từ phát hiện muộn'],
      solve: ['Kho chứng từ trung tâm, OCR trích xuất trường', 'Tự gắn chứng từ vào đúng job và khách hàng', 'Kiểm tra khớp số liệu trong cùng bộ hồ sơ'],
      result: 'Tìm chứng từ theo nội dung, bộ hồ sơ hải quan đủ và khớp',
    },
    {
      title: 'Kho vận hành thủ công, tồn không chính xác',
      reality: ['Theo dõi tồn bằng Excel và thẻ kho', 'Kiểm kê mất nhiều thời gian', 'Nhiều chủ hàng trên một kho khó tách bạch'],
      solve: ['Tồn kho theo vị trí, lô, hạn dùng', 'Nhập, xuất, kiểm kê bằng quét mã trên Warehouse App', 'Tính phí lưu kho theo ngày hoặc pallet'],
      result: 'Tồn kho đúng theo vị trí, nhập xuất nhanh và rõ ràng',
    },
    {
      title: 'Lãi lỗ từng job chỉ biết khi quyết toán',
      reality: ['Chi phí nhà xe, hãng tàu về muộn và rời rạc', 'Đối soát công nợ thủ công cuối tháng', 'Không biết lô nào lãi, lô nào lỗ cho đến khi khóa sổ'],
      solve: ['Chi phí chuyến chuyển thẳng từ TMS sang Finance', 'Phải thu, phải trả, đối soát trên một hệ thống', 'Lãi lỗ theo job: dự kiến so với thực tế'],
      result: 'Thấy lãi lỗ từng lô sớm, thu tiền đúng hạn mức',
    },
  ],
};

export const capabilities = {
  title: 'Các năng lực vận hành cốt lõi của Logi Platform',
  result: 'Kết quả',
  cta: 'Demo theo bài toán của bạn',
  items: [
    { id: 'crm', name: 'Logi.CRM – Quản lý khách hàng và RFQ', features: ['Hồ sơ khách, đầu mối, phân loại, người phụ trách', 'Tiếp nhận RFQ từ form, email và Portal', 'Hợp đồng, SLA, điều khoản thanh toán, hạn mức', 'Nhật ký chăm sóc, lịch hẹn, khiếu nại'], result: 'Không bỏ sót yêu cầu, theo dõi được tỷ lệ chốt theo sales' },
    { id: 'fms', name: 'Logi.FMS – Báo giá, booking và job', features: ['Bảng giá cước theo hãng, tuyến, phụ phí', 'Báo giá nhiều phương án, duyệt nội bộ', 'Booking, theo dõi cut-off, ETD, ETA', 'SI, House/Master B/L draft, AWB'], result: 'Một job xuyên suốt từ báo giá đến phát hành vận đơn' },
    { id: 'tms', name: 'Logi.TMS – Điều phối vận tải', features: ['Transport, Pickup, Delivery Order từ job', 'Gán xe, tài xế, rơ-moóc, nhà thầu phụ', 'EIR, Gate-in, Gate-out, hạn lưu bãi', 'GPS và POD có ảnh, chữ ký'], result: 'Điều xe đúng lịch, biết chuyến đang ở đâu' },
    { id: 'wms', name: 'Logi.WMS – Quản lý kho', features: ['Nhập kho GRN, kiểm đếm, gán vị trí', 'Tồn theo vị trí, lô, hạn dùng', 'Picking, packing, gom hàng lên xe', 'Kiểm kê và điều chỉnh qua bước duyệt'], result: 'Tồn kho chính xác, xuất nhập nhanh' },
    { id: 'customs', name: 'Logi.Customs – Khai báo và thông quan', features: ['Gom và kiểm tra bộ hồ sơ khai', 'Lập tờ khai từ dữ liệu job và chứng từ OCR', 'Gửi hải quan điện tử, khai bổ sung', 'Theo dõi giấy phép, C/O, hạn hiệu lực'], result: 'Hồ sơ đủ và khớp, theo dõi thông quan trên một màn hình' },
    { id: 'finance', name: 'Logi.Finance – Công nợ và đối soát', features: ['Hóa đơn phải thu, Debit/Credit Note', 'Chi phí phải trả nhà xe, kho, hãng tàu', 'Thu chi và đối soát với ngân hàng', 'Lãi lỗ theo từng job'], result: 'Công nợ minh bạch, biết lãi lỗ từng lô hàng' },
    { id: 'dms', name: 'Logi.DMS – Kho chứng từ trung tâm', features: ['Nhận chứng từ từ sáu phân hệ nghiệp vụ', 'OCR, trích xuất và phân loại 46 loại chứng từ', 'Kiểm tra khớp số liệu, lưu phiên bản', 'Phân quyền theo vai trò, job, khách hàng'], result: 'Chứng từ không thất lạc, tìm theo nội dung' },
    { id: 'ai', name: 'Logi.Data & Logi.AI – Báo cáo và trợ lý AI', features: ['Dashboard vận hành, tài chính, bán hàng', 'Dự báo sản lượng, trễ chuyến, giá cước', 'Hỏi đáp và tìm chứng từ bằng câu hỏi thường', 'Tạo báo cáo, nhắc việc trong quy trình'], result: 'Ra quyết định dựa trên dữ liệu của cả chuỗi vận hành' },
  ],
};

export const connect = {
  title: 'Kết nối liền mạch với đối tác',
  // Hiện khi chưa có logo thật trong D:\LogiFuture\solution\image\logos
  fallback: ['Hãng tàu', 'Hãng hàng không', 'Hải quan điện tử', 'Ngân hàng', 'Hóa đơn điện tử', 'Nhà xe đối tác', 'EDI', 'API', 'Định vị GPS', 'Kho đối tác'],
};

export const ecosystem = {
  title: 'Một nền tảng, may đo theo cách bạn vận hành',
  sub: 'Chọn đúng phân hệ doanh nghiệp cần, cấu hình quy trình theo cách đội ngũ đang làm. Chuyên gia LogiFuture khảo sát và đề xuất lộ trình riêng cho từng doanh nghiệp.',
  benefits: [
    { title: 'Nhập một lần, dùng cho mọi khâu', body: 'Dữ liệu từ báo giá đi tiếp sang booking, vận tải, hải quan và hóa đơn, không gõ lại.' },
    { title: 'Thấy cả lô hàng trên một màn hình', body: 'Màn hình job gom vận tải, kho, hải quan, tài chính và chứng từ của cùng một lô.' },
    { title: 'Tùy biến theo nhu cầu riêng', body: 'Bật phân hệ, quy trình duyệt và phân quyền theo vai trò, job, khách hàng của bạn.' },
  ],
  channelsTitle: 'Kênh người dùng',
  channels: [
    { name: 'Logi Workspace', who: 'Sales, chứng từ, điều phối, kế toán' },
    { name: 'Customer & Partner Portal', who: 'Khách hàng, nhà xe, hãng tàu' },
    { name: 'Driver App', who: 'Tài xế, điều xe hiện trường' },
    { name: 'Warehouse App', who: 'Nhân viên kho, máy quét' },
    { name: 'Manager App', who: 'Lãnh đạo, quản lý' },
  ],
  flowTitle: 'Vòng đời một lô hàng',
  flow: [
    { step: 'Bán hàng', mods: 'CRM · FMS', items: 'RFQ, hợp đồng, báo giá' },
    { step: 'Kế hoạch', mods: 'FMS', items: 'Booking, job, SI, B/L' },
    { step: 'Thực hiện', mods: 'TMS · WMS · Customs', items: 'Điều xe, EIR, POD, kho, tờ khai' },
    { step: 'Thu tiền', mods: 'Finance', items: 'AR, AP, đối soát, lãi lỗ job' },
  ],
  modulesTitle: 'Phân hệ nghiệp vụ',
  baseTitle: 'Hệ thống nền dùng chung',
  base: ['Kho chứng từ DMS', 'Đăng nhập một lần', 'Phân quyền', 'Dữ liệu gốc', 'Thông báo', 'Workflow', 'Event bus', 'Cổng tích hợp'],
  dataTitle: 'Dữ liệu & AI',
  data: ['Lakehouse · Data Mart', 'Báo cáo & BI', 'Dự báo sản lượng, trễ chuyến, giá cước', 'Logi.AI Assistant'],
};

export const tech = {
  title: 'Công nghệ nền tảng của LogiFuture',
  items: ['AI / LLM', 'OCR chứng từ', 'EDI / API', 'Event bus', 'Cloud', 'SSO', 'Quét mã vạch', 'Định vị GPS'],
  cta: 'Đăng kí nhận tư vấn',
};

export const ai = {
  title: 'Trợ lý AI trong từng nghiệp vụ logistics',
  sub: 'Tìm, hỏi đáp, tạo báo cáo và hỗ trợ quy trình trên dữ liệu thật của doanh nghiệp',
  center: 'Logi.AI',
  cards: [
    { title: 'Tìm chứng từ theo nội dung', body: 'Chứng từ được OCR và trích xuất trường, tìm B/L, tờ khai, hóa đơn bằng nội dung thay vì tên tệp.' },
    { title: 'Hỏi đáp & phân tích', body: 'Hỏi về job, công nợ, sản lượng bằng câu hỏi thường, trợ lý hiểu ngữ cảnh màn hình đang xem.' },
    { title: 'Tạo báo cáo tự động', body: 'Dashboard vận hành, tài chính, bán hàng được dựng từ dữ liệu của cả chín phân hệ.' },
    { title: 'Hỗ trợ quy trình', body: 'Nhắc việc, gợi ý bước tiếp theo trong job và đẩy yêu cầu duyệt đến đúng người.' },
  ],
};

export const models = {
  title: 'Giải pháp theo mô hình doanh nghiệp',
  subA: 'Cấu hình theo',
  subB: 'forwarder, 3PL hoặc cả hai',
  subC: ', bật đúng phân hệ bạn cần',
  using: 'Phân hệ sử dụng',
  cta: 'Đăng kí tư vấn miễn phí',
  items: [
    { id: 'sea', tab: 'Giao nhận đường biển', img: 'container-ship.webp', alt: 'Tàu container rời cảng', points: ['Báo giá nhiều phương án theo hãng tàu, tuyến, phụ phí', 'Booking, SI, House/Master B/L trên cùng một job', 'Khách theo dõi lô hàng và tải chứng từ trên Portal'], mods: 'CRM · FMS · DMS · Portal' },
    { id: 'air', tab: 'Giao nhận hàng không', img: 'air-freighter.webp', alt: 'Cửa hàng hóa mũi máy bay Boeing 747-8F', points: ['Booking với hãng bay, theo dõi cut-off, ETD, ETA', 'Phát hành AWB từ dữ liệu job', 'Bộ chứng từ chuyển thẳng sang khai hải quan'], mods: 'FMS · Customs · DMS' },
    { id: 'truck', tab: 'Vận tải nội địa', img: 'container-truck.webp', alt: 'Đầu kéo chở container lạnh', points: ['Điều xe, tài xế, rơ-moóc, cảnh báo trùng lịch', 'Driver App gửi GPS, ảnh EIR và POD có chữ ký', 'Chi phí chuyến chuyển thẳng sang đối soát'], mods: 'TMS · Driver App · Finance' },
    { id: 'wh', tab: 'Kho bãi & 3PL', img: 'automated-warehouse.webp', alt: 'Kho tự động với giá kệ và xe chở pallet', points: ['Nhập kho bằng quét mã, gán vị trí cất hàng', 'Tồn theo lô, hạn dùng, nhiều chủ hàng trên một kho', 'Tính phí lưu kho theo ngày hoặc pallet'], mods: 'WMS · Warehouse App · Finance' },
    { id: 'dist', tab: 'Phân phối', img: 'containers-stacked.webp', alt: 'Container xếp chồng trên toa tàu', points: ['Lệnh giao nhiều điểm, ghép hoặc tách chuyến', 'Theo dõi đến khi giao xong và có POD', 'Đối soát với nhà thầu vận tải'], mods: 'TMS · WMS · Finance' },
    { id: 'customs', tab: 'Đại lý hải quan', img: 'customs-inspection.webp', alt: 'Kiểm tra container tại cảng', points: ['Gom bộ hồ sơ, kiểm tra đủ bộ và khớp số liệu', 'Lập tờ khai từ chứng từ đã OCR, tra mã HS', 'Theo dõi phân luồng và kết quả thông quan'], mods: 'Customs · DMS' },
  ],
};

export const why = {
  title: 'Tại sao nên chọn LogiFuture?',
  body: 'Logi Platform được thiết kế từ vòng đời thật của một lô hàng: dữ liệu nhập một lần ở bán hàng đi tiếp qua kế hoạch, thực hiện và thu tiền, chứng từ của mọi khâu về một kho chung.',
  features: ['Một dữ liệu chung cho chín phân hệ', 'Triển khai theo từng giai đoạn', 'Một cổng tích hợp EDI và API', 'Web cho văn phòng, app cho hiện trường'],
  cta: 'Xem lộ trình triển khai',
  imgAlt: 'Tàu container cập cảng với tàu lai dắt',
  stats: [
    { value: '16', label: 'Dịch vụ backend độc lập' },
    { value: '6', label: 'Phân hệ nghiệp vụ lõi' },
    { value: '7', label: 'Dịch vụ nền tảng dùng chung' },
    { value: '5', label: 'Giai đoạn triển khai' },
  ],
};

export const rollout = {
  title: 'Lộ trình triển khai',
  subA: 'Năm giai đoạn,',
  subB: ' bắt đầu từ nền tảng và mở rộng dần',
  prev: 'Giai đoạn trước',
  next: 'Giai đoạn tiếp theo',
  items: [
    { phase: 'Giai đoạn 1', title: 'Nền tảng: đăng nhập một lần, phân quyền, dữ liệu gốc, kho chứng từ', img: 'singapore-harbour.webp' },
    { phase: 'Giai đoạn 2', title: 'Xương sống lô hàng: Workspace với CRM, FMS, TMS và Driver App', img: 'container-ship.webp' },
    { phase: 'Giai đoạn 3', title: 'Kho, hải quan, tài chính: WMS, Customs, Finance và Warehouse App', img: 'automated-warehouse.webp' },
    { phase: 'Giai đoạn 4', title: 'Cổng khách hàng: Portal cho khách hàng, nhà xe và hãng vận chuyển', img: 'container-truck.webp' },
    { phase: 'Giai đoạn 5', title: 'Dữ liệu và AI: BI, dự báo và Logi.AI Assistant khi đã đủ dữ liệu', img: 'containers-stacked.webp' },
  ],
  note: 'Lộ trình gợi ý, điều chỉnh theo quy mô và hệ thống đang dùng.',
};

export const band = {
  line1: 'Vận hành logistics',
  line2: 'trên một nền tảng thống nhất',
  body: 'LogiFuture kết nối bán hàng, giao nhận, vận tải, kho, hải quan và tài chính trên một dữ liệu chung, cấu hình theo đúng mô hình của doanh nghiệp.',
  cta: 'Đăng ký demo',
};

export const faq = {
  title: 'FAQS',
  items: [
    { q: 'LogiFuture cung cấp những phân hệ phần mềm nào?', a: 'Chín hệ thống: CRM, FMS, TMS, WMS, Customs, Finance, kho chứng từ DMS, Logi.Data và Logi.AI Assistant, phục vụ qua Workspace, Portal, Driver App, Warehouse App và Manager App.' },
    { q: 'Giải pháp phù hợp với những doanh nghiệp nào?', a: 'Forwarder, 3PL hoặc doanh nghiệp làm cả hai, cùng các đơn vị vận tải, kho bãi và đại lý hải quan.' },
    { q: 'Có phải dùng cả chín phân hệ ngay từ đầu không?', a: 'Không. Bắt đầu từ phần nền tảng và các phân hệ cần nhất, sau đó mở rộng theo lộ trình năm giai đoạn.' },
    { q: 'LogiFuture có tích hợp với hệ thống hiện hữu không?', a: 'Mọi kết nối ra ngoài đi qua một cổng tích hợp: hãng tàu, hãng bay, hải quan điện tử, ngân hàng và hóa đơn điện tử, qua EDI hoặc API, có thử lại và nhật ký.' },
    { q: 'Thời gian triển khai mất bao lâu?', a: 'Tùy số phân hệ và hệ thống đang dùng. Thời gian cụ thể được chốt sau buổi khảo sát và demo.' },
  ],
  ctaText: 'Đăng ký tư vấn miễn phí để nhận giải pháp phù hợp nhất cho doanh nghiệp của bạn',
  cta: 'Đăng ký ngay',
};

export const footer = {
  about: 'Nền tảng vận hành logistics toàn diện cho forwarder, 3PL và doanh nghiệp vận tải.',
  cols: [
    { title: 'Giải pháp', links: [{ href: '#he-sinh-thai', label: 'Hệ sinh thái Logi Platform' }, { href: '#giai-phap', label: 'Giải pháp nổi bật' }, { href: '#mo-hinh', label: 'Theo mô hình doanh nghiệp' }] },
    { title: 'Phân hệ', links: [{ href: '#giai-phap', label: 'Logi.FMS' }, { href: '#giai-phap', label: 'Logi.TMS' }, { href: '#giai-phap', label: 'Logi.WMS' }, { href: '#giai-phap', label: 'Logi.Customs' }, { href: '#giai-phap', label: 'Logi.Finance' }, { href: '#giai-phap', label: 'Logi.DMS' }] },
    { title: 'Hỗ trợ', links: [{ href: '#lo-trinh', label: 'Lộ trình triển khai' }, { href: '#hoi-dap', label: 'Hỏi đáp' }] },
  ],
  consult: 'Đăng ký tư vấn',
  legal: '© 2026 LogiFuture',
};

export const photoCredits = [
  { author: 'Martin Dörsch', license: 'CC0', href: 'https://commons.wikimedia.org/wiki/File:Container_ship_in_Koper_2013.webp' },
  { author: 'Captainmorlypogi1959', license: 'CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Hino_700_Profia_Tractor_Head_2018_with_Container_Van_Trailer.webp' },
  { author: 'QmcBeQ3G7DZCmY84uPgT', license: 'CC BY 4.0', href: 'https://commons.wikimedia.org/wiki/File:Automated_Storage_and_Retrieval_System.webp' },
  { author: 'Dan from PQ, Canada', license: 'CC BY-SA 2.0', href: 'https://commons.wikimedia.org/wiki/File:Shipping_Containers_(3409574988).webp' },
  { author: 'Andrew Thomas', license: 'CC BY-SA 2.0', href: 'https://commons.wikimedia.org/wiki/File:Kota_Wisata_(IMO_9071208)_and_Sea_Ocelot_(IMO_9387023),_Singapore_harbour_-_20120825.webp' },
  { author: 'Olivier Cleynen', license: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Nose_cargo_door_of_Boeing_747-8F.webp' },
  { author: 'CBP Photography', license: 'Public domain', href: 'https://commons.wikimedia.org/wiki/File:U.S._Customs_%26_Border_Protection_Officer_Inspects_Containers_with_Buster.webp' },
];

export const consult = {
  title: 'Form nhận tư vấn',
  sub: 'Đội LogiFuture liên hệ lại để demo trên đúng quy trình của bạn.',
  name: 'Họ và tên',
  phone: 'Số điện thoại',
  email: 'Email công việc',
  company: 'Công ty',
  interest: 'Phân hệ quan tâm',
  interestAll: 'Chưa rõ, cần tư vấn',
  note: 'Ghi chú',
  submit: 'Gửi yêu cầu',
  close: 'Đóng',
  invalid: 'Cần họ tên và email hoặc số điện thoại hợp lệ.',
  notConnected: 'Chưa gửi được: biểu mẫu chưa nối với hệ thống nhận yêu cầu.',
  sent: 'Đã nhận yêu cầu. Đội LogiFuture sẽ liên hệ lại.',
  failed: 'Gửi chưa thành công. Thử lại sau một phút.',
};

// ---------- Các khối bổ sung theo trang chủ và trang sản phẩm MESX của bản gốc ----------
// Khối có `sample: true` đang dùng NỘI DUNG MẪU: trang hiện nhãn "Nội dung mẫu" cho tới khi thay bằng dữ liệu thật.
export const SAMPLE_LABEL = 'Nội dung mẫu';

export const values = {
  title: 'Kiểm soát và tối ưu vận hành logistics trên một nền tảng thống nhất',
  sub: 'Logi Platform không chỉ lưu dữ liệu, mà biến dữ liệu thành khả năng điều hành thực tế, từ bán hàng, giao nhận, vận tải, kho đến tài chính.',
  items: [
    { title: 'Nhìn thấy toàn bộ vận hành theo thời gian thực', body: 'Theo dõi job, chuyến xe, tồn kho, tờ khai và công nợ tại mọi thời điểm' },
    { title: 'Kiểm soát quy trình, giảm sai lệch', body: 'Quy trình duyệt, nhắc việc và phân quyền theo đúng cách doanh nghiệp vận hành' },
    { title: 'Tối ưu chi phí theo từng lô hàng', body: 'Doanh thu, chi phí thực tế và lãi lỗ theo job, theo khách, theo tuyến' },
    { title: 'Chuẩn hóa và mở rộng nhiều chi nhánh', body: 'Một dữ liệu gốc, một quy trình chuẩn cho mọi văn phòng và kho' },
  ],
};

export const architecture = {
  title: 'Kiến trúc nền tảng kết nối từ hiện trường đến hệ thống quản trị',
  sub: 'Logi Platform xây trên kiến trúc mở: ứng dụng hiện trường, phân hệ nghiệp vụ, hệ thống nền và dữ liệu nằm trong một luồng thống nhất, kết nối đối tác qua một cổng tích hợp.',
  side: 'Tầng vận hành logistics',
  loop: 'Dữ liệu khép kín',
  layers: [
    { name: 'Kênh người dùng', items: ['Logi Workspace', 'Customer & Partner Portal', 'Driver App', 'Warehouse App', 'Manager App'] },
    { name: 'Ứng dụng nghiệp vụ', items: ['CRM', 'FMS', 'TMS', 'WMS', 'Customs', 'Finance'] },
    { name: 'Hệ thống nền', items: ['DMS', 'SSO', 'Phân quyền', 'Dữ liệu gốc', 'Workflow', 'Event bus', 'Cổng tích hợp'] },
    { name: 'Dữ liệu & AI', items: ['Lakehouse', 'Data Mart', 'BI', 'Dự báo', 'Logi.AI Assistant'] },
  ],
  partners: 'Đối tác bên ngoài: hãng tàu, hãng bay, hải quan điện tử, ngân hàng, hóa đơn điện tử',
};

export const modelExtras = {
  clientsLabel: 'Khách hàng của LogiFuture',
  story: 'Câu chuyện thành công',
  screenA: { title: 'Danh sách job', rows: [['SE2611-0042', 'Booking xác nhận'], ['SE2611-0039', 'Chờ SI'], ['AE2611-0011', 'Đã phát hành AWB']] },
  screenB: { title: 'Chuyến hôm nay', rows: [['T-5520', 'Đang chạy'], ['T-5521', 'Chờ xe'], ['T-5517', 'Đã POD']] },
};

export const cases = {
  title: 'Case studies',
  sample: true,
  labels: { context: 'Bối cảnh', problem: 'Vấn đề vận hành', solution: 'Giải pháp áp dụng', change: 'Thay đổi vận hành', outcome: 'Outcome', result: 'Kết quả' },
  more: 'Xem thêm case studies',
  prev: 'Case study trước',
  next: 'Case study tiếp theo',
  items: [
    {
      title: 'Chuẩn hóa quy trình báo giá và booking cho forwarder đường biển',
      img: 'container-ship.webp',
      context: ['Ngành: giao nhận đường biển', 'Quy mô: [điền số nhân sự]', 'Đặc thù: nhiều tuyến, nhiều hãng tàu'],
      problem: ['Giá cước nằm trong Excel và email', 'Báo giá chậm, khó theo dõi tỷ lệ chốt', 'Booking và B/L nhập lại nhiều lần'],
      solution: ['Logi.CRM', 'Logi.FMS', 'Logi.DMS'],
      change: ['Bảng giá tập trung theo hãng, tuyến, phụ phí', 'RFQ chuyển thẳng thành báo giá và booking', 'B/L draft sinh từ dữ liệu job'],
      outcome: ['Một job xuyên suốt từ báo giá đến vận đơn'],
      result: ['[Điền kết quả đo được, ví dụ thời gian lập báo giá]', '[Điền kết quả thứ hai]', 'Số liệu thống nhất giữa sales và chứng từ'],
    },
    {
      title: 'Điều phối đội xe container và POD điện tử',
      img: 'container-truck.webp',
      context: ['Ngành: vận tải container nội địa', 'Quy mô: [điền số đầu kéo]', 'Đặc thù: nhiều nhà thầu phụ'],
      problem: ['Điều độ qua điện thoại và nhóm chat', 'POD giấy về văn phòng chậm', 'Đối soát chi phí chuyến thủ công'],
      solution: ['Logi.TMS', 'Driver App', 'Logi.Finance'],
      change: ['Lệnh vận chuyển sinh từ job', 'Tài xế cập nhật GPS, EIR, POD trên app', 'Chi phí chuyến chuyển thẳng sang đối soát'],
      outcome: ['Biết chuyến đang ở đâu, POD về ngay khi giao xong'],
      result: ['[Điền kết quả đo được]', '[Điền kết quả thứ hai]', 'Đối soát nhà thầu trên một hệ thống'],
    },
    {
      title: 'Số hóa kho nhiều chủ hàng cho doanh nghiệp 3PL',
      img: 'automated-warehouse.webp',
      context: ['Ngành: kho bãi, 3PL', 'Quy mô: [điền diện tích, số chủ hàng]', 'Đặc thù: nhiều chủ hàng trên một kho'],
      problem: ['Tồn kho theo dõi bằng Excel', 'Kiểm kê mất nhiều ngày', 'Tính phí lưu kho thủ công'],
      solution: ['Logi.WMS', 'Warehouse App', 'Logi.Finance'],
      change: ['Tồn theo vị trí, lô, hạn dùng, từng chủ hàng', 'Nhập xuất, kiểm kê bằng quét mã', 'Phí lưu kho tính tự động theo ngày hoặc pallet'],
      outcome: ['Tồn kho đúng theo vị trí, hóa đơn kho đúng hạn'],
      result: ['[Điền kết quả đo được]', '[Điền kết quả thứ hai]', 'Mỗi chủ hàng tự xem tồn trên Portal'],
    },
  ],
};

export const whyHub = {
  title: 'Điểm khác biệt của Logi Platform',
  imgAlt: 'Sơ đồ LogiFuture Platform kết nối toàn bộ chuỗi logistics: AI và phân tích dữ liệu, chất lượng, máy móc và thiết bị, kho, năng lượng, sản xuất',
  nodes: ['Bán hàng', 'Giao nhận', 'Vận tải', 'Kho bãi', 'Hải quan', 'Tài chính'],
  cards: [
    { title: 'Kiến trúc mở, tích hợp linh hoạt', body: 'Kết nối hãng tàu, hải quan, ngân hàng và phần mềm hiện có qua một cổng tích hợp, không phải thay toàn bộ hệ thống.' },
    { title: 'Dữ liệu sẵn sàng cho AI', body: 'Chứng từ được OCR, dữ liệu chuẩn hóa từ đầu để báo cáo, dự báo và trợ lý AI dùng ngay.' },
    { title: 'Triển khai theo từng giai đoạn', body: 'Bắt đầu từ bài toán trọng tâm, mở rộng theo lộ trình năm giai đoạn, vận hành không gián đoạn.' },
    { title: 'Tùy biến theo mô hình', body: 'Forwarder, 3PL hay cả hai: quy trình, phân quyền và màn hình cấu hình theo cách doanh nghiệp làm.' },
  ],
  prev: 'Lý do trước',
  next: 'Lý do tiếp theo',
};

export const awards = {
  title: 'Giải thưởng',
  sample: true,
  items: [
    { name: '[Tên giải thưởng]', org: '[Đơn vị trao giải]', year: '[Năm]' },
    { name: '[Tên giải thưởng]', org: '[Đơn vị trao giải]', year: '[Năm]' },
    { name: '[Tên chứng nhận]', org: '[Đơn vị cấp]', year: '[Năm]' },
  ],
};

export const press = {
  title: 'Báo chí nói gì về LogiFuture?',
  sample: true,
  items: [
    { title: '[Tiêu đề bài báo nổi bật về LogiFuture]', source: '[Tên báo]', img: 'singapore-harbour.webp', lead: true },
    { title: '[Tiêu đề bài báo]', source: '[Tên báo]', img: 'container-ship.webp' },
    { title: '[Tiêu đề bài báo]', source: '[Tên báo]', img: 'containers-stacked.webp' },
  ],
};

export const posts = {
  title: 'Kiến thức chuyên sâu',
  sample: true,
  more: 'Đọc thêm',
  items: [
    { title: 'FMS là gì? Phần mềm quản lý giao nhận cho forwarder', date: '[Ngày đăng]', cat: 'Quản trị logistics', img: 'container-ship.webp' },
    { title: 'TMS và bài toán điều phối đội xe container', date: '[Ngày đăng]', cat: 'Vận tải', img: 'container-truck.webp' },
    { title: 'Số hóa chứng từ logistics bằng OCR', date: '[Ngày đăng]', cat: 'Chuyển đổi số', img: 'customs-inspection.webp' },
    { title: 'WMS cho kho nhiều chủ hàng: những điểm cần lưu ý', date: '[Ngày đăng]', cat: 'Kho bãi', img: 'automated-warehouse.webp' },
    { title: 'Lãi lỗ theo job: vì sao forwarder cần theo dõi sớm', date: '[Ngày đăng]', cat: 'Tài chính', img: 'singapore-harbour.webp' },
  ],
};

export const assess = {
  title: 'Đánh giá mức độ phù hợp của Logi Platform với doanh nghiệp của bạn',
  sub: 'Nhận tư vấn dựa trên hệ thống hiện tại và bài toán vận hành thực tế của doanh nghiệp bạn',
  checks: ['Phân tích hiện trạng hệ thống (Excel, phần mềm kế toán, TMS...)', 'Đề xuất lộ trình triển khai phù hợp', 'Demo theo bài toán thực tế'],
  clients: 'Đồng hành cùng doanh nghiệp logistics trên hành trình chuyển đổi số',
  form: {
    name: 'Họ và tên', namePh: 'Nhập tên của bạn',
    company: 'Tên doanh nghiệp', companyPh: 'Nhập tên doanh nghiệp',
    role: 'Chức danh / vị trí công việc', rolePh: 'Chọn chức danh / vị trí',
    roles: ['Chủ doanh nghiệp / Giám đốc', 'Trưởng phòng vận hành', 'Trưởng phòng kinh doanh', 'Kế toán / Tài chính', 'IT / Chuyển đổi số', 'Khác'],
    email: 'Email', emailPh: 'VD: ten@congty.vn',
    phone: 'Số điện thoại', phonePh: 'Nhập số điện thoại',
    topic: 'Bài toán bạn đang quan tâm', topicPh: 'Lựa chọn giải pháp bạn quan tâm',
    need: 'Nhu cầu cụ thể', needPh: 'Mô tả nhu cầu, mục tiêu và phạm vi triển khai',
    submit: 'Nhận tư vấn & demo miễn phí',
  },
};

export const offices = {
  sample: true,
  hotlineLabel: 'Hotline',
  items: [
    { name: 'Trụ sở chính', hotline: '[Số hotline]', address: '[Địa chỉ trụ sở chính]' },
    { name: 'Chi nhánh TP HCM', hotline: '[Số hotline]', address: '[Địa chỉ chi nhánh]' },
  ],
  company: 'Công ty [tên pháp lý của LogiFuture]',
  privacy: 'Chính sách bảo mật',
  connect: 'Kết nối với chúng tôi',
};
