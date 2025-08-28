import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext.tsx';
import { glossaryData } from '../../data/glossary.ts';

export const GlossaryTerm = ({ term }: { term: string }) => {
  const { language } = useLanguage();
  const glossary = glossaryData[language];
  const termKey = Object.keys(glossary).find(k => k.toLowerCase() === term.toLowerCase());
  const definition = termKey ? glossary[termKey]?.definition : undefined;
  const [isHovering, setIsHovering] = useState(false);

  if (!definition) return <>{term}</>;

  return (
    <span className="glossary-term" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <span className="glossary-term-text">{term}</span>
      {isHovering && (
        <div className="tooltip">
          <h4 className="tooltip-title">{termKey}</h4>
          <p>{definition}</p>
        </div>
      )}
    </span>
  );
};
