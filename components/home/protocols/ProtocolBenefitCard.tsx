import { Link } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation.ts';

const benefits = [ 'benefit1', 'benefit2', 'benefit3', 'benefit4' ];

export const ProtocolBenefitCard = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl p-6 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft">
      <h3 className="font-semibold text-xl">{t('protocols.title')}</h3>
      <ul className="mt-4 space-y-2">
        {benefits.map(b => <li key={b} className="flex gap-2"><span>✔</span> {t(`protocols.${b}`)}</li>)}
      </ul>
      <Link to="/#konsultasi" className="mt-6 block text-center px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white">
        {t('protocols.cta')}
      </Link>
    </div>
  );
};
