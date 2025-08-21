import { useParams, Navigate, Link } from 'react-router-dom';
import { authorsData } from '../data/authors.ts';
import { useArticles } from '../hooks/useArticles.ts';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { BlogCard } from '../components/blog/BlogCard.tsx';

export default function AuthorPage() {
  const { authorId } = useParams();
  
  const author = authorsData.find(a => a.id === authorId);
  const allArticles = useArticles();
  const articles = allArticles.filter(a => a.authorId === authorId);

  useTitle(author ? `Articles by ${author.name}` : 'Author Not Found');

  if (!author) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Section>
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        <img src={author.avatarUrl} alt={author.name} className="h-24 w-24 rounded-full" />
        <div>
          <h1 className="font-display text-3xl font-extrabold">{author.name}</h1>
          <p className="text-accent-600 dark:text-accent-400 font-semibold">{author.title}</p>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{author.bio}</p>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold mb-6">Articles by {author.name}</h2>
      {articles.length > 0 ? (
        <div className="space-y-8">
          {articles.map(article => <BlogCard key={article.slug} article={article} layout="horizontal" />)}
        </div>
      ) : (
        <p>No articles found for this author.</p>
      )}
    </Section>
  );
}
