import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { MedicalHistoryData, MedicalCondition } from '../../../types';
import { MEDICAL_CONDITIONS } from '../../../data/questionnaireConstants.ts';
import CheckboxCard from '../common/CheckboxCard.tsx';
import TextareaField from '../common/TextareaField.tsx';

interface MedicalHistorySectionProps {
  data: MedicalHistoryData;
  onUpdate: (data: MedicalHistoryData) => void;
}

const ConditionCategory: React.FC<{
  title: string;
  categoryKey: keyof typeof MEDICAL_CONDITIONS;
  conditions: string[];
  selected: MedicalCondition[];
  otherValue: string;
  onToggle: (category: keyof typeof MEDICAL_CONDITIONS, condition: string, isChecked: boolean) => void;
  onOtherChange: (category: keyof typeof MEDICAL_CONDITIONS, value: string) => void;
}> = ({ title, categoryKey, conditions, selected, otherValue, onToggle, onOtherChange }) => (
  <details className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 transition-all open:shadow-md open:bg-slate-50 dark:open:bg-slate-800/20">
    <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
      {title}
      <span className="text-sm text-slate-500 transition-transform transform details-marker">{selected.length > 0 ? `${selected.length} selected` : 'Click to expand'}</span>
    </summary>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {conditions.map(condition => (
        <CheckboxCard
          key={condition}
          id={`${categoryKey}-${condition}`}
          name={categoryKey}
          value={condition}
          checked={selected.some(c => c.condition === condition)}
          onChange={(_, isChecked) => onToggle(categoryKey, condition, isChecked)}
          label={condition}
        />
      ))}
    </div>
    <TextareaField
      label={`Other ${title} Conditions`}
      name={`${categoryKey}-other`}
      value={otherValue}
      onChange={(e) => onOtherChange(categoryKey, e.target.value)}
      className="mt-4"
    />
  </details>
);

const MedicalHistorySection: React.FC<MedicalHistorySectionProps> = ({ data, onUpdate }) => {
  const handleToggle = (category: keyof typeof MEDICAL_CONDITIONS, condition: string, isChecked: boolean) => {
    const currentConditions = (data[category] as MedicalCondition[] || []);
    let updatedConditions: MedicalCondition[];

    if (isChecked) {
      if (!currentConditions.some(c => c.condition === condition)) {
        updatedConditions = [...currentConditions, { id: crypto.randomUUID(), condition }];
      } else {
        updatedConditions = currentConditions;
      }
    } else {
      updatedConditions = currentConditions.filter(c => c.condition !== condition);
    }
    onUpdate({ ...data, [category]: updatedConditions });
  };
  
  const handleOtherChange = (category: keyof typeof MEDICAL_CONDITIONS, value: string) => {
    onUpdate({ ...data, [`${category}Other`]: value });
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <SectionWrapper title="Medical History" subtitle="Please check any conditions you have been diagnosed with.">
      <div className="space-y-4">
        <ConditionCategory
          title="Autoimmune"
          categoryKey="autoimmune"
          conditions={MEDICAL_CONDITIONS.autoimmune}
          selected={data.autoimmune || []}
          otherValue={data.autoimmuneOther || ''}
          onToggle={handleToggle}
          onOtherChange={handleOtherChange}
        />
        <ConditionCategory
          title="Cardiovascular"
          categoryKey="cardiovascular"
          conditions={MEDICAL_CONDITIONS.cardiovascular}
          selected={data.cardiovascular || []}
          otherValue={data.cardiovascularOther || ''}
          onToggle={handleToggle}
          onOtherChange={handleOtherChange}
        />
        {/* Add more <ConditionCategory /> for other sections as needed */}
      </div>
      <TextareaField label="Surgeries" name="surgeries" value={data.surgeries || ''} onChange={handleTextareaChange} description="Please list any surgeries and the year they were performed." />
      <TextareaField label="Medication Allergies" name="medicationAllergies" value={data.medicationAllergies || ''} onChange={handleTextareaChange} description="Please list any known allergies to medications." />
    </SectionWrapper>
  );
};

export default MedicalHistorySection;