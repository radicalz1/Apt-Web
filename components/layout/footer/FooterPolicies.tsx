import { useTranslation } from '../../../hooks/useTranslation.ts';
import { useModals } from '../../../contexts/ModalContext.tsx';

export const FooterPolicies = () => {
  const { t } = useTranslation();
  const { openPolicyModal } = useModals();

  const policyLinks = [ 
    {key: 'privacy', label: t('footer.policyPrivacy')}, 
    {key: 'terms', label: t('footer.policyTerms')}, 
    {key: 'medical', label: t('footer.policyMedical')} 
  ];

  return (
    <div>
      <div className="font-semibold mb-3">{t('footer.policyTitle')}</div>
      <ul className="space-y-2 text-sm">
        {policyLinks.map(link => (
          <li key={link.key}>
            <button onClick={() => openPolicyModal(link.key as any)} className="hover:underline">
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
