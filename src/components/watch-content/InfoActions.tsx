"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { NotebookPen, Play } from "lucide-react";
import AnimeButton from "../anime/AnimeButton";

type Props = {
  animeId: number;
  malId?: number;
  trailer?: any;
  coverImage?: string;
  title: string;
};

export default function InfoActions({ animeId, malId, trailer, coverImage, title }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Image */}
      <Link href={`/detail/${animeId}`} className="group w-44 shrink-0">
        <div className="relative aspect-2/3 overflow-hidden rounded-sm">
          <Image
            src={coverImage ?? "/assets/not-found.png"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Buttons */}
      <div className="hidden flex-col gap-2 lg:flex">
        <Button size="lg" variant="custom">
          <Play size={18} />
          Trailer
        </Button>

        <Button size="lg" variant="custom">
          <NotebookPen size={18} />
          Add To List
        </Button>

        <div className="flex gap-2">
          <AnimeButton size="large" icon="anilist" animeId={animeId} />
          {malId && <AnimeButton size="large" icon="mal" animeId={malId} />}
        </div>
      </div>
    </div>
  );
}
