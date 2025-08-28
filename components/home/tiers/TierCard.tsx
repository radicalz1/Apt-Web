
import { Link } from 'react-router-dom';
import { Tier } from '../../../types/index.ts';
import { TierFeature } from './TierFeature.tsx';
import { useTranslation } from '../../../hooks/useTranslation.ts';
import { Target, Shield, Activity } from 'lucide-react';

type PricingView = 'fullPrice' | 'monthly';

interface TierCardProps {
  tier: Tier;
  pricingView: PricingView;
}

const idealForIcons = [
  <Target size={16} className="text-accent-500 flex-shrink-0" />,
  <Shield size={16} className="text-accent-500 flex-shrink-0" />,
  <Activity size={16} className="text-accent-500 flex-shrink-0" />,
];

export const TierCard = ({ tier, pricingView }: TierCardProps) => {
  const { t } = useTranslation();
  
  const cardClasses = `
    relative flex flex-col h-full rounded-3xl border 
    bg-slate-50/80 dark:bg-slate-950/40 p-8 transition-all duration-300
    ${tier.isRecommended 
      ? 'tier-card-recommended' 
      : 'border-slate-200 dark:border-slate-800 lg:hover:-translate-y-2'
    }
  `;

  const fullPriceDisplay = tier.price;
  const monthlyPriceDisplay = tier.priceMonthly.split(' ').slice(1).join(' ');
  const displayPrice = pricingView === 'fullPrice' ? fullPriceDisplay : monthlyPriceDisplay;
  const displaySubtext = pricingView === 'fullPrice' ? tier.priceMonthly : tier.duration;

  return (
    <div className={cardClasses}>
      {tier.isRecommended && (
        <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-gradient-to-r from-brand-600 to-accent-600 text-white">
          {t('pricing.mostPopular')}
        </div>
      )}
      
      <header>
        <h3 className="font-display text-2xl font-extrabold">{tier.name}</h3>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">{tier.subtitle}</p>
        <div className="mt-4 flex items-baseline gap-2 min-h-[44px]">
          <span className="text-4xl font-extrabold tracking-tight">{displayPrice}</span>
        </div>
        <p className="text-sm text-slate-500 min-h-[20px]">{displaySubtext}</p>
      </header>

      <div className="my-8 h-px bg-slate-200 dark:bg-slate-800"></div>

      <div className="flex-grow">
        <p className="font-semibold">{t('pricing.idealFor')}</p>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          {tier.idealFor.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              {idealForIcons[i % idealForIcons.length]}
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-semibold">Features:</p>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          {tier.features.map((feature, i) => (
            <TierFeature key={i} feature={feature} />
          ))}
        </ul>

         <p className="mt-6 font-semibold text-xs">{tier.exclusionsTitle}</p>
         <ul className="mt-2 space-y-1.5 text-xs text-slate-500">
             {tier.exclusions.map((item, i) => (
                 <li key={i}>- {item}</li>
             ))}
         </ul>
      </div>

      <Link to="/#konsultasi" className="mt-8 block w-full text-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-soft hover:opacity-90 transition-opacity">
        {tier.ctaText}
      </Link>
    </div>
  );
};
