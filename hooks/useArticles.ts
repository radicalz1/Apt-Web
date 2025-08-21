import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext.tsx';
import { articlesContentData as articlesContentIdData } from '../data/articles/articlesContent.id.ts';
import { articlesContentData as articlesContentEnData } from '../data/articles/articlesContent.en.ts';
import { articlesViewsData } from '../data/articles/articlesViews.ts';
import { Article, Language } from '../types/index.ts';

const viewsMap = new Map(articlesViewsData.map(item => [item.slug, { views: item.views, trending: item.trending }]));

const mergeArticleData = (contentData: Omit<Article, 'views' | 'trending'>[]): Article[] => {
  return contentData.map(article => {
    const extraData = viewsMap.get(article.slug);
    return {
      ...article,
      views: extraData?.views || 0,
      trending: extraData?.trending || 'stable',
    };
  });
};

export const getArticlesByLanguage = (language: Language): Article[] => {
    const contentData = language === 'id' ? articlesContentIdData : articlesContentEnData;
    return mergeArticleData(contentData);
};

export const useArticles = (): Article[] => {
  const { language } = useLanguage();

  const articles = useMemo(() => {
    return getArticlesByLanguage(language);
  }, [language]);

  return articles;
};

export const useArticle = (slug: string | undefined): Article | undefined => {
  const articles = useArticles();
  return useMemo(() => {
    if (!slug) return undefined;
    return articles.find(a => a.slug === slug);
  }, [articles, slug]);
};
