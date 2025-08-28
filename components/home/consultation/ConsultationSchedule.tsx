import { useTranslation } from '../../../hooks/useTranslation.ts';

export const ConsultationSchedule = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl p-6 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft">
      <h3 className="font-semibold text-xl">{t('consultation.scheduleTitle')}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{t('consultation.scheduleDesc')}</p>
      <div className="mt-4 aspect-video rounded-2xl bg-slate-100 dark:bg-slate-800 grid place-items-center">
        <span className="text-slate-500 text-sm">{t('consultation.scheduleEmbedPlaceholder')}</span>
      </div>
      <div className="mt-6">
        <div className="text-sm font-medium">{t('consultation.followUpTitle')}</div>
        <p className="text-sm text-slate-600 dark:text-slate-300">{t('consultation.followUpDesc')}</p>
      </div>
    </div>
  );
};
