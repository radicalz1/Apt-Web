import { useState, useMemo, useEffect, useRef } from 'react';
import { Section } from '../components/common/Section.tsx';
import { useTitle } from '../hooks/useTitle.ts';
import { useTranslation } from '../hooks/useTranslation.ts';
import { BlogCard } from '../components/blog/BlogCard.tsx';
import { Skeleton } from '../components/common/Skeleton.tsx';
import { Search, ListFilter, X } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce.ts';
import { Pagination } from '../components/common/Pagination.tsx';
import { Link, useSearchParams } from 'react-router-dom';
import { useMeta } from '../hooks/useMeta.ts';
import { formatDate } from '../utils/date.ts';
import { useArticles } from '../hooks/useArticles.ts';

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const { t } = useTranslation();
  useTitle(t('blog.title'));
  useMeta('description', t('blog.description'));
  
  const allArticles = useArticles();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState('newest');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (activeCategory === 'all') {
      newSearchParams.delete('category');
    } else {
      newSearchParams.set('category', activeCategory);
    }
    if (newSearchParams.toString() !== searchParams.toString()) {
      setSearchParams(newSearchParams, { replace: true });
    }
  }, [activeCategory, searchParams, setSearchParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gridRef.current) return;
      const focusable = Array.from(gridRef.current.querySelectorAll('a')) as HTMLAnchorElement[];
      const active = document.activeElement;
      const index = focusable.indexOf(active as HTMLAnchorElement);

      if (e.key === 'ArrowDown' && index < focusable.length - 1) {
        e.preventDefault();
        focusable[index + 1].focus();
      } else if (e.key === 'ArrowUp' && index > 0) {
        e.preventDefault();
        focusable[index - 1].focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const { categories, tags } = useMemo(() => {
    const cats = ['all', ...Array.from(new Set(allArticles.map(a => a.categoryKey)))];
    const allTags = Array.from(new Set(allArticles.flatMap(a => a.tags)));
    return { categories: cats, tags: allTags };
  }, [allArticles]);

  const { featuredArticle, filteredArticles } = useMemo(() => {
    const featured = allArticles.find(a => a.featured);
    let articles = allArticles.filter(a => a.slug !== featured?.slug);

    articles = articles.filter(article => {
      const matchesCategory = activeCategory === 'all' || article.categoryKey === activeCategory;
      const matchesTag = !activeTag || article.tags.includes(activeTag);
      const matchesSearch = article.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) || article.desc.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
      return matchesCategory && matchesSearch && matchesTag;
    });

    articles.sort((a, b) => {
      if (sortOrder === 'newest') return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      if (sortOrder === 'oldest') return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      if (sortOrder === 'popular') return b.claps - a.claps;
      return 0;
    });

    return { featuredArticle: featured, filteredArticles: articles };
  }, [allArticles, debouncedSearchQuery, activeCategory, activeTag, sortOrder]);

  const paginatedArticles = filteredArticles.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
  const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);
  const hasFilters = searchQuery || activeCategory !== 'all' || activeTag;

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setActiveTag(null);
    setCurrentPage(1);
  };

  return (
    <Section>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold">{t('blog.title')}</h1>
      <p className="text-slate-600 dark:text-slate-300 mt-2">{t('blog.description')}</p>

      {/* Filters */}
      <div className="my-8 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/20 grid gap-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1fr_auto_auto] gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input type="search" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40" />
          </div>
          <div className="relative">
             <ListFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="w-full appearance-none pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40">
              <option value="newest">Sort: Newest</option>
              <option value="oldest">Sort: Oldest</option>
              <option value="popular">Sort: Popular</option>
            </select>
          </div>
          {hasFilters && <button onClick={clearFilters} className="flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"><X size={16}/> Clear</button>}
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
          {categories.map(cat => <button key={cat} onClick={() => {setActiveCategory(cat); setCurrentPage(1);}} className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap ${activeCategory === cat ? 'bg-brand-600 text-white' : 'bg-white dark:bg-slate-800'}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>)}
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 border-t border-slate-200 dark:border-slate-800 pt-4">
          <span className="text-sm font-semibold">Tags:</span>
          {tags.map(tag => <button key={tag} onClick={() => {setActiveTag(tag); setCurrentPage(1);}} className={`px-3 py-1.5 text-xs rounded-full ${activeTag === tag ? 'bg-accent-600 text-white' : 'bg-white dark:bg-slate-800'}`}># {tag}</button>)}
        </div>
      </div>
      
      {/* Featured Article */}
      {featuredArticle && currentPage === 1 && !hasFilters && (
        <div className="mb-12 group transition-opacity duration-300">
          <Link to={`/blog/${featuredArticle.slug}`}>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="aspect-video rounded-3xl overflow-hidden"><img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
              <div>
                <p className="text-sm text-accent-600 dark:text-accent-400 font-semibold">Featured Article</p>
                <h2 className="mt-2 font-display text-3xl font-bold">{featuredArticle.title}</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300 line-clamp-3">{featuredArticle.desc}</p>
                <p className="mt-3 text-xs text-slate-500">{formatDate(featuredArticle.publishDate, 'long')}</p>
              </div>
            </div>
          </Link>
        </div>
      )}
      
      {/* Articles Grid */}
      {loading ? (
        <div className="grid md:grid-cols-1 gap-6">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}</div>
      ) : paginatedArticles.length > 0 ? (
        <div ref={gridRef} className="space-y-8">
          {paginatedArticles.map((article, i) => (
             <div key={article.slug} className="transition-all duration-300" style={{ animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`}}>
                <BlogCard article={article} layout="horizontal" />
            </div>
          ))}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      ) : (
        <div className="text-center py-10"><p className="text-slate-600 dark:text-slate-300">No articles match your criteria.</p></div>
      )}
    </Section>
  );
}