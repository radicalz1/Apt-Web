
import { Link } from 'react-router-dom';
import { Article } from '../../../types/index.ts';
import { BlogCardMeta } from '../BlogCardMeta.tsx';
import { BookmarkButton } from '../BookmarkButton.tsx';

export const FeaturedArticle = ({ article }: { article: Article }) => {
  return (
    <article className="my-12 grid md:grid-cols-2 gap-8 items-center p-6 rounded-3xl bg-slate-100/50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800">
      <Link to={`/blog/${article.slug}`} className="group block aspect-video rounded-2xl overflow-hidden">
        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </Link>
      <div>
        <div className="flex justify-between items-start">
          <span className="text-sm px-3 py-1 rounded-full bg-accent-100 text-accent-800 dark:bg-accent-900/40 dark:text-accent-200">Featured</span>
          <BookmarkButton slug={article.slug} />
        </div>
        <Link to={`/blog/${article.slug}`}>
          <h2 className="mt-4 font-display text-3xl font-bold hover:text-accent-600 dark:hover:text-accent-400">{article.title}</h2>
        </Link>
        <p className="mt-2 text-slate-600 dark:text-slate-300 line-clamp-3">{article.desc}</p>
        <BlogCardMeta article={article} />
      </div>
    </article>
  );
};
