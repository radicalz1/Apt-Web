import { Article, ArticleAuthor } from '../../types/index.ts';

interface JsonLdSchemaProps {
  article: Article;
  author: ArticleAuthor;
}

export const JsonLdSchema = ({ article, author }: JsonLdSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.desc,
    "image": article.imageUrl,
    "author": {
      "@type": "Person",
      "name": author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hana Cares",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/logo.png`
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.publishDate
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};