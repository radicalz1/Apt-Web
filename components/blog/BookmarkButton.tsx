import { useBookmarks } from '../../contexts/BookmarkContext.tsx';
import { Bookmark } from 'lucide-react';

interface BookmarkButtonProps {
  slug: string;
  className?: string;
}

export const BookmarkButton = ({ slug, className = '' }: BookmarkButtonProps) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(slug);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(slug);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
      className={`p-2 rounded-full border transition-colors ${
        bookmarked
          ? 'border-accent-500 bg-accent-50 text-accent-600 dark:bg-accent-900/30 dark:text-accent-300 dark:border-accent-500/50'
          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
      } ${className}`}
    >
      <Bookmark size={18} fill={bookmarked ? 'currentColor' : 'none'} />
    </button>
  );
};
