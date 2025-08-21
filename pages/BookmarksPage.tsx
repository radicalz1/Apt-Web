import { useArticles } from '../hooks/useArticles.ts';
import { useBookmarks } from '../contexts/BookmarkContext.tsx';
import { Section } from '../components/common/Section.tsx';
import { BlogCard } from '../components/blog/BlogCard.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { useTranslation } from '../hooks/useTranslation.ts';
import { Link } from 'react-router-dom';
import { BookmarkX } from 'lucide-react';

export default function BookmarksPage() {
  const { t } = useTranslation();
  useTitle(t('blog.bookmarks'));
  const { bookmarkedSlugs } = useBookmarks();
  const allArticles = useArticles();

  const bookmarkedArticles = allArticles.filter(article => bookmarkedSlugs.includes(article.slug));

  return (
    <Section>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold">{t('blog.bookmarks')}</h1>
      </div>

      {bookmarkedArticles.length > 0 ? (
        <div className="space-y-8">
          {bookmarkedArticles.map(article => (
            <BlogCard key={article.slug} article={article} layout="horizontal" />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
          <BookmarkX size={48} className="mx-auto text-slate-400" />
          <h2 className="mt-4 font-semibold text-xl">{t('blog.noBookmarks')}</h2>
          <p className="mt-2 text-slate-500">
            Click the bookmark icon on an article to save it for later.
          </p>
          <Link to="/blog" className="mt-6 inline-block px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-soft">
            Explore Articles
          </Link>
        </div>
      )}
    </Section>
  );
}
