import { CheckCircle } from 'lucide-react';

interface KeyTakeawaysProps {
  takeaways: string[];
}

export const KeyTakeaways = ({ takeaways }: KeyTakeawaysProps) => {
  if (!takeaways || takeaways.length === 0) {
    return null;
  }

  return (
    <div className="my-8 p-6 not-prose rounded-2xl border border-accent-200 dark:border-accent-900 bg-accent-50/50 dark:bg-accent-900/20 space-y-4">
      <h3 className="font-display text-xl font-bold text-accent-800 dark:text-accent-200">Key Takeaways</h3>
      <ul className="space-y-3">
        {takeaways.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-accent-500 dark:text-accent-400 flex-shrink-0 mt-1" />
            <span className="text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
};
