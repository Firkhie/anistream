import { Skeleton } from "../ui/Skeleton";

export default function AnimeCardSkeleton({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          {/* Image */}
          <Skeleton className="h-72 w-full" />
          {/* Title and Status */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-full" />
          </div>
          {/* Badges */}
          <div className="flex gap-1">
            <Skeleton className="h-2 w-8" />
            <Skeleton className="h-2 w-8" />
          </div>
        </div>
      ))}
    </div>
  );
}
