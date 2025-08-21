import { useMemo, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { authorsData } from '../data/authors.ts';
import { useTitle } from '../hooks/useTitle.ts';
import { useMeta } from '../hooks/useMeta.ts';
import { Section } from '../components/common/Section.tsx';
import { TableOfContents } from '../components/blog/TableOfContents.tsx';
import { SocialShare } from '../components/blog/SocialShare.tsx';
import { AuthorBio } from '../components/blog/AuthorBio.tsx';
import { RelatedArticles } from '../components/blog/RelatedArticles.tsx';
import { formatDate } from '../utils/date.ts';
import { Sparkles, Clock } from 'lucide-react';
import { ReadingProgressBar } from '../components/blog/ReadingProgressBar.tsx';
import { CommentsSection } from '../components/blog/CommentsSection.tsx';
import { useLightbox } from '../contexts/LightboxContext.tsx';
import { useReadingTime } from '../hooks/useReadingTime.ts';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.ts';
import { ArticleSeriesNav } from '../components/blog/ArticleSeriesNav.tsx';
import { NewsletterCta } from '../components/blog/NewsletterCta.tsx';
import { ClapButton } from '../components/blog/ClapButton.tsx';
import { JsonLdSchema } from '../components/common/JsonLdSchema.tsx';
import { BookmarkButton } from '../components/blog/BookmarkButton.tsx';
import { ReadingPreferencesControl } from '../components/blog/ReadingPreferencesControl.tsx';
import { useArticle } from '../hooks/useArticles.ts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const article = useArticle(slug);
  const author = article ? authorsData.find(a => a.id === article.authorId) : undefined;
  
  const articleRef = useRef<HTMLDivElement>(null);
  const { openLightbox } = useLightbox();
  const readingTime = useReadingTime(article?.content || '');

  useTitle(article ? article.title : 'Article Not Found');
  useMeta('description', article ? article.desc : 'Blog article page.');

  const { headings, contentWithIds } = useMemo(() => {
    if (!article) return { headings: [], contentWithIds: '' };
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = article.content;
    const h2s = Array.from(tempDiv.querySelectorAll('h2'));
    const extractedHeadings = h2s.map(h => {
      const text = h.textContent || '';
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      h.id = id;
      return { id, text };
    });
    return { headings: extractedHeadings, contentWithIds: tempDiv.innerHTML };
  }, [article]);

  const headingIds = useMemo(() => headings.map(h => h.id), [headings]);
  const activeHeading = useIntersectionObserver(headingIds);

  useEffect(() => {
    if (!articleRef.current) return;
    const images = Array.from(articleRef.current.querySelectorAll('img'));
    const imageListeners: { el: HTMLImageElement, listener: () => void }[] = [];
    images.forEach(img => {
      img.style.cursor = 'pointer';
      const listener = () => openLightbox(img.src);
      img.addEventListener('click', listener);
      imageListeners.push({ el: img, listener });
    });

    const codeBlocks = Array.from(articleRef.current.querySelectorAll('pre'));
    codeBlocks.forEach(block => {
      if (block.querySelector('.copy-btn')) return;
      const copyButton = document.createElement('button');
      copyButton.innerText = 'Copy';
      copyButton.className = 'copy-btn absolute top-2 right-2 px-2 py-1 text-xs rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600';
      block.style.position = 'relative';
      block.appendChild(copyButton);
      const copyListener = () => {
        const code = block.querySelector('code')?.innerText || '';
        navigator.clipboard.writeText(code).then(() => {
          copyButton.innerText = 'Copied!';
          setTimeout(() => {
            copyButton.innerText = 'Copy';
          }, 2000);
        });
      };
      block.addEventListener('click', copyListener);
    });

    return () => {
      imageListeners.forEach(({ el, listener }) => {
        el.removeEventListener('click', listener);
      });
    };
  }, [article, openLightbox, contentWithIds]);

  if (!article || !author) {
    return <Navigate to="/404" replace />;
  }
  
  return (
    <>
      <JsonLdSchema article={article} author={author} />
      <ReadingProgressBar />
      <Section containerClassName="max-w-5xl">
        <div className="grid lg:grid-cols-[1fr,280px] gap-12 items-start">
          <main>
            <article ref={articleRef} className="prose dark:prose-invert">
              <Breadcrumbs article={article} />
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 mb-8">
                <span>{formatDate(article.publishDate, 'long')}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {readingTime} min read</span>
                <span className="flex items-center gap-1.5"><Sparkles size={14} /> {article.qualityScore || 'Evidence-Based'}</span>
              </div>

              {article.series && <ArticleSeriesNav currentArticle={article} />}
              
              {article.keyTakeaways && (
                <div className="my-8 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
                  <h2 className="text-lg font-bold mt-0">Key Takeaways</h2>
                  <ul className="pl-5 my-2">
                    {article.keyTakeaways.map((item, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              )}

              <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />

              {article.footnotes && Object.keys(article.footnotes).length > 0 && (
                <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <h2 className="text-lg font-bold">Footnotes</h2>
                  <ol>
                    {Object.entries(article.footnotes).map(([id, text]) => (
                      <li id={`footnote-${id}`} key={id} className="text-sm">
                        {text} <a href={`#footnote-ref-${id}`} className="no-underline">↩</a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </article>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <SocialShare title={article.title} />
              <div className="flex items-center gap-2">
                <BookmarkButton slug={article.slug} />
                <ClapButton articleSlug={article.slug} initialClaps={article.claps} />
              </div>
            </div>
            
            <AuthorBio author={author} />
            <NewsletterCta />
            <CommentsSection articleSlug={article.slug} />

          </main>
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <TableOfContents headings={headings} activeId={activeHeading} />
            <ReadingPreferencesControl />
          </aside>
        </div>
      </Section>
      <RelatedArticles currentSlug={article.slug} categoryKey={article.categoryKey} />
    </>
  );
}