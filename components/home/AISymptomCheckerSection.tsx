import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Section } from '../common/Section.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { AISymptomCheckerForm } from './ai/AISymptomCheckerForm.tsx';
import { AISymptomCheckerResult } from './ai/AISymptomCheckerResult.tsx';

export const AISymptomCheckerSection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleAnalysis = async (symptoms: string) => {
    setLoading(true);
    setResult('');
    setError('');

    if (!process.env.API_KEY) {
      setError("AI feature is currently unavailable. Please contact the administrator.");
      setLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are a helpful AI assistant for a functional medicine website. Your primary role is to provide general, educational information. You MUST NOT, under any circumstances, provide medical advice, diagnosis, or treatment recommendations. Your tone should be informative, safe, and encouraging of professional consultation.

      Every response MUST begin with the following disclaimer, exactly as written, wrapped in a strong tag:
      '<strong>DISCLAIMER:</strong> This is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.'

      After the disclaimer, you can provide general educational information about potential health topics related to the user's input. Use simple, non-technical language. You may use simple HTML tags like <p>, <ul>, <li>, and <strong> for formatting.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `A user has described the following symptoms: "${symptoms}". Based on these keywords, provide some general, non-personalized, educational information about related health concepts. Do not diagnose or suggest treatments.`,
        config: { systemInstruction },
      });
      setResult(response.text);

    } catch (err) {
      console.error(err);
      setError('An error occurred while analyzing symptoms. This could be due to a configuration issue or a problem with the AI service. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Section id="ai-checker" className="bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/70 dark:border-slate-800">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <AISymptomCheckerForm onAnalyze={handleAnalysis} loading={loading} />
        <AISymptomCheckerResult result={result} error={error} loading={loading} />
      </div>
    </Section>
  );
};
