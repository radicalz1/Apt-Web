import { Link } from 'react-router-dom';
import { Article, ArticleAuthor } from '../../types/index.ts';
import { BookmarkButton } from './BookmarkButton.tsx';
import { BlogCardMeta } from './BlogCardMeta.tsx';
import { BlogCardTags } from './BlogCardTags.tsx';

interface BlogCardProps {
  article: Article;
  author?: ArticleAuthor;
  layout?: 'vertical' | 'horizontal' | 'horizontal-sm';
}

const Image = ({ article }: { article: Article }) => (
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

const HorizontalLayout = ({ article, author }: { article: Article, author?: ArticleAuthor }) => (
  <article className="grid sm:grid-cols-[1fr,1fr] gap-6 items-center">
    <Link to={`/blog/${article.slug}`} className="group block aspect-video rounded-2xl overflow-hidden">
      <Image article={article} />
    </Link>
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start">
        <span className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 w-max mb-2">{article.category}</span>
        <BookmarkButton slug={article.slug} />
      </div>
      <Link to={`/blog/${article.slug}`}><h3 className="font-semibold text-lg hover:text-accent-600 dark:hover:text-accent-400 -mt-2">{article.title}</h3></Link>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 flex-grow">{article.desc}</p>
      <BlogCardMeta article={article} author={author} />
    </div>
  </article>
);

const HorizontalSmLayout = ({ article, author }: { article: Article, author?: ArticleAuthor }) => (
  <article className="flex gap-4 items-center h-full">
    <Link to={`/blog/${article.slug}`} className="group block aspect-square rounded-2xl overflow-hidden w-24 flex-shrink-0">
      <Image article={article} />
    </Link>
    <div>
      <span className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 w-max mb-2">{article.category}</span>
      <Link to={`/blog/${article.slug}`}><h3 className="font-semibold text-md hover:text-accent-600 dark:hover:text-accent-400 leading-tight">{article.title}</h3></Link>
      <BlogCardMeta article={article} author={author} layout="horizontal" />
    </div>
  </article>
);

const VerticalLayout = ({ article, author }: { article: Article, author?: ArticleAuthor }) => (
  <Link to={`/blog/${article.slug}`} className="h-full">
    <article className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 overflow-hidden h-full hover:shadow-soft transition-shadow flex flex-col relative">
      <div className="absolute top-3 right-3 z-10"><BookmarkButton slug={article.slug} /></div>
      <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden"><Image article={article} /></div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 w-max mb-2">{article.category}</span>
        <h3 className="font-semibold">{article.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 flex-grow">{article.desc}</p>
        <BlogCardMeta article={article} author={author} layout="vertical" />
      </div>
    </article>
  </Link>
);

export const BlogCard = ({ article, author, layout = 'vertical' }: BlogCardProps) => {
  if (layout === 'horizontal') return <HorizontalLayout article={article} author={author} />;
  if (layout === 'horizontal-sm') return <HorizontalSmLayout article={article} author={author} />;
  return <VerticalLayout article={article} author={author} />;
};