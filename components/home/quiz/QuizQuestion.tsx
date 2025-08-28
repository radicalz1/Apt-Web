import { useState } from 'react';
// FIX: Import QuizOption to correctly type the 'options' property.
import { QuizQuestionData, QuizOption } from '../../../data/quiz.ts';
import { useTranslation } from '../../../hooks/useTranslation.ts';

// FIX: Correctly type the 'question' prop.
// The passed 'question' object has an 'options' property that includes a 'text' field,
// which is not present in the original QuizQuestionData. Using Omit removes the conflicting
// 'options' definition and allows us to specify the correct one.
interface QuizQuestionProps {
  question: Omit<QuizQuestionData, 'options'> & {
    question: string;
    options: (QuizOption & { text: string })[];
  };
  onAnswer: (score: number) => void;
  onBack: () => void;
  isFirstQuestion: boolean;
}

export const QuizQuestion = ({ question, onAnswer, onBack, isFirstQuestion }: QuizQuestionProps) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (score: number) => {
    setSelected(score);
    // Add a small delay for user to see selection before moving to the next question
    setTimeout(() => {
        onAnswer(score);
        setSelected(null);
    }, 300);
  };

  return (
    <div className="text-center">
      <h3 className="font-display text-2xl font-bold">{question.question}</h3>
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        {question.options.map(option => (
          <button 
            key={option.text} 
            onClick={() => handleSelect(option.score)}
            className={`quiz-option p-6 rounded-2xl border-2 text-center font-semibold ${selected === option.score ? 'selected' : 'border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600'}`}
          >
            {option.text}
          </button>
        ))}
      </div>
       <div className="mt-6 flex justify-center gap-4">
          {!isFirstQuestion && (
            <button onClick={onBack} className="px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-medium">
              {t('quiz.backCta')}
            </button>
          )}
      </div>
    </div>
  );
};
