import { X } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { useModals } from '../../contexts/ModalContext.tsx';

export const CartDrawerHeader = () => {
  const { t } = useTranslation();
  const { toggleCart } = useModals();

  return (
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-lg">{t('cart.title')}</h3>
      <button onClick={() => toggleCart(false)} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800" aria-label={t('cart.close')}>
        <X size={20} />
      </button>
    </div>
  );
};
