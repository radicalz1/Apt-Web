import { HeroSection } from '../components/home/HeroSection.tsx';
import { TrustBadges } from '../components/home/TrustBadges.tsx';
import { MeetTheExpertSection } from '../components/home/MeetTheExpertSection.tsx';
import { ProductsSection } from '../components/home/ProductsSection.tsx';
import { TestimonialsSection } from '../components/home/TestimonialsSection.tsx';
import { BlogSection } from '../components/home/BlogSection.tsx';
import { FaqSection } from '../components/home/FaqSection.tsx';
import { NewsletterSection } from '../components/home/NewsletterSection.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { useTranslation } from '../hooks/useTranslation.ts';
import { useMeta } from '../hooks/useMeta.ts';
import { PricingTiersSection } from '../components/home/PricingTiersSection.tsx';
import { HowItWorksSection } from '../components/home/HowItWorksSection.tsx';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection.tsx';
import { HealthQuizSection } from '../components/home/HealthQuizSection.tsx';
import { AnimatedSection } from '../components/common/AnimatedSection.tsx';
import { ConditionsSection } from '../components/home/ConditionsSection.tsx';
import { BiomarkerExplorerSection } from '../components/home/BiomarkerExplorerSection.tsx';

export default function HomePage() {
  const { t } = useTranslation();
  const title = `${t('appName')} - ${t('appDescription').substring(0, 40)}...`;
  useTitle(title);
  useMeta('description', t('appDescription'));

  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ConditionsSection />
      <MeetTheExpertSection />
      
      <AnimatedSection 
        id="programs-and-proof" 
        className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800 section-bg-pattern"
      >
        <div className="grid lg:grid-cols-[1fr,420px] gap-12 items-start">
          <HowItWorksSection />
          <CaseStudiesSection />
        </div>
      </AnimatedSection>

      <TestimonialsSection />
      <PricingTiersSection />
      <HealthQuizSection />
      <ProductsSection />
      <BlogSection />
      <BiomarkerExplorerSection />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}
