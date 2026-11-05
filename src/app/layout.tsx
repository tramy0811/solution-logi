import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LogiFuture | Nền tảng vận hành logistics toàn diện",
  description:
    "Logi Platform: CRM, FMS, TMS, WMS, hải quan, tài chính, kho chứng từ, dữ liệu và trợ lý AI trên một dữ liệu chung cho forwarder, 3PL và doanh nghiệp vận tải.",
  icons: { icon: "/sites/logifuture/mark.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${googleSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
