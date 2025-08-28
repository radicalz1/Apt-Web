import { useState } from 'react';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { ProtocolTabs } from './protocols/ProtocolTabs.tsx';
import { ProtocolBenefitCard } from './protocols/ProtocolBenefitCard.tsx';

export const ProtocolsSection = () => {
  const [activeTab, setActiveTab] = useState('metabolik');

  return (
    <AnimatedSection id="protokol" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800 section-bg-pattern">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <ProtocolTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProtocolBenefitCard activeTab={activeTab} />
      </div>
    </AnimatedSection>
  );
};
