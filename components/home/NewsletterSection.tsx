import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { Mail } from 'lucide-react';

export const NewsletterSection = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Subscription submitted!');
    e.currentTarget.reset();
  };

  return (
    <AnimatedSection id="newsletter">
      <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-slate-100/60 dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800">
         <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-brand-300/10 dark:bg-brand-700/10 blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent-400/10 dark:bg-accent-700/10 blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
              {t('newsletter.title1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">
                {t('newsletter.title2')}
              </span>{' '}
              {t('newsletter.title3')}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{t('newsletter.description')}</p>
          </div>
          <div className="lg:pl-8">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-[1fr_auto] gap-3">
              <input required type="email" placeholder={t('newsletter.placeholder')} className="px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" />
              <button className="px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">{t('newsletter.cta')}</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">{t('newsletter.disclaimer')}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
