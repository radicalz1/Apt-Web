import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { LifestyleStressData } from '../../../types';
import SelectField from '../common/SelectField.tsx';
import TextareaField from '../common/TextareaField.tsx';

interface LifestyleStressSectionProps {
  data: LifestyleStressData;
  onUpdate: (data: LifestyleStressData) => void;
}

const LifestyleStressSection: React.FC<LifestyleStressSectionProps> = ({ data, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper title="Lifestyle: Stress & Emotional Health" subtitle="Understanding your stressors and support systems is key.">
      <SelectField
        label="How would you rate your average stress level?"
        name="stressLevel"
        value={data.stressLevel || ''}
        onChange={handleChange}
        options={[
          { value: 'low', label: 'Low' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'high', label: 'High' },
          { value: 'very_high', label: 'Very High' },
        ]}
      />
      <TextareaField
        label="What are your primary sources of stress?"
        name="stressSources"
        value={data.stressManagement || ''}
        onChange={handleChange}
      />
      <TextareaField
        label="What techniques do you use to manage stress?"
        name="stressManagement"
        value={data.stressManagement || ''}
        onChange={handleChange}
      />
    </SectionWrapper>
  );
};

export default LifestyleStressSection;