import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { Theme } from '../../types/index.ts';
import { Palette } from 'lucide-react';
import { ThemeDropdown } from './ThemeDropdown.tsx';

export const ThemeSelector = () => {
  const { setTheme } = useTheme();
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
      <ThemeDropdown isOpen={isOpen} onThemeChange={handleThemeChange} />
    </div>
  );
};