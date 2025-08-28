import { allArticlePosts } from '../data/articles/index.ts';
import { articlesViewsData } from '../data/articles/articlesViews.ts';
import { Article, ArticlePost, Language } from '../types/index.ts';

const viewsMap = new Map(articlesViewsData.map(item => [item.slug, { views: item.views, trending: item.trending }]));
const articlesCache = new Map<Language, Article[]>();

export const processPostsForLanguage = (language: Language): Article[] => {
  if (articlesCache.has(language)) {
    return articlesCache.get(language)!;
  }

  const processedArticles = allArticlePosts.map((post: ArticlePost) => {
    const translation = post.translations[language] || post.translations['en'];
    const series = post.series && translation.series ? { ...post.series, title: translation.series.title } : undefined;
    const viewsData = viewsMap.get(post.slug) || { views: 0, trending: 'stable' };

    const article: Article = {
      ...post,
      ...translation,
      series,
      ...viewsData,
      qualityScore: translation.qualityScore || 'Evidence-Based',
    };
    return article;
  }).sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  articlesCache.set(language, processedArticles);
  return processedArticles;
};
