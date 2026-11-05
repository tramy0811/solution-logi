// Nội dung LogiFuture cho bản clone bố cục vti-solutions.vn.
// Số liệu nền tảng lấy từ "Kiến trúc Logi Platform" (D:\LogiFuture\CMS\docs). Màn hình minh họa dùng dữ liệu mẫu.

export const IMG = '/sites/logifuture';

export const nav = {
  menu: 'Menu',
  close: 'Đóng menu',
  cta: 'Đặt lịch demo',
  links: [
    { href: '#bai-toan', label: 'Bài toán', desc: 'Những điểm nghẽn LogiFuture giải quyết' },
    { href: '#he-sinh-thai', label: 'Nền tảng', desc: 'Từ ứng dụng hiện trường đến báo cáo quản trị' },
    { href: '#giai-phap', label: 'Giải pháp', desc: 'Bán hàng, giao nhận, vận tải, kho và tài chính' },
    { href: '#mo-hinh', label: 'Theo mô hình', desc: 'Forwarder, vận tải, kho bãi, 3PL, hải quan' },
    { href: '#lo-trinh', label: 'Lộ trình', desc: 'Năm giai đoạn, bắt đầu từ nền tảng' },
    { href: '#hoi-dap', label: 'Hỏi đáp', desc: 'Những câu doanh nghiệp hay hỏi' },
  ],
  modulesTitle: 'Phân hệ Logi Platform',
  contactTitle: 'Tư vấn giải pháp logistics',
  contactBody: 'Khảo sát nhu cầu và lựa chọn giải pháp phù hợp với mô hình vận hành của doanh nghiệp.',
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
  line1: 'Nền tảng quản trị logistics toàn diện',
  line2: 'thông minh tích hợp AI',
  sub: 'Nền tảng thống nhất điều phối toàn bộ vận hành logistics từ kinh doanh, giao nhận đến vận tải, kho bãi và tài chính, hỗ trợ ra quyết định thông minh bằng AI theo thời gian thực.',
  points: ['Liên thông dữ liệu từ kinh doanh đến hiện trường và kế toán.', 'Quản lý tiến độ, chi phí và hiệu quả từng lô hàng.'],
  cta: 'Đăng ký tư vấn',
  secondary: 'Khám phá nền tảng',
  imgAlt: 'Cảng container lúc hoàng hôn: tàu hàng, cẩu bờ, xe đầu kéo và máy bay chở hàng',
};

