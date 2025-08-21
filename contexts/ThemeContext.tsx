import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react';
import { Theme } from '../types/index.ts';
import { getInitialTheme } from '../utils/theme.ts';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, _setTheme] = useState<Theme>(getInitialTheme);

  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme.includes('dark')) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    _setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
