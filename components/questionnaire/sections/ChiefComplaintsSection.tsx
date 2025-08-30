import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { ChiefComplaintsData, Complaint } from '../../../types/index.ts';
import InputField from '../common/InputField.tsx';
import TextareaField from '../common/TextareaField.tsx';
import { PlusCircle, XCircle } from 'lucide-react';

interface ChiefComplaintsSectionProps {
  data: ChiefComplaintsData;
  onUpdate: (data: ChiefComplaintsData) => void;
}

const ComplaintRow: React.FC<{
  complaint: Complaint;
  index: number;
  onUpdate: (index: number, field: keyof Complaint, value: any) => void;
  onRemove: (index: number) => void;
  isRemovable: boolean;
}> = ({ complaint, index, onUpdate, onRemove, isRemovable }) => (
  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4 relative">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-slate-800 dark:text-slate-200">Complaint #{index + 1}</h3>
      {isRemovable && (
        <button onClick={() => onRemove(index)} className="text-red-500 hover:text-red-700">
          <XCircle size={20} />
        </button>
      )}
    </div>
    <TextareaField
      label="Describe the complaint"
      name={`description-${index}`}
      value={complaint.description || ''}
      onChange={(e) => onUpdate(index, 'description', e.target.value)}
      required
    />
    <InputField
      label="When did it start?"
      name={`onset-${index}`}
      value={complaint.onset || ''}
      onChange={(e) => onUpdate(index, 'onset', e.target.value)}
      placeholder="e.g., 2 weeks ago, January 2023"
      required
    />
    <div>
      <label className="block text-sm font-medium">Severity (1-10)</label>
      <div className="flex items-center gap-4">
        <input
          type="range"
          min="1"
          max="10"
          value={complaint.severity || 5}
          onChange={(e) => onUpdate(index, 'severity', parseInt(e.target.value))}
          className="w-full"
        />
        <span className="font-bold text-lg text-brand-600">{complaint.severity || 5}</span>
      </div>
    </div>
  </div>
);

const ChiefComplaintsSection: React.FC<ChiefComplaintsSectionProps> = ({ data, onUpdate }) => {
  const complaints = data.complaints || [{ id: 'c1' }];

  const handleComplaintChange = (index: number, field: keyof Complaint, value: any) => {
    const newComplaints = [...complaints];
    newComplaints[index] = { ...newComplaints[index], [field]: value };
    onUpdate({ ...data, complaints: newComplaints });
  };

  const addComplaint = () => {
    if (complaints.length < 3) {
      onUpdate({ ...data, complaints: [...complaints, { id: crypto.randomUUID() }] });
    }
  };

  const removeComplaint = (index: number) => {
    const newComplaints = complaints.filter((_, i) => i !== index);
    onUpdate({ ...data, complaints: newComplaints });
  };
  
  const handleFieldChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper title="Chief Complaints & Health Goals" subtitle="What are the main issues you're facing?">
      {complaints.map((c, i) => (
        <ComplaintRow
          key={c.id}
          complaint={c}
          index={i}
          onUpdate={handleComplaintChange}
          onRemove={removeComplaint}
          isRemovable={complaints.length > 1}
        />
      ))}
      {complaints.length < 3 && (
        <button onClick={addComplaint} className="flex items-center gap-2 text-accent-600 font-semibold">
          <PlusCircle size={18} /> Add another complaint
        </button>
      )}

      <TextareaField label="What do you hope to achieve from this consultation?" name="consultationExpectations" value={data.consultationExpectations || ''} onChange={handleFieldChange} />
      <TextareaField label="What are your specific short-term and long-term health goals?" name="healthGoals" value={data.healthGoals || ''} onChange={handleFieldChange} />
      <TextareaField label="What have you tried previously for these complaints?" name="previousTreatments" value={data.previousTreatments || ''} onChange={handleFieldChange} description="Include medications, supplements, therapies, etc."/>
      <TextareaField label="What makes your complaints worse?" name="worseningFactors" value={data.worseningFactors || ''} onChange={handleFieldChange} description="e.g., certain foods, stress, activities" />
      <TextareaField label="What makes your complaints better?" name="improvingFactors" value={data.improvingFactors || ''} onChange={handleFieldChange} description="e.g., rest, specific foods, medication" />
    </SectionWrapper>
  );
};

export default ChiefComplaintsSection;
