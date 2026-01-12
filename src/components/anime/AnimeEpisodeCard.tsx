import { AnimeEpisode } from "@/types";
import Image from "next/image";
import Link from "next/link";

function AnimeEpisodeCardV1({ eps }: { eps: AnimeEpisode }) {
  return (
    <Link href="/" className="bg-secondary/75 flex h-[100px] rounded-sm hover:opacity-50">
      <div className="relative w-[148px] shrink-0">
        <Image
          src={eps.image ?? "/assets/not-found.png"}
          alt={eps.title ?? "Untitled"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-l-sm object-cover object-center"
          unoptimized
        />
        <div className="bg-primary/80 absolute bottom-1 left-1 rounded-sm px-2 py-1 text-xs">
          EP {eps.episode ?? "N/A"}
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-y-2 p-2">
        <h3 className="line-clamp-1 text-sm font-light">{eps.title ?? "Untitled"}</h3>
        <p className="text-muted-foreground line-clamp-3 text-xs font-extralight">
          {eps.description ?? "No description found."}
        </p>
      </div>
    </Link>
  );
}

function AnimeEpisodeCardV2({ eps }: { eps: AnimeEpisode }) {
  return (
    <Link href="/" className="bg-secondary/75 rounded-sm p-2 text-center hover:opacity-50">
      {eps.episode}
    </Link>
  );
}

function AnimeEpisodeCardV3({ eps }: { eps: AnimeEpisode }) {
  return (
    <Link href="/" className="bg-secondary/75 rounded-md p-2 hover:opacity-50">
      <p className="line-clamp-1 text-sm">
        {eps.episode ?? "N/A"}. {eps.title ?? "Untitled"}
      </p>
    </Link>
  );
}

export { AnimeEpisodeCardV1, AnimeEpisodeCardV2, AnimeEpisodeCardV3 };
