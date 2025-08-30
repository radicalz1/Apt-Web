import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { ClipboardList, BarChart, FileText, UserCheck } from 'lucide-react';

const workflowIcons = [<ClipboardList />, <BarChart />, <FileText />, <UserCheck />];

export const HowItWorksSection = () => {
  const { t } = useTranslation();
  
  const steps = [
    { title: t('howItWorks.step1'), desc: t('howItWorks.step1Desc') },
    { title: t('howItWorks.step2'), desc: t('howItWorks.step2Desc') },
    { title: t('howItWorks.step3'), desc: t('howItWorks.step3Desc') },
    { title: t('howItWorks.step4'), desc: t('howItWorks.step4Desc') },
  ];

  return (
    <div>
      <SectionHeader title={t('howItWorks.title')} description={t('howItWorks.description')} />
      <div className="mt-12">
        <div className="journey-timeline-container">
          {steps.map((step, i) => (
            <div key={i} className="journey-timeline-item">
              <div className="journey-timeline-content">
                <div className="journey-timeline-icon">
                  {workflowIcons[i]}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};