import React from 'react';
import { SymptomRating } from '../../../../types';
import SymptomRatingInput from './SymptomRatingInput';

interface SymptomRatingRowProps {
  symptomId: string;
  label: string;
  rating: SymptomRating;
  onUpdate: (symptomId: string, type: 'frequency' | 'severity', value: number) => void;
}

const SymptomRatingRow: React.FC<SymptomRatingRowProps> = ({ symptomId, label, rating, onUpdate }) => {
  return (
    <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 items-center py-2 border-b border-slate-200 dark:border-slate-800 last:border-b-0">
      <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>
      <SymptomRatingInput
        value={rating.frequency}
        onChange={(value) => onUpdate(symptomId, 'frequency', value)}
      />
      <SymptomRatingInput
        value={rating.severity}
        onChange={(value) => onUpdate(symptomId, 'severity', value)}
      />
    </div>
  );
};

export default SymptomRatingRow;
