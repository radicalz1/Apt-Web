import React from 'react';

export const StatBarVisualizer = ({ before, after }: { before: string; after: string }) => {
  const beforeVal = parseFloat(before.replace(/[^0-9.]/g, ''));
  const afterVal = parseFloat(after.replace(/[^0-9.]/g, ''));
  if (isNaN(beforeVal) || isNaN(afterVal)) return null;

  const maxVal = Math.max(beforeVal, afterVal) * 1.2;
  const beforeHeight = (beforeVal / maxVal) * 100;
  const afterHeight = (afterVal / maxVal) * 100;

  return (
    <div className="flex items-end justify-around h-20 w-full gap-2 px-2">
      <div className="text-center w-1/2">
        <div className="h-full flex items-end justify-center">
          <div className="w-8 bg-slate-300 dark:bg-slate-700 rounded-t-md" style={{ height: `${beforeHeight}%` }}></div>
        </div>
        <p className="text-xs font-semibold mt-1 truncate">{before}</p>
      </div>
      <div className="text-center w-1/2">
        <div className="h-full flex items-end justify-center">
          <div className="w-8 bg-brand-400 dark:bg-brand-500 rounded-t-md" style={{ height: `${afterHeight}%` }}></div>
        </div>
        <p className="text-xs font-semibold mt-1 truncate">{after}</p>
      </div>
    </div>
  );
};
