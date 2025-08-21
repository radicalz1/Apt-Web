import { FooterInfo } from './footer/FooterInfo.tsx';
import { FooterNav } from './footer/FooterNav.tsx';
import { FooterPolicies } from './footer/FooterPolicies.tsx';
import { FooterContact } from './footer/FooterContact.tsx';
import { FooterCopyright } from './footer/FooterCopyright.tsx';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <FooterInfo />
          <FooterNav />
          <FooterPolicies />
          <FooterContact />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};
