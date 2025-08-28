import { Link } from 'react-router-dom';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { authorsData } from '../../data/authors.ts';
import { ArrowRight } from 'lucide-react';

export const MeetTheExpertSection = () => {
  const { t } = useTranslation();
  const expert = authorsData.find(a => a.id === 'drlita');

  if (!expert) return null;

  return (
    <AnimatedSection id="expert">
      <div className="grid lg:grid-cols-[1fr,2fr] gap-10 items-center">
        <div className="relative aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden">
          <img 
            src={expert.avatarUrl} 
            alt={expert.name} 
            className="w-full h-full object-cover" 
            loading="lazy" 
            decoding="async" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="font-display text-2xl font-bold">{expert.name}</h3>
            <p className="text-sm">{expert.title}</p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{t('expert.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{expert.fullBio}</p>
          <Link to={`/blog/author/${expert.id}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-700 dark:text-accent-300 hover:underline">
            {t('expert.cta')} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};
