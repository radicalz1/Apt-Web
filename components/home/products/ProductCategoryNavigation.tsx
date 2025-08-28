import { useTranslation } from '../../../hooks/useTranslation.ts';
import { HeartPulse, ShieldCheck, Zap } from 'lucide-react';

interface ProductCategoryNavigationProps {
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export const ProductCategoryNavigation = ({ onSelectCategory, activeCategory }: ProductCategoryNavigationProps) => {
  const { t } = useTranslation();

  const categories = [
    { key: 'longevity', title: t('products.catLongevity'), icon: <Zap /> },
    { key: 'metabolik', title: t('products.catMetabolic'), icon: <HeartPulse /> },
    { key: 'imun', title: t('products.catImmune'), icon: <ShieldCheck /> },
  ];

  return (
    <div className="mt-8 grid sm:grid-cols-3 gap-4">
      {categories.map(cat => (
        <button 
          key={cat.key}
          onClick={() => onSelectCategory(cat.key)}
          className={`flex flex-col items-center justify-center text-center p-6 rounded-2xl border-2 transition-all duration-300
            ${activeCategory === cat.key 
              ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20' 
              : 'border-slate-200 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`
          }
        >
          <div className={`mb-2 ${activeCategory === cat.key ? 'text-brand-600 dark:text-brand-300' : 'text-slate-600 dark:text-slate-300'}`}>
            {cat.icon}
          </div>
          <span className="font-semibold">{cat.title}</span>
        </button>
      ))}
    </div>
  );
};
