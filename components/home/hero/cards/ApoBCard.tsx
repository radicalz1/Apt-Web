import { useTranslation } from '../../../../hooks/useTranslation.ts';
import { HeroCard } from './HeroCard.tsx';
import { BeforeAfterVisualizer } from '../visualizers/BeforeAfterVisualizer.tsx';
import { TestTube2 } from 'lucide-react';

export const ApoBCard = (props: Omit<React.ComponentProps<typeof HeroCard>, 'title' | 'icon' | 'children'>) => {
  const { t } = useTranslation();
  const content = {
    before: t('hero.visual.card8Before'),
    after: t('hero.visual.card8After'),
    conclusion: t('hero.visual.card8Optimal'),
  };
  
  return (
    <HeroCard {...props} title={t('hero.visual.card8Title')} icon={<TestTube2 size={16} />}>
      <BeforeAfterVisualizer before={content.before} after={content.after} conclusion={content.conclusion} />
    </HeroCard>
  );
};
