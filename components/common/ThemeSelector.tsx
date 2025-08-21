import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { Theme } from '../../types/index.ts';
import { Palette, Check } from 'lucide-react';

// Define theme options with literal HSL color values for accurate previews,
// matching the definitions in index.css.
const themeOptions: { value: Theme; labelKey: string; palette: string[] }[] = [
  { 
    value: 'light', 
    labelKey: 'themeSelector.light', 
    palette: ['hsl(221 72% 53%)', 'hsl(41 89% 48%)', 'hsl(220 20% 97%)', 'hsl(220 13% 25%)'] 
  },
  { 
    value: 'dark', 
    labelKey: 'themeSelector.dark', 
    palette: ['hsl(222 65% 56%)', 'hsl(36 84% 53%)', 'hsl(224 23% 7%)', 'hsl(220 13% 91%)'] 
  },
  { 
    value: 'nature-light', 
    labelKey: 'themeSelector.natureLight', 
    palette: ['hsl(78 80% 28%)', 'hsl(68 64% 56%)', 'hsl(53 25% 96%)', 'hsl(78 30% 13%)'] 
  },
  { 
    value: 'nature-dark', 
    labelKey: 'themeSelector.natureDark', 
    palette: ['hsl(78 37% 63%)', 'hsl(68 41% 65%)', 'hsl(78 12% 14%)', 'hsl(78 16% 81%)'] 
  },
  { 
    value: 'high-contrast', 
    labelKey: 'themeSelector.highContrast', 
    palette: ['hsl(0 0% 100%)', 'hsl(60 100% 50%)', 'hsl(200 100% 50%)', 'hsl(0 0% 0%)'] 
  },
];

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={t('themeSelector.label')} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">
        <Palette size={20} />
      </button>
      <div
        className={`absolute top-full right-0 mt-2 w-64 rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg p-2 z-10 transition-all duration-200 ease-out origin-top ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
        role="menu"
      >
        <ul className="space-y-1">
          {themeOptions.map((option) => (
            <li key={option.value} role="none">
              <button
                onClick={() => handleThemeChange(option.value)}
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
    </div>
  );
};
