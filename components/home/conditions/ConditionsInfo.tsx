import { useTranslation } from '../../../hooks/useTranslation.ts';

export const ConditionsInfo = () => {
  const { t } = useTranslation();
  const conditions = t('conditions.list') as unknown as string[];
  
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{t('conditions.title')}</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{t('conditions.description')}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
        {conditions.map(condition => (
          <span key={condition} className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {condition}
          </span>
        ))}
      </div>
    </div>
  );
};
