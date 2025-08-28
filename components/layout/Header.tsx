import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { Logo } from '../common/Logo.tsx';
import { NavLinks } from './NavLinks.tsx';
import { HeaderActions } from './HeaderActions.tsx';
import { MobileMenu } from './MobileMenu.tsx';

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 shadow-sm border-b border-slate-200/60 dark:border-slate-800">
      <a href="#konten" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white/90 dark:bg-slate-800 px-3 py-2 rounded-xl shadow-soft">
        {t('nav.skipToContent')}
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/#beranda" className="flex items-center gap-3">
            <Logo />
          </Link>
          <nav aria-label="Utama" className="hidden md:flex items-center gap-6">
            <NavLinks onLinkClick={() => setMenuOpen(false)} />
          </nav>
          <HeaderActions isMenuOpen={isMenuOpen} onMenuToggle={() => setMenuOpen(!isMenuOpen)} />
        </div>
        {isMenuOpen && <MobileMenu onLinkClick={() => setMenuOpen(false)} />} 
      </div>
    </header>
  );
};
