import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { EnvironmentExposuresData } from '../../../types';
import SelectField from '../common/SelectField.tsx';
import TextareaField from '../common/TextareaField.tsx';

interface EnvironmentExposuresSectionProps {
  data: EnvironmentExposuresData;
  onUpdate: (data: EnvironmentExposuresData) => void;
}

const EnvironmentExposuresSection: React.FC<EnvironmentExposuresSectionProps> = ({ data, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper title="Environment & Exposures" subtitle="Your surroundings can impact your health.">
      <SelectField
        label="Do you smoke?"
        name="smoker"
        value={data.smoker || ''}
        onChange={handleChange}
        options={[
          { value: 'no', label: 'No' },
          { value: 'yes', label: 'Yes' },
          { value: 'former', label: 'Former Smoker' },
        ]}
      />
      <SelectField
        label="Are you regularly exposed to secondhand smoke?"
        name="secondhandSmoke"
        value={data.secondhandSmoke || ''}
        onChange={handleChange}
        options={[
          { value: 'no', label: 'No' },
          { value: 'yes', label: 'Yes' },
        ]}
      />
      <TextareaField
        label="Are you exposed to any chemicals, toxins, or fumes at work or home?"
        name="workplaceExposures"
        value={data.workplaceExposures || ''}
        onChange={handleChange}
      />
    </SectionWrapper>
  );
};

export default EnvironmentExposuresSection;