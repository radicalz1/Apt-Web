import { Skeleton } from '../../common/Skeleton.tsx';
import { useTranslation } from '../../../hooks/useTranslation.ts';

interface AISymptomCheckerResultProps {
  result: string;
  error: string;
  loading: boolean;
}

export const AISymptomCheckerResult = ({ result, error, loading }: AISymptomCheckerResultProps) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-3xl p-6 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-soft min-h-[200px]">
      <h3 className="font-semibold text-xl">Analysis Result</h3>
      <div className="mt-4 text-sm text-slate-700 dark:text-slate-200 prose prose-sm max-w-none">
        {loading && (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {result ? (
            <div dangerouslySetInnerHTML={{ __html: result }} />
        ) : !loading && !error ? (
            <p className="text-slate-500">{t('aiChecker.disclaimer')}</p>
        ) : null}
      </div>
    </div>
  );
};
