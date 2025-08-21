import { useTranslation } from '../../../hooks/useTranslation.ts';
import { Link } from 'react-router-dom';
import { Box, Play } from 'lucide-react';
import { useModals } from '../../../contexts/ModalContext.tsx';

export const HeroContent = () => {
  const { t } = useTranslation();
  const { toggleIntro } = useModals();

  return (
    <div className="space-y-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium tracking-wide bg-white/60 dark:bg-slate-900/40 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"></span>
        {t('hero.badge')}
      </span>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
        {t('hero.title1')}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">{t('hero.title2')}</span>{' '}
        {t('hero.title3')}
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">{t('hero.description')}</p>
      <div className="flex flex-wrap gap-3">
        <Link to="/#konsultasi" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-soft hover:opacity-95">
          {t('hero.ctaBooking')}
        </Link>
        <Link to="/#produk" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Box size={20} /> {t('hero.ctaProduk')}
        </Link>
        <button onClick={() => toggleIntro(true)} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Play size={20} /> {t('hero.ctaIntro')}
        </button>
      </div>
    </div>
  );
};
