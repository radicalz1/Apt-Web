import React, { createContext, useContext, useState, useEffect } from 'react';
import { ReadingPreferences, FontSize, LineHeight, ReadingBackgroundColor } from '../types/index.ts';
import { getInitialPreferences } from '../utils/readingPreferencesUtils.ts';

interface ReadingPreferencesContextType extends ReadingPreferences {
  setFontSize: (size: FontSize) => void;
  setLineHeight: (height: LineHeight) => void;
  setBackgroundColor: (color: ReadingBackgroundColor) => void;
}

const ReadingPreferencesContext = createContext<ReadingPreferencesContextType | undefined>(undefined);

export const ReadingPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [prefs, setPrefs] = useState<ReadingPreferences>(getInitialPreferences);

  useEffect(() => {
    localStorage.setItem('reading_preferences', JSON.stringify(prefs));
    document.documentElement.style.setProperty('--prose-font-size', `var(--font-size-${prefs.fontSize})`);
    document.documentElement.style.setProperty('--prose-line-height', `var(--line-height-${prefs.lineHeight})`);
    document.body.setAttribute('data-reading-theme', prefs.backgroundColor);
  }, [prefs]);

  const setFontSize = (fontSize: FontSize) => setPrefs(p => ({ ...p, fontSize }));
  const setLineHeight = (lineHeight: LineHeight) => setPrefs(p => ({ ...p, lineHeight }));
  const setBackgroundColor = (backgroundColor: ReadingBackgroundColor) => setPrefs(p => ({ ...p, backgroundColor}));

  return (
    <ReadingPreferencesContext.Provider value={{ ...prefs, setFontSize, setLineHeight, setBackgroundColor }}>
      {children}
    </ReadingPreferencesContext.Provider>
  );
};

export const useReadingPreferences = () => {
  const context = useContext(ReadingPreferencesContext);
  if (context === undefined) {
    throw new Error('useReadingPreferences must be used within a ReadingPreferencesProvider');
  }
  return context;
};