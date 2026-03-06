import { Skeleton } from "../ui/Skeleton";

export default function AnimeCharacterCardSkeleton({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(398px,1fr))] gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton className="h-24" />
      ))}
    </div>
  );
}
