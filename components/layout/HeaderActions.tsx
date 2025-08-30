import { Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { useCart } from '../../contexts/CartContext.tsx';
import { useModals } from '../../contexts/ModalContext.tsx';
import { ThemeSelector } from '../common/ThemeSelector.tsx';
import { LanguageSelector } from '../common/LanguageSelector.tsx';
import { useAuth } from '../../contexts/AuthContext.tsx';
import { Link } from 'react-router-dom';

interface HeaderActionsProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export const HeaderActions = ({ isMenuOpen, onMenuToggle }: HeaderActionsProps) => {
  const { t } = useTranslation();
  const { cartCount } = useCart();
  const { toggleCart } = useModals();
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center gap-2">
      <ThemeSelector />
      <LanguageSelector />
      <button onClick={() => toggleCart(true)} className="hidden sm:inline-flex items-center gap-2 p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">
        <ShoppingCart size={20} />
        {cartCount > 0 && (
          <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-brand-600 text-white px-1 text-xs">{cartCount}</span>
        )}
      </button>

      {user ? (
        <>
          <Link to="/dashboard" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-soft hover:opacity-95">
            <User size={20} />
            <span>Dashboard</span>
          </Link>
          <button onClick={logout} className="hidden sm:inline-flex p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Logout">
            <LogOut size={20} />
          </button>
        </>
      ) : (
        <Link to="/signup" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-soft hover:opacity-95">
          <span>{t('nav.getStarted')}</span>
        </Link>
      )}

      <button onClick={onMenuToggle} className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800" aria-label={t('nav.bukaMenu')}>
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};