import { useModals } from '../../contexts/ModalContext.tsx';
import { CartDrawerHeader } from './CartDrawerHeader.tsx';
import { CartDrawerBody } from './CartDrawerBody.tsx';
import { CartDrawerFooter } from './CartDrawerFooter.tsx';

export const CartDrawer = () => {
  const { isCartOpen, toggleCart } = useModals();

  if (!isCartOpen) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => toggleCart(false)}></div>
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 grid grid-rows-[auto,1fr,auto] gap-4">
        <CartDrawerHeader />
        <CartDrawerBody />
        <CartDrawerFooter />
      </aside>
    </div>
  );
};
