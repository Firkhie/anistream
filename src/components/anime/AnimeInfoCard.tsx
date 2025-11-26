import { AnimeBasic } from "@/types";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export default function AnimeInfoCard({ ...anime }: AnimeBasic) {
  const title =
    anime.title?.userPreferred ||
    anime.title?.romaji ||
    anime.title?.english ||
    anime.title?.native ||
    "Untitled";

  const subTitle =
    anime.title?.native ||
    anime.title?.romaji ||
    anime.title?.userPreferred ||
    anime.title?.english ||
    "Untitled";
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-1">
        <Image width={80} height={120} alt={title} src={anime.coverImage!} />
        <div className="flex gap-1">
          <Button>MAL</Button>
          <Button>Anilist</Button>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-1.5">
          <h3>{title}</h3>
          <span>{subTitle}</span>
          <p>{anime.description}</p>
        </div>
        <div className="flex gap-1">
          {anime.genres.map((genre) => (
            <Badge key={genre} className="rounded-sm">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
