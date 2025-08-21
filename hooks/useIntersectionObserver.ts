import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = (elementIds: string[], options?: IntersectionObserverInit) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', ...options }
    );

    const elements = elementIds.map(id => document.getElementById(id)).filter(el => el);
    elements.forEach(el => observer.current?.observe(el!));

    return () => observer.current?.disconnect();
  }, [elementIds, options]);

  return activeId;
};