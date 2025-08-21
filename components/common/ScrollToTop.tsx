import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Timeout to ensure the scroll happens after the browser's own scroll restoration attempt
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};