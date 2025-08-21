import { Theme } from '../types/index.ts';

export const getInitialTheme = (): Theme => {
  try {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (['light', 'dark', 'nature-light', 'nature-dark', 'high-contrast'].includes(storedTheme)) {
      return storedTheme;
    }
    return 'nature-light';
  } catch {
    return 'nature-light';
  }
};