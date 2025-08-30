import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { LifestyleSleepData } from '../../../types';
import InputField from '../common/InputField.tsx';
import SelectField from '../common/SelectField.tsx';
import CheckboxCard from '../common/CheckboxCard.tsx';

interface LifestyleSleepSectionProps {
  data: LifestyleSleepData;
  onUpdate: (data: LifestyleSleepData) => void;
}

const sleepIssuesOptions = ['Difficulty falling asleep', 'Waking up frequently', 'Waking up too early', 'Snoring', 'Restless legs'];

const LifestyleSleepSection: React.FC<LifestyleSleepSectionProps> = ({ data, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    const current = data.sleepIssues || [];
    const updated = isChecked ? [...current, value] : current.filter(c => c !== value);
    onUpdate({ ...data, sleepIssues: updated });
  };

  return (
    <SectionWrapper title="Lifestyle: Sleep & Rest" subtitle="Quality sleep is foundational to health.">
      <InputField
        label="On average, how many hours do you sleep per night?"
        name="sleepHours"
        type="number"
        value={data.sleepHours || ''}
        onChange={handleChange}
      />
      <SelectField
        label="How would you rate your sleep quality?"
        name="sleepQuality"
        value={data.sleepQuality || ''}
        onChange={handleChange}
        options={[
          { value: 'poor', label: 'Poor' },
          { value: 'fair', label: 'Fair' },
          { value: 'good', label: 'Good' },
          { value: 'excellent', label: 'Excellent' },
        ]}
      />
      <div className="space-y-2 mt-4">
        <p className="font-medium text-slate-700 dark:text-slate-300">Do you experience any of the following? (Check all that apply)</p>
        <div className="grid grid-cols-2 gap-3">
          {sleepIssuesOptions.map(issue => (
            <CheckboxCard
              key={issue}
              id={`issue-${issue}`}
              name="sleepIssues"
              value={issue}
              checked={(data.sleepIssues || []).includes(issue)}
              onChange={handleCheckboxChange}
              label={issue}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LifestyleSleepSection;