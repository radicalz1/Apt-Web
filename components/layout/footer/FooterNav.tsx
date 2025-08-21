import { Link } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation.ts';

const navLinks = [
  { key: 'layanan', path: '/#layanan' },
  { key: 'produk', path: '/#produk' },
  { key: 'protokol', path: '/#protokol' },
  { key: 'konsultasi', path: '/#konsultasi' },
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
      </ul>
    </div>
  );
};