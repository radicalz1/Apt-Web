import { useMemo } from 'react';
import { useArticles } from '../../hooks/useArticles.ts';
import { Article } from '../../types/index.ts';
import { Section } from '../common/Section.tsx';
import { BlogCard } from './BlogCard.tsx';

interface RelatedArticlesProps {
  currentSlug: string;
  categoryKey: Article['categoryKey'];
}

export const RelatedArticles = ({ currentSlug, categoryKey }: RelatedArticlesProps) => {
  const articlesData = useArticles();
  
  const related = useMemo(() => {
    return articlesData
      .filter(a => a.categoryKey === categoryKey && a.slug !== currentSlug)
      .slice(0, 3);
  }, [currentSlug, categoryKey, articlesData]);

  if (related.length === 0) return null;

  return (
    <Section className="bg-slate-100/60 dark:bg-slate-900/30 border-t border-slate-200/70 dark:border-slate-800">
      <h2 className="font-display text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map(article => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
};
