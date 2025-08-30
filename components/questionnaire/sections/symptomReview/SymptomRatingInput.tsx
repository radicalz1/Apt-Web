import React from 'react';
import { RATING_OPTIONS } from '../../../../data/questionnaireConstants.ts';

interface SymptomRatingInputProps {
  value: number;
  onChange: (value: number) => void;
}

const SymptomRatingInput: React.FC<SymptomRatingInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {RATING_OPTIONS.map(opt => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`h-8 w-8 rounded-md border text-sm font-semibold transition-colors ${
            value === opt.value
              ? 'bg-brand-500 text-white border-brand-500'
              : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default SymptomRatingInput;
