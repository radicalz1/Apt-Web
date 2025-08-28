import { useTranslation } from '../../../../hooks/useTranslation.ts';
import { HeroCard } from './HeroCard.tsx';
import { StatBarVisualizer } from '../visualizers/StatBarVisualizer.tsx';
import { ConclusionLozenge } from '../visualizers/ConclusionLozenge.tsx';
import { TrendingDown } from 'lucide-react';

export const BloodSugarCard = (props: Omit<React.ComponentProps<typeof HeroCard>, 'title' | 'icon' | 'children'>) => {
  const { t } = useTranslation();
  const content = {
    before: t('hero.visual.card1Before'),
    after: t('hero.visual.card1After'),
    result: t('hero.visual.card1Result'),
  };
  
  return (
    <HeroCard {...props} title={t('hero.visual.card1Title')} icon={<TrendingDown size={16} />}>
      <div className="w-full flex flex-col items-center">
        <StatBarVisualizer before={content.before} after={content.after} />
        <ConclusionLozenge text={content.result} />
      </div>
    </HeroCard>
  );
};
