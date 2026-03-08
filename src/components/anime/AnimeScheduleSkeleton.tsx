import { Skeleton } from "../ui/Skeleton";

export default function AnimeScheduleSkeleton({ count }: { count: number }) {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-8 w-64" />
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-secondary/25 flex gap-2 rounded-sm">
            {/* Left Side */}
            <div className="relative aspect-2/3 h-24">
              <Skeleton className="h-full rounded-r-none" />
            </div>
            {/* Right Side */}
            <div className="flex w-full flex-col justify-between py-2 pr-2">
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
