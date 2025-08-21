import { useTranslation } from '../../../hooks/useTranslation.ts';

export const HeroVisual = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:block relative">
      <div className="aspect-[4/3] rounded-3xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft p-6">
        <div className="font-semibold">{t('hero.cardTitle')}</div>
        <p className="text-sm text-slate-600 dark:text-slate-300">{t('hero.cardDescription')}</p>
      </div>
    </div>
  );
};
