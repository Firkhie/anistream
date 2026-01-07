import { Skeleton } from "../ui/Skeleton";
import { AlarmClock, GitBranch, Star, Tv } from "lucide-react";

export default function AnimeRankSkeleton({
  count,
  sectionType,
}: {
  count: number;
  sectionType: "airing" | "upcoming" | "relations" | "recommendations";
}) {
  const titles = {
    airing: { name: "Top Airing", icon: Tv },
    upcoming: { name: "Upcoming", icon: AlarmClock },
    relations: { name: "Relations", icon: GitBranch },
    recommendations: { name: "Recommendations", icon: Star },
  };
  const { name, icon: Icon } = titles[sectionType];

  return (
    <div className="bg-secondary/50 flex h-fit flex-col gap-3 rounded-sm p-3">
      {/* Title */}
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span className="text-lg font-semibold uppercase">{name}</span>
      </div>
      {/* Content */}
      <div className="flex h-fit flex-col gap-1">
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
                <Skeleton className="h-3 w-full" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-12" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
