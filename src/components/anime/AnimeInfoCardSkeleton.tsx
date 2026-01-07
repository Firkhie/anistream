import { Skeleton } from "../ui/Skeleton";

export default function AnimeInfoCardSkeleton({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-2 rounded-sm border p-2">
          {/* Left Side */}
          <div className="flex flex-col gap-2">
            <div className="relative aspect-2/3 h-48">
              <Skeleton className="h-full" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
          {/* Right Side */}
          <div className="flex w-full flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-3 w-14" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
