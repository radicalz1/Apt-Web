import React from 'react';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { useModals } from '../../contexts/ModalContext.tsx';

export const BookingForm = () => {
  const { t } = useTranslation();
  const { openPolicyModal } = useModals();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Booking submitted!');
    e.currentTarget.reset();
  };

  const handlePolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openPolicyModal('terms');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="sr-only">{t('consultation.formName')}</label>
          <input id="name" type="text" placeholder={t('consultation.formName')} required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" />
        </div>
        <div>
          <label htmlFor="whatsapp" className="sr-only">{t('consultation.formWhatsApp')}</label>
          <input id="whatsapp" type="tel" placeholder={t('consultation.formWhatsApp')} required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">{t('consultation.formEmail')}</label>
        <input id="email" type="email" placeholder={t('consultation.formEmail')} required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" />
      </div>
      <div>
        <label htmlFor="objective" className="sr-only">{t('consultation.formObjective')}</label>
        <textarea id="objective" rows={3} placeholder={t('consultation.formObjectivePlaceholder')} required className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40"></textarea>
      </div>
      <div className="flex items-center gap-2">
        <input id="agreement" type="checkbox" required className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
        <label htmlFor="agreement" className="text-sm text-slate-600 dark:text-slate-300">
          {t('consultation.formAgreement')}{' '}
          <button onClick={handlePolicyClick} className="underline hover:text-accent-600 dark:hover:text-accent-400">
            {t('consultation.formAgreementLink')}
          </button>
        </label>
      </div>
      <button type="submit" className="w-full px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">
        {t('consultation.formSubmit')}
      </button>
      <p className="text-center text-sm text-slate-500">{t('consultation.socialProof')}</p>
    </form>
  );
};
