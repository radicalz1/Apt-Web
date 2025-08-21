import React, { createContext, useContext, useState, useEffect } from 'react';

interface BookmarkContextType {
  bookmarkedSlugs: string[];
  isBookmarked: (slug: string) => boolean;
  toggleBookmark: (slug: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const getInitialBookmarks = (): string[] => {
  try {
    const stored = localStorage.getItem('bookmarked_articles');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<string[]>(getInitialBookmarks);

  useEffect(() => {
    localStorage.setItem('bookmarked_articles', JSON.stringify(bookmarkedSlugs));
  }, [bookmarkedSlugs]);

  const toggleBookmark = (slug: string) => {
    setBookmarkedSlugs(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const isBookmarked = (slug: string) => bookmarkedSlugs.includes(slug);

  return (
    <BookmarkContext.Provider value={{ bookmarkedSlugs, isBookmarked, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
