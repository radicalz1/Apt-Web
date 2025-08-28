import { useState, useMemo } from 'react';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { getQuizContent } from '../../data/quiz.ts';
import { QuizProgressBar } from './quiz/QuizProgressBar.tsx';
import { QuizQuestion } from './quiz/QuizQuestion.tsx';
import { QuizResult } from './quiz/QuizResult.tsx';
import { FileQuestion } from 'lucide-react';

type QuizStage = 'start' | 'playing' | 'finished';

export const HealthQuizSection = () => {
  const { t, language } = useTranslation();
  const { questions } = useMemo(() => getQuizContent(language as any), [language]);

  const [stage, setStage] = useState<QuizStage>('start');
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleStart = () => setStage('playing');
  
  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = score;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStage('finished');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleReset = () => {
    setStage('start');
    setAnswers([]);
    setCurrentQuestionIndex(0);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <AnimatedSection id="health-quiz">
      <div className="max-w-4xl mx-auto rounded-3xl p-8 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft">
        {stage === 'start' && (
          <div className="text-center">
            <FileQuestion size={40} className="mx-auto text-brand-600 dark:text-brand-400" />
            <h2 className="mt-4 font-display text-3xl font-extrabold">{t('quiz.title')}</h2>
            <p className="mt-2 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">{t('quiz.description')}</p>
            <button onClick={handleStart} className="mt-6 inline-block px-8 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 font-semibold shadow-soft hover:opacity-95 transition-opacity">
              {t('quiz.startCta')}
            </button>
          </div>
        )}

        {stage === 'playing' && currentQuestion && (
          <div>
            <QuizProgressBar current={currentQuestionIndex + 1} total={questions.length} />
            <QuizQuestion 
              question={currentQuestion} 
              onAnswer={handleAnswer} 
              onBack={handleBack}
              isFirstQuestion={currentQuestionIndex === 0}
            />
          </div>
        )}

        {stage === 'finished' && (
          <QuizResult answers={answers} onReset={handleReset} />
        )}
      </div>
    </AnimatedSection>
  );
};