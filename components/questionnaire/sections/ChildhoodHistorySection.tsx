import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { ChildhoodHistoryData } from '../../../types';
import { 
  BIRTH_STATUS_OPTIONS,
  DELIVERY_METHOD_OPTIONS,
  YES_NO_MIXED_OPTIONS,
  CHILDHOOD_ILLNESSES_OPTIONS,
  ACE_OPTIONS,
} from '../../../data/questionnaireConstants.ts';
import SelectField from '../common/SelectField.tsx';
import CheckboxCard from '../common/CheckboxCard.tsx';
import TextareaField from '../common/TextareaField.tsx';

interface ChildhoodHistorySectionProps {
  data: ChildhoodHistoryData;
  onUpdate: (data: ChildhoodHistoryData) => void;
}

const ChildhoodHistorySection: React.FC<ChildhoodHistorySectionProps> = ({ data, onUpdate }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (group: keyof ChildhoodHistoryData, value: string, isChecked: boolean) => {
    const current = (data[group] as string[] || []);
    const updated = isChecked ? [...current, value] : current.filter(c => c !== value);
    onUpdate({ ...data, [group]: updated });
  }
  
  const handleOtherChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onUpdate({ ...data, childhoodIllnessesOther: e.target.value });
  }

  return (
    <SectionWrapper title="Childhood History" subtitle="Information about your early life can provide important clues.">
      <SelectField label="Birth Status" name="birthStatus" options={BIRTH_STATUS_OPTIONS} value={data.birthStatus || ''} onChange={handleSelectChange} />
      <SelectField label="Delivery Method" name="deliveryMethod" options={DELIVERY_METHOD_OPTIONS} value={data.deliveryMethod || ''} onChange={handleSelectChange} />
      <SelectField label="Were you breastfed?" name="breastfed" options={YES_NO_MIXED_OPTIONS} value={data.breastfed || ''} onChange={handleSelectChange} />

      <div className="space-y-2 mt-4">
        <p className="font-medium text-slate-700 dark:text-slate-300">Recurrent Childhood Illnesses:</p>
        <div className="grid grid-cols-2 gap-3">
          {CHILDHOOD_ILLNESSES_OPTIONS.map(illness => (
            <CheckboxCard key={illness} id={`illness-${illness}`} name="childhoodIllnesses" value={illness} checked={(data.childhoodIllnesses || []).includes(illness)} onChange={(_, checked) => handleCheckboxChange('childhoodIllnesses', illness, checked)} label={illness} />
          ))}
        </div>
        <TextareaField label="Other Childhood Illnesses" name="childhoodIllnessesOther" value={data.childhoodIllnessesOther || ''} onChange={handleOtherChange} />
      </div>

      <div className="space-y-2 mt-4">
        <p className="font-medium text-slate-700 dark:text-slate-300">Adverse Childhood Experiences (ACEs):</p>
        <div className="grid grid-cols-1 gap-3">
          {ACE_OPTIONS.map(ace => (
            <CheckboxCard key={ace} id={`ace-${ace}`} name="aces" value={ace} checked={(data.aces || []).includes(ace)} onChange={(_, checked) => handleCheckboxChange('aces', ace, checked)} label={ace} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ChildhoodHistorySection;