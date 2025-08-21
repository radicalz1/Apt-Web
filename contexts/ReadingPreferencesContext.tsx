import React, { createContext, useContext, useState, useEffect } from 'react';

type FontSize = 'sm' | 'base' | 'lg' | 'xl';
type LineHeight = 'normal' | 'relaxed' | 'loose';

interface ReadingPreferences {
  fontSize: FontSize;
  lineHeight: LineHeight;
}

interface ReadingPreferencesContextType extends ReadingPreferences {
  setFontSize: (size: FontSize) => void;
  setLineHeight: (height: LineHeight) => void;
}

const ReadingPreferencesContext = createContext<ReadingPreferencesContextType | undefined>(undefined);

const getInitialPreferences = (): ReadingPreferences => {
  try {
    const stored = localStorage.getItem('reading_preferences');
    const defaultPrefs: ReadingPreferences = { fontSize: 'base', lineHeight: 'relaxed' };
    return stored ? { ...defaultPrefs, ...JSON.parse(stored) } : defaultPrefs;
  } catch {
    return { fontSize: 'base', lineHeight: 'relaxed' };
  }
};

export const ReadingPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [prefs, setPrefs] = useState<ReadingPreferences>(getInitialPreferences);

  useEffect(() => {
    localStorage.setItem('reading_preferences', JSON.stringify(prefs));
    document.documentElement.style.setProperty('--prose-font-size', `var(--font-size-${prefs.fontSize})`);
    document.documentElement.style.setProperty('--prose-line-height', `var(--line-height-${prefs.lineHeight})`);
  }, [prefs]);

  const setFontSize = (fontSize: FontSize) => setPrefs(p => ({ ...p, fontSize }));
  const setLineHeight = (lineHeight: LineHeight) => setPrefs(p => ({ ...p, lineHeight }));

  return (
    <ReadingPreferencesContext.Provider value={{ ...prefs, setFontSize, setLineHeight }}>
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
