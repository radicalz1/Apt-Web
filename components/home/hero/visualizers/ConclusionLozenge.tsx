import React from 'react';

export const ConclusionLozenge = ({ text }: { text: string }) => {
  if (!text) return null;
  return (
    <span className="mt-2 inline-flex items-center justify-center text-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full dark:bg-green-900/40 dark:text-green-300">
      {text}
    </span>
  );
};
