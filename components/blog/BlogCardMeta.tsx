import { Article, ArticleAuthor } from '../../types/index.ts';
import { formatDate } from '../../utils/date.ts';
import { useReadingTime } from '../../hooks/useReadingTime.ts';
import { Clock } from 'lucide-react';

interface BlogCardMetaProps {
  article: Article;
  author?: ArticleAuthor;
  layout?: 'vertical' | 'horizontal';
}

export const BlogCardMeta = ({ article, author, layout = 'horizontal' }: BlogCardMetaProps) => {
  const readingTime = useReadingTime(article.content);

  if (layout === 'vertical') {
    return (
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
        {author && (
            <img src={author.avatarUrl} alt={author.name} className="h-10 w-10 rounded-full" />
        )}
        <div className="text-xs text-slate-500">
          {author && <div className="font-semibold text-slate-700 dark:text-slate-200">{author.name}</div>}
          <div>{formatDate(article.publishDate)} &middot; {readingTime} min read</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3 text-xs text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
       {author && (
          <div className="flex items-center gap-1.5">
              <img src={author.avatarUrl} alt={author.name} className="h-5 w-5 rounded-full" />
              <span className="text-slate-600 dark:text-slate-300">{author.name}</span>
          </div>
      )}
      <span className="flex items-center gap-1"><Clock size={12}/> {readingTime} min read</span>
    </div>
  );
};