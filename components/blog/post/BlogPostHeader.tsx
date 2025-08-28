import { Article, ArticleAuthor } from '../../../types/index.ts';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { useReadingTime } from '../../../hooks/useReadingTime.ts';
import { formatDate } from '../../../utils/date.ts';

interface BlogPostHeaderProps {
  article: Article;
  author: ArticleAuthor;
}

export const BlogPostHeader = ({ article, author }: BlogPostHeaderProps) => {
  const readingTime = useReadingTime(article.content);

  return (
    <header className="mb-8">
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold !leading-tight">{article.title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
        <Link to={`/blog/author/${author.id}`} className="flex items-center gap-2 hover:text-accent-600">
          <img src={author.avatarUrl} alt={author.name} className="h-8 w-8 rounded-full" />
          <span>{author.name}</span>
        </Link>
        <span>{formatDate(article.publishDate, 'long')}</span>
        <span className="flex items-center gap-1"><Clock size={14}/> {readingTime} min read</span>
      </div>
    </header>
  );
};
