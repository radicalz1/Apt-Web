import { useTranslation } from '../../../../hooks/useTranslation.ts';
import { HeroCard } from './HeroCard.tsx';
import { StatBarVisualizer } from '../visualizers/StatBarVisualizer.tsx';
import { ConclusionLozenge } from '../visualizers/ConclusionLozenge.tsx';
import { Clock } from 'lucide-react';

export const BioAgeCard = (props: Omit<React.ComponentProps<typeof HeroCard>, 'title' | 'icon' | 'children'>) => {
  const { t } = useTranslation();
  const content = {
    before: t('hero.visual.card3Before'),
    after: t('hero.visual.card3After'),
    result: t('hero.visual.card3Result'),
  };
  
  return (
    <HeroCard {...props} title={t('hero.visual.card3Title')} icon={<Clock size={16} />}>
      <div className="w-full flex flex-col items-center">
        <StatBarVisualizer before={content.before} after={content.after} />
        <ConclusionLozenge text={content.result} />
      </div>
    </HeroCard>
  );
};
