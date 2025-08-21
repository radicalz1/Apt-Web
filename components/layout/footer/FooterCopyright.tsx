import { useTranslation } from '../../../hooks/useTranslation.ts';

export const FooterCopyright = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <div className="mt-8 pt-8 border-t border-slate-200/70 dark:border-slate-800 text-center text-sm text-slate-500">
      <p>&copy; {year} {t('appName')}. All rights reserved.</p>
    </div>
  );
};
