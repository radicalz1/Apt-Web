import { NavLinks } from './NavLinks.tsx';

export const MobileMenu = ({ onLinkClick }: { onLinkClick: () => void }) => {
  return (
    <div className="md:hidden pb-4">
      <nav className="grid gap-2">
        <NavLinks onLinkClick={onLinkClick} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" />
      </nav>
    </div>
  );
};
