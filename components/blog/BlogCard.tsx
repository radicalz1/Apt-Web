import { Link } from 'react-router-dom';
import { Article } from '../../types/index.ts';
import { formatDate } from '../../utils/date.ts';
import { useReadingTime } from '../../hooks/useReadingTime.ts';
import { ThumbsUp, Clock } from 'lucide-react';
import { BookmarkButton } from './BookmarkButton.tsx';

interface BlogCardProps {
  article: Article;
  layout?: 'vertical' | 'horizontal';
}

export const BlogCard = ({ article, layout = 'vertical' }: BlogCardProps) => {
  const readingTime = useReadingTime(article.content);

  const imagePlaceholder = (
    <div className="w-full h-full bg-slate-200 dark:bg-slate-800 grid place-items-center">
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        loading="lazy" 
        decoding="async" 
      />
    </div>
  );

  if (layout === 'horizontal') {
    return (
      <article className="grid sm:grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 items-center">
        <Link to={`/blog/${article.slug}`} className="group block aspect-video sm:aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden">
          {imagePlaceholder}
        </Link>
        <div>
          <div className="flex justify-between items-start">
            <span className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 w-max mb-2">{article.category}</span>
            <BookmarkButton slug={article.slug} />
          </div>
          <Link to={`/blog/${article.slug}`}><h3 className="font-semibold text-lg hover:text-accent-600 dark:hover:text-accent-400 -mt-2">{article.title}</h3></Link>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{article.desc}</p>
          <div className="mt-3 text-xs text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{formatDate(article.publishDate)}</span>
            <span className="flex items-center gap-1"><Clock size={12}/> {readingTime} min read</span>
            <span className="flex items-center gap-1"><ThumbsUp size={12}/> {article.claps.toLocaleString()}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <Link key={tag} to={`/blog/tag/${tag}`} className="text-xs px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600">
                # {tag}
              </Link>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <Link to={`/blog/${article.slug}`} className="h-full">
      <article className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 overflow-hidden h-full hover:shadow-soft transition-shadow flex flex-col relative">
        <div className="absolute top-3 right-3 z-10">
            <BookmarkButton slug={article.slug} />
        </div>
        <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
          {imagePlaceholder}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <span className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 w-max mb-2">{article.category}</span>
          <h3 className="font-semibold">{article.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 flex-grow">{article.desc}</p>
          <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
            <span>{formatDate(article.publishDate)}</span> &middot; <span>{readingTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
