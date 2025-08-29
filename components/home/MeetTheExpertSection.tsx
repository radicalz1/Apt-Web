import { Link } from 'react-router-dom';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { useLanguage } from '../../contexts/LanguageContext.tsx';
import { Language } from '../../types/index.ts';
import { authorsData } from '../../data/authors.ts';
import { Dna, BrainCircuit, Sparkles, Sigma } from 'lucide-react';

export const MeetTheExpertSection = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const expert = authorsData.find(a => a.id === 'hanna-j');

  if (!expert) return null;
  
  const keyPrinciples = [
    {
      icon: <Dna className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      title: "Bio (Biological)",
      description: "Utilizing chemistry, biology, and pharmacology to address molecular and physiological mechanisms of disease."
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      title: "Psycho (Psychological)",
      description: "Examining the role of thoughts, emotions, and stress, grounded in the science of Psychoneuroimmunology."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      title: "Spiritual (Theological)",
      description: "Addressing the need for meaning, purpose, and hope as a critical component of the healing process."
    },
    {
      icon: <Sigma className="h-8 w-8 text-brand-600 dark:text-brand-400" />,
      title: "Integrative Model",
      description: "Combining all aspects within the Biopsychosocial-Spiritual (BPS-S) framework for a truly holistic approach."
    }
  ];

  const expertBio = expert.bio[language as Language] || expert.bio['en'];

  return (
    <AnimatedSection id="expert">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="relative aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-soft">
            <img 
              src={expert.avatarUrl} 
              alt={expert.name} 
              className="w-full h-full object-cover object-top" 
              loading="lazy" 
              decoding="async" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent to-25%"></div>
            <div className="absolute bottom-6 left-6 text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.5)]">
              <h3 className="font-display text-2xl font-bold">{expert.name}</h3>
              <p className="text-sm">{expert.title}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{t('expert.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {expertBio}
          </p>
          
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {keyPrinciples.map((principle, index) => (
              <div key={index} className="p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 grid place-items-center rounded-xl bg-white dark:bg-slate-800">
                    {principle.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">{principle.title}</h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to={expert.profileLink} className="inline-block px-6 py-3 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft font-semibold">
              {t('expert.cta')}
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
