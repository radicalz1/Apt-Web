export type Theme = 'light' | 'dark' | 'nature-light' | 'nature-dark' | 'high-contrast';
export type Language = 'id' | 'en';
export type Policy = 'terms' | 'privacy' | 'medical';

export type ToastMessage = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
};

export interface Poll {
    id: string;
    question: string;
    options: { id: string; text: string; }[];
}

export type ReadingBackgroundColor = 'white' | 'sepia' | 'gray' | 'dark';

export type ReadingPreferences = {
  fontSize: FontSize;
  lineHeight: LineHeight;
  backgroundColor: ReadingBackgroundColor;
};

export type FontSize = 'sm' | 'base' | 'lg' | 'xl';
export type LineHeight = 'normal' | 'relaxed' | 'loose';