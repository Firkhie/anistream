import { AnimeBasic } from "@/types";
import { AlarmClock, GitBranch, Star, Tv } from "lucide-react";
import Image from "next/image";
import { Badge } from "./Badge";

export default function AnimeRankContainer({
  animes,
  sectionType,
}: {
  animes: AnimeBasic[];
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
    <div className="flex flex-col gap-2">
      {/* Title */}
      <div className="flex gap-2">
        <Icon className="h-4 w-4" />
        <span className="uppercase">{name}</span>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-1">
        {animes.map((anime) => (
          <AnimeRankCard key={anime.id} {...anime} />
        ))}
      </div>
    </div>
  );
}

function AnimeRankCard({ ...anime }: AnimeBasic) {
  const title =
    anime.title?.userPreferred ||
    anime.title?.romaji ||
    anime.title?.english ||
    anime.title?.native ||
    "Untitled";

  const badges: string[] = ["test1", "test2"];

  return (
    <div className="flex gap-2">
      <Image src={anime.coverImage!} alt={title} width={100} height={100} />
      <div className="flex flex-col gap-1">
        <span>{title}</span>
        <div className="flex gap-1">
          {badges.map((item) => (
            <Badge key={item} name={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
