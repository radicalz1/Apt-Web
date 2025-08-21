import { HeroSection } from '../components/home/HeroSection.tsx';
import { TrustBadges } from '../components/home/TrustBadges.tsx';
import { ServicesSection } from '../components/home/ServicesSection.tsx';
import { ConditionsSection } from '../components/home/ConditionsSection.tsx';
import { ProductsSection } from '../components/home/ProductsSection.tsx';
import { ProtocolsSection } from '../components/home/ProtocolsSection.tsx';
import { TestimonialsSection } from '../components/home/TestimonialsSection.tsx';
import { ConsultationSection } from '../components/home/ConsultationSection.tsx';
import { BlogSection } from '../components/home/BlogSection.tsx';
import { FaqSection } from '../components/home/FaqSection.tsx';
import { NewsletterSection } from '../components/home/NewsletterSection.tsx';
import { AISymptomCheckerSection } from '../components/home/AISymptomCheckerSection.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { useTranslation } from '../hooks/useTranslation.ts';
import { useMeta } from '../hooks/useMeta.ts';

export default function HomePage() {
  const { t } = useTranslation();
  const title = `${t('appName')} - ${t('appDescription').substring(0, 40)}...`;
  useTitle(title);
  useMeta('description', t('appDescription'));

  return (
    <>
      <HeroSection />
      <TrustBadges />
      <AISymptomCheckerSection />
      <ServicesSection />
      <ConditionsSection />
      <ProductsSection />
      <ProtocolsSection />
      <TestimonialsSection />
      <ConsultationSection />
      <BlogSection />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}