"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { NotebookPen, Play, X } from "lucide-react";
import AnimeButton from "../anime/AnimeButton";
import { toast } from "sonner";
import { useState } from "react";

type Props = {
  animeId: number;
  malId?: number;
  trailer?: any;
  coverImage?: string;
  title: string;
};

export default function InfoActions({ animeId, malId, trailer, coverImage, title }: Props) {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleTrailer = () => {
    setShowTrailer(true);
  };
  const handleAddToList = () => {
    toast.info("You need to login first to use this feature.");
  };
  return (
    <div className="relative flex flex-col gap-2">
      {showTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative w-full max-w-5xl p-2">
            <button
              className="absolute top-2 right-2 z-10 rounded-sm bg-white/20 p-1 hover:bg-white/40"
              onClick={() => setShowTrailer(false)}
            >
              <X className="h-6 w-6 cursor-pointer text-white" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer.id || ""}`}
                title="YouTube Trailer"
                allowFullScreen
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      )}
      {/* Image */}
      <Link href={`/detail/${animeId}`} className="group w-36 shrink-0 sm:w-44">
        <div className="relative aspect-2/3 overflow-hidden rounded-sm">
          <Image
            src={coverImage ?? "/assets/not-found.png"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-cover transition-transform duration-100 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Buttons */}
      <div className="hidden flex-col gap-2 sm:flex">
        <Button size="lg" variant="custom" onClick={handleTrailer}>
          <Play size={18} />
          Trailer
        </Button>

        <Button size="lg" variant="custom" onClick={handleAddToList}>
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
