import { useState, useMemo } from 'react';
import { useTranslation } from '../../../hooks/useTranslation.ts';
import { tiersData } from '../../../data/tiers.ts';
import { Language } from '../../../types/index.ts';
import { Link } from 'react-router-dom';
import { Check, RotateCcw } from 'lucide-react';

type Answers = {
  goal?: string;
  depth?: string;
  support?: string;
};

export const ProgramSelector = () => {
  const { t, language } = useTranslation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  
  const questions = [
    { key: 'goal' as keyof Answers, title: t('programSelector.question1'), options: [{ value: 'pathway', text: t('programSelector.q1_option1') }, { value: 'deepdive', text: t('programSelector.q1_option2') }, { value: 'elite', text: t('programSelector.q1_option3') }] },
    { key: 'depth' as keyof Answers, title: t('programSelector.question2'), options: [{ value: 'pathway', text: t('programSelector.q2_option1') }, { value: 'deepdive', text: t('programSelector.q2_option2') }, { value: 'elite', text: t('programSelector.q2_option3') }] },
    { key: 'support' as keyof Answers, title: t('programSelector.question3'), options: [{ value: 'pathway', text: t('programSelector.q3_option1') }, { value: 'deepdive', text: t('programSelector.q3_option2') }, { value: 'elite', text: t('programSelector.q3_option3') }] },
  ];

  const handleSelect = (questionKey: keyof Answers, value: string) => {
    setAnswers(prev => ({ ...prev, [questionKey]: value }));
    setTimeout(() => setStep(prev => prev + 1), 300);
  };
  
  const handleReset = () => {
    setAnswers({});
    setStep(0);
  };
  
  const recommendedProgram = useMemo(() => {
    if (Object.keys(answers).length < 3) return null;
    const votes = Object.values(answers).reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const tierMap: Record<string, string> = { pathway: 'Pathway to Clarity', deepdive: 'Deep Dive Restoration', elite: 'Longevity & Performance Elite' };
    const winningTierKey = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
    const recommendedProgramName = tierMap[winningTierKey];
    
    return tiersData[language as Language].find(t => t.name === recommendedProgramName);
  }, [answers, language]);

  if (step === 0) {
    return (
      <div className="text-center p-8 rounded-3xl bg-white/60 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80">
        <h3 className="font-display text-2xl font-bold">{t('programSelector.title')}</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">{t('programSelector.description')}</p>
        <button onClick={() => setStep(1)} className="mt-6 inline-block px-6 py-3 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 font-semibold shadow-soft hover:opacity-95">
          {t('programSelector.cta')}
        </button>
      </div>
    );
  }
  
  const currentQuestion = questions[step - 1];

  if (currentQuestion) {
    return (
      <div className="p-8 rounded-3xl bg-white/60 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80">
        <h4 className="font-display text-xl font-bold text-center">{currentQuestion.title}</h4>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {currentQuestion.options.map(opt => (
            <button key={opt.value} onClick={() => handleSelect(currentQuestion.key, opt.value)} className="selector-option p-6 rounded-2xl border-2 text-center font-semibold border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600">
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-3xl bg-white/60 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80 text-center animate-fade-in-up">
      <Check size={40} className="mx-auto text-green-500" />
      <h3 className="mt-4 font-display text-2xl font-bold">{t('programSelector.resultTitle')}</h3>
      {recommendedProgram && (
        <div className="mt-4 max-w-md mx-auto p-4 rounded-2xl border-2 border-brand-500 bg-brand-50 dark:bg-brand-900/20">
          <h4 className="font-bold text-xl">{recommendedProgram.name}</h4>
          <p className="text-sm text-brand-700 dark:text-brand-300">{recommendedProgram.subtitle}</p>
        </div>
      )}
      <div className="mt-6 flex justify-center items-center gap-4">
        <a href="#programs" className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 font-semibold shadow-soft">
          {t('programSelector.resultCta')}
        </a>
        <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-medium">
          <RotateCcw size={16} /> {t('programSelector.retakeCta')}
        </button>
      </div>
    </div>
  );
};
