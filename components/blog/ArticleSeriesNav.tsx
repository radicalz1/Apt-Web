import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types/index.ts';
import { useArticles } from '../../hooks/useArticles.ts';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ArticleSeriesNavProps {
  currentArticle: Article;
}

export const ArticleSeriesNav = ({ currentArticle }: ArticleSeriesNavProps) => {
  const { series } = currentArticle;
  const articlesData = useArticles();

  const { previousArticle, nextArticle, seriesArticles } = useMemo(() => {
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

  if (!series) return null;

  return (
    <div className="my-12 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
      <h3 className="font-semibold">Part of the series: {series.title}</h3>
      <p className="text-sm text-slate-500">
        Article {series.order} of {seriesArticles.length}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {previousArticle ? (
          <Link to={`/blog/${previousArticle.slug}`} className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
            <div className="flex items-center gap-2 text-sm text-slate-500"><ArrowLeft size={16}/> Previous</div>
            <p className="font-medium text-slate-800 dark:text-slate-200">{previousArticle.title}</p>
          </Link>
        ) : <div/>}
        {nextArticle ? (
          <Link to={`/blog/${nextArticle.slug}`} className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-right">
            <div className="flex items-center justify-end gap-2 text-sm text-slate-500">Next <ArrowRight size={16}/></div>
            <p className="font-medium text-slate-800 dark:text-slate-200">{nextArticle.title}</p>
          </Link>
        ) : <div/>}
      </div>
    </div>
  );
};
