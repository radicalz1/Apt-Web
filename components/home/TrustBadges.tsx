import { useTranslation } from '../../hooks/useTranslation.ts';

const badges = ["IFM", "GMP", "ISO", "PubMed", "BPOM", "Halal"];

export const TrustBadges = () => {
  const { t } = useTranslation();

  return (
    <section aria-label={t('trustBadges.title')} className="py-8 border-y border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
          {badges.map(badge => (
            <img key={badge} alt={badge} className="h-8 mx-auto" src={`https://dummyimage.com/120x32/94a3b8/ffffff&text=${badge}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
