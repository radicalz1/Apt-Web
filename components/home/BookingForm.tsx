import { useTranslation } from '../../hooks/useTranslation.ts';
import { useModals } from '../../contexts/ModalContext.tsx';

export const BookingForm = () => {
  const { t } = useTranslation();
  const { openPolicyModal } = useModals();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const body = `Booking konsultasi:\n${Object.entries(data).map(([k,v]) => `${k}: ${v}`).join('\n')}`;
    window.open(`mailto:hello@example.com?subject=Booking%20Konsultasi&body=${encodeURIComponent(body)}`);
    alert('Terima kasih! Kami akan menghubungi Anda segera.');
    e.currentTarget.reset();
  };

  const inputClass = "w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40";

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1 text-sm">{t('consultation.formName')}<input required name="nama" className={inputClass} /></label>
        <label className="grid gap-1 text-sm">{t('consultation.formEmail')}<input required type="email" name="email" className={inputClass} /></label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1 text-sm">{t('consultation.formWhatsApp')}<input required type="tel" name="wa" className={inputClass} placeholder="08xx" /></label>
        <label className="grid gap-1 text-sm">{t('consultation.formMode')}
          <select name="mode" className={inputClass}>
            <option>{t('consultation.formModeOnline')}</option>
            <option>{t('consultation.formModeOffline')}</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm">{t('consultation.formObjective')}
        <textarea name="tujuan" rows={3} className={inputClass} placeholder={t('consultation.formObjectivePlaceholder')}></textarea>
      </label>
      <div className="text-xs text-slate-500">
        <input required type="checkbox" id="agreement" className="mr-2" />
        <label htmlFor="agreement">{t('consultation.formAgreement')}{' '}
          <button type="button" onClick={() => openPolicyModal('terms')} className="underline">{t('consultation.formAgreementLink')}</button>
        </label>
      </div>
      <button type="submit" className="px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">{t('consultation.formSubmit')}</button>
    </form>
  );
};