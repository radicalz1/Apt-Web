import { useCart } from '../../contexts/CartContext.tsx';
import { CartItem } from '../../types/index.ts';
import { toIDR } from '../../utils/currency.ts';
import { X } from 'lucide-react';

export const CartDrawerItem = ({ item }: { item: CartItem }) => {
  const { updateQty, removeFromCart } = useCart();

  return (
    <div className='py-3 flex items-center gap-3'>
      <div className='h-14 w-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden'>
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className='flex-1'>
        <div className='font-medium'>{item.name}</div>
        <div className='text-xs text-slate-500'>{toIDR(item.price)}</div>
        <div className='mt-2 inline-flex items-center gap-2'>
          <button className='px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-800' onClick={() => updateQty(item.id, -1)}>-</button>
          <span>{item.qty}</span>
          <button className='px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-800' onClick={() => updateQty(item.id, 1)}>+</button>
        </div>
      </div>
      <button className='p-2 rounded-xl border border-slate-200 dark:border-slate-800' onClick={() => removeFromCart(item.id)}>
        <X size={16} />
      </button>
    </div>
  );
};