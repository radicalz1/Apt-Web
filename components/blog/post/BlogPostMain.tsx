import React, { useEffect } from 'react';
import { Article, ArticleAuthor } from '../../../types/index.ts';
import { Breadcrumbs } from '../../common/Breadcrumbs.tsx';
import { BlogPostHeader } from './BlogPostHeader.tsx';
import { KeyTakeaways } from '../KeyTakeaways.tsx';
import { ArticleContent } from '../ArticleContent.tsx';
import { ArticleSeriesNav } from '../ArticleSeriesNav.tsx';
import { NewsletterCta } from '../NewsletterCta.tsx';
import { SocialShare } from '../SocialShare.tsx';
import { ClapButton } from '../ClapButton.tsx';
import { AuthorBio } from '../AuthorBio.tsx';
import { Backlinks } from '../Backlinks.tsx';
import { CommentsSection } from '../CommentsSection.tsx';
import { useLightbox } from '../../../contexts/LightboxContext.tsx';

interface BlogPostMainProps {
  article: Article;
  author: ArticleAuthor;
}

// In React 19, `ref` can be passed as a prop, and `forwardRef` is no longer needed.
export const BlogPostMain = ({ article, author, ref }: BlogPostMainProps & { ref: React.Ref<HTMLDivElement> }) => {
  const { openLightbox } = useLightbox();

  useEffect(() => {
    const articleElement = (ref as React.RefObject<HTMLDivElement>)?.current;
    if (!articleElement) return;

    const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'IMG' && target.closest('.prose')) {
            event.preventDefault();
            openLightbox((target as HTMLImageElement).src);
        }
    };

    articleElement.addEventListener('click', handleClick);
    return () => articleElement.removeEventListener('click', handleClick);
  }, [ref, openLightbox]);
  
  return (
    <main ref={ref}>
      <Breadcrumbs article={article} />
      <BlogPostHeader article={article} author={author} />
      
      <div className="prose dark:prose-invert max-w-none">
        <KeyTakeaways takeaways={article.keyTakeaways} />
        <ArticleContent htmlContent={article.content} onHeadingsParse={() => {}} />
      </div>
      
      <ArticleSeriesNav currentArticle={article} />
      <NewsletterCta />
      
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <SocialShare title={article.title} />
        <ClapButton articleSlug={article.slug} initialClaps={article.claps} />
      </div>
      
      <AuthorBio author={author} />
      <Backlinks articleSlug={article.slug} />
      <CommentsSection articleSlug={article.slug} />
    </main>
  );
};