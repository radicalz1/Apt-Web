import { useReadingPreferences } from '../../../contexts/ReadingPreferencesContext.tsx';
import { CaseSensitive } from 'lucide-react';
import { FontSize } from '../../../types/index.ts';

const fontSizes: { value: FontSize; label: string }[] = [
    { value: 'sm', label: 'Small' },
    { value: 'base', label: 'Medium' },
    { value: 'lg', label: 'Large' },
    { value: 'xl', label: 'X-Large' },
];

export const FontSizeControl = () => {
    const { fontSize, setFontSize } = useReadingPreferences();
    return (
        <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <CaseSensitive size={14}/> Font Size
            </label>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-200 dark:bg-slate-800">
                {fontSizes.map(size => (
                    <button 
                        key={size.value} 
                        onClick={() => setFontSize(size.value)} 
                        className={`flex-1 text-xs px-2 py-1 rounded-md ${fontSize === size.value ? 'bg-white dark:bg-slate-700 shadow-sm' : ''}`}
                    >
                        {size.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
