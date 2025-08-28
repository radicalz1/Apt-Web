interface QuizProgressBarProps {
  current: number;
  total: number;
}

export const QuizProgressBar = ({ current, total }: QuizProgressBarProps) => {
  const progress = (current / total) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center text-sm font-medium text-slate-500 mb-2">
        <span>Step {current} of {total}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-2 rounded-full quiz-progress-bar-bg overflow-hidden">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 quiz-progress-bar-fg" 
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>
    </div>
  );
};