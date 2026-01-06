import { AnimeBasic } from "@/types";
import Image from "next/image";
import { formatUnixTime } from "@/lib/utils";

export default function AnimeScheduleCard({ ...anime }: AnimeBasic) {
  const title =
    anime.title?.userPreferred ||
    anime.title?.romaji ||
    anime.title?.english ||
    anime.title?.native ||
    "Untitled";

  return (
    <div className="flex gap-2 overflow-hidden rounded-sm border">
      {/* Left Side */}
      <Image src={anime.coverImage!} alt={title} width="56" height="96" className="object-cover" />
      {/* Right Side */}
      <div className="flex flex-col gap-2 px-1 py-2">
        <h5 className="line-clamp-1 text-sm font-semibold">{title}</h5>
        <p className="text-muted-foreground line-clamp-1 text-xs">
          Eps
          <span className="font-bold"> {anime.nextAiringEpisode?.episode} </span>
          aired at
          <span className="font-bold"> {formatUnixTime(anime.nextAiringEpisode?.airingAt!)}</span>
        </p>
      </div>
    </div>
  );
}
