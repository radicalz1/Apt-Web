import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { LifestyleDietData, SupplementEntry } from '../../../types';
import InputField from '../common/InputField.tsx';
import SelectField from '../common/SelectField.tsx';
import { PlusCircle, XCircle } from 'lucide-react';

interface LifestyleDietSectionProps {
  data: LifestyleDietData;
  onUpdate: (data: LifestyleDietData) => void;
}

const SupplementRow: React.FC<{
  supplement: SupplementEntry;
  onUpdate: (id: string, field: keyof SupplementEntry, value: string) => void;
  onRemove: (id: string) => void;
}> = ({ supplement, onUpdate, onRemove }) => (
  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4 relative">
    <button onClick={() => onRemove(supplement.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700"><XCircle size={20} /></button>
    <InputField label="Name" name="name" value={supplement.name} onChange={(e) => onUpdate(supplement.id, 'name', e.target.value)} />
    <InputField label="Dosage" name="dosage" value={supplement.dosage} onChange={(e) => onUpdate(supplement.id, 'dosage', e.target.value)} />
    <InputField label="Reason for taking" name="reason" value={supplement.reason} onChange={(e) => onUpdate(supplement.id, 'reason', e.target.value)} />
  </div>
);

const LifestyleDietSection: React.FC<LifestyleDietSectionProps> = ({ data, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  const supplements = data.supplements || [];

  const handleSupplementChange = (id: string, field: keyof SupplementEntry, value: string) => {
    const newSupplements = supplements.map(s => s.id === id ? { ...s, [field]: value } : s);
    onUpdate({ ...data, supplements: newSupplements });
  };

  const addSupplement = () => {
    onUpdate({ ...data, supplements: [...supplements, { id: crypto.randomUUID(), name: '', dosage: '', reason: '' }] });
  };

  const removeSupplement = (id: string) => {
    onUpdate({ ...data, supplements: supplements.filter(s => s.id !== id) });
  };

  return (
    <SectionWrapper title="Lifestyle: Diet & Nutrition" subtitle="Tell us about your eating habits.">
      <SelectField label="Typical Diet Pattern" name="dietPattern" value={data.dietPattern || ''} onChange={handleChange} options={[{value: 'omnivore', label: 'Omnivore'}, {value: 'vegetarian', label: 'Vegetarian'}, {value: 'vegan', label: 'Vegan'}]} />
      <InputField label="Meals per day" name="mealsPerDay" type="number" value={data.mealsPerDay || ''} onChange={handleChange} />
      <InputField label="Snacks per day" name="snacksPerDay" type="number" value={data.snacksPerDay || ''} onChange={handleChange} />
      <InputField label="Glasses of water per day" name="waterIntake" type="number" value={data.waterIntake || ''} onChange={handleChange} />
      <SelectField label="Caffeine Intake" name="caffeineIntake" value={data.caffeineIntake || ''} onChange={handleChange} options={[{value: 'none', label: 'None'}, {value: 'low', label: 'Low'}, {value: 'moderate', label: 'Moderate'}, {value: 'high', label: 'High'}]} />
      <SelectField label="Alcohol Intake" name="alcoholIntake" value={data.alcoholIntake || ''} onChange={handleChange} options={[{value: 'none', label: 'None'}, {value: 'rare', label: 'Rarely'}, {value: 'moderate', label: 'Moderately'}, {value: 'heavy', label: 'Heavily'}]} />
      
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Current Supplements</h3>
        {supplements.map(s => <SupplementRow key={s.id} supplement={s} onUpdate={handleSupplementChange} onRemove={removeSupplement} />)}
        <button onClick={addSupplement} className="flex items-center gap-2 text-accent-600 font-semibold mt-2"><PlusCircle size={18} /> Add Supplement</button>
      </div>
    </SectionWrapper>
  );
};

export default LifestyleDietSection;