import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  sections: { id: string, title: string }[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, sections }) => {
  const percentage = totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 0;
  const currentTitle = sections[currentStep]?.title || '';

  return (
    <div>
      <div className="flex justify-between text-sm text-slate-500 mb-2">
        <span>Step {currentStep + 1} of {totalSteps}: <span className="font-semibold text-slate-700 dark:text-slate-300">{currentTitle}</span></span>
        <span>{Math.round(percentage)}% Complete</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-brand-500 to-accent-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
