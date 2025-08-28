import { useState, useMemo } from 'react';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { useTranslation } from '../hooks/useTranslation.ts';
import { useDebounce } from '../hooks/useDebounce.ts';
import { Link, useSearchParams } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta.ts';
import { useArticles } from '../hooks/useArticles.ts';
import { BlogFilters } from '../components/blog/page/BlogFilters.tsx';
import { FeaturedArticle } from '../components/blog/page/FeaturedArticle.tsx';
import { ArticlesGrid } from '../components/blog/page/ArticlesGrid.tsx';
import { Rss } from 'lucide-react';

export default function BlogPage() {
  const { t } = useTranslation();
  useTitle(t('blog.title'));
  useMeta('description', t('blog.description'));
  
  const allArticles = useArticles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterState, setFilterState] = useState({
    query: '',
    category: searchParams.get('category') || 'all',
    tag: null,
    sort: 'newest'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearchQuery = useDebounce(filterState.query, 300);

  const { featuredArticle, filteredArticles, categories, tags } = useMemo(() => {
    const featured = allArticles.find(a => a.featured);
    let articles = allArticles.filter(a => a.slug !== featured?.slug)
      .filter(article => {
        const matchesCategory = filterState.category === 'all' || article.categoryKey === filterState.category;
        const matchesTag = !filterState.tag || article.tags.includes(filterState.tag);
        const matchesSearch = article.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
        return matchesCategory && matchesSearch && matchesTag;
      });
    articles.sort((a, b) => {
      if (filterState.sort === 'oldest') return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      if (filterState.sort === 'popular') return b.claps - a.claps;
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });
    const cats = ['all', ...Array.from(new Set(allArticles.map(a => a.categoryKey)))];
    const allTags = Array.from(new Set(allArticles.flatMap(a => a.tags)));
    return { featuredArticle: featured, filteredArticles: articles, categories: cats, tags: allTags };
  }, [allArticles, debouncedSearchQuery, filterState]);

  const hasFilters = filterState.query || filterState.category !== 'all' || filterState.tag;

  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold">{t('blog.title')}</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">{t('blog.description')}</p>
        </div>
        <Link to="/blog/rss.xml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Rss size={16} className="text-orange-500" />
          <span>RSS Feed</span>
        </Link>
      </div>

      <BlogFilters 
        filterState={filterState} 
        setFilterState={setFilterState}
        categories={categories}
        tags={tags}
        hasFilters={hasFilters}
        setCurrentPage={setCurrentPage}
      />
      
      {featuredArticle && currentPage === 1 && !hasFilters && (
        <FeaturedArticle article={featuredArticle} />
      )}
      
      <ArticlesGrid 
        articles={filteredArticles} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Section>
  );
}