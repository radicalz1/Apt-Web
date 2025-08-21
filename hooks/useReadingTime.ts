import { useMemo } from 'react';

const WORDS_PER_MINUTE = 200;

export const useReadingTime = (content: string) => {
  const readingTime = useMemo(() => {
    if (!content) return 0;

    // Create a temporary div to strip HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    
    const wordCount = text.trim().split(/\s+/).length;
    return Math.ceil(wordCount / WORDS_PER_MINUTE);
  }, [content]);

  return readingTime;
};
