import { Skeleton } from "../ui/Skeleton";

function AnimeEpisodeCardSkeletonV1({ count }: { count: number }) {
  return (
    <div className="grid max-h-[752px] grid-cols-[repeat(auto-fill,minmax(393px,1fr))] gap-2 overflow-y-auto text-sm">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-[100px]" />
      ))}
    </div>
  );
}

function AnimeEpisodeCardSkeletonV2({ count }: { count: number }) {
  return (
    <div className="grid max-h-[752px] grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-2 overflow-y-auto text-sm">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-9" />
      ))}
    </div>
  );
}

function AnimeEpisodeCardSkeletonV3({ count }: { count: number }) {
  return (
    <div className="grid max-h-[752px] grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-2 overflow-y-auto text-sm">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-10" />
      ))}
    </div>
  );
}

export { AnimeEpisodeCardSkeletonV1, AnimeEpisodeCardSkeletonV2, AnimeEpisodeCardSkeletonV3 };