export const pains = {
  title: 'Giải quyết các thách thức trong vận hành logistics',
  sub: 'Dữ liệu phân tán, quy trình thủ công và thiếu thông tin đối soát làm chậm hoạt động. LogiFuture tập trung hồ sơ lô hàng và kết nối công việc giữa các bộ phận.',
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
  title: 'Giải pháp nổi bật',
  result: 'Giúp đội ngũ',
  cta: 'Xem demo phân hệ này',
  items: [
    { id: 'fms', name: 'FMS / Giao nhận và chứng từ', features: ['Tra giá cước theo hãng, tuyến và thời hạn áp dụng', 'Lập báo giá kèm phụ phí và bước duyệt', 'Theo dõi booking, lịch tàu và hạn gửi chứng từ', 'Chuẩn bị SI, vận đơn đường biển và hàng không'], result: 'dùng lại thông tin từ báo giá để xử lý booking và chứng từ.' },
    { id: 'tms', name: 'TMS / Điều phối vận tải', features: ['Tạo lệnh vận chuyển từ hồ sơ lô hàng', 'Sắp xe, tài xế và nhà thầu cho từng chuyến', 'Theo dõi mốc nhận hàng, vào cảng và giao hàng', 'Nhận ảnh giao hàng và xác nhận từ tài xế'], result: 'theo dõi tiến độ chuyến và xử lý phát sinh trên cùng lịch điều phối.' },
    { id: 'wms', name: 'WMS / Nhập xuất và tồn kho', features: ['Kiểm đếm, quét mã và sắp vị trí khi nhập hàng', 'Theo dõi tồn theo chủ hàng, vị trí, lô và hạn dùng', 'Lập kế hoạch lấy hàng, đóng gói và xuất kho', 'Kiểm kê và lưu lại các lần điều chỉnh'], result: 'tra được hàng đang ở đâu, còn bao nhiêu và thuộc chủ hàng nào.' },
    { id: 'crm', name: 'CRM / Khách hàng và yêu cầu báo giá', features: ['Lưu đầu mối liên hệ và người phụ trách từng khách', 'Theo dõi yêu cầu báo giá và lịch sử phản hồi', 'Quản lý hợp đồng, hạn mức và điều khoản thanh toán', 'Ghi nhận lịch hẹn, chăm sóc và phản ánh của khách'], result: 'theo sát từng cơ hội bán hàng, từ lúc nhận yêu cầu đến khi chốt giá.' },
    { id: 'customs', name: 'Customs / Hồ sơ hải quan', features: ['Tập hợp chứng từ theo từng bộ hồ sơ', 'Đối chiếu thông tin trước khi lập tờ khai', 'Theo dõi trạng thái xử lý và yêu cầu bổ sung', 'Quản lý giấy phép, C/O và thời hạn hiệu lực'], result: 'theo sát hồ sơ cần xử lý và giảm thời gian gom chứng từ.' },
    { id: 'finance', name: 'Finance / Chi phí và công nợ', features: ['Theo dõi khoản phải thu theo khách và lô hàng', 'Tập hợp chi phí hãng tàu, nhà xe và kho', 'Đối chiếu thanh toán với từng đối tác', 'So sánh doanh thu, chi phí dự kiến và thực tế'], result: 'nắm công nợ đến hạn và lãi lỗ của từng lô hàng.' },
    { id: 'dms', name: 'DMS / Quản lý chứng từ', features: ['Lưu chứng từ theo khách hàng và hồ sơ lô hàng', 'Đọc thông tin từ bản scan để hỗ trợ nhập liệu', 'Quản lý phiên bản và lịch sử chỉnh sửa', 'Cấp quyền xem, tải và xử lý theo vai trò'], result: 'tìm lại đúng hồ sơ và kiểm tra được phiên bản đang sử dụng.' },
    { id: 'ai', name: 'Data & AI / Báo cáo và tra cứu', features: ['Xem sản lượng, doanh thu và chi phí theo kỳ', 'Lọc báo cáo theo khách, tuyến và bộ phận', 'Tìm thông tin bằng câu hỏi từ dữ liệu được cấp quyền', 'Tổng hợp báo cáo để người phụ trách kiểm tra'], result: 'bớt thời gian tổng hợp file trước mỗi buổi báo cáo.' },
  ],
};

export const connect = {
  title: 'Kết nối trong chuỗi cung ứng toàn cầu',
  // Logo SVG giống CMS (apps/web/public/partners), bản gốc trên Wikimedia Commons, đều Public domain.
  // Nhãn hiệu vẫn thuộc các hãng: chỉ giữ hãng LogiFuture thực sự làm việc cùng.
  partners: [
    { name: 'Maersk', file: 'maersk.svg' },
    { name: 'MSC', file: 'msc.svg', tall: true },
    { name: 'CMA CGM', file: 'cma-cgm.svg', tall: true },
    { name: 'COSCO SHIPPING', file: 'cosco.svg', tall: true },
    { name: 'Ocean Network Express', file: 'one.svg', tall: true },
    { name: 'Evergreen Line', file: 'evergreen.svg' },
    { name: 'HMM', file: 'hmm.svg' },
    { name: 'ZIM', file: 'zim.svg', tall: true },
    { name: 'Vietnam Airlines', file: 'vietnam-airlines.svg' },
    { name: 'Singapore Airlines', file: 'singapore-airlines.svg' },
    { name: 'Emirates', file: 'emirates.svg', tall: true },
    { name: 'Lufthansa Cargo', file: 'lufthansa-cargo.svg' },
    { name: 'Cathay Pacific', file: 'cathay.svg' },
    { name: 'Korean Air Cargo', file: 'korean-air-cargo.svg' },
  ] as { name: string; file: string; tall?: boolean }[],
};

