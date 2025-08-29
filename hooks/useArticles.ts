import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { Article, Language } from '../types/index.ts';
import { processPostsForLanguage } from '../utils/articleUtils.ts';

export const getArticlesByLanguage = (language: Language): Article[] => {
    return processPostsForLanguage(language);
};

export const findArticleBySlug = (slug: string, language: Language): Article | undefined => {
    return getArticlesByLanguage(language).find(a => a.slug === slug);
}

export const useArticles = (): Article[] => {
  const { language } = useLanguage();
  return useMemo(() => getArticlesByLanguage(language), [language]);
};

export const useArticle = (slug: string | undefined): Article | undefined => {
  const articles = useArticles();
  return useMemo(() => {
    if (!slug) return undefined;
    return articles.find(a => a.slug === slug);
  }, [articles, slug]);
};