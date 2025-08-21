import { Section } from '../common/Section.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';

export const ConditionsSection = () => {
  const { t } = useTranslation();
  const conditions = t('conditions.list') as unknown as string[];
  const workflowSteps = t('conditions.workflowSteps') as unknown as string[];

  return (
    <Section id="kondisi" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{t('conditions.title')}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{t('conditions.description')}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {conditions.map(condition => (
              <span key={condition} className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                {condition}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl p-6 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft">
          <h3 className="font-semibold text-xl">{t('conditions.workflowTitle')}</h3>
          <ol className="mt-4 space-y-3 text-sm">
            {workflowSteps.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="h-6 w-6 grid place-items-center rounded-full bg-brand-600 text-white">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
};
