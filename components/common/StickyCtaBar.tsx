import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation.ts';

export const StickyCtaBar = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border-t border-slate-200/70 dark:border-slate-800 p-3 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <p className="text-sm font-medium hidden sm:block">{t('stickyBar.text')}</p>
        <Link 
          to="/signup" 
          className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft text-sm"
        >
          {t('stickyBar.cta')}
        </Link>
      </div>
    </div>
  );
};