import React from 'react';
import { TimelineEntry } from '../../../../types';
import InputField from '../../common/InputField.tsx';
import TextareaField from '../../common/TextareaField.tsx';
import { XCircle } from 'lucide-react';

interface TimelineEntryCardProps {
  entry: TimelineEntry;
  onUpdate: (id: string, field: keyof Omit<TimelineEntry, 'id'>, value: string) => void;
  onRemove: (id: string) => void;
}

const TimelineEntryCard: React.FC<TimelineEntryCardProps> = ({ entry, onUpdate, onRemove }) => {
  return (
    <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4 relative">
      <button onClick={() => onRemove(entry.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
        <XCircle size={20} />
      </button>
      <InputField
        label="Age / Year"
        name="ageYear"
        value={entry.ageYear || ''}
        onChange={(e) => onUpdate(entry.id, 'ageYear', e.target.value)}
        placeholder="e.g., Age 25 / 2020"
      />
      <TextareaField
        label="Significant Life Event"
        name="event"
        value={entry.event || ''}
        onChange={(e) => onUpdate(entry.id, 'event', e.target.value)}
        placeholder="e.g., Major surgery, moved cities, high-stress job"
        rows={2}
      />
      <TextareaField
        label="Symptoms or Diagnosis that Appeared"
        name="symptoms"
        value={entry.symptoms || ''}
        onChange={(e) => onUpdate(entry.id, 'symptoms', e.target.value)}
        placeholder="e.g., Started experiencing fatigue, diagnosed with IBS"
        rows={2}
      />
    </div>
  );
};

export default TimelineEntryCard;
