import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { FamilyHistoryData, FamilyHistoryEntry } from '../../../types';
import FamilyHistoryEntryRow from './common/FamilyHistoryEntryRow.tsx';
import { PlusCircle } from 'lucide-react';

interface FamilyHistorySectionProps {
  data: FamilyHistoryData;
  onUpdate: (data: FamilyHistoryData) => void;
}

const FamilyHistorySection: React.FC<FamilyHistorySectionProps> = ({ data, onUpdate }) => {
  const entries = data.entries || [];

  const handleAddEntry = () => {
    const newEntry: FamilyHistoryEntry = { id: crypto.randomUUID(), condition: '', relative: '' };
    onUpdate({ ...data, entries: [...entries, newEntry] });
  };

  const handleRemoveEntry = (id: string) => {
    onUpdate({ ...data, entries: entries.filter(entry => entry.id !== id) });
  };

  const handleUpdateEntry = (id: string, field: keyof Omit<FamilyHistoryEntry, 'id'>, value: string) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id ? { ...entry, [field]: value } : entry
    );
    onUpdate({ ...data, entries: updatedEntries });
  };

  return (
    <SectionWrapper title="Family History" subtitle="List any significant health conditions of your immediate family members.">
      <div className="space-y-4">
        {entries.map(entry => (
          <FamilyHistoryEntryRow
            key={entry.id}
            entry={entry}
            onUpdate={handleUpdateEntry}
            onRemove={handleRemoveEntry}
          />
        ))}
      </div>
      <button onClick={handleAddEntry} className="flex items-center gap-2 text-accent-600 font-semibold mt-4">
        <PlusCircle size={18} /> Add Family Member Condition
      </button>
    </SectionWrapper>
  );
};

export default FamilyHistorySection;