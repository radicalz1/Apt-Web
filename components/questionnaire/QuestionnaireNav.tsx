import React from 'react';

interface QuestionnaireNavProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const QuestionnaireNav: React.FC<QuestionnaireNavProps> = ({ currentStep, totalSteps, onPrev, onNext, onSubmit, isSubmitting }) => {
  const isFirstStep = currentStep === 0;
  const isSubmitStep = currentStep === totalSteps - 1;
  const isWelcomeStep = currentStep === 0;

  if (isWelcomeStep) {
    return null; // Navigation is handled within the WelcomeSection
  }

  return (
    <div className="mt-10 flex justify-between items-center border-t border-slate-200 dark:border-slate-800 pt-6">
      <button
        onClick={onPrev}
        disabled={isFirstStep || isSubmitting}
        className="px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {!isSubmitStep ? (
        <button
          onClick={onNext}
          disabled={isSubmitting}
          className="px-6 py-2 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft font-semibold disabled:opacity-50"
        >
          Next Step
        </button>
      ) : (
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="px-6 py-2 rounded-xl text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-soft font-semibold disabled:opacity-50 disabled:cursor-wait"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
        </button>
      )}
    </div>
  );
};

export default QuestionnaireNav;