export const ecosystem = {
  title: 'Các nghiệp vụ cùng làm việc trên một hệ thống',
  sub: 'Từ yêu cầu báo giá đến đối soát thanh toán, dữ liệu được chuyển tiếp giữa các bộ phận. Doanh nghiệp lựa chọn phân hệ và quy trình phù hợp với phạm vi hoạt động.',
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
  title: 'Tích hợp AI vào từng nghiệp vụ logistics',
  sub: 'Ứng dụng AI trong xử lý chứng từ, lập kế hoạch vận tải và phân tích dữ liệu. Logi.AI hỗ trợ nhân sự xử lý công việc trên nguồn dữ liệu được phân quyền của doanh nghiệp.',
  center: 'Logi.AI',
  cards: [
    { title: 'Số hóa chứng từ bằng OCR', body: 'Trích xuất thông tin từ vận đơn, hóa đơn và chứng từ giao nhận; hỗ trợ đối chiếu trước khi cập nhật vào hồ sơ lô hàng.' },
    { title: 'Hỗ trợ lập kế hoạch vận tải', body: 'Phân tích nhu cầu vận chuyển, lịch giao nhận và dữ liệu chuyến để hỗ trợ điều phối xe và theo dõi nguy cơ chậm tiến độ.' },
    { title: 'Phân tích chi phí và dự báo', body: 'Tổng hợp doanh thu, chi phí theo lô hàng và tuyến; hỗ trợ nhận diện biến động và lập kế hoạch sản lượng.' },
    { title: 'Trợ lý nghiệp vụ logistics', body: 'Tra cứu trạng thái lô hàng, tìm chứng từ và tổng hợp báo cáo bằng câu hỏi tự nhiên từ dữ liệu được cấp quyền.' },
  ],
};

