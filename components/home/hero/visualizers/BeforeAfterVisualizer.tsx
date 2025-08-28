import React from 'react';
import { useTranslation } from '../../../../hooks/useTranslation.ts';
import { ConclusionLozenge } from './ConclusionLozenge.tsx';
import { ArrowRightCircle } from 'lucide-react';

interface BeforeAfterVisualizerProps {
  before: string;
  after: string;
  conclusion: string;
  highlightConclusion?: boolean;
}

const renderValue = (valueString: string, containerClassName: string) => {
    // Regex to capture optional prefix (<, >), the main numeric/slash value, and the unit.
    const parts = valueString.match(/(<|>)?\s*([\d\/.,]+)\s*(.*)/);
    if (!parts) {
        return <p className={`text-2xl font-bold leading-tight ${containerClassName}`}>{valueString}</p>;
    }
    
    const prefix = parts[1] || '';
    const number = parts[2];
    const unit = parts[3];

    return (
        <div className={`flex items-baseline justify-center gap-1 leading-none ${containerClassName}`}>
            <span className="text-2xl font-bold">{prefix}{number}</span>
            <span className="text-sm font-medium opacity-80">{unit}</span>
        </div>
    );
};

const HighlightedConclusion = ({ text }: { text: string }) => {
    // Regex to split text from number, e.g., "Peningkatan 122%" -> "Peningkatan" and "122%"
    const parts = text.match(/([\D\s]+)(.*)/);
    if (!parts || !parts[2]) {
        return <ConclusionLozenge text={text} />;
    }
    const label = parts[1].trim();
    const value = parts[2].trim();
    return (
        <div className="mt-2 text-center">
            <p className="text-lg font-bold text-green-700 dark:text-green-300 leading-tight">{value}</p>
            <p className="text-xs text-slate-500">{label}</p>
        </div>
    );
};


export const BeforeAfterVisualizer = ({ before, after, conclusion, highlightConclusion = false }: BeforeAfterVisualizerProps) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center justify-center gap-4">
          <div>
              {renderValue(before, '')}
              <p className="text-xs text-slate-500 mt-1">{t('hero.visual.beforeLabel')}</p>
          </div>
          <ArrowRightCircle className="text-slate-300 dark:text-slate-600" />
          <div>
              {renderValue(after, 'text-brand-600 dark:text-brand-400')}
              <p className="text-xs text-slate-500 mt-1">{t('hero.visual.afterLabel')}</p>
          </div>
      </div>
      {highlightConclusion ? <HighlightedConclusion text={conclusion} /> : <ConclusionLozenge text={conclusion} />}
    </div>
  );
};