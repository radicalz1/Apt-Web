import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode; 
}

export const SectionHeader = ({ title, description, children }: SectionHeaderProps) => {
  return (
    <div className="flex items-end justify-between gap-6 mb-10">
      <div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">{title}</h2>
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      {children}
    </div>
  );
};