import { useTranslation } from '../../../hooks/useTranslation.ts';

interface ProtocolTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ProtocolTabs = ({ activeTab, setActiveTab }: ProtocolTabsProps) => {
  const { t } = useTranslation();

  const tabs = [
    { id: 'metabolik', title: t('protocols.tabMetabolik'), contentTitle: t('protocols.metabolikTitle'), list: t('protocols.metabolikList') },
    { id: 'imun', title: t('protocols.tabImun'), contentTitle: t('protocols.imunTitle'), list: t('protocols.imunList') },
    { id: 'longevity', title: t('protocols.tabLongevity'), contentTitle: t('protocols.longevityTitle'), list: t('protocols.longevityList') }
  ] as { id: string; title: string; contentTitle: string; list: string[] }[];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{t('protocols.title')}</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{t('protocols.description')}</p>
      <div className="mt-6 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
        <div className="flex">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id ? 'border-brand-600 text-brand-600 dark:text-brand-300 dark:border-brand-300' : 'border-transparent text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>{tab.title}</button>
          ))}
        </div>
        <div className="p-6 space-y-4">
          <h3 className="font-semibold">{activeTabData?.contentTitle}</h3>
          <ul className="space-y-2 text-sm">
            {activeTabData?.list.map(item => <li key={item} className="flex gap-2"><span className="text-brand-500">✔</span>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};
