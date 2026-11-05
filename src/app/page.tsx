import { AssessSection } from '@/components/sites/logifuture/assess-form';
import { ConsultProvider } from '@/components/sites/logifuture/consult';
import { IMG, models } from '@/components/sites/logifuture/content';
import { Hero } from '@/components/sites/logifuture/hero';
import { Capabilities, ModelsTabs, RolloutCarousel } from '@/components/sites/logifuture/interactive';
import { Architecture, Pains, Values } from '@/components/sites/logifuture/more-sections';
import { Motion } from '@/components/sites/logifuture/motion';
import { AiSection, Band, Connect, Faq, SiteFooter, Tech } from '@/components/sites/logifuture/sections';
import { BackToTop } from '@/components/sites/logifuture/back-to-top';
import { SiteHeader } from '@/components/sites/logifuture/site-header';
import { userLogos, userPhotos } from '@/components/sites/logifuture/user-images';

export default function Home() {
  // Ảnh và logo của người dùng (D:\LogiFuture\solution\image) thay cho ảnh dự phòng khi có.
  const logos = userLogos();
  const modelPhotos = userPhotos(models.items.map((m) => `${IMG}/${m.img}`));
  return (
    <ConsultProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-lf-blue">
        Bỏ qua điều hướng
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Connect />
        <Architecture />
        <Values />
        <Tech />
        <AiSection />
        <Capabilities />
        <ModelsTabs photos={modelPhotos} logos={logos} />
        <Pains />
        <RolloutCarousel />
        <Band />
        <Faq />
        <AssessSection logos={logos} />
      </main>
      <SiteFooter />
      <Motion />
      <BackToTop />
    </ConsultProvider>
  );
}
