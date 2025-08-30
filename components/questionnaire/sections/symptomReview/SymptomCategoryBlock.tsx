import React from 'react';
import SymptomRatingRow from './SymptomRatingRow.tsx';
import { SystemReviewData } from '../../../../types';

interface Symptom {
  id: string;
  label: string;
}

interface SymptomCategoryBlockProps {
  title: string;
  symptoms: Symptom[];
  data: SystemReviewData;
  onUpdate: (symptomId: string, type: 'frequency' | 'severity', value: number) => void;
}

const SymptomCategoryBlock: React.FC<SymptomCategoryBlockProps> = ({ title, symptoms, data, onUpdate }) => {
  return (
    <details className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4 open:shadow-md transition-shadow">
      <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
        {title}
        <span className="text-sm text-slate-500 transition-transform transform details-marker">Expand</span>
      </summary>
      <div className="mt-4">
        <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 font-medium text-sm text-slate-500 mb-2 px-2">
          <span>Symptom</span>
          <span className="text-center">Frequency (0-3)</span>
          <span className="text-center">Severity (0-3)</span>
        </div>
        {symptoms.map(symptom => (
          <SymptomRatingRow
            key={symptom.id}
            symptomId={symptom.id}
            label={symptom.label}
            rating={data[symptom.id] || { frequency: 0, severity: 0 }}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </details>
  );
};

export default SymptomCategoryBlock;
