// Nội dung LogiFuture cho bản clone bố cục vti-solutions.vn.
// Số liệu nền tảng lấy từ "Kiến trúc Logi Platform" (D:\LogiFuture\CMS\docs). Màn hình minh họa dùng dữ liệu mẫu.

export const IMG = '/sites/logifuture';

export const nav = {
  menu: 'Menu',
  close: 'Đóng menu',
  cta: 'Đặt lịch demo',
  links: [
    { href: '#he-sinh-thai', label: 'Hệ sinh thái' },
    { href: '#giai-phap', label: 'Giải pháp nổi bật' },
    { href: '#mo-hinh', label: 'Theo mô hình doanh nghiệp' },
    { href: '#lo-trinh', label: 'Lộ trình triển khai' },
    { href: '#hoi-dap', label: 'Hỏi đáp' },
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
  line1: 'Nền tảng vận hành logistics toàn diện',
  line2: 'từ báo giá đến thu tiền',
  sub: 'Một dữ liệu chung cho bán hàng, giao nhận, vận tải, kho, hải quan và tài chính, dành cho forwarder, 3PL và doanh nghiệp vận tải.',
  stats: [
    { value: '9', label: 'Phân hệ nghiệp vụ' },
    { value: '5', label: 'Ứng dụng web & di động' },
    { value: '46', label: 'Loại chứng từ số hóa' },
    { value: '53', label: 'Nhóm chức năng' },
  ],
  cta: 'Đăng kí nhận tư vấn',
  stack: {
    layers: ['Hạ tầng & dữ liệu', 'Hệ thống nền', 'Ứng dụng nghiệp vụ', 'Kênh người dùng'],
    left: ['Portal khách hàng', 'Driver App', 'Warehouse App'],
    right: ['Logi.AI Assistant', 'FMS · TMS · WMS', 'Customs & Finance'],
  },
};

export const connect = {
  title1: 'Kết nối sẵn với hệ sinh thái logistics',
  title2: 'từ hãng tàu, hải quan đến ngân hàng',
  row1: ['Hãng tàu', 'Hãng hàng không', 'Hải quan điện tử', 'Ngân hàng', 'Hóa đơn điện tử', 'Nhà xe đối tác'],
  row2: ['EDI', 'API', 'Email & SMS', 'Định vị GPS', 'Máy quét mã vạch', 'Kho đối tác'],
};

export const ecosystem = {
  title: 'Hệ sinh thái Logi Platform',
  sub: 'Chín hệ thống, năm ứng dụng giao diện, chạy trên một dữ liệu chung',
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

export type Solution = {
  id: string;
  tab: string;
  title: string;
  desc: string;
  points: { label: string; text: string }[];
  screen: { title: string; rows: [string, string, string][] };
};

export const solutions = {
  title: 'Giải pháp nổi bật',
  detail: 'Đăng kí tư vấn',
  demo: 'Demo tính năng',
  sample: 'Dữ liệu mẫu',
  prev: 'Giải pháp trước',
  next: 'Giải pháp tiếp theo',
  items: [
    {
      id: 'fms',
      tab: 'Logi.FMS',
      title: 'Báo giá, booking và job – Logi.FMS',
      desc: 'Xương sống của lô hàng: từ báo giá đến mở job và phát hành vận đơn.',
      points: [
        { label: 'Giá cước', text: 'bảng giá theo hãng, tuyến, loại hàng, phụ phí và hiệu lực giá' },
        { label: 'Báo giá', text: 'nhiều phương án, duyệt nội bộ, chuyển báo giá thành booking' },
        { label: 'Job / lô hàng', text: 'FCL, LCL, Air, mốc trạng thái, doanh thu và chi phí dự kiến' },
        { label: 'Vận đơn', text: 'SI, House/Master B/L draft, khách duyệt draft, phát hành, AWB' },
      ],
      screen: { title: 'Danh sách job', rows: [['SE2611-0042', 'HPH → LAX', 'Booking xác nhận'], ['SE2611-0039', 'HCM → RTM', 'Chờ SI'], ['AE2611-0011', 'HAN → NRT', 'Đã phát hành AWB'], ['SE2610-0187', 'HCM → SIN', 'Đang trên biển']] },
    },
    {
      id: 'tms',
      tab: 'Logi.TMS',
      title: 'Điều phối vận tải – Logi.TMS',
      desc: 'Điều phối và theo dõi vận chuyển từ lấy hàng đến giao hàng.',
      points: [
        { label: 'Lệnh vận chuyển', text: 'Transport, Pickup, Delivery Order từ job, ghép hoặc tách chuyến' },
        { label: 'Điều phối', text: 'gán xe, tài xế, rơ-moóc hoặc nhà thầu, cảnh báo trùng lịch' },
        { label: 'Container và bãi', text: 'EIR, Gate-in, Gate-out, hạn lưu bãi và lưu container' },
        { label: 'Thực hiện chuyến', text: 'GPS từ Driver App, POD bằng ảnh và chữ ký điện tử' },
      ],
      screen: { title: 'Chuyến hôm nay', rows: [['T-5520', 'Kéo cont ra cảng', 'Đang chạy'], ['T-5521', 'Giao kho Bình Dương', 'Chờ xe'], ['T-5517', 'Lấy hàng KCN Tân Tạo', 'Đã POD'], ['T-5523', 'Trả rỗng depot', 'Đã gán xe']] },
    },
    {
      id: 'wms',
      tab: 'Logi.WMS',
      title: 'Quản lý kho – Logi.WMS',
      desc: 'Quản lý hàng vào, tồn kho và hàng ra theo từng vị trí.',
      points: [
        { label: 'Nhập kho', text: 'lịch hẹn nhập, GRN, kiểm đếm, kiểm chất lượng, gán vị trí' },
        { label: 'Tồn kho', text: 'theo vị trí, lô, hạn dùng, cảnh báo tồn thấp hoặc cận hạn' },
        { label: 'Xuất kho', text: 'Delivery Order, picking, packing, gom hàng lên xe' },
        { label: 'Kiểm kê', text: 'stock count theo kỳ hoặc đột xuất, điều chỉnh qua bước duyệt' },
      ],
      screen: { title: 'Phiếu nhập GRN', rows: [['GRN-1102', 'Pallet A-01', '24 / 24'], ['GRN-1102', 'Pallet A-02', '18 / 24'], ['GRN-1103', 'Pallet B-07', '0 / 12'], ['GRN-1104', 'Thùng C-15', '40 / 40']] },
    },
    {
      id: 'customs',
      tab: 'Logi.Customs',
      title: 'Khai báo và thông quan – Logi.Customs',
      desc: 'Chuẩn bị hồ sơ, lập tờ khai và theo dõi kết quả thông quan.',
      points: [
        { label: 'Hồ sơ khai', text: 'gom Invoice, Packing List, B/L, C/O, kiểm tra đủ bộ và khớp số liệu' },
        { label: 'Tờ khai', text: 'lập từ dữ liệu job và chứng từ đã OCR, tra mã HS, tính thuế' },
        { label: 'Khai báo', text: 'gửi lên hải quan điện tử, nhận phản hồi, khai bổ sung' },
        { label: 'Giấy phép và C/O', text: 'theo dõi hạn hiệu lực và nhắc gia hạn' },
      ],
      screen: { title: 'Tờ khai đang xử lý', rows: [['TK xuất', 'SE2611-0042', 'Luồng xanh'], ['TK nhập', 'SI2611-0015', 'Chờ phản hồi'], ['TK xuất', 'AE2611-0011', 'Đã thông quan'], ['TK nhập', 'SI2611-0018', 'Khai bổ sung']] },
    },
    {
      id: 'finance',
      tab: 'Logi.Finance',
      title: 'Công nợ và đối soát – Logi.Finance',
      desc: 'Hóa đơn phải thu, chi phí phải trả và lãi lỗ theo từng job.',
      points: [
        { label: 'Phải thu', text: 'hóa đơn AR, Debit Note, theo dõi hạn mức công nợ khách hàng' },
        { label: 'Phải trả', text: 'chi phí nhà xe, kho, hãng tàu, Credit Note' },
        { label: 'Đối soát', text: 'thu chi, đối soát với nhà thầu và ngân hàng' },
        { label: 'Lãi lỗ theo job', text: 'doanh thu, chi phí thực tế so với dự kiến' },
      ],
      screen: { title: 'Công nợ phải thu', rows: [['INV-2611-031', 'Khách hàng mẫu A', 'Đến hạn 20/11'], ['INV-2611-027', 'Khách hàng mẫu B', 'Đã thu'], ['INV-2610-118', 'Khách hàng mẫu C', 'Quá hạn 3 ngày'], ['DN-2611-004', 'Khách hàng mẫu A', 'Chờ duyệt']] },
    },
    {
      id: 'dms',
      tab: 'Logi.DMS',
      title: 'Kho chứng từ trung tâm – Logi.DMS',
      desc: 'Nhận chứng từ từ sáu phân hệ nghiệp vụ, đọc, phân loại và lưu phiên bản.',
      points: [
        { label: 'OCR & trích xuất', text: 'đọc số B/L, số container, giá trị hóa đơn từ ảnh và PDF' },
        { label: 'Phân loại', text: '46 loại chứng từ, tự gán vào đúng job và khách hàng' },
        { label: 'Kiểm tra', text: 'đối chiếu số liệu giữa các chứng từ trong cùng một bộ' },
        { label: 'Phiên bản & quyền', text: 'lịch sử sửa đổi, quyền theo vai trò, job và khách' },
      ],
      screen: { title: 'Chứng từ mới nhận', rows: [['House B/L draft', 'SE2611-0042', 'Đã trích xuất'], ['Commercial Invoice', 'SE2611-0042', 'Khớp số liệu'], ['POD', 'T-5517', 'Đã gắn job'], ['EIR', 'T-5520', 'Đang đọc']] },
    },
  ] as Solution[],
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
  photos: 'Ảnh (Wikimedia Commons)',
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
