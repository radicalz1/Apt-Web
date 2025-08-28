import { useTranslation } from '../../../hooks/useTranslation.ts';
import { BookingForm } from '../BookingForm.tsx';

export const ConsultationInfo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{t('consultation.title')}</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{t('consultation.description')}</p>
      <BookingForm />
    </div>
  );
};