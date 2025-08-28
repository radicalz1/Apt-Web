import { useState, useEffect } from 'react';

export const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  const scrollListener = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercent = (scrollPosition / totalHeight) * 100;
    setWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 no-print" style={{ backgroundColor: 'hsl(var(--color-slate-200))' }}>
      <div 
        className="h-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-75 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};