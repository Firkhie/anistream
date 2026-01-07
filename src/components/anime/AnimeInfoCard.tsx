import { AnimeBasic } from "@/types";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import parse from "html-react-parser";
import { sanitizeHtmlString } from "@/lib/utils";
import AnimeButton from "./AnimeButton";

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
  const description = anime.description || "No description found.";
  const textColor = anime.color || "white";

  return (
    <div className="flex gap-2 rounded-sm border p-2">
      {/* Left Side */}
      <div className="flex flex-col gap-2">
        <div className="relative aspect-2/3 h-48">
          <Image src={anime.coverImage!} alt={title} fill className="rounded-sm" />
        </div>
        <div className="flex w-full gap-2">
          <AnimeButton size="medium" icon="anilist" />
          <AnimeButton size="medium" icon="mal" />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-2">
          <h3 className="line-clamp-2 text-xl font-semibold">{title}</h3>
          <span className="line-clamp-2 text-sm font-light" style={{ color: textColor }}>
            {subTitle}
          </span>
          <p className="text-muted-foreground line-clamp-4 text-sm">
            {parse(sanitizeHtmlString(description))}
          </p>
        </div>
        <div className="scrollbar-hidden flex gap-1.5 overflow-x-scroll">
          {anime.genres &&
            anime.genres.map((genre) => (
              <Badge key={genre} className="line rounded-sm px-4 py-1">
                {genre}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
