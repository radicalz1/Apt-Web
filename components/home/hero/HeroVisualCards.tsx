import React, { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation.ts';
import { BloodSugarCard } from './cards/BloodSugarCard.tsx';
import { InflammationCard } from './cards/InflammationCard.tsx';
import { BioAgeCard } from './cards/BioAgeCard.tsx';
import { MitochondriaCard } from './cards/MitochondriaCard.tsx';
import { DeepSleepCard } from './cards/DeepSleepCard.tsx';
import { HrvCard } from './cards/HrvCard.tsx';
import { BloodPressureCard } from './cards/BloodPressureCard.tsx';
import { ApoBCard } from './cards/ApoBCard.tsx';

// --- Layout Definition ---
const layoutConfig = {
  bloodSugar: { gridPosition: { row: '1 / span 3', col: '1 / span 4' }, rotation: 'rotate(-3deg)' },
  bioAge: { gridPosition: { row: '4 / span 3', col: '1 / span 4' }, rotation: 'rotate(2deg)' },
  deepSleep: { gridPosition: { row: '7 / span 3', col: '1 / span 4' }, rotation: 'rotate(-1deg)' },
  inflammation: { gridPosition: { row: '1 / span 3', col: '5 / span 4' }, rotation: 'rotate(3deg)' },
  apoB: { gridPosition: { row: '4 / span 3', col: '5 / span 4' }, rotation: 'rotate(-2deg)' },
  mitochondria: { gridPosition: { row: '7 / span 3', col: '5 / span 4' }, rotation: 'rotate(1deg)' },
  bloodPressure: { gridPosition: { row: '2 / span 3', col: '2 / span 5' }, rotation: 'rotate(0deg)' },
  hrv: { gridPosition: { row: '5 / span 3', col: '3 / span 4' }, rotation: 'rotate(-0.5deg)' },
};

const cardComponents = {
  bloodSugar: BloodSugarCard,
  inflammation: InflammationCard,
  mitochondria: MitochondriaCard,
  deepSleep: DeepSleepCard,
  hrv: HrvCard,
  bloodPressure: BloodPressureCard,
  bioAge: BioAgeCard,
  apoB: ApoBCard,
};

// --- Main Section Component ---
export const HeroVisualCards = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (key: string) => {
    setActiveCard(prev => (prev === null ? key : null));
  };

  return (
    <div className="relative h-[600px] w-full flex flex-col items-center justify-center">
      <div 
        className={`hero-visual-container ${activeCard ? 'has-active' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setActiveCard(null); }}
      >
        {Object.entries(cardComponents).map(([key, CardComponent]) => {
          const isActive = activeCard === key;
          const isInactive = activeCard !== null && !isActive;
          return (
            <CardComponent
              key={key}
              {...layoutConfig[key as keyof typeof layoutConfig]}
              isActive={isActive}
              isInactive={isInactive}
              onClick={() => handleCardClick(key)}
            />
          );
        })}
      </div>
      <p className="mt-4 text-xs text-center text-slate-500">{t('hero.visual.instruction')}</p>
      <p className="mt-1 text-xs text-center text-slate-500/80">{t('hero.visual.disclaimer')}</p>
    </div>
  );
};