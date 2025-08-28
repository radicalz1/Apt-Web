import { FontSizeControl } from './controls/FontSizeControl.tsx';
import { LineHeightControl } from './controls/LineHeightControl.tsx';
import { BackgroundColorControl } from './controls/BackgroundColorControl.tsx';

export const ReadingPreferencesControl = () => {
  return (
    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/40 space-y-4">
      <h3 className="font-semibold text-sm">Reading Preferences</h3>
      <FontSizeControl />
      <LineHeightControl />
      <BackgroundColorControl />
    </div>
  );
};