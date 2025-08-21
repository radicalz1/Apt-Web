import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation.ts';

const navItems = [
  { key: 'layanan', path: '/#layanan' },
  { key: 'kondisi', path: '/#kondisi' },
  { key: 'produk', path: '/#produk' },
  { key: 'protokol', path: '/#protokol' },
  { key: 'konsultasi', path: '/#konsultasi' },
  { key: 'blog', path: '/blog' },
  { key: 'bookmarks', path: '/blog/bookmarks' },
  { key: 'faq', path: '/#faq' },
];

export const NavLinks = ({ onLinkClick, className = '' }: { onLinkClick: () => void; className?: string }) => {
  const { t } = useTranslation();
  const baseClasses = "hover:text-accent-600 dark:hover:text-accent-400";
  
  return (
    <>
      {navItems.map(item => (
        <Link 
          key={item.key} 
          to={item.path}
          onClick={onLinkClick}
          className={`${baseClasses} ${className}`}>
          {t(`nav.${item.key}`)}
        </Link>
      ))}
    </>
  );
};