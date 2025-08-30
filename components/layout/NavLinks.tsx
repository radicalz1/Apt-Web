import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation.ts';

const navItems = [
  { key: 'healthReport', path: '/questionnaire' },
  { key: 'caseStudies', path: '/#case-studies' },
  { key: 'produk', path: '/#produk' },
  { key: 'testimoni', path: '/#testimoni' },
  { key: 'blog', path: '/blog' },
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