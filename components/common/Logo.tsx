import { Clock } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation.ts';

export const Logo = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 grid place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft">
        <Clock size={20} />
      </div>
      <span className="font-display font-extrabold tracking-tight text-lg">
        {t('appName').slice(0, 9)}<span className="text-accent-600 dark:text-accent-400">{t('appName').slice(9)}</span>
      </span>
    </div>
  );
};
