import { useReadingPreferences } from '../../contexts/ReadingPreferencesContext.tsx';
import { AlignLeft, AlignCenter, AlignRight, CaseSensitive } from 'lucide-react';

export const ReadingPreferencesControl = () => {
  const { fontSize, setFontSize, lineHeight, setLineHeight } = useReadingPreferences();

  const fontSizes = [
    { value: 'sm', label: 'Small' },
    { value: 'base', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'X-Large' },
  ];

  const lineHeights = [
    { value: 'normal', icon: <AlignLeft size={16}/>, label: 'Normal' },
    { value: 'relaxed', icon: <AlignCenter size={16}/>, label: 'Relaxed' },
    { value: 'loose', icon: <AlignRight size={16}/>, label: 'Loose' },
  ];

  return (
    <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/40 space-y-4">
      <h3 className="font-semibold text-sm">Reading Preferences</h3>
      <div className="grid gap-2">
        <label className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2"><CaseSensitive size={14}/> Font Size</label>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-200 dark:bg-slate-800">
          {fontSizes.map(size => (
            <button key={size.value} onClick={() => setFontSize(size.value as any)} className={`flex-1 text-xs px-2 py-1 rounded-md ${fontSize === size.value ? 'bg-white dark:bg-slate-700 shadow-sm' : ''}`}>
              {size.label}
            </button>
          ))}
        </div>
      </div>
       <div className="grid gap-2">
        <label className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2"><AlignLeft size={14}/> Line Height</label>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-200 dark:bg-slate-800">
          {lineHeights.map(height => (
            <button key={height.value} onClick={() => setLineHeight(height.value as any)} className={`flex-1 text-xs px-2 py-1 rounded-md flex items-center justify-center gap-1 ${lineHeight === height.value ? 'bg-white dark:bg-slate-700 shadow-sm' : ''}`}>
              {height.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
