import { Skeleton } from '../common/Skeleton.tsx';

export const ProductGridSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="grid gap-4">
          <Skeleton className="aspect-[4/3] rounded-2xl" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
};