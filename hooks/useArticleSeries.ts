import { useMemo } from 'react';
import { Article } from '../types/index.ts';
import { useArticles } from './useArticles.ts';

export const useArticleSeries = (currentArticle: Article) => {
  const { series } = currentArticle;
  const articlesData = useArticles();

  return useMemo(() => {
    if (!series) return { previousArticle: null, nextArticle: null, seriesArticles: [] };
    
    const articlesInSeries = articlesData
      .filter(a => a.series?.id === series.id)
      .sort((a, b) => (a.series?.order || 0) - (b.series?.order || 0));

    const currentIndex = articlesInSeries.findIndex(a => a.slug === currentArticle.slug);
    
    return {
      previousArticle: currentIndex > 0 ? articlesInSeries[currentIndex - 1] : null,
      nextArticle: currentIndex < articlesInSeries.length - 1 ? articlesInSeries[currentIndex + 1] : null,
      seriesArticles: articlesInSeries
    };
  }, [currentArticle, series, articlesData]);
};
