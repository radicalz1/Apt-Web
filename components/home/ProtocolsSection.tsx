import { useState } from 'react';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { ProtocolTabs } from './protocols/ProtocolTabs.tsx';
import { ProtocolBenefitCard } from './protocols/ProtocolBenefitCard.tsx';

export const ProtocolsSection = () => {
  const [activeTab, setActiveTab] = useState('metabolik');

  return (
    <AnimatedSection id="protokol">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ProtocolTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProtocolBenefitCard activeTab={activeTab} />
      </div>
    </AnimatedSection>
  );
};
