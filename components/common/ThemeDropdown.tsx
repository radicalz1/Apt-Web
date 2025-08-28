import { useTheme } from '../../contexts/ThemeContext.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { Theme } from '../../types/index.ts';
import { Check } from 'lucide-react';
import { themeOptions } from '../../data/themeOptions.ts';

interface ThemeDropdownProps {
  isOpen: boolean;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeDropdown = ({ isOpen, onThemeChange }: ThemeDropdownProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className={`absolute top-full right-0 mt-2 w-64 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg p-2 z-10 transition-all duration-200 ease-out origin-top ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      role="menu"
    >
      <ul className="space-y-1">
        {themeOptions.map((option) => (
          <li key={option.value} role="none">
            <button
              onClick={() => onThemeChange(option.value)}
              role="menuitem"
              className="w-full flex items-center justify-between gap-3 text-left p-2 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {option.palette.map((color, i) => (
                    <div 
                      key={i} 
                      className="h-5 w-5 rounded-full ring-2 ring-white/80 dark:ring-slate-900/60"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span>{t(option.labelKey)}</span>
              </div>
              {theme === option.value && <Check size={16} className="text-accent-600 dark:text-accent-400" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};