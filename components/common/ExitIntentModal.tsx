import { useModals } from '../../contexts/ModalContext.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { X, Gift } from 'lucide-react';

export const ExitIntentModal = () => {
  const { isExitIntentOpen, closeExitIntentModal } = useModals();
  const { t } = useTranslation();

  if (!isExitIntentOpen) return null;

  const handleSubmit = () => {
    alert('Thank you! Your e-book is on its way.');
    closeExitIntentModal();
  };

  return (
    <div className="fixed inset-0 z-[999]" role="dialog" aria-modal="true" aria-labelledby="exit-intent-title">
      <div className="absolute inset-0 bg-black/60" onClick={closeExitIntentModal} aria-hidden="true"></div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-lg rounded-3xl bg-white dark:bg-slate-900 p-8 text-center shadow-2xl animate-fade-in-up">
        <button className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" onClick={closeExitIntentModal} aria-label="Close modal">
          <X size={20} />
        </button>
        <div className="mx-auto h-16 w-16 grid place-items-center rounded-full bg-gradient-to-br from-brand-100 to-accent-100 dark:from-brand-900/40 dark:to-accent-900/40">
          <Gift size={32} className="text-brand-600 dark:text-brand-300" />
        </div>
        <h2 id="exit-intent-title" className="mt-4 font-display text-2xl font-bold">{t('exitModal.title')}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{t('exitModal.description')}</p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input required type="email" placeholder={t('newsletter.placeholder')} className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" />
          <button type="submit" className="w-full px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">{t('exitModal.cta')}</button>
          <button type="button" onClick={closeExitIntentModal} className="text-sm text-slate-500 hover:underline">{t('exitModal.noThanks')}</button>
        </form>
      </div>
    </div>
  );
};
