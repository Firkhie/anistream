// InfoPanel.tsx
"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { NotebookPen, Play } from "lucide-react";
import AnimeButton from "../anime/AnimeButton";
import { AnimeDetail } from "@/types";
import MetaDetail from "./MetaDetail";

export default function InfoPanel({ data }: { data: AnimeDetail }) {
  const title =
    data?.title?.userPreferred ||
    data?.title?.romaji ||
    data?.title?.english ||
    data?.title?.native ||
    "Untitled";

  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="relative -top-24 flex h-fit shrink-0 gap-2 lg:w-52 lg:flex-col">
        {/* Cover */}
        <div className="w-40 shrink-0 lg:w-52">
          <div className="relative aspect-2/3">
            <Image
              src={data.coverImage ?? "/assets/not-found.png"}
              alt={String(data.id)}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-sm object-cover object-center"
            />
          </div>
        </div>

        {/* Action Desktop */}
        <div className="hidden flex-col gap-2 lg:flex">
          <Button size="lg" variant="custom">
            <Play /> Watch Now
          </Button>
          <Button size="lg" variant="custom">
            <NotebookPen /> Add To List
          </Button>

          <div className="flex gap-2">
            <AnimeButton size="large" icon="anilist" animeId={data.id} />
            <AnimeButton size="large" icon="mal" animeId={data.idMal!} />
          </div>
        </div>

        {/* Action Mobile */}
        <div className="relative top-24 left-2 flex w-full flex-col gap-2 lg:hidden">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="flex gap-2">
            <Button size="lg" variant="custom" className="flex-1">
              <NotebookPen /> Add To List
            </Button>
            <Button size="lg" variant="custom">
              <Play />
            </Button>
          </div>
        </div>

        {/* Meta Desktop */}
        <MetaDetail data={data} view="desktop" />
      </div>
      {/* Meta Mobile */}
      <MetaDetail data={data} view="mobile" />
    </div>
  );
}
