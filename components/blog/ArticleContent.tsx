import React, { useMemo } from 'react';
import { slugify } from '../../utils/slugify.ts';
import { WikiLink } from './WikiLink.tsx';
import { GlossaryTerm } from './GlossaryTerm.tsx';

export interface Heading {
  id: string;
  text: string;
}

interface ArticleContentProps {
  htmlContent: string;
  onHeadingsParse: (headings: Heading[]) => void;
}

export const ArticleContent = ({ htmlContent, onHeadingsParse }: ArticleContentProps) => {
  const processedHtml = useMemo(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const headingElements = tempDiv.querySelectorAll('h2');
    const parsedHeadings: Heading[] = Array.from(headingElements).map(h => {
      const text = h.textContent || '';
      const id = slugify(text);
      h.id = id;
      return { id, text };
    });
    onHeadingsParse(parsedHeadings);
    return tempDiv.innerHTML;
  }, [htmlContent, onHeadingsParse]);

  const parsedContent = useMemo(() => {
    const parts = processedHtml.split(/(\[\[.*?\]\]|\{\{.*?\}\})/g);
    return parts.map((part, index) => {
      if (part.startsWith('[[') && part.endsWith(']]')) {
        return <WikiLink key={index} slug={part.slice(2, -2)} />;
      }
      if (part.startsWith('{{') && part.endsWith('}}')) {
        return <GlossaryTerm key={index} term={part.slice(2, -2)} />;
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  }, [processedHtml]);

  return <div>{parsedContent}</div>;
};