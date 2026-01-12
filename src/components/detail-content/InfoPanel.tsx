// InfoPanel.tsx
"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { NotebookPen, Play } from "lucide-react";
import AnimeButton from "../anime/AnimeButton";
import { Badge } from "../ui/Badge";
import { formatPlainDate } from "@/lib/utils";
import { AnimeDetail } from "@/types";

export default function InfoPanel({ data }: { data: AnimeDetail }) {
  return (
    <div className="relative -top-24 flex h-fit w-52 shrink-0 flex-col gap-2">
      {/* Cover */}
      <div className="relative aspect-2/3">
        <Image
          src={data.coverImage ?? "/assets/not-found.png"}
          alt={String(data.id)}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-sm object-cover object-center"
        />
      </div>

      {/* Actions */}
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

      {/* Meta */}
      <div className="bg-secondary/50 flex flex-col gap-2 rounded-sm p-3 text-sm">
        {data.status && (
          <>
            <span className="font-bold">Status</span>
            <span className="font-extralight">{data.status}</span>
          </>
        )}
        {data.startDate && (
          <>
            <span className="font-bold">Start Date</span>
            <span className="font-extralight">{formatPlainDate(data.startDate)}</span>
          </>
        )}
        {data.endDate && (
          <>
            <span className="font-bold">End Date</span>
            <span className="font-extralight">{formatPlainDate(data.endDate)}</span>
          </>
        )}
        {data.format && (
          <>
            <span className="font-bold">Format</span>
            <span className="font-extralight">{data.format}</span>
          </>
        )}
        {data.season && (
          <>
            <span className="font-bold">Season</span>
            <span className="font-extralight">{data.season}</span>
          </>
        )}
        {data.totalEpisodes && (
          <>
            <span className="font-bold">Total Episodes</span>
            <span className="font-extralight">{data.totalEpisodes}</span>
          </>
        )}
        {data.currentEpisode && (
          <>
            <span className="font-bold">Current Episode</span>
            <span className="font-extralight">{data.currentEpisode}</span>
          </>
        )}
        {data.countryOfOrigin && (
          <>
            <span className="font-bold">Country</span>
            <span className="font-extralight">{data.countryOfOrigin}</span>
          </>
        )}

        {data.genres && data.genres.length > 0 && (
          <>
            <span className="font-bold">Genres</span>
            <div className="flex flex-wrap gap-1">
              {data.genres.map((genre) => (
                <Badge key={genre} className="bg-primary rounded-sm">
                  {genre}
                </Badge>
              ))}
            </div>
          </>
        )}
        {data.studios && data.studios.length > 0 && (
          <>
            <span className="font-bold">Studios</span>
            <div className="flex flex-wrap gap-1">
              {data.studios.map((studio) => (
                <span key={studio} className="font-extralight">
                  {studio}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
