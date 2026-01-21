"use client";

import { HistoryEpisode } from "@/types";
import { Play, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [data, setData] = useState<HistoryEpisode[]>([]);

  useEffect(() => {
    const existHistory: HistoryEpisode[] = JSON.parse(
      localStorage.getItem("history_watch") || "[]",
    );
    setData(existHistory);
  }, []);

  const handleDeleteHistory = (eps: HistoryEpisode) => {
    setData((prev) => {
      const filtered = prev.filter((item) => item.id !== eps.id);
      localStorage.setItem("history_watch", JSON.stringify(filtered));
      return filtered;
    });
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(254px,1fr))] gap-2 md:gap-4">
      {data.map((eps) => (
        <div key={eps.id} className="relative flex flex-col gap-2">
          {/* Image */}
          <Link href={`/`} className="group relative aspect-video">
            <Image
              src={eps.image ?? "/assets/not-found.png"}
              alt={eps.title ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-sm object-cover object-center transition-all duration-100 group-hover:blur-xs"
            />
            {/* Play icon */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-100 group-hover:opacity-100">
              <Play className="h-10 w-10 text-white" />
            </div>
          </Link>
          {/* Delete */}
          <div
            className="bg-secondary/75 hover:bg-secondary absolute top-1.5 right-1.5 z-20 cursor-pointer rounded-sm p-1"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteHistory(eps);
            }}
          >
            <X className="h-4 w-4 text-white" />
          </div>
          {/* Title */}
          <div className="flex flex-col gap-0.5">
            <span className="line-clamp-1 text-sm font-bold uppercase">{eps.animeTitle}</span>
            <p className="text-muted-foreground text-xs">Episode {eps.episode}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
