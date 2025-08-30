import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { SystemReviewData } from '../../../types';
import { SYMPTOM_CATEGORIES } from '../../../data/questionnaireConstants.ts';
import SymptomCategoryBlock from './symptomReview/SymptomCategoryBlock.tsx';

interface SystemReviewSectionProps {
  data: SystemReviewData;
  onUpdate: (data: SystemReviewData) => void;
}

const SystemReviewSection: React.FC<SystemReviewSectionProps> = ({ data, onUpdate }) => {
  const handleUpdate = (symptomId: string, type: 'frequency' | 'severity', value: number) => {
    onUpdate({
      ...data,
      [symptomId]: {
        ...(data[symptomId] || { frequency: 0, severity: 0 }),
        [type]: value,
      },
    });
  };

  return (
    <SectionWrapper title="Review of Systems" subtitle="Please rate any symptoms you have experienced in the last month.">
      <div className="text-sm p-4 bg-slate-100 dark:bg-slate-800 rounded-xl space-y-1">
        <p><strong>Frequency Scale:</strong> 0 = Never, 1 = Rarely, 2 = Sometimes, 3 = Often</p>
        <p><strong>Severity Scale:</strong> 0 = None, 1 = Mild, 2 = Moderate, 3 = Severe</p>
      </div>
      <div className="space-y-4 mt-6">
        {SYMPTOM_CATEGORIES.map(category => (
          <SymptomCategoryBlock
            key={category.id}
            title={category.title}
            symptoms={category.symptoms}
            data={data}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SystemReviewSection;
