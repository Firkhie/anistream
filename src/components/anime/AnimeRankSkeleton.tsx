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
          <Skeleton key={i} className="h-24 rounded-sm" />
        ))}
      </div>
    </div>
  );
}
