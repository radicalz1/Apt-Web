import { useState } from 'react';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { tiersData } from '../../data/tiers.ts';
import { TierCard } from './tiers/TierCard.tsx';
import { Language } from '../../types/index.ts';
import { ProgramSelector } from './pricing/ProgramSelector.tsx';

type PricingView = 'fullPrice' | 'monthly';

export const PricingTiersSection = () => {
  const { t, language } = useTranslation();
  const tiers = tiersData[language as Language];
  const [pricingView, setPricingView] = useState<PricingView>('fullPrice');

  return (
    <AnimatedSection id="programs" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800 section-bg-pattern">
      <SectionHeader title={t('pricing.title')} description={t('pricing.description')}>
        <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-200 dark:bg-slate-800">
          <button 
            onClick={() => setPricingView('fullPrice')} 
            className={`px-3 py-1.5 text-sm rounded-lg ${pricingView === 'fullPrice' ? 'bg-white dark:bg-slate-700 shadow-sm' : ''}`}
          >
            {t('pricing.fullPrice')}
          </button>
          <button 
            onClick={() => setPricingView('monthly')} 
            className={`px-3 py-1.5 text-sm rounded-lg ${pricingView === 'monthly' ? 'bg-white dark:bg-slate-700 shadow-sm' : ''}`}
          >
            {t('pricing.monthly')}
          </button>
        </div>
      </SectionHeader>
      
      <div className="my-12 max-w-4xl mx-auto">
        <ProgramSelector />
      </div>
      
      <div className="mt-12 grid lg:grid-cols-3 gap-8 items-start">
        {tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} pricingView={pricingView} />
        ))}
      </div>
    </AnimatedSection>
  );
};
