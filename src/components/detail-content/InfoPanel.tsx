// InfoPanel.tsx
"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { NotebookPen, Play } from "lucide-react";
import AnimeButton from "../anime/AnimeButton";
import { AnimeDetail } from "@/types";
import MetaDetail from "./MetaDetail";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function InfoPanel({ data }: { data: AnimeDetail }) {
  const router = useRouter();

  const handleWatchNow = () => {
    router.push(`/watch/${data.id}`);
  };
  const handleAddToList = () => {
    toast.info("You need to login first to use this feature.");
  };

  const title =
    data?.title?.userPreferred ||
    data?.title?.romaji ||
    data?.title?.english ||
    data?.title?.native ||
    "Untitled";

  return (
    <div className="flex flex-col gap-3 sm:gap-5 lg:flex-row">
      <div className="relative -top-24 flex h-fit shrink-0 gap-2 lg:w-52 lg:flex-col">
        {/* Cover */}
        <div className="w-32 shrink-0 sm:w-40 lg:w-52">
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
          <Button size="lg" variant="custom" onClick={handleWatchNow}>
            <Play /> Watch Now
          </Button>
          <Button size="lg" variant="custom" onClick={handleAddToList}>
            <NotebookPen /> Add To List
          </Button>

          <div className="flex gap-2">
            <AnimeButton size="large" icon="anilist" animeId={data.id} />
            <AnimeButton size="large" icon="mal" animeId={data.idMal!} />
          </div>
        </div>

        {/* Action Mobile */}
        <div className="relative top-24 left-1 flex w-full flex-col gap-2 sm:left-2 lg:hidden">
          <h2 className="line-clamp-1 text-lg font-bold">{title}</h2>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Button size="lg" variant="custom" className="sm:flex-1" onClick={handleAddToList}>
              <NotebookPen /> <span className="hidden sm:block">Add To List</span>
            </Button>
            <Button size="lg" variant="custom" onClick={handleWatchNow}>
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
