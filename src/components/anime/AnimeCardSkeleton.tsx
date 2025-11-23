import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/Skeleton";

export default function AnimeCardSkeletonList({
  count,
  className,
}: {
  count: number;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <AnimeCardSkeleton key={i} />
      ))}
    </div>
  );
}

function AnimeCardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {/* Image */}
      <Skeleton className="w-full h-72" />
      {/* Title and Status */}
      <div className="flex gap-2 items-center">
        <Skeleton className="w-3 h-3 rounded-full" />
        <Skeleton className="w-full h-3" />
      </div>
      {/* Badges */}
      <div className="flex gap-1">
        <Skeleton className="w-8 h-2" />
        <Skeleton className="w-8 h-2" />
      </div>
    </div>
  );
}
