import React from 'react';
import { FamilyHistoryEntry } from '../../../../types';
import { MEDICAL_CONDITIONS, FAMILY_RELATIONSHIP_OPTIONS } from '../../../../data/questionnaireConstants';
import SelectField from '../../common/SelectField';
import { XCircle } from 'lucide-react';

interface FamilyHistoryEntryRowProps {
  entry: FamilyHistoryEntry;
  onUpdate: (id: string, field: keyof Omit<FamilyHistoryEntry, 'id'>, value: string) => void;
  onRemove: (id: string) => void;
}

const allConditions = Object.values(MEDICAL_CONDITIONS).flat().map(c => ({ value: c, label: c }));

const FamilyHistoryEntryRow: React.FC<FamilyHistoryEntryRowProps> = ({ entry, onUpdate, onRemove }) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_auto] gap-4 items-end p-4 border border-slate-200 dark:border-slate-700 rounded-xl">
      <SelectField
        label="Relative"
        name="relative"
        value={entry.relative || ''}
        onChange={(e) => onUpdate(entry.id, 'relative', e.target.value)}
        options={FAMILY_RELATIONSHIP_OPTIONS}
      />
      <SelectField
        label="Condition"
        name="condition"
        value={entry.condition || ''}
        onChange={(e) => onUpdate(entry.id, 'condition', e.target.value)}
        options={allConditions}
      />
      <button onClick={() => onRemove(entry.id)} className="text-red-500 hover:text-red-700 h-11">
        <XCircle size={20} />
      </button>
    </div>
  );
};

export default FamilyHistoryEntryRow;
