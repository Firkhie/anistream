import { AnimeBasic, MediaRelation } from "@/types";
import { Blend, ClosedCaption, LucideIcon, Monitor, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import Link from "next/link";
import { useState } from "react";

const containerBadges: {
  key: "format" | "currentEpisode" | "rating" | "year" | "relationType";
  icon: LucideIcon;
}[] = [
  { key: "format", icon: Monitor },
  { key: "currentEpisode", icon: ClosedCaption },
  { key: "rating", icon: Star },
  { key: "relationType", icon: Blend },
];

export default function AnimeRankCard({ ...anime }: AnimeBasic & { relationType?: MediaRelation }) {
  const [hover, setHover] = useState(false);

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
    <Link
      href={`/detail/${anime.id}`}
      className="bg-secondary/75 flex h-24 shrink-0 gap-2 overflow-hidden rounded-sm"
      style={{
        backgroundColor: hover ? anime.color + "26" : undefined,
        transition: "background-color 0.1s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <div className="relative aspect-2/3 h-24">
        <Image
          src={anime.coverImage ?? "/assets/not-found.png"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-l-sm object-cover object-center"
          unoptimized
        />
      </div>
      {/* Content */}
      <div className="flex flex-col justify-between gap-1 py-2 pr-2">
        <div>
          <span className="line-clamp-1 text-sm font-semibold">{title}</span>
          <span className="line-clamp-1 text-xs" style={{ color: textColor }}>
            {subTitle}
          </span>
        </div>
        <div className="flex gap-1">
          {containerBadges.map(({ icon: Icon, key }) => {
            const value = anime[key];
            if (!value) return;

            return (
              <Badge key={key} icon={Icon} className="shrink-0 rounded-sm">
                {value}
              </Badge>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
