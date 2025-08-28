import React from 'react';

interface BiomarkerGaugeProps {
  value: number;
  min: number;
  max: number;
  optimalMax: number;
  borderlineMax: number;
  unit: string;
}

const valueToAngle = (value: number, min: number, max: number) => {
  const range = max - min;
  if (range === 0) return 0;
  const percentage = Math.max(0, Math.min(1, (value - min) / range));
  return percentage * 180; // Map to 0-180 degrees
};

export const BiomarkerGauge = (props: BiomarkerGaugeProps) => {
  const { value, min, max, optimalMax, borderlineMax, unit } = props;
  const angle = valueToAngle(value, min, max);

  const arcPath = (startAngle: number, endAngle: number) => {
    const start = { x: 100 - 90 * Math.cos(startAngle * Math.PI / 180), y: 100 - 90 * Math.sin(startAngle * Math.PI / 180) };
    const end = { x: 100 - 90 * Math.cos(endAngle * Math.PI / 180), y: 100 - 90 * Math.sin(endAngle * Math.PI / 180) };
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A 90 90 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <svg viewBox="0 0 200 120">
        {/* Ranges */}
        <path d={arcPath(0, valueToAngle(optimalMax, min, max))} className="biomarker-range-optimal" strokeWidth="20" fill="none" />
        <path d={arcPath(valueToAngle(optimalMax, min, max), valueToAngle(borderlineMax, min, max))} className="biomarker-range-borderline" strokeWidth="20" fill="none" />
        <path d={arcPath(valueToAngle(borderlineMax, min, max), 180)} className="biomarker-range-high" strokeWidth="20" fill="none" />
        
        {/* Needle */}
        <g transform={`rotate(${angle} 100 100)`} style={{ transition: 'transform 0.5s ease-out' }}>
          <line x1="100" y1="100" x2="100" y2="25" stroke="hsl(var(--color-slate-800))" strokeWidth="3" className="dark:stroke-slate-200" strokeLinecap="round" />
          <circle cx="100" cy="100" r="5" fill="hsl(var(--color-slate-800))" className="dark:fill-slate-200" />
        </g>
      </svg>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <p className="font-display text-4xl font-bold">{value.toFixed(1)} <span className="text-lg opacity-70">{unit}</span></p>
      </div>
    </div>
  );
};
