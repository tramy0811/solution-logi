import { ConsultProvider } from '@/components/sites/logifuture/consult';
import { Hero } from '@/components/sites/logifuture/hero';
import { ModelsTabs, RolloutCarousel, SolutionsTabs } from '@/components/sites/logifuture/interactive';
import { AiSection, Band, Connect, Ecosystem, Faq, SiteFooter, Tech, Why } from '@/components/sites/logifuture/sections';
import { SiteHeader } from '@/components/sites/logifuture/site-header';

export default function Home() {
  return (
    <ConsultProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-lf-blue">
        Bỏ qua điều hướng
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Connect />
        <Ecosystem />
        <Tech />
        <AiSection />
        <SolutionsTabs />
        <ModelsTabs />
        <Why />
        <RolloutCarousel />
        <Band />
        <Faq />
      </main>
      <SiteFooter />
    </ConsultProvider>
  );
}
