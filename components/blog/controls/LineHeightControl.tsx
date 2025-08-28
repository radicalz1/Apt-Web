import { useReadingPreferences } from '../../../contexts/ReadingPreferencesContext.tsx';
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { LineHeight } from '../../../types/index.ts';

const lineHeights: { value: LineHeight; icon: React.ReactNode }[] = [
    { value: 'normal', icon: <AlignLeft size={16}/> },
    { value: 'relaxed', icon: <AlignCenter size={16}/> },
    { value: 'loose', icon: <AlignRight size={16}/> },
];

export const LineHeightControl = () => {
    const { lineHeight, setLineHeight } = useReadingPreferences();
    return (
        <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <AlignLeft size={14}/> Line Height
            </label>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-200 dark:bg-slate-800">
                {lineHeights.map(height => (
                    <button 
                        key={height.value} 
                        onClick={() => setLineHeight(height.value)} 
                        className={`flex-1 text-xs px-2 py-1 rounded-md flex items-center justify-center gap-1 ${lineHeight === height.value ? 'bg-white dark:bg-slate-700 shadow-sm' : ''}`}
                    >
                        {height.icon}
                    </button>
                ))}
            </div>
        </div>
    );
};
