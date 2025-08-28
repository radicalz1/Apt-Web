import { useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { authorsData } from '../data/authors.ts';
import { useTitle } from '../hooks/useTitle.ts';
import { useMeta } from '../hooks/useMeta.ts';
import { Section } from '../components/common/Section.tsx';
import { ReadingProgressBar } from '../components/blog/ReadingProgressBar.tsx';
import { JsonLdSchema } from '../components/common/JsonLdSchema.tsx';
import { useArticle } from '../hooks/useArticles.ts';
import { RelatedArticles } from '../components/blog/RelatedArticles.tsx';
import { BlogPostSidebar } from '../components/blog/post/BlogPostSidebar.tsx';
import { BlogPostMain } from '../components/blog/post/BlogPostMain.tsx';

export default function BlogPostPage() {
  const { slug } = useParams();
  const article = useArticle(slug);
  const author = article ? authorsData.find(a => a.id === article.authorId) : undefined;
  
  const articleRef = useRef<HTMLDivElement>(null);

  useTitle(article ? article.title : 'Article Not Found');
  useMeta('description', article ? article.desc : 'Blog article page.');

  if (!article || !author) {
    return <Navigate to="/404" replace />;
  }
  
  return (
    <>
      <JsonLdSchema article={article} author={author} />
      <ReadingProgressBar />
      <Section containerClassName="max-w-5xl" className="blog-post-section reading-theme-transition">
        <div className="grid lg:grid-cols-[1fr,280px] gap-12 items-start">
          <BlogPostMain article={article} author={author} ref={articleRef} />
          <BlogPostSidebar articleRef={articleRef} />
        </div>
      </Section>
      <RelatedArticles currentSlug={article.slug} categoryKey={article.categoryKey} />
    </>
  );
}