import { useLanguage } from '../contexts/LanguageContext.tsx';
import { translations } from '../data/translations/index.ts';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      result = result[k];
      if (result === undefined) {
        return key; // Return key if not found
      }
    }
    return result;
  };

  return { t, language };
};
