
import { useTranslation } from '../../../hooks/useTranslation.ts';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { useModals } from '../../../contexts/ModalContext.tsx';

export const HeroContent = () => {
  const { t } = useTranslation();
  const { toggleIntro } = useModals();

  return (
    <div className="space-y-8 text-center lg:text-left">
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium tracking-wide bg-white/60 dark:bg-slate-900/40 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 animate-pulse"></span>
        {t('hero.badge')}
      </span>
      <h1 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight tracking-tighter">
        {t('hero.title1')}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">
          {t('hero.title2')}
        </span>
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">{t('hero.description')}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start flex-wrap gap-4">
        <Link to="/#konsultasi" className="group primary-cta inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold shadow-soft hover:shadow-lg transition-all transform hover:-translate-y-1">
          {t('hero.ctaBooking')}
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
        <button onClick={() => toggleIntro(true)} className="secondary-cta inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 font-medium hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
          <Play size={20} /> {t('hero.ctaIntro')}
        </button>
      </div>
    </div>
  );
};