import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Section } from '../common/Section.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { Skeleton } from '../common/Skeleton.tsx';

export const AISymptomCheckerSection = () => {
  const { t } = useTranslation();
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setLoading(true);
    setResult('');
    setError('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are a helpful AI assistant for a functional medicine and longevity website called 'Lab Longevity'. Your role is to provide general, informational, and educational content based on user-described symptoms. You MUST NOT provide medical advice, diagnosis, or treatment plans. You MUST start every response with a clear and prominent disclaimer in a paragraph: '<strong>DISCLAIMER:</strong> This information is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.' After the disclaimer, you can provide some general information about potential related health topics, systems that might be involved (e.g., metabolic, immune, digestive), and lifestyle factors that can influence these systems. Keep the information high-level. Do not mention specific diseases as a diagnosis. Frame your response in a supportive and educational tone. Your response should be formatted in simple HTML using paragraphs <p> and unordered lists <ul> with <li> items. Do not use headings.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `User's symptoms: ${symptoms}`,
        config: { systemInstruction },
      });
      
      setResult(response.text);

    } catch (err) {
      setError('An error occurred while fetching analysis. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Section id="ai-checker" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
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
        <div className="rounded-3xl p-6 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft min-h-[200px]">
          <h3 className="font-semibold text-xl">Analysis Result</h3>
          <div className="mt-4 text-sm text-slate-700 dark:text-slate-200 prose prose-sm max-w-none">
            {loading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
            {result && <div dangerouslySetInnerHTML={{ __html: result }} />}
          </div>
        </div>
      </div>
    </Section>
  );
};
