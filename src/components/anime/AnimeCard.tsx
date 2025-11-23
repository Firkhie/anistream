import { MEDIA_STATUSES_COLOR } from "@/constants/media";
import { AnimeBasic } from "@/types";
import Image from "next/image";
import { ClosedCaption, LucideIcon, Monitor, Star } from "lucide-react";
import { Badge } from "../ui/Badge";

const cardBadges: {
  key: "format" | "rating" | "totalEpisodes" | "currentEpisode";
  icon: LucideIcon;
}[] = [
  { key: "format", icon: Monitor },
  { key: "rating", icon: Star },
];

export default function AnimeCard({ ...anime }: AnimeBasic) {
  const title =
    anime.title?.userPreferred ||
    anime.title?.romaji ||
    anime.title?.english ||
    anime.title?.native ||
    "Untitled";

  const statusColor = anime.status ? MEDIA_STATUSES_COLOR[anime.status] : "#9ca3af";

  return (
    <div className="flex flex-col gap-2">
      {/* Image */}
      <div className="relative aspect-2/3">
        <Image src={anime.coverImage!} alt={title} fill className="rounded-sm" />
        <div className="absolute left-2 bottom-2 flex gap-0.5">
          {anime.currentEpisode && (
            <Badge icon={ClosedCaption} className="rounded-l-sm">
              {anime.currentEpisode}
            </Badge>
          )}
          {anime.totalEpisodes && <Badge className="rounded-r-sm">{anime.totalEpisodes}</Badge>}
        </div>
      </div>
      {/* Title and Status */}
      <div className="flex gap-2 items-center">
        <div
          style={{ backgroundColor: statusColor }}
          className="rounded-full shrink-0 w-2 h-2"
        ></div>
        <span className="line-clamp-1 text-sm">{title}</span>
      </div>
      {/* Badges */}
      <div className="flex gap-1">
        {cardBadges.map(({ icon: Icon, key }) => {
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
  );
}
