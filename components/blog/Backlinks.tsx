import { useMemo } from 'react';
import { useArticles } from '../../hooks/useArticles.ts';
import { Link } from 'react-router-dom';

interface BacklinksProps {
  articleSlug: string;
}

export const Backlinks = ({ articleSlug }: BacklinksProps) => {
  const allArticles = useArticles();

  const linkingArticles = useMemo(() => {
    return allArticles.filter(article => {
      if (article.slug === articleSlug) return false;
      const wikiLinkPattern = new RegExp(`\\[\\[${articleSlug}\\]\\]`, 'g');
      return wikiLinkPattern.test(article.content);
    });
  }, [allArticles, articleSlug]);

  if (linkingArticles.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
      <h3 className="font-semibold text-lg">Linked From</h3>
      <ul className="mt-3 space-y-2 list-disc pl-5">
        {linkingArticles.map(article => (
          <li key={article.slug}>
            <Link to={`/blog/${article.slug}`} className="text-accent-700 dark:text-accent-300 hover:underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};