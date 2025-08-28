import { Theme } from '../types/index.ts';

export const themeOptions: { value: Theme; labelKey: string; palette: string[] }[] = [
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
