import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation.ts';
import { getQuizContent } from '../../../data/quiz.ts';
import { RotateCcw } from 'lucide-react';

interface QuizResultProps {
  answers: number[];
  onReset: () => void;
}

export const QuizResult = ({ answers, onReset }: QuizResultProps) => {
  const { t, language } = useTranslation();
  const { questions, feedback } = useMemo(() => getQuizContent(language as any), [language]);

  const { score, scoreLabel, mainFeedback } = useMemo(() => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 10;
    const finalScore = Math.round((totalScore / maxScore) * 100);

    let label = t('quiz.scoreLabels.needsImprovement');
    if (finalScore > 75) label = t('quiz.scoreLabels.good');
    else if (finalScore > 50) label = t('quiz.scoreLabels.average');
    
    // Find the category of the worst answer
    const minScore = Math.min(...answers);
    const worstQuestionIndex = answers.indexOf(minScore);
    const worstCategory = questions[worstQuestionIndex]?.category;
    const feedbackText = feedback.find(f => f.category === worstCategory)?.text || '';

    return { score: finalScore, scoreLabel: label, mainFeedback: feedbackText };
  }, [answers, questions, feedback, t]);

  const circumference = 2 * Math.PI * 45; // 2 * pi * r
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="text-center animate-fade-in-up">
      <h2 className="font-display text-3xl font-extrabold">{t('quiz.resultsTitle')}</h2>
      
      <div className="relative my-6 w-48 h-48 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle className="quiz-result-gauge-bg" cx="50" cy="50" r="45" strokeWidth="10" fill="transparent" />
          <circle 
            className="quiz-result-gauge-fg"
            cx="50" cy="50" r="45" strokeWidth="10" fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-5xl font-bold">{score}</span>
            <span className="font-semibold text-sm">{scoreLabel}</span>
        </div>
      </div>
      
      <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-300">{t('quiz.resultsSubtitle')}</p>

      <div className="mt-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50">
        <h4 className="font-semibold">{t('quiz.resultsMainFeedbackTitle')}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-300">{mainFeedback}</p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/#konsultasi" className="px-8 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 font-semibold shadow-soft hover:opacity-95">
          {t('quiz.resultsCta')}
        </Link>
        <button onClick={onReset} className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-medium">
          <RotateCcw size={16} /> {t('quiz.retakeCta')}
        </button>
      </div>
    </div>
  );
};