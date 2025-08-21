import { Article } from '../../types/index.ts';
import { articlesContentData as articlesContentIdData } from './articlesContent.id.ts';
import { articlesViewsData } from './articlesViews.ts';

// Create a map for efficient lookup of views and trending status by slug
const viewsMap = new Map(articlesViewsData.map(item => [item.slug, { views: item.views, trending: item.trending }]));

// Merge the content data with the views data to create the final, complete articles array
export const articlesData: Article[] = articlesContentIdData.map(article => {
  const extraData = viewsMap.get(article.slug);
  return {
    ...article,
    // Use the map to find the view count and trending status, with fallbacks
    views: extraData?.views || 0,
    trending: extraData?.trending || 'stable',
  };
});
