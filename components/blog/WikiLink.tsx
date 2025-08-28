import { useState } from 'react';
import { Link } from 'react-router-dom';
import { findArticleBySlug } from '../../hooks/useArticles.ts';
import { useLanguage } from '../../contexts/LanguageContext.tsx';

export const WikiLink = ({ slug }: { slug: string }) => {
  const { language } = useLanguage();
  const article = findArticleBySlug(slug, language);
  const [isHovering, setIsHovering] = useState(false);

  if (!article) {
    return <span className="text-red-500">[[{slug}]]</span>;
  }

  return (
    <span className="wiki-link-container" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <Link to={`/blog/${slug}`} className="wiki-link">
        {article.title}
      </Link>
      {isHovering && (
        <div className="tooltip">
          <h4 className="tooltip-title">{article.title}</h4>
          <p>{article.desc}</p>
        </div>
      )}
    </span>
  );
};
