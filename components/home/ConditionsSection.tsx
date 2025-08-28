import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { ConditionsInfo } from './conditions/ConditionsInfo.tsx';

export const ConditionsSection = () => {
  return (
    <AnimatedSection id="kondisi" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800 section-bg-pattern">
      <ConditionsInfo />
    </AnimatedSection>
  );
};
