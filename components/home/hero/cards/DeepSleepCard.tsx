import { useTranslation } from '../../../../hooks/useTranslation.ts';
import { HeroCard } from './HeroCard.tsx';
import { BeforeAfterVisualizer } from '../visualizers/BeforeAfterVisualizer.tsx';
import { Moon } from 'lucide-react';

export const DeepSleepCard = (props: Omit<React.ComponentProps<typeof HeroCard>, 'title' | 'icon' | 'children'>) => {
  const { t } = useTranslation();
  const content = {
    before: t('hero.visual.card5Before'),
    after: t('hero.visual.card5After'),
    conclusion: t('hero.visual.card5Result'),
  };
  
  return (
    <HeroCard {...props} title={t('hero.visual.card5Title')} icon={<Moon size={16} />}>
      <BeforeAfterVisualizer 
        before={content.before} 
        after={content.after} 
        conclusion={content.conclusion}
      />
    </HeroCard>
  );
};