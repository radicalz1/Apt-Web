import { Logo } from '../../common/Logo.tsx';
import { useTranslation } from '../../../hooks/useTranslation.ts';

export const FooterInfo = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Logo />
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{t('appDescription')}</p>
    </div>
  );
};
