import { Menu, X, ShoppingCart } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { useCart } from '../../contexts/CartContext.tsx';
import { useModals } from '../../contexts/ModalContext.tsx';
import { ThemeSelector } from '../common/ThemeSelector.tsx';
import { LanguageSelector } from '../common/LanguageSelector.tsx';

interface HeaderActionsProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export const HeaderActions = ({ isMenuOpen, onMenuToggle }: HeaderActionsProps) => {
  const { t } = useTranslation();
  const { cartCount } = useCart();
  const { toggleCart } = useModals();

  return (
    <div className="flex items-center gap-2">
      <ThemeSelector />
      <LanguageSelector />
      <button onClick={() => toggleCart(true)} className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-soft hover:opacity-95">
        <ShoppingCart size={20} />
        <span>{t('nav.keranjang')}</span>
        {cartCount > 0 && (
          <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white/20 px-1 text-xs">{cartCount}</span>
        )}
      </button>
      <button onClick={onMenuToggle} className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800" aria-label={t('nav.bukaMenu')}>
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};