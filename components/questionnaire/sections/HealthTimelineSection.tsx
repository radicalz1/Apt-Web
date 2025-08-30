import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { HealthTimelineData, TimelineEntry } from '../../../types';
import TimelineEntryCard from './common/TimelineEntryCard.tsx';
import { PlusCircle } from 'lucide-react';

interface HealthTimelineSectionProps {
  data: HealthTimelineData;
  onUpdate: (data: HealthTimelineData) => void;
}

const HealthTimelineSection: React.FC<HealthTimelineSectionProps> = ({ data, onUpdate }) => {
  const entries = data.entries || [];

  const handleAddEntry = () => {
    const newEntry: TimelineEntry = { id: crypto.randomUUID(), ageYear: '', event: '', symptoms: '' };
    onUpdate({ ...data, entries: [...entries, newEntry] });
  };

  const handleRemoveEntry = (id: string) => {
    onUpdate({ ...data, entries: entries.filter(entry => entry.id !== id) });
  };

  const handleUpdateEntry = (id: string, field: keyof Omit<TimelineEntry, 'id'>, value: string) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id ? { ...entry, [field]: value } : entry
    );
    onUpdate({ ...data, entries: updatedEntries });
  };

  return (
    <SectionWrapper title="Health Timeline" subtitle="Map out significant events and symptoms throughout your life.">
      <div className="space-y-4">
        {entries.map(entry => (
          <TimelineEntryCard
            key={entry.id}
            entry={entry}
            onUpdate={handleUpdateEntry}
            onRemove={handleRemoveEntry}
          />
        ))}
      </div>
      <button onClick={handleAddEntry} className="flex items-center gap-2 text-accent-600 font-semibold mt-4">
        <PlusCircle size={18} /> Add Timeline Event
      </button>
    </SectionWrapper>
  );
};

export default HealthTimelineSection;