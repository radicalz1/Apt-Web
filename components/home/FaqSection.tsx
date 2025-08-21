import { Section } from '../common/Section.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { faqs } from '../../data/faqs.ts';

export const FaqSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="faq" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800" containerClassName="max-w-4xl">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-8 text-center sm:text-left">{t('faq.title')}</h2>
      <div className="divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {faqs.map((faq, i) => (
          <details key={faq.qKey} className={`group p-5 bg-white/80 dark:bg-slate-900/40`} open={i === 0}>
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">{t(faq.qKey)}</span>
              <span className="transition group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{t(faq.aKey)}</p>
          </details>
        ))}
      </div>
    </Section>
  );
};