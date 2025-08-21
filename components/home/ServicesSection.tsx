import { Section } from '../common/Section.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { ServiceCard } from './ServiceCard.tsx';
import { services } from '../../data/services.ts';

export const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="layanan">
      <SectionHeader title={t('services.title')} description={t('services.description')} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard 
            key={service.key}
            title={t(`services.${service.key}Title`)}
            tag={t(`services.${service.key}Tag`)}
            description={t(`services.${service.key}Desc`)}
            features={service.features.map(f => t(f))}
            price={t(`services.${service.key}Price`)}
            duration={t(`services.${service.key}Duration`)}
            ctaText={t(`services.${service.key}Cta`)}
            ctaLink={service.ctaLink}
          />
        ))}
      </div>
    </Section>
  );
};