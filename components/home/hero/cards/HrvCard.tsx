import { useTranslation } from '../../../../hooks/useTranslation.ts';
import { HeroCard } from './HeroCard.tsx';
import { BeforeAfterVisualizer } from '../visualizers/BeforeAfterVisualizer.tsx';
import { Activity } from 'lucide-react';

export const HrvCard = (props: Omit<React.ComponentProps<typeof HeroCard>, 'title' | 'icon' | 'children'>) => {
  const { t } = useTranslation();
  const content = {
    before: t('hero.visual.card6Before'),
    after: t('hero.visual.card6After'),
    conclusion: t('hero.visual.card6Result'),
  };
  
  return (
    <HeroCard {...props} title={t('hero.visual.card6Title')} icon={<Activity size={16} />}>
      <BeforeAfterVisualizer before={content.before} after={content.after} conclusion={content.conclusion} />
    </HeroCard>
  );
};
