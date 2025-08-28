import { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation.ts';

interface AISymptomCheckerFormProps {
  onAnalyze: (symptoms: string) => void;
  loading: boolean;
}

export const AISymptomCheckerForm = ({ onAnalyze, loading }: AISymptomCheckerFormProps) => {
  const { t } = useTranslation();
  const [symptoms, setSymptoms] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!symptoms.trim()) return;
    onAnalyze(symptoms);
  };
  
  return (
    <div>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{t('aiChecker.title')}</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{t('aiChecker.description')}</p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <textarea
          name="symptoms"
          rows={4}
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40"
          placeholder={t('aiChecker.placeholder')}
          disabled={loading}
          aria-label="Symptom input"
        ></textarea>
        <button type="submit" disabled={loading} className="px-5 py-3 rounded-2xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? 'Analyzing...' : t('aiChecker.cta')}
        </button>
      </form>
    </div>
  );
};
