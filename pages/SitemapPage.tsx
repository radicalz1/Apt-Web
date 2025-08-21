import { Link } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles.ts';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { formatDate } from '../utils/date.ts';

export default function SitemapPage() {
  useTitle("Sitemap");
  const articlesData = useArticles();

  const categories = [...new Set(articlesData.map(a => a.category))];

  return (
    <Section>
      <h1 className="font-display text-4xl font-extrabold mb-8">Sitemap</h1>
      
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">{category}</h2>
          <ul className="space-y-3">
            {articlesData
              .filter(a => a.category === category)
              .map(article => (
                <li key={article.slug}>
                  <Link to={`/blog/${article.slug}`} className="hover:underline text-accent-700 dark:text-accent-300">
                    {article.title}
                  </Link>
                  <span className="text-sm text-slate-500 ml-2">({formatDate(article.publishDate)})</span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
