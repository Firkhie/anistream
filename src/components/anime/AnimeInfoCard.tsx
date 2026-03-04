import { AnimeBasic } from "@/types";
import Image from "next/image";
import parse from "html-react-parser";
import AnimeButton from "./AnimeButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { currentYear } from "@/constants/years";
import GenreBadge from "../GenreBadges";

export default function AnimeInfoCard(anime: AnimeBasic) {
  const router = useRouter();
  const [hover, setHover] = useState(false);

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
  const aniColor = anime.color || "white";

  const handleCardClick = () => {
    router.push(`/detail/${anime.id}`);
  };

  const handleGenreClick = (genre: string) => {
    const params = new URLSearchParams({
      year: String(currentYear),
      sort: "POPULARITY_DESC",
      genres: genre,
    });

    router.push(`/search?${params.toString()}`);
  };

  return (
    <div
      className="flex cursor-pointer gap-2 rounded-sm border p-2"
      style={{
        backgroundColor: hover ? `${anime.color}26` : undefined,
        transition: "background-color 0.1s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleCardClick}
    >
      {/* Left */}
      <div className="flex flex-col gap-2">
        <div className="relative aspect-2/3 h-48">
          <Image
            src={anime.coverImage ?? "/assets/not-found.png"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-sm object-cover object-center"
          />
        </div>

        <div className="flex gap-2">
          <AnimeButton
            size="medium"
            icon="anilist"
            animeId={anime.id}
            className="bg-muted-foreground/15 hover:bg-muted-foreground/35"
          />
          <AnimeButton
            size="medium"
            icon="mal"
            animeId={anime.idMal!}
            className="bg-muted-foreground/15 hover:bg-muted-foreground/35"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-2">
          <h3 className="line-clamp-2 text-lg font-semibold md:text-xl">{title}</h3>
          <span
            className="line-clamp-1 text-sm font-light md:line-clamp-2"
            style={{ color: aniColor }}
          >
            {subTitle}
          </span>
          <div className="text-muted-foreground line-clamp-3 text-sm md:line-clamp-4">
            {parse(description)}
          </div>
        </div>

        <div className="scrollbar-hidden flex gap-1.5 overflow-x-scroll">
          {anime.genres?.map((genre) => (
            <GenreBadge key={genre} genre={genre} color={aniColor} />
          ))}
        </div>
      </div>
    </div>
  );
}
