import React from 'react';

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children }) => {
  return (
    <div className="animate-fade-in-up">
      <h2 className="font-display text-2xl font-bold text-center">{title}</h2>
      {subtitle && <p className="text-center text-slate-500 mt-1">{subtitle}</p>}
      <div className="mt-8 space-y-6">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
