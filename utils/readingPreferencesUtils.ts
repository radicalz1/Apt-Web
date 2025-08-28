import { ReadingPreferences } from '../types/index.ts';

export const getInitialPreferences = (): ReadingPreferences => {
  try {
    const stored = localStorage.getItem('reading_preferences');
    const defaultPrefs: ReadingPreferences = { fontSize: 'base', lineHeight: 'relaxed', backgroundColor: 'white' };
    return stored ? { ...defaultPrefs, ...JSON.parse(stored) } : defaultPrefs;
  } catch {
    return { fontSize: 'base', lineHeight: 'relaxed', backgroundColor: 'white' };
  }
};