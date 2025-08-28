import { Link } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation.ts';
import { Rss } from 'lucide-react';

const navLinks = [
  { key: 'programs', path: '/#programs' },
  { key: 'produk', path: '/#produk' },
  { key: 'caseStudies', path: '/#case-studies' },
  { key: 'blog', path: '/blog' },
  { key: 'bookmarks', path: '/blog/bookmarks' },
  { key: 'sitemap', path: '/sitemap' },
];

export const FooterNav = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="font-semibold mb-3">{t('footer.navTitle')}</div>
      <ul className="space-y-2 text-sm">
        {navLinks.map(link => (
          <li key={link.key}>
            <Link to={link.path} className="hover:underline">
              {t(`nav.${link.key}`)}
            </Link>
          </li>
        ))}
        <li>
          <a href="/#/blog/rss.xml" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
            <Rss size={16} className="text-orange-500" /> RSS Feed
          </a>
        </li>
      </ul>
    </div>
  );
};