export const models = {
  title: 'Giải pháp theo mô hình doanh nghiệp',
  subA: 'Mỗi mô hình có yêu cầu riêng.',
  subB: 'Chọn nghiệp vụ cần quản lý trước',
  subC: ' và mở rộng khi doanh nghiệp cần.',
  using: 'Phân hệ sử dụng',
  cta: 'Trao đổi về mô hình của bạn',
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
  title: 'Triển khai từng bước, theo nhịp vận hành',
  subA: 'Chọn phạm vi vừa sức,',
  subB: ' chạy thử với đội ngũ rồi mới mở rộng.',
  prev: 'Giai đoạn trước',
  next: 'Giai đoạn tiếp theo',
  items: [
    { phase: '01 / Khảo sát', title: 'Thống nhất quy trình, dữ liệu và mục tiêu cần đo', img: 'singapore-harbour.webp' },
    { phase: '02 / Thiết lập', title: 'Cấu hình nghiệp vụ, phân quyền và đưa dữ liệu lên hệ thống', img: 'container-ship.webp' },
    { phase: '03 / Chạy thử', title: 'Xử lý lô hàng thực tế cùng một nhóm phụ trách', img: 'automated-warehouse.webp' },
    { phase: '04 / Vận hành', title: 'Hướng dẫn đội ngũ, mở rộng phạm vi và theo sát phát sinh', img: 'container-truck.webp' },
    { phase: '05 / Cải tiến', title: 'Đối chiếu kết quả, điều chỉnh quy trình và bổ sung phân hệ', img: 'containers-stacked.webp' },
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
  title: 'Câu hỏi thường gặp',
  items: [
    { q: 'Doanh nghiệp nhỏ có thể bắt đầu từ đâu?', a: 'Từ công việc đang tốn nhiều thời gian nhất: báo giá, quản lý lô hàng, điều xe hoặc đối soát. Phạm vi ban đầu được chọn sau khi xem quy trình và số người sử dụng.' },
    { q: 'Có cần triển khai tất cả phân hệ cùng lúc?', a: 'Không. Bạn có thể chọn phân hệ cần trước, cho một nhóm chạy thử, sau đó mở rộng sang các bộ phận khác khi quy trình đã ổn định.' },
    { q: 'Dữ liệu Excel và phần mềm đang dùng sẽ xử lý thế nào?', a: 'Đội triển khai cùng bạn rà soát dữ liệu cần chuyển và hệ thống cần giữ. Khả năng nhập dữ liệu hoặc kết nối sẽ được kiểm tra trước khi thống nhất phạm vi.' },
    { q: 'Có thể phân quyền theo bộ phận và chi nhánh không?', a: 'Hệ thống hỗ trợ phân quyền theo vai trò và phạm vi công việc. Trong quá trình khảo sát, doanh nghiệp xác định quyền xem, cập nhật và phê duyệt cho từng bộ phận, chi nhánh và nhóm người dùng.' },
    { q: 'Bao lâu đội ngũ có thể bắt đầu sử dụng?', a: 'Thời gian phụ thuộc vào số nghiệp vụ, chất lượng dữ liệu và yêu cầu kết nối. Sau khảo sát, LogiFuture sẽ đề xuất các mốc thiết lập, chạy thử và đưa vào sử dụng.' },
  ],
  ctaText: 'Trao đổi với LogiFuture để xác định phân hệ và phạm vi triển khai phù hợp.',
  cta: 'Đăng ký tư vấn',
};

export const footer = {
  about: 'Quản lý lô hàng, vận tải, kho và công nợ. Để các bộ phận phối hợp dễ hơn mỗi ngày.',
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
  title: 'Đăng ký tư vấn giải pháp',
  sub: 'Để lại nhu cầu và thông tin liên hệ. LogiFuture sẽ cùng bạn xem quy trình hiện tại, nghiệp vụ cần quản lý và phương án triển khai.',
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
  notConnected: 'Biểu mẫu hiện chưa nhận yêu cầu trực tuyến. Thông tin của bạn chưa được gửi.',
  sent: 'Đã nhận yêu cầu. Đội LogiFuture sẽ liên hệ lại.',
  failed: 'Gửi chưa thành công. Thử lại sau một phút.',
};

// ---------- Các khối bổ sung theo trang chủ và trang sản phẩm MESX của bản gốc ----------
// Khối có `sample: true` đang dùng NỘI DUNG MẪU: trang hiện nhãn "Nội dung mẫu" cho tới khi thay bằng dữ liệu thật.
export const SAMPLE_LABEL = 'Nội dung mẫu';

export const values = {
  title: 'Nâng cao hiệu quả quản trị và vận hành logistics',
  sub: 'Kết nối các bộ phận trên cùng nguồn dữ liệu, chuẩn hóa quy trình và cung cấp thông tin phục vụ điều hành doanh nghiệp.',
  items: [
    { title: 'Quản lý vận hành tập trung', body: 'Theo dõi lô hàng, chuyến xe, tồn kho và tiến độ xử lý trên một hệ thống.' },
    { title: 'Chuẩn hóa quy trình nghiệp vụ', body: 'Liên thông dữ liệu, thiết lập luồng phê duyệt và phân quyền theo trách nhiệm.' },
    { title: 'Kiểm soát chi phí và lợi nhuận', body: 'Đối chiếu doanh thu, chi phí và công nợ theo lô hàng, khách hàng và tuyến.' },
    { title: 'Mở rộng theo nhu cầu', body: 'Lựa chọn phân hệ, cấu hình quy trình và triển khai theo từng giai đoạn.' },
  ],
};

export const architecture = {
  title: 'Kiến trúc nền tảng kết nối từ hiện trường đến hệ thống quản trị',
  sub: 'Văn phòng, tài xế và nhân viên kho cùng cập nhật một hồ sơ. Người quản lý theo dõi tiến độ, chứng từ và chi phí mà không phải chờ từng bộ phận gửi báo cáo.',
  imgAlt: 'Sơ đồ kiến trúc LogiFuture: hạ tầng dữ liệu, tự động hóa kết nối thiết bị, điều hành giám sát, quản lý vận hành FMS TMS WMS, quản trị chiến lược AI và các sản phẩm, dịch vụ đi kèm',
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
  title: 'Vì sao lựa chọn LogiFuture?',
  imgAlt: 'Sơ đồ LogiFuture Platform kết nối toàn bộ chuỗi logistics: AI và phân tích dữ liệu, chất lượng, máy móc và thiết bị, kho, năng lượng, sản xuất',
  nodes: ['Bán hàng', 'Giao nhận', 'Vận tải', 'Kho bãi', 'Hải quan', 'Tài chính'],
  cards: [
    { title: 'Kiến trúc mở, tích hợp linh hoạt', body: 'Kết nối hãng tàu, hải quan, ngân hàng và phần mềm hiện có qua một cổng tích hợp, không phải thay toàn bộ hệ thống.' },
    { title: 'Chứng từ và báo cáo cùng nguồn dữ liệu', body: 'Lưu chứng từ theo lô hàng, hỗ trợ đọc thông tin từ bản scan và tổng hợp báo cáo từ dữ liệu đã được kiểm tra.' },
    { title: 'Triển khai theo từng giai đoạn', body: 'Chọn nghiệp vụ ưu tiên, chạy thử với nhóm phụ trách rồi mở rộng sau khi thống nhất cách làm.' },
    { title: 'Tùy biến theo mô hình', body: 'Forwarder, 3PL hay cả hai: quy trình, phân quyền và màn hình cấu hình theo cách doanh nghiệp làm.' },
  ],
  prev: 'Lý do trước',
  next: 'Lý do tiếp theo',
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
  title: 'Tìm giải pháp phù hợp với doanh nghiệp của bạn',
  sub: 'Chia sẻ mô hình hoạt động và những vướng mắc hiện tại. LogiFuture sẽ cùng bạn xác định nghiệp vụ ưu tiên, yêu cầu kết nối và phạm vi triển khai.',
  checks: ['Trao đổi với người trực tiếp làm nghiệp vụ', 'Xem demo theo luồng công việc bạn quan tâm', 'Thống nhất phạm vi và cách đo hiệu quả'],
  clients: 'Buổi tư vấn tập trung vào quy trình thực tế và nhu cầu của doanh nghiệp.',
  form: {
    name: 'Họ và tên', namePh: 'Nhập tên của bạn',
    company: 'Tên doanh nghiệp', companyPh: 'Nhập tên doanh nghiệp',
    role: 'Chức danh / vị trí công việc', rolePh: 'Chọn chức danh / vị trí',
    roles: ['Chủ doanh nghiệp / Giám đốc', 'Trưởng phòng vận hành', 'Trưởng phòng kinh doanh', 'Kế toán / Tài chính', 'IT / Chuyển đổi số', 'Khác'],
    email: 'Email', emailPh: 'VD: ten@congty.vn',
    phone: 'Số điện thoại', phonePh: 'Nhập số điện thoại',
    topic: 'Bài toán bạn đang quan tâm', topicPh: 'Lựa chọn giải pháp bạn quan tâm',
    need: 'Nhu cầu cụ thể', needPh: 'Mô tả nhu cầu, mục tiêu và phạm vi triển khai',
    submit: 'Gửi nhu cầu tư vấn',
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
