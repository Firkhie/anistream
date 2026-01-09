"use client";

import useAnimeEpisodesById from "@/hooks/useAnimeEpisodesById";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function WatchContent() {
  const { slug } = useParams();
  const { data, loading } = useAnimeEpisodesById({ id: slug as string });

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Episodes not found.</div>;

  return (
    <div className="grid grid-cols-3 gap-2 text-sm">
      {data.map((eps) => (
        <Link
          href="/"
          key={eps.episode}
          className="bg-secondary/50 flex h-[100px] rounded-sm hover:opacity-50"
        >
          <div className="relative w-[148px] shrink-0 overflow-hidden rounded-l-sm">
            <Image
              alt="Image"
              src={eps.image ?? "/assets/not-found.png"}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
            <div className="bg-primary/80 absolute bottom-1 left-1 rounded-sm px-2 py-1 text-xs">
              EP {eps.episode || "N/A"}
            </div>
          </div>
          <div className="relative flex w-full flex-col gap-y-2 p-2">
            <h3 className="line-clamp-1 text-sm font-light">{eps.title || "Untitled"}</h3>
            <p className="line-clamp-3 text-xs font-extralight text-[hsl(var(--muted-foreground))]">
              {eps.description || "No description found."}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
