import { useTranslation } from '../../hooks/useTranslation.ts';

interface FilterState {
  category: string;
  query: string;
}

interface ProductFilterProps {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
}

export const ProductFilter = ({ filter, setFilter }: ProductFilterProps) => {
  const { t } = useTranslation();
  const categories = ['longevity', 'metabolik', 'imun'];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({ ...prev, category: e.target.value }));
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(prev => ({ ...prev, query: e.target.value }));
  };

  return (
    <div className="flex items-center gap-2">
      <input 
        type="search" 
        placeholder={t('products.searchPlaceholder')}
        value={filter.query}
        onChange={handleQueryChange}
        className="hidden sm:block px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" 
      />
      <select 
        value={filter.category}
        onChange={handleCategoryChange}
        className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40">
        <option value="all">{t('products.filterAll')}</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
        ))}
      </select>
    </div>
  );
};
