import { useTranslation } from '../../hooks/useTranslation.ts';

export const NewsletterCta = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Subscription submitted!');
    e.currentTarget.reset();
  };

  return (
    <div className="my-12 p-6 rounded-2xl bg-gradient-to-r from-brand-100 to-accent-100 dark:from-brand-900/30 dark:to-accent-900/30 text-center">
      <h3 className="font-display text-2xl font-bold">
        {t('newsletter.title1')}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">
          {t('newsletter.title2')}
        </span>
      </h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">{t('newsletter.description')}</p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input 
          required 
          type="email" 
          placeholder={t('newsletter.placeholder')} 
          className="flex-grow px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50" 
        />
        <button className="px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">
          {t('newsletter.cta')}
        </button>
      </form>
    </div>
  );
};