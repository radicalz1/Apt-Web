import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext.tsx';
import { Language } from '../../types/index.ts';

const IdFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="h-4 w-6 rounded-sm">
    <path fill="#E70011" d="M0 0h3v1H0z"/>
    <path fill="#fff" d="M0 1h3v1H0z"/>
  </svg>
);

const EnFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="h-4 w-6 rounded-sm">
    <clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath>
    <path d="M0 0v30h60V0z" fill="#012169"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" clipPath="url(#a)"/>
    <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" clipPath="url(#a)"/>
  </svg>
);

const flags: Record<Language, React.FC> = { id: IdFlag, en: EnFlag };

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const CurrentFlag = flags[language];

  return (
    <div ref={dropdownRef} className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Select language" aria-expanded={isOpen}>
        <CurrentFlag />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-max rounded-xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg p-2 z-10">
          <ul className="space-y-1">
            {Object.entries(flags).map(([lang, FlagComponent]) => (
              <li key={lang}>
                <button
                  onClick={() => { setLanguage(lang as Language); setIsOpen(false); }}
                  className={`w-full flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm ${language === lang ? 'font-semibold' : ''}`}
                >
                  <FlagComponent />
                  <span>{lang.toUpperCase()}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};