import { Link } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation.ts';

interface ProtocolBenefitCardProps {
  activeTab: string;
}

export const ProtocolBenefitCard = ({ activeTab }: ProtocolBenefitCardProps) => {
  const { t } = useTranslation();

  const benefitsData: Record<string, { titleKey: string; benefits: string[] }> = {
    metabolik: {
      titleKey: 'protocols.metabolikTitle',
      benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'],
    },
    imun: {
      titleKey: 'protocols.imunTitle',
      benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'],
    },
    longevity: {
      titleKey: 'protocols.longevityTitle',
      benefits: ['benefit1', 'benefit2', 'benefit3', 'benefit4'],
    },
  };

  const currentBenefit = benefitsData[activeTab] || benefitsData.metabolik;

  return (
    <div className="rounded-3xl p-6 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft">
      <h3 className="font-semibold text-xl">{t(currentBenefit.titleKey)}</h3>
      <p className="text-sm text-slate-500 mt-1">Key benefits of this protocol:</p>
      <ul className="mt-4 space-y-2">
        {currentBenefit.benefits.map(b => <li key={b} className="flex gap-2"><span>✔</span> {t(`protocols.${b}`)}</li>)}
      </ul>
      <Link to="/#konsultasi" className="mt-6 block text-center px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white">
        {t('protocols.cta')}
      </Link>
    </div>
  );
};
