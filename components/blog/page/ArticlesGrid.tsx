
import { useMemo } from 'react';
import { Article } from '../../../types/index.ts';
import { BlogCard } from '../BlogCard.tsx';
import { Pagination } from '../../common/Pagination.tsx';

const ARTICLES_PER_PAGE = 6;

interface ArticlesGridProps {
  articles: Article[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const ArticlesGrid = ({ articles, currentPage, setCurrentPage }: ArticlesGridProps) => {
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    return articles.slice(start, end);
  }, [articles, currentPage]);

  if (articles.length === 0) {
    return <p className="text-center py-10">No articles found matching your criteria.</p>;
  }
  
  return (
    <>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedArticles.map(article => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages}
        onPageChange={setCurrentPage} 
      />
    </>
  );
};
