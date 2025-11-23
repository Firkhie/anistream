import { AnimeBasic } from "@/types";
import { ClosedCaption, LucideIcon, Monitor, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/Badge";

const containerBadges: {
  key: "format" | "currentEpisode" | "rating" | "year";
  icon: LucideIcon;
}[] = [
  { key: "format", icon: Monitor },
  { key: "currentEpisode", icon: ClosedCaption },
  { key: "rating", icon: Star },
];

export default function AnimeRankCard({ ...anime }: AnimeBasic) {
  const title =
    anime.title?.userPreferred ||
    anime.title?.english ||
    anime.title?.romaji ||
    anime.title?.native ||
    "Untitled";

  const subTitle =
    anime.title?.native ||
    anime.title?.romaji ||
    anime.title?.userPreferred ||
    anime.title?.english ||
    "Untitled";

  const textColor = anime.color || "black";

  return (
    <div className="flex shrink-0 gap-2 h-24 rounded-sm overflow-hidden bg-amber-200/50">
      {/* Image */}
      <Image src={anime.coverImage!} alt={title} width="72" height="96" className="object-cover" />
      {/* Content */}
      <div className="flex flex-col justify-between gap-1 py-2 pr-2">
        <div>
          <span className="line-clamp-1 font-semibold text-sm">{title}</span>
          <span className="line-clamp-1 text-xs" style={{ color: textColor }}>
            {subTitle}
          </span>
        </div>
        <div className="flex gap-1">
          {containerBadges.map(({ icon: Icon, key }) => {
            const value = anime[key];
            if (!value) return;

            return (
              <Badge key={key} icon={Icon} className="rounded-sm">
                {value}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
