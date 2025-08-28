import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // A brief delay ensures the new page content is rendered before we try to scroll.
      const timer = setTimeout(() => {
        const id = hash.substring(1); // Remove the '#'
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // For regular page navigations, scroll to the top of the page.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};
