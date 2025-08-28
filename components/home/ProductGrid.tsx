import { Product } from '../../types/index.ts';
import { ProductCard } from './ProductCard.tsx';

export const ProductGrid = ({ products }: { products: Product[] }) => {
  if (products.length === 0) {
    return (
      <div className="sm:col-span-2 lg:col-span-3 text-center py-10">
        <p className="text-slate-600 dark:text-slate-300">No products match your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
