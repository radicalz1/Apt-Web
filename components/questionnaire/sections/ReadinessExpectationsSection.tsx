import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { ReadinessExpectationsData } from '../../../types';
import TextareaField from '../common/TextareaField.tsx';

interface ReadinessExpectationsSectionProps {
  data: ReadinessExpectationsData;
  onUpdate: (data: ReadinessExpectationsData) => void;
}

const ReadinessExpectationsSection: React.FC<ReadinessExpectationsSectionProps> = ({ data, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...data, motivation: parseInt(e.target.value, 10) });
  };

  return (
    <SectionWrapper title="Readiness & Expectations" subtitle="Let's talk about your goals and readiness for change.">
      <div>
        <label className="block text-sm font-medium">On a scale of 1-10, how motivated are you to make changes to your lifestyle?</label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            name="motivation"
            min="1"
            max="10"
            value={data.motivation || 5}
            onChange={handleRangeChange}
            className="w-full"
          />
          <span className="font-bold text-lg text-brand-600">{data.motivation || 5}</span>
        </div>
      </div>
      <TextareaField
        label="What do you see as your biggest challenge to improving your health?"
        name="biggestChallenge"
        value={data.biggestChallenge || ''}
        onChange={handleChange}
      />
      <TextareaField
        label="What is the number one outcome you hope to achieve from working with us?"
        name="desiredOutcome"
        value={data.desiredOutcome || ''}
        onChange={handleChange}
      />
    </SectionWrapper>
  );
};

export default ReadinessExpectationsSection;
