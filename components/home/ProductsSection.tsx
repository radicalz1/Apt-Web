import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../common/Section.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { ProductCard } from './ProductCard.tsx';
import { ProductFilter } from './ProductFilter.tsx';
import { productsData } from '../../data/products.ts';
import { Skeleton } from '../common/Skeleton.tsx';

export const ProductsSection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState({ category: 'all', query: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate network request
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = productsData.filter(p => {
    const matchCat = filter.category === 'all' || p.categoryKey === filter.category;
    const matchQuery = p.name.toLowerCase().includes(filter.query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <Section id="produk">
      <SectionHeader title={t('products.title')} description={t('products.description')}>
        <ProductFilter filter={filter} setFilter={setFilter} />
      </SectionHeader>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="grid gap-4">
                <Skeleton className="aspect-[4/3] rounded-2xl" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          : filteredProducts.length > 0
            ? filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            : (
              <div className="sm:col-span-2 lg:col-span-3 text-center py-10">
                <p className="text-slate-600 dark:text-slate-300">No products match your criteria.</p>
              </div>
            )
        }
      </div>
      <div className="mt-6 text-center">
        <Link to="/#produk" className="text-sm text-accent-700 dark:text-accent-300 hover:underline">
          {t('products.viewCatalog')}
        </Link>
      </div>
    </Section>
  );
};