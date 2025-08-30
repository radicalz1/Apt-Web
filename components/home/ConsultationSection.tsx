import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { ConsultationInfo } from './consultation/ConsultationInfo.tsx';
import { ConsultationSchedule } from './consultation/ConsultationSchedule.tsx';

export const ConsultationSection = () => {
  return (
    <AnimatedSection id="konsultasi">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ConsultationInfo />
        <ConsultationSchedule />
      </div>
    </AnimatedSection>
  );
};
