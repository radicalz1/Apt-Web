import { useTranslation } from '../../../hooks/useTranslation.ts';

export const FooterContact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="font-semibold mb-3">{t('footer.contactTitle')}</div>
      <ul className="space-y-2 text-sm">
        <li>{t('footer.contactAddress')}</li>
        <li>
          <a href="mailto:hello@hannacares.com" className="hover:underline">hello@hannacares.com</a>
        </li>
      </ul>
    </div>
  );
};