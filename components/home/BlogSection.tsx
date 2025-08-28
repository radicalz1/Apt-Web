import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../common/AnimatedSection.tsx';
import { SectionHeader } from '../common/SectionHeader.tsx';
import { useTranslation } from '../../hooks/useTranslation.ts';
import { useArticles } from '../../hooks/useArticles.ts';
import { authorsData } from '../../data/authors.ts';
import { Article, ArticleAuthor } from '../../types/index.ts';
import { useReadingTime } from '../../hooks/useReadingTime.ts';
import { Clock } from 'lucide-react';

// --- Local Components for the new design ---

const FeaturedArticleCard = ({ article, author }: { article: Article, author?: ArticleAuthor }) => {
  const readingTime = useReadingTime(article.content);
  return (
    <Link to={`/blog/${article.slug}`} className="group block min-h-[450px] md:min-h-[500px]">
      <article className="relative h-full rounded-3xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300">
        <img src={article.imageUrl} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
          <span className="text-xs px-2 py-1 rounded-full bg-brand-500/80 text-white w-max mb-2">{article.category}</span>
          <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight">{article.title}</h3>
          <p className="mt-2 text-slate-200 line-clamp-2 hidden sm:block">{article.desc}</p>
          <div className="mt-4 pt-4 border-t border-white/20 text-xs flex items-center gap-4">
            {author && (
              <div className="flex items-center gap-2">
                <img src={author.avatarUrl} alt={author.name} className="h-7 w-7 rounded-full" />
                <span>{author.name}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5"><Clock size={14} /><span>{readingTime} min read</span></div>
          </div>
        </div>
      </article>
    </Link>
  );
};

const SecondaryArticleCard = ({ article }: { article: Article }) => {
    const readingTime = useReadingTime(article.content);
    return (
        <Link to={`/blog/${article.slug}`} className="group block">
            <article className="flex items-center gap-4 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                    <span className="text-xs px-2 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 w-max mb-2">{article.category}</span>
                    <h4 className="font-semibold leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400">{article.title}</h4>
                     <div className="mt-2 text-xs text-slate-500 flex items-center gap-1.5"><Clock size={12}/> {readingTime} min read</div>
                </div>
            </article>
        </Link>
    );
};

// --- Main Section Component ---

export const BlogSection = () => {
  const { t } = useTranslation();
  const allArticles = useArticles();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => {
    const cats = new Set(allArticles.map(a => a.categoryKey));
    return ['all', ...Array.from(cats)];
  }, [allArticles]);
  
  const filteredArticles = useMemo(() => {
    const articles = activeCategory === 'all' ? allArticles : allArticles.filter(a => a.categoryKey === activeCategory);
    return articles.slice(0, 3); // 1 featured, 2 secondary
  }, [allArticles, activeCategory]);

  const featuredArticle = filteredArticles[0];
  const secondaryArticles = filteredArticles.slice(1);

  const getCategoryName = (key: string) => {
    if (key === 'all') return t('products.filterAll');
    const article = allArticles.find(a => a.categoryKey === key);
    return article ? article.category : key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <AnimatedSection id="blog">
      <SectionHeader title={t('blog.title')} description={t('blog.description')}>
        <Link to="/blog" className="text-sm text-accent-700 dark:text-accent-300 hover:underline">{t('blog.viewAll')}</Link>
      </SectionHeader>

      <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 text-sm font-semibold rounded-t-lg whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-brand-600 dark:text-brand-300 border-b-2 border-brand-600' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}>
            {getCategoryName(cat)}
          </button>
        ))}
      </div>

      {featuredArticle ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <FeaturedArticleCard article={featuredArticle} author={authorsData.find(a => a.id === featuredArticle.authorId)} />
          </div>
          <div className="lg:col-span-2 space-y-6">
            {secondaryArticles.map(article => (
              <SecondaryArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center py-10 text-slate-500">No articles in this category yet.</p>
      )}
    </AnimatedSection>
  );
};