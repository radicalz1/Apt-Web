import { Section } from '../common/Section.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';

export const NewsletterSection = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Subscription submitted!');
    e.currentTarget.reset();
  };

  return (
    <Section id="newsletter" containerClassName="max-w-4xl text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
        {t('newsletter.title1')}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">
          {t('newsletter.title2')}
        </span>{' '}
        {t('newsletter.title3')}
      </h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{t('newsletter.description')}</p>
      <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3 max-w-2xl mx-auto">
        <input required type="email" placeholder={t('newsletter.placeholder')} className="px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" />
        <button className="px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">{t('newsletter.cta')}</button>
      </form>
      <p className="mt-3 text-xs text-slate-500">{t('newsletter.disclaimer')}</p>
    </Section>
  );
};
