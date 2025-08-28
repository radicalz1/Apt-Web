import { useTranslation } from '../../../../hooks/useTranslation.ts';
import { HeroCard } from './HeroCard.tsx';
import { TextDeltaVisualizer } from '../visualizers/TextDeltaVisualizer.tsx';
import { Zap } from 'lucide-react';

export const MitochondriaCard = (props: Omit<React.ComponentProps<typeof HeroCard>, 'title' | 'icon' | 'children'>) => {
  const { t } = useTranslation();
  const content = {
    after: t('hero.visual.card4After'),
    result: t('hero.visual.card4Result'),
  };
  
  return (
    <HeroCard {...props} title={t('hero.visual.card4Title')} icon={<Zap size={16} />}>
      <TextDeltaVisualizer delta={content.after} conclusion={content.result} />
    </HeroCard>
  );
};
