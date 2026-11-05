import { AssessSection } from '@/components/sites/logifuture/assess-form';
import { ConsultProvider } from '@/components/sites/logifuture/consult';
import { cases, IMG, models, rollout } from '@/components/sites/logifuture/content';
import { Hero } from '@/components/sites/logifuture/hero';
import { Capabilities, CaseStudies, ModelsTabs, RolloutCarousel, WhyHub } from '@/components/sites/logifuture/interactive';
import { Architecture, Awards, Knowledge, Pains, Press, Values } from '@/components/sites/logifuture/more-sections';
import { Motion } from '@/components/sites/logifuture/motion';
import { AiSection, Band, Connect, Ecosystem, Faq, SiteFooter, Tech, Why } from '@/components/sites/logifuture/sections';
import { SiteHeader } from '@/components/sites/logifuture/site-header';
import { userLogos, userPhotos } from '@/components/sites/logifuture/user-images';

export default function Home() {
  // Ảnh và logo của người dùng (D:\LogiFuture\solution\image) thay cho ảnh dự phòng khi có.
  const logos = userLogos();
  const [heroPhoto] = userPhotos([`${IMG}/container-ship.webp`]);
  const modelPhotos = userPhotos(models.items.map((m) => `${IMG}/${m.img}`));
  const casePhotos = userPhotos(cases.items.map((c) => `${IMG}/${c.img}`));
  const rolloutPhotos = userPhotos(rollout.items.map((r) => `${IMG}/${r.img}`));
  return (
    <ConsultProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-lf-blue">
        Bỏ qua điều hướng
      </a>
      <SiteHeader />
      <main id="main">
        <Hero photo={heroPhoto} />
        <Connect />
        <Values />
        <Ecosystem />
        <Capabilities />
        <Architecture />
        <Pains />
        <Tech />
        <AiSection />
        <ModelsTabs photos={modelPhotos} logos={logos} />
        <CaseStudies photos={casePhotos} />
        <WhyHub />
        <Why />
        <RolloutCarousel photos={rolloutPhotos} />
        <Awards />
        <Press />
        <Knowledge />
        <Band />
        <Faq />
        <AssessSection logos={logos} />
      </main>
      <SiteFooter />
      <Motion />
    </ConsultProvider>
  );
}
