import { useReadingPreferences } from '../../../contexts/ReadingPreferencesContext.tsx';
import { Droplets } from 'lucide-react';
import { ReadingBackgroundColor } from '../../../types/index.ts';

const backgroundOptions: { value: ReadingBackgroundColor; label: string; color: string }[] = [
    { value: 'white', label: 'White', color: '#FFFFFF' },
    { value: 'sepia', label: 'Sepia', color: '#fbf5e9' },
    { value: 'gray', label: 'Gray', color: '#e5e5e5' },
    { value: 'dark', label: 'Dark', color: '#1a1a1a' },
];

export const BackgroundColorControl = () => {
    const { backgroundColor, setBackgroundColor } = useReadingPreferences();
    return (
        <div className="grid gap-2">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <Droplets size={14}/> Background
            </label>
            <div className="flex items-center gap-2">
                {backgroundOptions.map(option => (
                    <button 
                        key={option.value} 
                        onClick={() => setBackgroundColor(option.value)}
                        aria-label={`Set background to ${option.label}`}
                        className={`h-7 w-7 rounded-full ring-2 transition ${backgroundColor === option.value ? 'ring-accent-500 ring-offset-2' : 'ring-transparent hover:ring-slate-300 dark:hover:ring-slate-600'}`}
                        style={{ backgroundColor: option.color, border: '1px solid rgba(0,0,0,0.1)' }}
                    />
                ))}
            </div>
        </div>
    );
};