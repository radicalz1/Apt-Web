import { useModals } from '../../contexts/ModalContext.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { X } from 'lucide-react';

export const PolicyModal = () => {
  const { isPolicyOpen, closePolicyModal, activePolicy } = useModals();
  const { t } = useTranslation();

  if (!isPolicyOpen || !activePolicy) return null;

  const policyData = {
    title: t(`policy.${activePolicy}Title`),
    content: t(`policy.${activePolicy}Content`)
  };

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={closePolicyModal}></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl w-[92vw] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-semibold text-lg">{policyData.title}</h3>
          <button className="p-2 rounded-xl border border-slate-200 dark:border-slate-800" onClick={closePolicyModal} aria-label={t('policy.close')}>
            <X size={20} />
          </button>
        </div>
        <div className="p-6 text-sm max-h-[60vh] overflow-auto space-y-3" dangerouslySetInnerHTML={{ __html: policyData.content }} />
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 text-right">
          <button className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800" onClick={closePolicyModal}>{t('policy.close')}</button>
        </div>
      </div>
    </div>
  );
};
