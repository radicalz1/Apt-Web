import { useTranslation } from '../../../hooks/useTranslation.ts';

export const ConditionsWorkflow = () => {
  const { t } = useTranslation();
  const workflowSteps = t('conditions.workflowSteps') as unknown as string[];

  return (
    <div className="rounded-3xl p-6 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft">
      <h3 className="font-semibold text-xl mb-6">{t('conditions.workflowTitle')}</h3>
      <ol className="relative border-s border-slate-200 dark:border-slate-700 space-y-10 ms-4">
        {workflowSteps.map((step, i) => (
           <li key={step} className="ms-8">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-full -start-4 ring-8 ring-white dark:ring-slate-900/40 text-brand-700 dark:text-brand-300 font-bold">
              {i + 1}
            </span>
            <p className="font-medium text-slate-800 dark:text-slate-200">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
