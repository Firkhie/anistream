import { MEDIA_STATUSES_COLOR } from "@/constants/media";
import { AnimeBasic } from "@/types";
import Image from "next/image";
import { ClosedCaption, LucideIcon, Monitor, Play, Star } from "lucide-react";
import { Badge } from "../ui/Badge";
import Link from "next/link";

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
      <Link href={`detail/${anime.id}`} className="group relative aspect-2/3">
        <Image
          src={anime.coverImage!}
          alt={title}
          fill
          className="rounded-sm transition-all duration-100 group-hover:blur-xs"
        />
        {/* Badges */}
        <div className="absolute bottom-2 left-2 flex gap-0.5">
          {anime.currentEpisode && (
            <Badge icon={ClosedCaption} className="bg-primary/75 text-foreground rounded-l-sm">
              {anime.currentEpisode}
            </Badge>
          )}
          {anime.totalEpisodes && (
            <Badge className="bg-primary/75 text-foreground rounded-r-sm">
              {anime.totalEpisodes}
            </Badge>
          )}
        </div>
        {/* Play icon */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-100 group-hover:opacity-100">
          <Play className="h-10 w-10 text-white" />
        </div>
      </Link>
      {/* Title and Status */}
      <div className="flex items-center gap-2">
        <div
          style={{ backgroundColor: statusColor }}
          className="h-2.5 w-2.5 shrink-0 rounded-full"
        ></div>
        <Link
          href={`detail/${anime.id}`}
          className="hover:text-primary line-clamp-1 text-sm font-semibold"
        >
          {title}
        </Link>
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
