import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton = ({ className = '', ...props }: SkeletonProps) => {
  return (
    <div
      className={`bg-slate-200 dark:bg-slate-800 animate-pulse rounded-md ${className}`}
      {...props}
    />
  );
};