import { useCart } from '../../contexts/CartContext.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { CartDrawerItem } from './CartDrawerItem.tsx';

export const CartDrawerBody = () => {
  const { items } = useCart();
  const { t } = useTranslation();

  return (
    <div className="overflow-auto divide-y divide-slate-200 dark:divide-slate-800">
      {items.length > 0 
        ? items.map(item => <CartDrawerItem key={item.id} item={item} />)
        : <p className="text-sm text-slate-500">{t('cart.empty')}</p>}
    </div>
  );
};
