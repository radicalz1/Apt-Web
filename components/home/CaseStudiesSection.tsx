import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { getCaseStudies } from '../../data/caseStudies.ts';
import { Activity, Brain, TrendingDown } from 'lucide-react';
import { StatVisualizer } from './case-studies/StatVisualizer.tsx';

const icons: { [key: string]: React.ReactNode } = {
  activity: <Activity />,
  'trending-down': <TrendingDown />,
  brain: <Brain />,
};

export const CaseStudiesSection = () => {
  const { t } = useTranslation();
  const studies = getCaseStudies(t);

  return (
    <div>
      <SectionHeader title={t('caseStudies.title')} description={t('caseStudies.description')} />
      <div className="grid grid-cols-1 gap-6 mt-12">
        {studies.map((study, i) => (
          <div key={i} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-full bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-300">
                {icons[study.icon]}
              </div>
              <div>
                <h3 className="font-semibold">{study.client}</h3>
                <p className="text-xs text-slate-500">{study.result}</p>
              </div>
            </div>
            <StatVisualizer
              beforeValue={study.values.before}
              afterValue={study.values.after}
              maxValue={study.values.max}
              beforeLabel={study.before}
              afterLabel={study.after}
              unit={study.values.unit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};