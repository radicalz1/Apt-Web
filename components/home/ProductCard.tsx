import { Link } from 'react-router-dom';
import { Product } from '../../types/index.ts';
import { useCart } from '../../contexts/CartContext.tsx';
import { useToast } from '../../contexts/ToastContext.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { toIDR } from '../../utils/currency.ts';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const { t } = useTranslation();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation when button is clicked
    addToCart({ id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl });
    addToast(`${product.name} ${t('cart.added')}`, 'success');
  };

  return (
    <Link to={`/products/${product.id}`} className="group block rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 p-4 hover:shadow-soft transition-shadow">
      <div className="aspect-[4/3] rounded-2xl bg-slate-100 dark:bg-slate-800 grid place-items-center overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold">{product.name}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 flex-shrink-0">
            {product.category}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 h-10">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="font-bold">{toIDR(product.price)}</div>
          <button onClick={handleAddToCart} className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white z-10 relative">
            {t('products.addToCart')}
          </button>
        </div>
      </div>
    </Link>
  );
};