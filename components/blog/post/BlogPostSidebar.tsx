import React, { useState, useEffect } from 'react';
import { TableOfContents } from '../TableOfContents.tsx';
import { ReadingPreferencesControl } from '../ReadingPreferencesControl.tsx';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver.ts';
import { slugify } from '../../../utils/slugify.ts';
import { Heading } from '../ArticleContent.tsx';

interface BlogPostSidebarProps {
  articleRef: React.RefObject<HTMLDivElement>;
}

export const BlogPostSidebar = ({ articleRef }: BlogPostSidebarProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  
  useEffect(() => {
    // Timeout to allow content to render before grabbing headings
    const timer = setTimeout(() => {
      if (!articleRef.current) return;
      const headingElements = articleRef.current.querySelectorAll('h2');
      const parsedHeadings = Array.from(headingElements).map(h => ({
        id: h.id || slugify(h.textContent || ''),
        text: h.textContent || '',
      }));
      setHeadings(parsedHeadings);
    }, 100);

    return () => clearTimeout(timer);
  }, [articleRef, articleRef.current]);

  const headingIds = headings.map(h => h.id);
  const activeId = useIntersectionObserver(headingIds, { rootMargin: '0px 0px -70% 0px' });

  return (
    <aside className="sticky top-24 space-y-6 no-print">
      <TableOfContents headings={headings} activeId={activeId} />
      <ReadingPreferencesControl />
    </aside>
  );
};
