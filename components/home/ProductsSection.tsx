import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { ProductFilter } from './ProductFilter.tsx';
import { productsData } from '../../data/products.ts';
import { ProductGrid } from './ProductGrid.tsx';
import { ProductGridSkeleton } from './ProductGridSkeleton.tsx';
import { ProductCategoryNavigation } from './products/ProductCategoryNavigation.tsx';

export const ProductsSection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState({ category: 'all', query: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCategorySelect = (category: string) => {
    setFilter(prev => ({ ...prev, category }));
  };

  const filteredProducts = productsData.filter(p => {
    const matchCat = filter.category === 'all' || p.categoryKey === filter.category;
    const matchQuery = p.name.toLowerCase().includes(filter.query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <AnimatedSection id="produk">
      <SectionHeader title={t('products.title')} description={t('products.description')}>
        <ProductFilter filter={filter} setFilter={setFilter} />
      </SectionHeader>
      
      <ProductCategoryNavigation onSelectCategory={handleCategorySelect} activeCategory={filter.category} />

      <div className="mt-10">
        {loading ? <ProductGridSkeleton /> : <ProductGrid products={filteredProducts} />}
      </div>

      <div className="mt-6 text-center">
        <Link to="/#produk" className="text-sm text-accent-700 dark:text-accent-300 hover:underline">
          {t('products.viewCatalog')}
        </Link>
      </div>
    </AnimatedSection>
  );
};
