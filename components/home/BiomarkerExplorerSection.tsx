import { useState } from 'react';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { BiomarkerGauge } from './biomarker/BiomarkerGauge.tsx';

type BiomarkerKey = 'hba1c' | 'hscrp' | 'apob';

export const BiomarkerExplorerSection = () => {
    const { t } = useTranslation();
    const [activeBiomarker, setActiveBiomarker] = useState<BiomarkerKey>('hba1c');
    
    const biomarkers = {
        hba1c: { name: t('biomarker.hba1c.name'), what: t('biomarker.hba1c.what'), optimal: t('biomarker.hba1c.optimal'), borderline: t('biomarker.hba1c.borderline'), high: t('biomarker.hba1c.high'), factors: t('biomarker.hba1c.factors'), gauge: { value: 5.4, min: 4, max: 8, optimalMax: 5.4, borderlineMax: 5.7, unit: '%' } },
        hscrp: { name: t('biomarker.hscrp.name'), what: t('biomarker.hscrp.what'), optimal: t('biomarker.hscrp.optimal'), borderline: t('biomarker.hscrp.borderline'), high: t('biomarker.hscrp.high'), factors: t('biomarker.hscrp.factors'), gauge: { value: 0.9, min: 0, max: 5, optimalMax: 1, borderlineMax: 3, unit: 'mg/L' } },
        apob: { name: t('biomarker.apob.name'), what: t('biomarker.apob.what'), optimal: t('biomarker.apob.optimal'), borderline: t('biomarker.apob.borderline'), high: t('biomarker.apob.high'), factors: t('biomarker.apob.factors'), gauge: { value: 80, min: 40, max: 140, optimalMax: 80, borderlineMax: 100, unit: 'mg/dL' } },
    };
    
    const current = biomarkers[activeBiomarker];

    return (
        <AnimatedSection id="biomarkers">
            <SectionHeader title={t('biomarker.title')} description={t('biomarker.description')} />
            <div className="flex justify-center gap-2 mb-8 p-1 rounded-xl bg-slate-200 dark:bg-slate-800 w-max mx-auto">
                {Object.keys(biomarkers).map(key => (
                    <button key={key} onClick={() => setActiveBiomarker(key as BiomarkerKey)} className={`biomarker-tab px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${activeBiomarker === key ? 'active' : ''}`}>
                        {biomarkers[key as BiomarkerKey].name}
                    </button>
                ))}
            </div>
            <div className="grid lg:grid-cols-[2fr,3fr] gap-10 items-center bg-white/60 dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80">
                <BiomarkerGauge {...current.gauge} />
                <div className="space-y-4">
                    <p>{current.what}</p>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-brand-500/70"/>{current.optimal}</li>
                        <li className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-accent-500/70"/>{current.borderline}</li>
                        <li className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-red-500/70"/>{current.high}</li>
                    </ul>
                    <p className="text-xs text-slate-500">{current.factors}</p>
                </div>
            </div>
        </AnimatedSection>
    );
};
