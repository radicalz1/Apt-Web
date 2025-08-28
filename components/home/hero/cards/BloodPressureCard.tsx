import { useTranslation } from '../../../../hooks/useTranslation.ts';
import { HeroCard } from './HeroCard.tsx';
import { BeforeAfterVisualizer } from '../visualizers/BeforeAfterVisualizer.tsx';
import { HeartPulse } from 'lucide-react';

export const BloodPressureCard = (props: Omit<React.ComponentProps<typeof HeroCard>, 'title' | 'icon' | 'children'>) => {
  const { t } = useTranslation();
  const content = {
    before: t('hero.visual.card7Before'),
    after: t('hero.visual.card7After'),
    conclusion: t('hero.visual.card7Result'),
  };
  
  return (
    <HeroCard {...props} title={t('hero.visual.card7Title')} icon={<HeartPulse size={16} />}>
      <BeforeAfterVisualizer before={content.before} after={content.after} conclusion={content.conclusion} />
    </HeroCard>
  );
};
