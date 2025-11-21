import { MEDIA_STATUSES_COLOR } from "@/constants/media";
import { AnimeBasic } from "@/types";
import Image from "next/image";
import { Badge } from "./Badge";

export default function AnimeCard({ ...anime }: AnimeBasic) {
  const title =
    anime.title?.userPreferred ||
    anime.title?.romaji ||
    anime.title?.english ||
    anime.title?.native ||
    "Untitled";

  const statusColor = anime.status ? MEDIA_STATUSES_COLOR[anime.status] : "#9ca3af";
  const badges: string[] = ["test1", "test2"];

  return (
    <div className="flex flex-col gap-2">
      {/* Image */}
      <div className="relative">
        <Image src={anime.coverImage!} alt={title} width={200} height={200} />
        <div className="absolute left-2 bottom-2 flex gap-0.5">
          {badges.map((item) => (
            <Badge key={item} name={item} />
          ))}
        </div>
      </div>
      {/* Title and Status */}
      <div className="flex gap-2 items-center">
        <div
          style={{ backgroundColor: statusColor }}
          className="rounded-full shrink-0 w-3 h-3"
        ></div>
        <span className="line-clamp-1">{title}</span>
      </div>
      {/* Badges */}
      <div className="flex gap-1">
        {badges.map((item) => (
          <Badge key={item} name={item} />
        ))}
      </div>
    </div>
  );
}
