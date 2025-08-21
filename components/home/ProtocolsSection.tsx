import { Section } from '../common/Section.tsx';
import { ProtocolTabs } from './protocols/ProtocolTabs.tsx';
import { ProtocolBenefitCard } from './protocols/ProtocolBenefitCard.tsx';

export const ProtocolsSection = () => {
  return (
    <Section id="protokol" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <ProtocolTabs />
        <ProtocolBenefitCard />
      </div>
    </Section>
  );
};
