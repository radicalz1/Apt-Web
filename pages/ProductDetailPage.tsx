import { useParams, Link, Navigate } from 'react-router-dom';
import { productsData } from '../data/products.ts';
import { useTitle } from '../hooks/useTitle.ts';
import { useMeta } from '../hooks/useMeta.ts';
import { useTranslation } from '../hooks/useTranslation.ts';
import { useCart } from '../contexts/CartContext.tsx';
import { useToast } from '../contexts/ToastContext.tsx';
import { toIDR } from '../utils/currency.ts';
import { Section } from '../components/common/Section.tsx';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const product = productsData.find(p => p.id === Number(id));

  useTitle(product ? product.name : 'Product Not Found');
  useMeta('description', product ? product.longDescription : 'Product details page.');

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl });
    addToast(`${product.name} added to cart!`, 'success');
  };

  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="aspect-square rounded-3xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <Link to="/#produk" className="text-sm text-accent-700 dark:text-accent-300 hover:underline">
            &larr; {t('products.viewCatalog')}
          </Link>
          <span className="mt-4 block text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 w-max">
            {product.category}
          </span>
          <h1 className="font-display text-4xl font-extrabold mt-2">{product.name}</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{product.longDescription}</p>
          <div className="mt-8 flex items-center justify-between gap-6 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/30">
            <div className="text-3xl font-bold">{toIDR(product.price)}</div>
            <button onClick={handleAddToCart} className="px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">
              {t('products.addToCart')}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}