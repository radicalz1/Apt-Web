import React from 'react';

interface WelcomeSectionProps {
  onNext: () => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onNext }) => {
  return (
    <div className="text-center animate-fade-in-up">
      <h2 className="font-display text-2xl font-bold">Start Your Health Assessment</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
        Welcome! This comprehensive questionnaire is the first step toward understanding your unique health profile. Please answer as accurately as possible. Your responses will help us create your personalized health report.
      </p>
      <p className="mt-4 text-sm text-slate-500">
        This may take 15-20 minutes to complete. Your progress will be saved automatically as you move between sections.
      </p>
      <div className="mt-8">
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft font-semibold"
        >
          Let's Begin
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
