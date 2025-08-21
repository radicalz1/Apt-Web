import { Link } from 'react-router-dom';
import { Article } from '../../types/index.ts';

interface BreadcrumbsProps {
  article: Article;
}

export const Breadcrumbs = ({ article }: BreadcrumbsProps) => {
  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: article.category, path: `/blog?category=${article.categoryKey}` },
    { label: article.title, path: `/blog/${article.slug}` },
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
      <ol className="flex items-center gap-2 flex-wrap">
        {crumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center gap-2">
            {index < crumbs.length - 1 ? (
              <Link to={crumb.path} className="hover:underline text-accent-700 dark:text-accent-300">
                {crumb.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-700 dark:text-slate-300" aria-current="page">
                {crumb.label}
              </span>
            )}
            {index < crumbs.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};