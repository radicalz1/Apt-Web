import { useParams, Navigate } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles.ts';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { BlogCard } from '../components/blog/BlogCard.tsx';

export default function TagPage() {
  const { tag } = useParams();
  const allArticles = useArticles();
  
  const articles = allArticles.filter(a => a.tags.includes(tag || ''));

  useTitle(tag ? `Articles tagged with "${tag}"` : 'Tag Not Found');

  if (!tag) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Section>
      <h1 className="font-display text-3xl font-extrabold">
        Tag: <span className="text-accent-600 dark:text-accent-400"># {tag}</span>
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Showing {articles.length} article{articles.length !== 1 ? 's' : ''} with this tag.
      </p>

      <div className="mt-12">
        {articles.length > 0 ? (
          <div className="space-y-8">
            {articles.map(article => <BlogCard key={article.slug} article={article} layout="horizontal" />)}
          </div>
        ) : (
          <p>No articles found for this tag.</p>
        )}
      </div>
    </Section>
  );
}
