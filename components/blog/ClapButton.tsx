import { ThumbsUp } from 'lucide-react';
import { useClaps } from '../../hooks/useClaps.ts';

interface ClapButtonProps {
  articleSlug: string;
  initialClaps: number;
}

export const ClapButton = ({ articleSlug, initialClaps }: ClapButtonProps) => {
  const { totalClaps, userClaps, isClapping, handleClap } = useClaps(articleSlug, initialClaps);

  const buttonClasses = `
    flex items-center gap-2 px-4 py-2 rounded-full border transition-colors relative
    ${userClaps > 0 
      ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-500/50' 
      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
    }
  `;

  return (
    <button onClick={handleClap} className={buttonClasses} aria-label="Clap for this article">
      <ThumbsUp size={18} fill={userClaps > 0 ? 'currentColor' : 'none'} className={isClapping ? 'clap-burst' : ''} />
      <span>{totalClaps.toLocaleString()}</span>
      {userClaps > 0 && (
        <span className="absolute -top-2 -right-2 h-6 w-6 grid place-items-center rounded-full bg-brand-600 text-white text-xs font-bold">
          +{userClaps}
        </span>
      )}
    </button>
  );
};