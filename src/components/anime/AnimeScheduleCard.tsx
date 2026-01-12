"use client";

import { AnimeBasic } from "@/types";
import Image from "next/image";
import { formatUnixTime } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function AnimeScheduleCard({ ...anime }: AnimeBasic) {
  const [hover, setHover] = useState(false);

  const title =
    anime.title?.userPreferred ||
    anime.title?.romaji ||
    anime.title?.english ||
    anime.title?.native ||
    "Untitled";

  return (
    <Link
      href={`/detail/${anime.id}`}
      className="flex gap-2 overflow-hidden rounded-sm border transition-all duration-100"
      style={{
        backgroundColor: hover ? anime.color + "26" : undefined,
        transition: "background-color 0.1s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Left Side */}
      <div className="relative aspect-2/3 h-20">
        <Image
          src={anime.coverImage ?? "/assets/not-found.png"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>
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
    </Link>
  );
}
