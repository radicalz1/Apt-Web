import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { LifestyleActivityData } from '../../../types';
import SelectField from '../common/SelectField.tsx';
import TextareaField from '../common/TextareaField.tsx';

interface LifestyleActivitySectionProps {
  data: LifestyleActivityData;
  onUpdate: (data: LifestyleActivityData) => void;
}

const LifestyleActivitySection: React.FC<LifestyleActivitySectionProps> = ({ data, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper title="Lifestyle: Physical Activity" subtitle="Let's talk about how you move.">
      <SelectField
        label="How often do you engage in structured exercise per week?"
        name="exerciseFrequency"
        value={data.exerciseFrequency || ''}
        onChange={handleChange}
        options={[
          { value: 'never', label: 'Never' },
          { value: '1-2', label: '1-2 times' },
          { value: '3-4', label: '3-4 times' },
          { value: '5+', label: '5+ times' },
        ]}
      />
      <TextareaField
        label="What types of exercise do you do?"
        name="exerciseType"
        value={data.exerciseType || ''}
        onChange={handleChange}
      />
      <SelectField
        label="Describe your daily activity level outside of exercise."
        name="dailyActivityLevel"
        value={data.dailyActivityLevel || ''}
        onChange={handleChange}
        options={[
          { value: 'sedentary', label: 'Sedentary (mostly sitting)' },
          { value: 'light', label: 'Light (mostly standing/walking)' },
          { value: 'moderate', label: 'Moderate (physical work)' },
          { value: 'active', label: 'Active (heavy physical work)' },
        ]}
      />
    </SectionWrapper>
  );
};

export default LifestyleActivitySection;