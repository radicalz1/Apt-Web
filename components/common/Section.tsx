import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Section = ({ children, className = '', containerClassName = '', ...props }: SectionProps) => {
  return (
    <section className={`py-16 sm:py-24 ${className}`} {...props}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};