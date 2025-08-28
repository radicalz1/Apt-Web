import { useInView } from 'react-intersection-observer';

interface StatVisualizerProps {
  beforeValue: number;
  afterValue: number;
  maxValue: number;
  beforeLabel: string;
  afterLabel: string;
  unit?: string;
}

export const StatVisualizer = (props: StatVisualizerProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { beforeValue, afterValue, maxValue, beforeLabel, afterLabel } = props;

  const beforePercent = (beforeValue / maxValue) * 100;
  const afterPercent = (afterValue / maxValue) * 100;
  
  return (
    <div ref={ref} className="mt-4 space-y-3">
      <div>
        <div className="flex justify-between items-center text-xs text-slate-500 mb-1">
          <span>Before</span>
          <span>{beforeLabel}</span>
        </div>
        <div className="stat-visualizer">
          <div className="stat-bar stat-bar-before" style={{ width: inView ? `${beforePercent}%` : '0%' }} />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center text-xs text-slate-500 mb-1">
          <span>After</span>
          <span className="font-bold text-brand-600 dark:text-brand-300">{afterLabel}</span>
        </div>
        <div className="stat-visualizer">
          <div 
            className="stat-bar stat-bar-after" 
            style={{ width: inView ? `${afterPercent}%` : '0%' }}
          />
        </div>
      </div>
    </div>
  );
};