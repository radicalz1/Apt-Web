import { useMemo } from 'react';
import { getArticlesByLanguage } from '../hooks/useArticles.ts';
import { useTitle } from '../hooks/useTitle.ts';

const generateRssFeed = () => {
  const siteUrl = window.location.origin;
  const articlesData = getArticlesByLanguage('en'); // Default to English for RSS feed
  const feedItems = articlesData
    .map(article => {
      return `
        <item>
          <title>${article.title}</title>
          <link>${siteUrl}/#/blog/${article.slug}</link>
          <guid>${siteUrl}/#/blog/${article.slug}</guid>
          <pubDate>${new Date(article.publishDate).toUTCString()}</pubDate>
          <description>${article.desc}</description>
        </item>
      `;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Hana Cares Blog</title>
  <link>${siteUrl}</link>
  <description>Latest articles from Hana Cares.</description>
  ${feedItems}
</channel>
</rss>`;
};

export default function RssPage() {
  useTitle("RSS Feed");
  const rssContent = useMemo(() => generateRssFeed(), []);

  return (
    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', padding: '1rem', backgroundColor: '#f5f5f5', color: '#333' }}>
      {rssContent}
    </pre>
  );
}