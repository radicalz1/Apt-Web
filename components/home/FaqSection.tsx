import { useState } from 'react';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { faqs } from '../../data/faqs.ts';
import { Search } from 'lucide-react';

export const FaqSection = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter(faq => {
    const query = searchTerm.toLowerCase();
    const question = t(faq.qKey).toLowerCase();
    const answer = t(faq.aKey).toLowerCase();
    return question.includes(query) || answer.includes(query);
  });

  return (
    <AnimatedSection id="faq" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800" containerClassName="max-w-4xl">
      <div className="sm:flex items-center justify-between mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-center sm:text-left">{t('faq.title')}</h2>
        <div className="relative mt-4 sm:mt-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={t('faq.searchPlaceholder')}
            className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" 
          />
        </div>
      </div>
      <div className="divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {filteredFaqs.length > 0 ? filteredFaqs.map((faq, i) => (
          <details key={faq.qKey} className={`group p-5 bg-white/80 dark:bg-slate-900/40`} open={i === 0 && !searchTerm}>
            <summary className="cursor-pointer list-none flex items-center justify-between">
              <span className="font-medium">{t(faq.qKey)}</span>
              <span className="transition group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{t(faq.aKey)}</p>
          </details>
        )) : <p className="p-5 text-center text-slate-500">{t('faq.noResults')}</p>}
      </div>
    </AnimatedSection>
  );
};
