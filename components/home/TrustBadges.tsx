import { useTranslation } from '../../hooks/useTranslation.ts';

const badges = [
  { id: "IFM", name: "IFM Certified" },
  { id: "GMP", name: "GMP Certified" },
  { id: "ISO", name: "ISO 9001" },
  { id: "PubMed", name: "PubMed Indexed" },
  { id: "BPOM", name: "BPOM Registered" },
  { id: "Halal", name: "Halal Certified" },
];

const Badge = ({ badge }: { badge: typeof badges[0] }) => (
  <div className="tooltip-container marquee-item">
    <img 
      alt={badge.name} 
      className="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity" 
      src={`https://dummyimage.com/120x32/94a3b8/ffffff&text=${badge.id}`} 
    />
    <span className="tooltip-text">{useTranslation().t(`trustBadges.${badge.id.toLowerCase()}`)}</span>
  </div>
);

export const TrustBadges = () => {
  const { t } = useTranslation();

  return (
    <section id="trust-badges" aria-label={t('trustBadges.title')} className="py-8 border-y border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/30 backdrop-blur">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...badges, ...badges].map((badge, i) => (
            <Badge key={`${badge.id}-${i}`} badge={badge} />
          ))}
        </div>
      </div>
    </section>
  );
};
