import React from 'react';
import { ConclusionLozenge } from './ConclusionLozenge.tsx';

interface TextDeltaVisualizerProps {
  delta: string;
  conclusion: string;
}

export const TextDeltaVisualizer = ({ delta, conclusion }: TextDeltaVisualizerProps) => {
  return (
    <div>
      <p className="font-display text-4xl font-bold text-brand-600 dark:text-brand-400 value-delta">{delta}</p>
      <ConclusionLozenge text={conclusion} />
    </div>
  );
};
