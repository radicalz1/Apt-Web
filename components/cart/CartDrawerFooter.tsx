import { useCart } from '../../contexts/CartContext.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { toIDR } from '../../utils/currency.ts';

export const CartDrawerFooter = () => {
  const { t } = useTranslation();
  const { items, cartTotal } = useCart();

  const checkoutWA = () => {
    if (!items.length) return alert('Keranjang kosong');
    const lines = items.map(i => `• ${i.name} x${i.qty} — ${toIDR(i.price * i.qty)}`).join('%0A');
    const total = toIDR(cartTotal);
    const msg = `Halo, saya ingin checkout:%0A${lines}%0A—%0ATotal: ${total}`;
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-3">
      <div className="flex justify-between font-medium">
        <span>{t('cart.subtotal')}</span>
        <span>{toIDR(cartTotal)}</span>
      </div>
      <button onClick={checkoutWA} className="w-full px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">
        {t('cart.checkout')}
      </button>
    </div>
  );
};
